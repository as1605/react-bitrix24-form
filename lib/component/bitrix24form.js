"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bitrix24Form = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Bitrix24Form = function (_a) {
    var src = _a.src, data = _a.data;
    (0, react_1.useEffect)(function () {
        var script = document.createElement('script');
        script.src = src + '?' + ((Date.now() / 180000) | 0);
        script.async = true;
        document.body.appendChild(script);
        return function () {
            document.body.removeChild(script);
        };
    }, []);
    return (0, jsx_runtime_1.jsx)("script", { "data-b24-form": data, "data-skip-moving": 'true' });
};
exports.Bitrix24Form = Bitrix24Form;
//# sourceMappingURL=bitrix24form.js.map