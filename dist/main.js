"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const express = require("express");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    app.use('/admin', express.static((0, path_1.join)(__dirname, '..', 'public')));
    await app.listen(7496);
    console.log('Backend listening on http://localhost:7496');
}
bootstrap();
//# sourceMappingURL=main.js.map