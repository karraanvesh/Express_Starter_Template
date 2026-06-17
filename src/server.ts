import express from 'express';
import {serverConfig} from './config/index.ts';
import v1Router from './routers/v1/index.router.ts';
import v2Router from './routers/v2/index.ts';
import { genericErrorHandler } from './middlewares/error.middleware.ts';
import logger from './config/logger.config.ts';
import { attachCorrelationIdMiddleware } from './middlewares/correlation.middleware.ts';
import sequelize from './db/models/sequelize.ts';

const app = express();

app.use(express.json());
app.use(express.text());

app.use(attachCorrelationIdMiddleware);

app.use('/api/v1' , v1Router);
app.use('/api/v2' , v2Router);

/**
 * Add the error handler middleware
 */

app.use(genericErrorHandler);
 
app.listen(serverConfig.PORT , async () => {
    logger.info(`Server started at PORT ${serverConfig.PORT}`);
    logger.info(`Press Ctrl+C to stop the server.`);
    
    await sequelize.authenticate(); // Test the connection to the database
    logger.info('Database connection has been established successfully. ');
});