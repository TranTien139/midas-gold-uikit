'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var get = require('lodash/get');
var noop = require('lodash/noop');
var debounce = require('lodash/debounce');
var throttle = require('lodash/throttle');
var reactRouterDom = require('react-router-dom');
var reactTransitionGroup = require('react-transition-group');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var noop__default = /*#__PURE__*/_interopDefaultLegacy(noop);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);
var throttle__default = /*#__PURE__*/_interopDefaultLegacy(throttle);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) {
    return get__default['default'](theme, path, fallback);
}; };

var rotate = styled.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = styled.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled__default['default'].svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, styledSystem.space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1, templateObject_2, templateObject_3;

var Icon = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$2 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$3 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled__default['default'].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, styledSystem.space);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$1;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var sizes = {
    SM: "sm",
    MD: "md",
};
var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
var removePointerEvents = function (_a) {
    var disabled = _a.disabled, as = _a.as;
    if (disabled && as && as !== "button") {
        return "\n      pointer-events: none;\n    ";
    }
    return "";
};
var getButtonVariantProp = function (prop) { return function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants.PRIMARY : _b;
    return theme.button[variant][prop];
}; };
var StyledButton = styled__default['default'].button(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"])), getButtonVariantProp("background"), getButtonVariantProp("border"), getButtonVariantProp("boxShadow"), getButtonVariantProp("color"), function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "max-content");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "0 16px" : "0 24px");
}, function (_a) {
    var isLoading = _a.isLoading;
    return (isLoading ? 0.5 : 1);
}, getButtonVariantProp("backgroundHover"), getButtonVariantProp("borderColorHover"), function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
}, getButtonVariantProp("backgroundActive"), getButtonVariantProp("boxShadowActive"), getDisabledStyles, removePointerEvents, styledSystem.space);
StyledButton.defaultProps = {
    fullWidth: false,
    type: "button",
};
var templateObject_1$2;

var Button = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, external = _a.external, isLoading = _a.isLoading, disabled = _a.disabled, props = __rest(_a, ["startIcon", "endIcon", "children", "external", "isLoading", "disabled"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    return (React__default['default'].createElement(StyledButton, __assign({}, internalProps, props, { isLoading: isLoading, disabled: isDisabled }),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Button.defaultProps = {
    variant: variants.PRIMARY,
    size: sizes.MD,
    external: false,
    isLoading: false,
    disabled: false,
};

var IconButton = styled__default['default'](Button)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
});
var templateObject_1$3;

var Icon$4 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$5 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$6 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$7 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$8 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$9 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M5 13.0022H16.17L11.29 17.8822C10.9 18.2722 10.9 18.9122 11.29 19.3022C11.68 19.6922 12.31 19.6922 12.7 19.3022L19.29 12.7122C19.68 12.3222 19.68 11.6922 19.29 11.3022L12.71 4.70217C12.32 4.31217 11.69 4.31217 11.3 4.70217C10.91 5.09217 10.91 5.72217 11.3 6.11217L16.17 11.0022H5C4.45 11.0022 4 11.4522 4 12.0022C4 12.5522 4.45 13.0022 5 13.0022Z" })));
};

var Icon$a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default['default'].createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$c = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React__default['default'].createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React__default['default'].createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React__default['default'].createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React__default['default'].createElement("g", { mask: "url(#mask0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React__default['default'].createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$d = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$e = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 24" }, props),
        React__default['default'].createElement("path", { d: "M19.2 3H5.19995C4.09995 3 3.19995 3.9 3.19995 5V19C3.19995 20.1 4.09995 21 5.19995 21H19.2C20.3 21 21.2 20.1 21.2 19V5C21.2 3.9 20.3 3 19.2 3ZM19.2 19H5.19995V5H19.2V19Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M11.45 7.72021H6.44995V9.22022H11.45V7.72021Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M18.2 15.75H13.2V17.25H18.2V15.75Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M18.2 13.25H13.2V14.75H18.2V13.25Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M8.19995 18H9.69995V16H11.7V14.5H9.69995V12.5H8.19995V14.5H6.19995V16H8.19995V18Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M14.29 10.95L15.7 9.54L17.11 10.95L18.17 9.89L16.76 8.47L18.17 7.06L17.11 6L15.7 7.41L14.29 6L13.23 7.06L14.64 8.47L13.23 9.89L14.29 10.95Z", fill: "#1FC7D4" })));
};

var Icon$f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React__default['default'].createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$g = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$h = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$i = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$j = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$k = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$l = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$m = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$n = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$o = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z" })));
};

var Icon$p = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("image", { width: "32", height: "32", href: "/images/midas/logo.png" })));
};

var Icon$r = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M149.813 139.861C144.738 112.406 165.591 87.0417 193.238 87.0417C217.636 87.0417 237.414 107.022 237.414 131.669V186.687C243.517 186.252 249.718 186.028 255.998 186.028C262.032 186.028 267.992 186.234 273.862 186.636V131.669C273.862 107.022 293.641 87.0417 318.039 87.0417C345.686 87.0417 366.539 112.406 361.464 139.861L349.509 204.532C390.538 222.627 421.562 254.056 421.562 293.548V317.442C421.562 349.919 400.293 377.11 370.56 395.466C340.595 413.965 300.058 424.962 255.998 424.962C211.939 424.962 171.401 413.965 141.436 395.466C111.703 377.11 90.4342 349.919 90.4342 317.442V293.548C90.4342 254.265 121.139 222.957 161.822 204.825L149.813 139.861ZM334.189 213.028L348.178 137.354C351.701 118.299 337.227 100.695 318.039 100.695C301.105 100.695 287.378 114.562 287.378 131.669V201.683C282.941 201.108 278.433 200.653 273.862 200.323C268.003 199.899 262.042 199.682 255.998 199.682C249.707 199.682 243.505 199.918 237.414 200.376C232.844 200.72 228.335 201.189 223.899 201.777V131.669C223.899 114.562 210.172 100.695 193.238 100.695C174.05 100.695 159.576 118.299 163.099 137.354L177.134 213.279C133.257 229.744 103.95 259.533 103.95 293.548V317.442C103.95 369.283 172.024 411.308 255.998 411.308C339.972 411.308 408.047 369.283 408.047 317.442V293.548C408.047 259.36 378.439 229.44 334.189 213.028Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M408.047 317.442C408.047 369.283 339.972 411.308 255.998 411.308C172.024 411.308 103.95 369.283 103.95 317.442V293.548H408.047V317.442Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M163.099 137.354C159.576 118.299 174.05 100.695 193.238 100.695C210.172 100.695 223.899 114.562 223.899 131.669V201.777C234.247 200.404 244.986 199.682 255.998 199.682C266.755 199.682 277.252 200.371 287.378 201.683V131.669C287.378 114.562 301.105 100.695 318.039 100.695C337.227 100.695 351.701 118.299 348.178 137.354L334.189 213.028C378.439 229.44 408.047 259.36 408.047 293.548C408.047 345.389 339.972 387.415 255.998 387.415C172.024 387.415 103.95 345.389 103.95 293.548C103.95 259.533 133.257 229.744 177.134 213.279L163.099 137.354Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { d: "M213.762 286.722C213.762 300.86 206.199 312.322 196.868 312.322C187.538 312.322 179.974 300.86 179.974 286.722C179.974 272.583 187.538 261.122 196.868 261.122C206.199 261.122 213.762 272.583 213.762 286.722Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M330.333 286.722C330.333 300.86 322.769 312.322 313.439 312.322C304.108 312.322 296.544 300.86 296.544 286.722C296.544 272.583 304.108 261.122 313.439 261.122C322.769 261.122 330.333 272.583 330.333 286.722Z", fill: "#633001" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "256", y1: "0", x2: "256", y2: "512", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#54DADE" }),
                React__default['default'].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$s = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 15 2" }, props),
        React__default['default'].createElement("path", { d: "M13.2 2L1.20004 2C0.650043 2 0.200043 1.55 0.200043 1C0.200043 0.45 0.650043 0 1.20004 0L13.2 0C13.75 0 14.2 0.45 14.2 1C14.2 1.55 13.75 2 13.2 2Z" })));
};

var Icon$t = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$u = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.43832 38.1153C2.43048 38.3002 2.42654 38.4857 2.42654 38.6718C2.42654 39.3754 2.48287 40.0702 2.59273 40.7545H2.42654V41.8317C2.42654 42.3575 2.45801 42.8784 2.51976 43.3937C3.7248 53.4491 16.4632 61.3609 32 61.3609C47.5368 61.3609 60.2752 53.4491 61.4802 43.3937C61.542 42.8784 61.5735 42.3575 61.5735 41.8317V40.7545H61.4073C61.5171 40.0702 61.5735 39.3754 61.5735 38.6718C61.5735 38.4857 61.5695 38.3002 61.5617 38.1153C61.1156 27.587 48.0511 19.1426 32 19.1426C15.9489 19.1426 2.88444 27.587 2.43832 38.1153ZM0.00951064 38.1153C0.229456 31.6916 4.24297 26.2955 9.82907 22.6067C15.6197 18.7827 23.4643 16.5034 32 16.5034C40.5358 16.5034 48.3803 18.7827 54.1709 22.6067C59.757 26.2955 63.7705 31.6916 63.9905 38.1153H64V41.8317C64 48.5003 59.9176 54.102 54.1709 57.8969C48.3803 61.7208 40.5358 64.0001 32 64.0001C23.4643 64.0001 15.6197 61.7208 9.82907 57.8969C4.08238 54.102 0 48.5003 0 41.8317V38.1153H0.00951064Z", fill: "#606063" }),
        React__default['default'].createElement("path", { d: "M61.5734 41.832C61.5734 52.6177 48.3329 61.3612 32 61.3612C15.667 61.3612 2.42651 52.6177 2.42651 41.832V38.7405H61.5734V41.832Z", fill: "#BEBEBE" }),
        React__default['default'].createElement("path", { d: "M61.5734 38.6718C61.5734 49.4575 48.3329 58.201 32 58.201C15.667 58.201 2.42651 49.4575 2.42651 38.6718C2.42651 27.8861 15.667 19.1426 32 19.1426C48.3329 19.1426 61.5734 27.8861 61.5734 38.6718Z", fill: "#FAF9FA" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 33.1548C6.97663 33.167 6.97661 33.1792 6.97661 33.1915C6.97661 34.0795 7.09495 34.9492 7.32173 35.794H6.97634V36.9377C6.97634 37.4425 7.01459 37.9414 7.08925 38.4332C8.21673 45.8588 17.6492 51.6547 29.1184 51.6547C40.5876 51.6547 50.0201 45.8588 51.1475 38.4332C51.2222 37.9414 51.2604 37.4425 51.2604 36.9377V35.794H50.9156C51.1362 34.9723 51.2542 34.127 51.2604 33.2641C51.2606 33.2399 51.2607 33.2157 51.2607 33.1915C51.2607 33.1792 51.2607 33.167 51.2606 33.1548C51.2309 25.0436 41.329 18.4744 29.1187 18.4744C16.9083 18.4744 7.00645 25.0436 6.97668 33.1548ZM4.55012 33.1548H4.5498V36.9377C4.5498 42.269 7.79116 46.6683 12.1963 49.5962C16.643 52.5518 22.632 54.2939 29.1184 54.2939C35.6048 54.2939 41.5937 52.5518 46.0405 49.5962C50.4456 46.6683 53.687 42.269 53.687 36.9377V33.2739C53.6872 33.2464 53.6872 33.2189 53.6872 33.1915C53.6872 27.8601 50.4459 23.4609 46.0408 20.533C41.594 17.5773 35.6051 15.8352 29.1187 15.8352C22.6322 15.8352 16.6433 17.5773 12.1965 20.533C7.80153 23.4542 4.56495 27.84 4.55012 33.1548Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M51.2604 36.9379C51.2604 45.0659 41.3471 51.6549 29.1184 51.6549C16.8897 51.6549 6.97632 45.0659 6.97632 36.9379V33.4849H51.2604V36.9379Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M51.2604 33.1914C51.2604 41.3195 41.3471 47.9085 29.1184 47.9085C16.8897 47.9085 6.97632 41.3195 6.97632 33.1914C6.97632 25.0634 16.8897 18.4744 29.1184 18.4744C41.3471 18.4744 51.2604 25.0634 51.2604 33.1914Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6497 25.2371C13.6496 25.2493 13.6496 25.2615 13.6496 25.2737C13.6496 26.1618 13.7679 27.0315 13.9947 27.8762H13.6493V29.0199C13.6493 29.5248 13.6876 30.0237 13.7622 30.5154C14.8897 37.941 24.3222 43.737 35.7914 43.737C47.2605 43.737 56.693 37.941 57.8205 30.5154C57.8952 30.0237 57.9334 29.5248 57.9334 29.0199V27.8762H57.5886C57.8092 27.0545 57.9271 26.2092 57.9334 25.3464C57.9336 25.3222 57.9337 25.298 57.9337 25.2737C57.9337 25.2615 57.9337 25.2493 57.9336 25.2371C57.9038 17.1259 48.0019 10.5567 35.7916 10.5567C23.5813 10.5567 13.6794 17.1259 13.6497 25.2371ZM11.2231 25.2371H11.2228V29.0199C11.2228 34.3513 14.4641 38.7505 18.8693 41.6785C23.316 44.6341 29.3049 46.3762 35.7914 46.3762C42.2778 46.3762 48.2667 44.6341 52.7135 41.6785C57.1186 38.7505 60.36 34.3513 60.36 29.0199V25.3561C60.3601 25.3287 60.3602 25.3012 60.3602 25.2737C60.3602 19.9424 57.1189 15.5432 52.7137 12.6152C48.267 9.65961 42.2781 7.91748 35.7916 7.91748C29.3052 7.91748 23.3163 9.65961 18.8695 12.6152C14.4745 15.5364 11.2379 19.9222 11.2231 25.2371Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M57.9334 29.0201C57.9334 37.1481 48.0201 43.7372 35.7913 43.7372C23.5626 43.7372 13.6493 37.1481 13.6493 29.0201V25.5671H57.9334V29.0201Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M57.9334 25.274C57.9334 33.402 48.0201 39.991 35.7913 39.991C23.5626 39.991 13.6493 33.402 13.6493 25.274C13.6493 17.1459 23.5626 10.5569 35.7913 10.5569C48.0201 10.5569 57.9334 17.1459 57.9334 25.274Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 17.3196C6.97663 17.3318 6.97661 17.344 6.97661 17.3563C6.97661 18.2443 7.09495 19.114 7.32173 19.9588H6.97634V21.1025C6.97634 21.6073 7.01459 22.1062 7.08925 22.598C8.21673 30.0236 17.6492 35.8195 29.1184 35.8195C40.5876 35.8195 50.0201 30.0236 51.1475 22.598C51.2222 22.1062 51.2604 21.6073 51.2604 21.1025V19.9588H50.9156C51.1362 19.1371 51.2542 18.2917 51.2604 17.4289C51.2606 17.4047 51.2607 17.3805 51.2607 17.3563C51.2607 17.344 51.2607 17.3318 51.2606 17.3196C51.2309 9.20843 41.329 2.63919 29.1187 2.63919C16.9083 2.63919 7.00645 9.20843 6.97668 17.3196ZM4.55012 17.3196H4.5498V21.1025C4.5498 26.4338 7.79116 30.833 12.1963 33.761C16.643 36.7166 22.632 38.4587 29.1184 38.4587C35.6048 38.4587 41.5937 36.7166 46.0405 33.761C50.4456 30.833 53.687 26.4338 53.687 21.1025V17.4387C53.6872 17.4112 53.6872 17.3837 53.6872 17.3563C53.6872 12.0249 50.4459 7.62568 46.0408 4.69775C41.594 1.74213 35.6051 0 29.1187 0C22.6322 0 16.6433 1.74213 12.1965 4.69775C7.80153 7.61896 4.56495 12.0047 4.55012 17.3196Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M51.2604 21.1027C51.2604 29.2307 41.3471 35.8197 29.1184 35.8197C16.8897 35.8197 6.97632 29.2307 6.97632 21.1027V17.6497H51.2604V21.1027Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M51.2604 17.3562C51.2604 25.4842 41.3471 32.0733 29.1184 32.0733C16.8897 32.0733 6.97632 25.4842 6.97632 17.3562C6.97632 9.22822 16.8897 2.63916 29.1184 2.63916C41.3471 2.63916 51.2604 9.22822 51.2604 17.3562Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.214 18.272C12.214 20.9856 14.0269 23.4161 16.8871 25.0513L14.9054 28.7844L14.9059 28.7847H14.9054V38.2326C14.9054 39.4819 15.8366 40.4947 16.9853 40.4947C18.134 40.4947 19.0652 39.4819 19.0652 38.2326V30.7188L21.1972 26.7024C22.5605 27.0169 24.0238 27.1876 25.5468 27.1876C32.9103 27.1876 38.8796 23.196 38.8796 18.272C38.8796 13.3481 32.9103 9.35645 25.5468 9.35645C18.1833 9.35645 12.214 13.3481 12.214 18.272Z", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8871 25.0513C16.5702 24.8701 16.2663 24.6792 15.9762 24.4793C13.6475 22.8741 12.2139 20.685 12.2139 18.272C12.2139 13.3481 18.1832 9.35641 25.5468 9.35641C32.9103 9.35641 38.8796 13.3481 38.8796 18.272C38.8796 23.1959 32.9103 27.1876 25.5468 27.1876C24.0238 27.1876 22.5604 27.0168 21.1972 26.7024L19.0652 30.7187V38.2325C19.0652 39.4819 18.134 40.4947 16.9853 40.4947C15.8366 40.4947 14.9054 39.4819 14.9054 38.2325V28.7847L16.8871 25.0513ZM12.7822 28.8244V38.2325C12.7822 40.7573 14.664 42.804 16.9853 42.804C19.3066 42.804 21.1884 40.7573 21.1884 38.2325V31.3375L22.2942 29.2544C23.3445 29.4135 24.433 29.4969 25.5468 29.4969C29.5564 29.4969 33.2881 28.4148 36.0865 26.5435C38.8503 24.6954 41.0028 21.836 41.0028 18.272C41.0028 14.708 38.8503 11.8486 36.0865 10.0005C33.2881 8.12923 29.5564 7.04712 25.5468 7.04712C21.5371 7.04712 17.8054 8.12923 15.007 10.0005C12.2432 11.8486 10.0907 14.708 10.0907 18.272C10.0907 21.4 11.738 23.9758 14.0266 25.8213L13.0813 27.6021C12.9912 27.7662 12.9192 27.9435 12.8685 28.1307C12.8064 28.3589 12.7783 28.5928 12.7822 28.8244Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M16.3791 14.5156C16.3791 17.0663 19.3667 19.1341 23.0521 19.1341C26.7375 19.1341 29.7251 17.0663 29.7251 14.5156C29.7251 11.9648 26.7375 9.89697 23.0521 9.89697C19.3667 9.89697 16.3791 11.9648 16.3791 14.5156Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M16.3792 12.5361H29.7251V14.5155H16.3792V12.5361Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M16.3791 12.5361C16.3791 15.0868 19.3667 17.1546 23.0521 17.1546C26.7375 17.1546 29.7251 15.0868 29.7251 12.5361C29.7251 9.98529 26.7375 7.91748 23.0521 7.91748C19.3667 7.91748 16.3791 9.98529 16.3791 12.5361Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.52 11.9795L22.4008 10.6777C22.7983 10.4027 23.3062 10.4027 23.7036 10.6777L25.5845 11.9795C25.959 12.2388 25.959 12.8336 25.5845 13.0928L23.7036 14.3946C23.3062 14.6697 22.7983 14.6697 22.4008 14.3946L20.52 13.0928C20.1454 12.8336 20.1454 12.2388 20.52 11.9795Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1938 7.32218C18.7911 6.21664 20.8681 5.6084 23.0522 5.6084C25.2363 5.6084 27.3133 6.21664 28.9106 7.32218C30.4827 8.41029 31.8484 10.1975 31.8484 12.5363V14.5157C31.8484 16.8545 30.4827 18.6417 28.9106 19.7298C27.3133 20.8353 25.2363 21.4435 23.0522 21.4435C20.8681 21.4435 18.7911 20.8353 17.1938 19.7298C15.6217 18.6417 14.256 16.8545 14.256 14.5157V12.5363C14.256 10.1975 15.6217 8.41029 17.1938 7.32218ZM23.0522 7.91769C19.3668 7.91769 16.3792 9.9855 16.3792 12.5363V14.5157C16.3792 17.0664 19.3668 19.1343 23.0522 19.1343C26.7376 19.1343 29.7252 17.0664 29.7252 14.5157V12.5363C29.7252 9.9855 26.7376 7.91769 23.0522 7.91769Z", fill: "#633001" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "25.691", y1: "9.6549", x2: "25.691", y2: "40.2608", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#9F4A08" }),
                React__default['default'].createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$v = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React__default['default'].createElement("image", { width: 90, height: 90, href: "/images/midas/9.png" })));
};

var Icon$w = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$x = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React__default['default'].createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default['default'].createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default['default'].createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React__default['default'].createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React__default['default'].createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$A = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React__default['default'].createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$B = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("path", { d: "M76.2856 28.6526C77.0883 29.4553 77.1989 30.7184 76.548 31.6485C64.6385 48.6643 49.9116 63.5221 33.0019 75.5817L31.6665 76.5341C30.6872 77.2325 29.3467 77.121 28.4962 76.2705L22.4847 70.259C26.0334 66.5844 25.9945 60.7286 22.3678 57.1019C18.7411 53.4752 12.8853 53.4362 9.21067 56.985L3.68116 51.4555C2.62962 50.4039 2.77462 48.6597 3.98536 47.7962L5.32156 46.8433C21.8225 35.0751 36.1934 20.5765 47.815 3.97204C48.6291 2.80897 50.296 2.66297 51.2998 3.66682L56.9276 9.29459C53.3922 12.97 53.4356 18.8158 57.0578 22.438C60.6799 26.0601 66.5257 26.1035 70.2011 22.5681L76.2856 28.6526Z", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M78.9507 30.3151L57.459 57.5291L29.6615 78.5708L24.3156 73.1863L22.3868 70.8482L24.3156 68.0575L24.9915 65.2668L24.6194 62.29L23.5031 59.4993L21.6426 57.2668L19.4101 55.7784L16.9915 55.0342H14.0147L10.8519 56.1505L8.99148 57.8249L4.52637 52.4296L11.7898 51.3463C34.3187 47.9863 55.6053 38.8899 73.6048 24.9307L78.9507 30.3151Z", fill: "#A28BD4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7724 70.5193C19.7732 69.7287 20.0885 68.971 20.6487 68.4131L20.6586 68.4032C23.1622 65.8996 23.1622 61.8405 20.6586 59.3369C18.155 56.8333 14.0958 56.8333 11.5922 59.3369L11.5823 59.3468C11.0245 59.907 10.2667 60.2223 9.47617 60.2231C8.68561 60.2239 7.92718 59.9103 7.36817 59.3512L1.57656 53.5596C-0.776282 51.2068 -0.451848 47.304 2.25722 45.372L3.59342 44.419L5.32184 46.8426L3.98564 47.7955C2.7749 48.659 2.6299 50.4032 3.68144 51.4548L9.47304 57.2464L9.48735 57.232C9.49192 57.2275 9.49649 57.2229 9.50106 57.2183C13.1682 53.5659 19.1019 53.5705 22.7635 57.232C26.4247 60.8933 26.4295 66.8263 22.778 70.4936C22.7731 70.4984 22.7683 70.5033 22.7635 70.5081L22.7491 70.5224L28.4965 76.2698C29.347 77.1203 30.6875 77.2318 31.6668 76.5334L33.0022 75.581C49.9119 63.5214 64.6388 48.6636 76.5483 31.6478C77.1992 30.7178 77.0886 29.4546 76.2859 28.6519L70.2487 22.6148C70.2268 22.6371 70.2047 22.6594 70.1825 22.6816C70.1603 22.7038 70.138 22.7259 70.1156 22.7479C66.4445 26.3475 60.5503 26.3254 56.9064 22.6816C53.2625 19.0376 53.2405 13.1434 56.8404 9.47221C56.8623 9.44989 56.8843 9.42764 56.9064 9.40548C56.9286 9.38329 56.9509 9.36124 56.9733 9.33932L51.3001 3.66613C50.2962 2.66229 48.6293 2.80829 47.8153 3.97136C36.1937 20.5758 21.8228 35.0744 5.32184 46.8426L3.59342 44.419C19.8185 32.8476 33.9492 18.5913 45.3766 2.26445C47.252 -0.415092 51.0922 -0.751452 53.4049 1.56125L59.0781 7.23444C59.64 7.79626 59.9539 8.55937 59.95 9.35389C59.9461 10.1484 59.6247 10.9084 59.0574 11.4647C59.042 11.4798 59.0267 11.495 59.0113 11.5104C56.5077 14.014 56.5077 18.0731 59.0113 20.5767C61.5149 23.0803 65.5741 23.0803 68.0777 20.5767C68.0929 20.5615 68.1081 20.5461 68.1233 20.5306C68.6796 19.9633 69.4396 19.6419 70.2341 19.6381C71.0287 19.6342 71.7918 19.9481 72.3536 20.5099L78.3907 26.547C80.2148 28.3711 80.4662 31.2413 78.987 33.3547C66.8832 50.648 51.9161 65.7482 34.7306 78.0046L33.3952 78.9569C31.2319 80.4997 28.2705 80.2536 26.3916 78.3747L20.6442 72.6273C20.0852 72.0683 19.7715 71.3099 19.7724 70.5193Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9888 14.0672L41.3044 15.3827C41.8856 15.964 41.8856 16.9064 41.3044 17.4876C40.7231 18.0688 39.7808 18.0688 39.1995 17.4876L37.884 16.1721C37.3027 15.5908 37.3027 14.6484 37.884 14.0672C38.4652 13.4859 39.4076 13.4859 39.9888 14.0672Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.5142 19.5926L46.8298 20.9081C47.411 21.4894 47.411 22.4317 46.8298 23.013C46.2485 23.5942 45.3062 23.5942 44.7249 23.013L43.4094 21.6974C42.8281 21.1162 42.8281 20.1738 43.4094 19.5926C43.9906 19.0113 44.933 19.0113 45.5142 19.5926Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M52.3542 28.5384C51.773 29.1196 50.8306 29.1196 50.2493 28.5384L48.6707 26.9597C48.0894 26.3785 48.0894 25.4361 48.6707 24.8549C49.2519 24.2736 50.1943 24.2736 50.7755 24.8549L52.3542 26.4335C52.9354 27.0148 52.9354 27.9571 52.3542 28.5384Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.8796 34.0638C57.2983 34.645 56.356 34.645 55.7747 34.0638L54.1961 32.4851C53.6148 31.9039 53.6148 30.9615 54.1961 30.3802C54.7773 29.799 55.7197 29.799 56.3009 30.3802L57.8796 31.9589C58.4608 32.5401 58.4608 33.4825 57.8796 34.0638Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.8267 35.9051L63.1423 37.2206C63.7235 37.8019 63.7235 38.7442 63.1423 39.3255C62.561 39.9067 61.6187 39.9067 61.0374 39.3255L59.7219 38.0099C59.1406 37.4287 59.1406 36.4863 59.7219 35.9051C60.3031 35.3238 61.2455 35.3238 61.8267 35.9051Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M67.3521 41.4305L68.6677 42.746C69.2489 43.3273 69.2489 44.2696 68.6677 44.8509C68.0864 45.4321 67.144 45.4321 66.5628 44.8509L65.2472 43.5353C64.666 42.9541 64.666 42.0117 65.2472 41.4305C65.8285 40.8492 66.7709 40.8492 67.3521 41.4305Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.2915 37.1288C30.6927 35.53 30.6927 32.9378 32.2915 31.3389C34.1033 29.5272 37.1152 29.806 38.5636 31.9196L42.2107 37.2416C45.3939 36.2204 48.7719 36.3559 51.0104 38.5945C53.0227 40.6067 53.3281 43.5721 52.6459 46.3981C51.9561 49.256 50.2117 52.2664 47.6467 54.8314C45.0817 57.3964 42.0713 59.1408 39.2134 59.8306C36.3874 60.5128 33.422 60.2073 31.4098 58.1951C29.1842 55.9696 29.0377 52.6168 30.0388 49.4519L24.694 45.7892C22.5804 44.3408 22.3016 41.3289 24.1134 39.5171C25.7122 37.9183 28.3044 37.9183 29.9032 39.5171L33.6067 43.2206C33.9734 42.7908 34.3625 42.3691 34.7735 41.9582C35.1704 41.5613 35.5772 41.1847 35.9918 40.8291L32.2915 37.1288Z", fill: "#633001" }),
        React__default['default'].createElement("ellipse", { cx: "36.9019", cy: "50.5685", rx: "1.79015", ry: "2.60385", transform: "rotate(-45 36.9019 50.5685)", fill: "#DBCDF9" }),
        React__default['default'].createElement("ellipse", { rx: "1.79015", ry: "2.60385", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 43.5768 43.8947)", fill: "#DBCDF9" })));
};

var Icon$C = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { d: "M39.0623 18.9777C39.3983 19.3138 39.4447 19.8426 39.1721 20.232C34.1862 27.3557 28.0207 33.576 20.9413 38.6248L20.3823 39.0235C19.9723 39.3159 19.4111 39.2692 19.055 38.9132L16.5383 36.3964C18.024 34.858 18.0077 32.4065 16.4893 30.8881C14.971 29.3698 12.5194 29.3535 10.981 30.8392L8.66608 28.5242C8.22585 28.084 8.28655 27.3538 8.79343 26.9923L9.35284 26.5933C16.261 21.6665 22.2775 15.5966 27.1429 8.64507C27.4837 8.15815 28.1816 8.09702 28.6019 8.51729L30.958 10.8734C29.4778 12.4121 29.496 14.8595 31.0125 16.3759C32.5289 17.8924 34.9762 17.9105 36.515 16.4304L39.0623 18.9777Z", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M40.1776 19.6742L31.18 31.0674L19.5425 39.8766L17.3044 37.6224L16.4969 36.6435L17.3044 35.4752L17.5873 34.3068L17.4316 33.0606L16.9642 31.8923L16.1853 30.9576L15.2507 30.3345L14.2381 30.0229H12.9919L11.6678 30.4903L10.8889 31.1913L9.01953 28.9325L12.0604 28.4789C21.4923 27.0723 30.404 23.264 37.9396 17.4199L40.1776 19.6742Z", fill: "#A28BD4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4028 36.5059C15.4031 36.1749 15.5351 35.8577 15.7697 35.6241L15.7738 35.62C16.822 34.5718 16.822 32.8725 15.7738 31.8243C14.7257 30.7762 13.0263 30.7762 11.9781 31.8243L11.974 31.8285C11.7405 32.063 11.4232 32.195 11.0922 32.1953C10.7613 32.1957 10.4438 32.0643 10.2097 31.8303L7.78504 29.4056C6.80001 28.4206 6.93583 26.7867 8.07 25.9778L8.6294 25.5789L9.35301 26.5935L8.79361 26.9925C8.28673 27.354 8.22602 28.0842 8.66625 28.5244L11.0909 30.9491L11.0969 30.9431C11.0988 30.9412 11.1008 30.9393 11.1027 30.9374C12.638 29.4083 15.1221 29.4102 16.655 30.9431C18.1878 32.4759 18.1899 34.9598 16.6611 36.4951C16.6591 36.4971 16.6571 36.4992 16.655 36.5012L16.649 36.5072L19.0552 38.9134C19.4113 39.2694 19.9725 39.3161 20.3824 39.0237L20.9415 38.625C28.0208 33.5762 34.1863 27.3559 39.1723 20.2321C39.4448 19.8428 39.3985 19.314 39.0625 18.9779L36.535 16.4504C36.5258 16.4598 36.5166 16.4691 36.5073 16.4784C36.498 16.4877 36.4886 16.4969 36.4792 16.5061C34.9423 18.0132 32.4747 18.0039 30.9492 16.4784C29.4236 14.9528 29.4144 12.4852 30.9215 10.9482C30.9307 10.9389 30.9399 10.9296 30.9492 10.9203C30.9585 10.911 30.9678 10.9018 30.9771 10.8926L28.602 8.51747C28.1818 8.0972 27.4839 8.15833 27.1431 8.64525C22.2777 15.5968 16.2612 21.6667 9.35301 26.5935L8.6294 25.5789C15.4221 20.7344 21.338 14.766 26.1221 7.93065C26.9073 6.80885 28.515 6.66803 29.4832 7.63625L31.8584 10.0114C32.0936 10.2466 32.225 10.566 32.2234 10.8987C32.2217 11.2313 32.0872 11.5495 31.8497 11.7824C31.8432 11.7887 31.8368 11.7951 31.8304 11.8015C30.7822 12.8496 30.7822 14.549 31.8304 15.5972C32.8785 16.6453 34.5779 16.6453 35.626 15.5972C35.6324 15.5908 35.6388 15.5844 35.6452 15.5779C35.8781 15.3404 36.1962 15.2058 36.5289 15.2042C36.8615 15.2026 37.181 15.334 37.4162 15.5692L39.9437 18.0967C40.7073 18.8603 40.8126 20.062 40.1933 20.9467C35.126 28.1867 28.8599 34.5084 21.6651 39.6396L21.1061 40.0383C20.2004 40.6842 18.9606 40.5812 18.174 39.7946L15.7678 37.3884C15.5338 37.1544 15.4025 36.8369 15.4028 36.5059Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8664 12.8716L24.4172 13.4223C24.6605 13.6657 24.6605 14.0602 24.4172 14.3035C24.1738 14.5469 23.7793 14.5469 23.536 14.3035L22.9852 13.7528C22.7419 13.5094 22.7419 13.1149 22.9852 12.8716C23.2285 12.6282 23.6231 12.6282 23.8664 12.8716Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.1799 15.1841L26.7306 15.7348C26.974 15.9782 26.974 16.3727 26.7306 16.616C26.4873 16.8594 26.0928 16.8594 25.8494 16.616L25.2987 16.0653C25.0553 15.8219 25.0553 15.4274 25.2987 15.1841C25.542 14.9407 25.9365 14.9407 26.1799 15.1841Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.0441 18.9295C28.8008 19.1729 28.4062 19.1728 28.1629 18.9295L27.502 18.2686C27.2587 18.0253 27.2587 17.6307 27.502 17.3874C27.7453 17.144 28.1399 17.144 28.3832 17.3874L29.0441 18.0483C29.2875 18.2916 29.2875 18.6862 29.0441 18.9295Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3576 21.243C31.1143 21.4863 30.7197 21.4863 30.4764 21.243L29.8155 20.5821C29.5721 20.3387 29.5721 19.9442 29.8155 19.7009C30.0588 19.4575 30.4533 19.4575 30.6967 19.7009L31.3576 20.3618C31.6009 20.6051 31.6009 20.9996 31.3576 21.243Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.009 22.0141L33.5597 22.5649C33.8031 22.8082 33.8031 23.2028 33.5597 23.4461C33.3164 23.6895 32.9219 23.6895 32.6785 23.4461L32.1278 22.8953C31.8844 22.652 31.8844 22.2575 32.1278 22.0141C32.3711 21.7708 32.7656 21.7708 33.009 22.0141Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3225 24.3266L35.8732 24.8774C36.1166 25.1207 36.1166 25.5153 35.8732 25.7586C35.6299 26.002 35.2354 26.002 34.992 25.7586L34.4412 25.2078C34.1979 24.9645 34.1979 24.57 34.4412 24.3266C34.6846 24.0833 35.0791 24.0833 35.3225 24.3266Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6437 22.5266C19.9743 21.8573 19.9743 20.772 20.6437 20.1027C21.4022 19.3442 22.6632 19.4609 23.2695 20.3458L24.7964 22.5738C26.1291 22.1463 27.5433 22.2031 28.4805 23.1402C29.3229 23.9827 29.4507 25.2241 29.1652 26.4073C28.8764 27.6037 28.1461 28.8641 27.0722 29.9379C25.9984 31.0117 24.7381 31.742 23.5416 32.0308C22.3584 32.3164 21.117 32.1886 20.2745 31.3461C19.3428 30.4144 19.2815 29.0108 19.7006 27.6858L17.4629 26.1524C16.5781 25.546 16.4614 24.285 17.2199 23.5265C17.8892 22.8572 18.9745 22.8572 19.6438 23.5265L21.1943 25.077C21.3478 24.897 21.5107 24.7205 21.6828 24.5485C21.8489 24.3823 22.0193 24.2247 22.1928 24.0758L20.6437 22.5266Z", fill: "#633001" }),
        React__default['default'].createElement("ellipse", { rx: "0.749452", ry: "1.09011", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 22.5742 28.153)", fill: "#DBCDF9" }),
        React__default['default'].createElement("ellipse", { cx: "25.3682", cy: "25.359", rx: "0.749453", ry: "1.09011", transform: "rotate(-45 25.3682 25.359)", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M40.2095 34.2904C40.0804 34.7825 39.3818 34.7825 39.2527 34.2904L38.5576 31.6422C38.5123 31.4695 38.3775 31.3346 38.2048 31.2893L35.5566 30.5943C35.0645 30.4651 35.0645 29.7666 35.5566 29.6374L38.2048 28.9424C38.3775 28.8971 38.5123 28.7622 38.5576 28.5895L39.2527 25.9413C39.3818 25.4492 40.0804 25.4492 40.2095 25.9413L40.9045 28.5895C40.9499 28.7622 41.0847 28.8971 41.2574 28.9424L43.9056 29.6374C44.3977 29.7666 44.3977 30.4651 43.9056 30.5943L41.2574 31.2893C41.0847 31.3346 40.9499 31.4695 40.9045 31.6422L40.2095 34.2904Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M16.4183 7.94926C16.5088 7.60415 16.9988 7.60415 17.0893 7.94926L17.5767 9.80644C17.6085 9.92754 17.7031 10.0221 17.8242 10.0539L19.6814 10.5413C20.0265 10.6319 20.0265 11.1218 19.6814 11.2124L17.8242 11.6998C17.7031 11.7316 17.6085 11.8261 17.5767 11.9473L17.0893 13.8044C16.9988 14.1495 16.5088 14.1495 16.4183 13.8044L15.9309 11.9473C15.8991 11.8261 15.8045 11.7316 15.6834 11.6998L13.8262 11.2124C13.4811 11.1218 13.4811 10.6319 13.8262 10.5413L15.6834 10.0539C15.8045 10.0221 15.8991 9.92754 15.9309 9.80644L16.4183 7.94926Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M10.3511 38.7118C10.2924 38.9355 9.97486 38.9355 9.91616 38.7118L9.60024 37.5081C9.57964 37.4296 9.51834 37.3683 9.43985 37.3477L8.23612 37.0318C8.01244 36.9731 8.01244 36.6555 8.23612 36.5968L9.43985 36.2809C9.51834 36.2603 9.57964 36.199 9.60024 36.1205L9.91616 34.9168C9.97486 34.6931 10.2924 34.6931 10.3511 34.9168L10.667 36.1205C10.6876 36.199 10.7489 36.2603 10.8274 36.2809L12.0311 36.5968C12.2548 36.6555 12.2548 36.9731 12.0311 37.0318L10.8274 37.3477C10.7489 37.3683 10.6876 37.4296 10.667 37.5081L10.3511 38.7118Z", fill: "#53DEE9" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "24", y1: "0", x2: "24", y2: "48", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#54DADE" }),
                React__default['default'].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$D = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$E = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$F = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$G = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Flex = styled__default['default'].div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: flex;\n  ", "\n  ", "\n"], ["\n  display: flex;\n  ", "\n  ", "\n"])), styledSystem.flexbox, styledSystem.space);
var templateObject_1$4;

var variants$1 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$1.INFO : _b;
    switch (variant) {
        case variants$1.DANGER:
            return theme.colors.failure;
        case variants$1.WARNING:
            return theme.colors.warning;
        case variants$1.SUCCESS:
            return theme.colors.success;
        case variants$1.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$1.INFO; }
    switch (variant) {
        case variants$1.DANGER:
            return Icon$2;
        case variants$1.WARNING:
            return Icon$1;
        case variants$1.SUCCESS:
            return Icon;
        case variants$1.INFO:
        default:
            return Icon$3;
    }
};
var IconLabel = styled__default['default'].div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled__default['default'].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled__default['default'].div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled__default['default'](Flex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React__default['default'].createElement(StyledAlert, null,
        React__default['default'].createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React__default['default'].createElement(Icon, { color: "currentColor", width: "24px" })),
        React__default['default'].createElement(Details, { hasHandler: !!onClick },
            React__default['default'].createElement(Text, { bold: true }, title),
            typeof children === "string" ? React__default['default'].createElement(Text, { as: "p" }, children) : children),
        onClick && (React__default['default'].createElement(CloseHandler, null,
            React__default['default'].createElement(IconButton, { size: "sm", variant: "text", onClick: onClick },
                React__default['default'].createElement(Icon$k, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$5, templateObject_2$1, templateObject_3$1, templateObject_4;

var Separator = styled__default['default'].div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled__default['default'].ul(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, styledSystem.space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArrays(accum, [item]);
        }
        return __spreadArrays(accum, [
            React__default['default'].createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React__default['default'].createElement(Icon$i, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = React.Children.toArray(children).filter(function (child) { return React.isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React__default['default'].createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React__default['default'].createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$6, templateObject_2$2;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled__default['default'].div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$7;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, onClick = _a.onClick, children = _a.children;
    return (React__default['default'].createElement(StyledButtonMenu, { variant: variant }, React.Children.map(children, function (child, index) {
        return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onClick ? function () { return onClick(index); } : undefined,
            size: size,
            variant: variant,
        });
    })));
};

var InactiveButton = styled__default['default'](Button)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, as = _a.as, props = __rest(_a, ["isActive", "size", "variant", "as"]);
    if (!isActive) {
        return (React__default['default'].createElement(InactiveButton, __assign({ forwardedAs: as, size: size, variant: "tertiary", colorKey: variant === variants.PRIMARY ? "primary" : "textSubtle" }, props)));
    }
    return React__default['default'].createElement(Button, __assign({ as: as, size: size, variant: variant }, props));
};
var templateObject_1$8;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled__default['default'].div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, styledSystem.space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$9;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React__default['default'].createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled__default['default'].div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styledSystem.space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$a;

var CardHeader = styled__default['default'].div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, styledSystem.space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$b;

var CardFooter = styled__default['default'].div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, styledSystem.space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$c;

var StyledCardRibbon = styled__default['default'].div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React__default['default'].createElement(StyledCardRibbon, { variantColor: variantColor },
        React__default['default'].createElement("div", { title: text }, text)));
};
var templateObject_1$d;

var scales = {
    SM: "sm",
    MD: "md",
};

var getScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales.SM:
            return "24px";
        case scales.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled__default['default'].input.attrs({ type: "checkbox" })(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale, getScale, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales.MD,
};
var templateObject_1$e;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled__default['default'].div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container = styled__default['default'].div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React__default['default'].createElement(Container, null,
        target,
        React__default['default'].createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$f, templateObject_2$3;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes$1 = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a;
var style = (_a = {},
    _a[sizes$1.MD] = {
        fontSize: "20px",
    },
    _a[sizes$1.LG] = {
        fontSize: "24px",
    },
    _a[sizes$1.XL] = {
        fontSize: "40px",
    },
    _a[sizes$1.XXL] = {
        fontSize: "64px",
    },
    _a);
var Heading = styled__default['default'](Text).attrs({ bold: true })(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"], ["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes$1.MD];
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$g;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper = styled__default['default'].div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, styledSystem.space);
var templateObject_1$h;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = React.useRef(null);
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React__default['default'].createElement(Wrapper, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled__default['default'].img(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled__default['default'].div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = React.useRef(null);
    var _b = React.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React__default['default'].createElement(Wrapper, __assign({ ref: imgRef }, otherProps), isLoaded ? React__default['default'].createElement(StyledImage, { src: src, alt: alt }) : React__default['default'].createElement(Placeholder, null)));
};
var templateObject_1$i, templateObject_2$4;

var scales$1 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow$1 = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$1.MD : _b;
    switch (scale) {
        case scales$1.SM:
            return "32px";
        case scales$1.LG:
            return "48px";
        case scales$1.MD:
        default:
            return "40px";
    }
};
var Input = styled__default['default'].input(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input.defaultProps = {
    scale: scales$1.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$j;

var GridLayout = styled__default['default'].div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$k;

var GridLayout$1 = styled__default['default'](GridLayout)(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$l;

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled__default['default'].input.attrs({ type: "radio" })(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, styledSystem.space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$m;

var getColor$1 = function (color, theme) {
    return getThemeValue("colors." + color, color)(theme);
};

var getThemeTextColor = function (_a) {
    var outline = _a.outline, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return outline ? getColor$1(variant, theme) : "#ffffff";
};
var StyledTag = styled__default['default'].div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "primary" : _b;
    return outline ? "transparent" : getColor$1(variant, theme);
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return getColor$1(variant, theme);
}, getThemeTextColor, getThemeTextColor);
var templateObject_1$n;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React__default['default'].createElement(StyledTag, __assign({}, props),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    outline: false,
};

var StyledLink = styled__default['default'](Text)(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React__default['default'].createElement(StyledLink, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$o;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(Link, __assign({ external: true }, props),
        children,
        React__default['default'].createElement(Icon$t, { color: "primary", ml: "4px" })));
};

var Bar = styled__default['default'].div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled__default['default'].div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$p, templateObject_2$5;

var ProgressBunnyWrapper = styled__default['default'].div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$q;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.primaryStep, primaryStep = _b === void 0 ? 0 : _b, _c = _a.secondaryStep, secondaryStep = _c === void 0 ? null : _c, _d = _a.showProgressBunny, showProgressBunny = _d === void 0 ? false : _d;
    return (React__default['default'].createElement(StyledProgress, null,
        showProgressBunny && (React__default['default'].createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React__default['default'].createElement(Icon$z, null))),
        React__default['default'].createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React__default['default'].createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var rotate$1 = styled.keyframes(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var SpinnerIcon = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("image", { width: "96", height: "96", href: "/images/midas/loading.png" })));
};
var Container$1 = styled__default['default'].div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled__default['default'](SpinnerIcon)(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate$1);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React__default['default'].createElement(Container$1, null,
        React__default['default'].createElement(RotatingPancakeIcon, { width: size * 0.5 + "px" })));
};
var templateObject_1$r, templateObject_2$6, templateObject_3$2;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = styled.keyframes(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = styled.keyframes(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled__default['default'].div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, styledSystem.layout, styledSystem.space);
var Pulse = styled__default['default'](Root)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled__default['default'](Root)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React__default['default'].createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React__default['default'].createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$s, templateObject_2$7, templateObject_3$3, templateObject_4$1, templateObject_5;

var Handle = styled__default['default'].div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
});
var Input$1 = styled__default['default'].input(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled__default['default'].div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$t, templateObject_2$8, templateObject_3$4;

var Toggle = function (_a) {
    var checked = _a.checked, props = __rest(_a, ["checked"]);
    var isChecked = !!checked;
    return (React__default['default'].createElement(StyledToggle, { checked: isChecked },
        React__default['default'].createElement(Input$1, __assign({ checked: checked }, props, { type: "checkbox" })),
        React__default['default'].createElement(Handle, null)));
};

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArrays(data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArrays(action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = React.useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                } });
        });
    }, [columns]);
    var columnsByName = React.useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = React.useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = React.useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: null,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop__default['default'],
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop__default['default'],
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = React.useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = React.useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    React.useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = React.useMemo(function () {
        return __spreadArrays(state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    React.useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries$1 = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = React.useState(function () {
        return Object.keys(mediaQueries$1).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries$1[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    React.useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries$1).map(function (size) {
            var mql = window.matchMedia(mediaQueries$1[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = React.useCallback(function () {
        return debounce__default['default'](function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    React.useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var StyledModal = styled__default['default'].div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader = styled__default['default'].div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"], ["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"])));
var ModalTitle = styled__default['default'](Flex)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (React__default['default'].createElement(StyledModal, null,
        React__default['default'].createElement(ModalHeader, null,
            React__default['default'].createElement(ModalTitle, null,
                onBack && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React__default['default'].createElement(Icon$5, { color: "primary" }))),
                React__default['default'].createElement(Heading, null, title)),
            !hideCloseButton && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React__default['default'].createElement(Icon$k, { color: "primary" })))),
        React__default['default'].createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
var templateObject_1$u, templateObject_2$9, templateObject_3$5;

var Overlay = styled__default['default'].div.attrs({ role: "presentation" })(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$v;

var ModalWrapper = styled__default['default'].div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = React.createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = React.useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React__default['default'].createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React__default['default'].createElement(ModalWrapper, null,
            React__default['default'].createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React__default['default'].isValidElement(modalNode) &&
                React__default['default'].cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$w;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = React.useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = React.useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    React.useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$H = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z" }),
        React__default['default'].createElement("path", { d: "M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" })));
};

var Icon$I = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$J = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$K = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$L = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" })));
};

var Icon$M = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$N = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$O = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo = function (_a) {
    var isDark = _a.isDark, props = __rest(_a, ["isDark"]);
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 205 40" }, props),
        React__default['default'].createElement("image", { width: "205", height: "40", href: isDark ? "/images/midas/LogoTextNewDark.png" : "/images/midas/LogoTextNewWhite.png" })));
};

var Icon$P = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$Q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$R = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$S = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 14 27" }, props),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("image", { width: "14", height: "27", id: "img3", href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAAFICAMAAAARel7JAAAAAXNSR0IB2cksfwAAAvpQTFRFycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUWZBtfwAAAP50Uk5TAAEILGWj1/Dv0K+GSxYCVIukwuP+//rp07ObcxlR2vzxbxXY95lDG5bsWAcaofXkXQaU+FB+9KgSNs/y+csgw+6ACXbtChy7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" })),
        React__default['default'].createElement("use", { id: "Background", href: "#img3", x: "0", y: "0" })));
};

var Icon$T = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React__default['default'].createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React__default['default'].createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React__default['default'].createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React__default['default'].createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React__default['default'].createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React__default['default'].createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React__default['default'].createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$U = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$V = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z" })));
};

var Icon$W = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$X = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$Y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "-60 -30 600 600" }, props),
        React__default['default'].createElement("g", { id: "surface1" },
            React__default['default'].createElement("path", { d: "M 217.996094 158.457031 C 164.203125 158.457031 120.441406 202.21875 120.441406 256.007812 C 120.441406 309.800781 164.203125 353.5625 217.996094 353.5625 C 271.785156 353.5625 315.546875 309.800781 315.546875 256.007812 C 315.546875 202.21875 271.785156 158.457031 217.996094 158.457031 Z M 275.914062 237.636719 L 206.027344 307.523438 C 203.09375 310.457031 199.246094 311.925781 195.402344 311.925781 C 191.558594 311.925781 187.714844 310.460938 184.78125 307.523438 L 158.074219 280.816406 C 152.207031 274.953125 152.207031 265.441406 158.074219 259.574219 C 163.9375 253.707031 173.449219 253.707031 179.316406 259.574219 L 195.402344 275.660156 L 254.671875 216.394531 C 260.535156 210.527344 270.046875 210.527344 275.914062 216.394531 C 281.78125 222.257812 281.78125 231.769531 275.914062 237.636719 Z M 275.914062 237.636719 " }),
            React__default['default'].createElement("path", { d: "M 435.488281 138.917969 L 435.472656 138.519531 C 435.25 133.601562 435.101562 128.398438 435.011719 122.609375 C 434.59375 94.378906 412.152344 71.027344 383.917969 69.449219 C 325.050781 66.164062 279.511719 46.96875 240.601562 9.042969 L 240.269531 8.726562 C 227.578125 -2.910156 208.433594 -2.910156 195.738281 8.726562 L 195.40625 9.042969 C 156.496094 46.96875 110.957031 66.164062 52.089844 69.453125 C 23.859375 71.027344 1.414062 94.378906 0.996094 122.613281 C 0.910156 128.363281 0.757812 133.566406 0.535156 138.519531 L 0.511719 139.445312 C -0.632812 199.472656 -2.054688 274.179688 22.9375 341.988281 C 36.679688 379.277344 57.492188 411.691406 84.792969 438.335938 C 115.886719 468.679688 156.613281 492.769531 205.839844 509.933594 C 207.441406 510.492188 209.105469 510.945312 210.800781 511.285156 C 213.191406 511.761719 215.597656 512 218.003906 512 C 220.410156 512 222.820312 511.761719 225.207031 511.285156 C 226.902344 510.945312 228.578125 510.488281 230.1875 509.925781 C 279.355469 492.730469 320.039062 468.628906 351.105469 438.289062 C 378.394531 411.636719 399.207031 379.214844 412.960938 341.917969 C 438.046875 273.90625 436.628906 199.058594 435.488281 138.917969 Z M 217.996094 383.605469 C 147.636719 383.605469 90.398438 326.367188 90.398438 256.007812 C 90.398438 185.648438 147.636719 128.410156 217.996094 128.410156 C 288.351562 128.410156 345.59375 185.648438 345.59375 256.007812 C 345.59375 326.367188 288.351562 383.605469 217.996094 383.605469 Z M 217.996094 383.605469 " }))));
};

var Icon$Z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("image", { width: "26", height: "23", id: "img5", href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtgAAAKMCAMAAADmEj/WAAAAAXNSR0IB2cksfwAAAwBQTFRF/////v7++/v7zs7Ozc3NzMzMysrKy8vLyMjI0NDQycnJ/f39z8/P/Pz8x8fHxMTE09PT0dHR+fn5+Pj4xsbG+vr60tLS9fX11NTUxcXFwcHB1dXV19fX3d3d5eXl7Ozs8fHx8/Pz2dnZw8PD2tra29vb3t7e4+Pj5+fntLS0nJychISEbm5uXV1dU1NTVlZWdXV1fX19lZWVr6+v6enp9/f36+vr4uLi4ODg2NjY9PT0wMDApKSkeXl5R0dHLCwsDQ0NCgoKBgYGBAQEAwMDAgICAQEBAAAABQUFPT09YGBgkpKSvLy81tbWY2NjMjIyFBQUBwcHCQkJFRUVQEBAd3d3nZ2d3Nzc9vb2hoaGQkJCEBAQOzs7u7u78vLyhYWFNjY2EhISNzc3b29vwsLCv7+/i4uLUVFRCwsLHx8fMDAwsLCw5ubm8PDwc3NzDg4OPj4+jY2NkJCQVVVVJCQkZWVls7Oz7u7uuLi4OTk5FxcXCAgILS0tcXFxpaWl39/ftra2mJiYTU1NDw8PFhYWdHR07+/vDAwMERERTk5Ot7e37e3tbW1t5OTkpqamTExMS0tLg4ODLi4uvr6+tbW1ra2tUFBQj4+PHBwcGhoaiIiI4eHhYWFhbGxsjo6OfHx8Kioqm5ubHR0dkZGR6urqExMTW1tbcnJyXFxcGBgYe3t7lJSUKSkpJSUlRUVF6Ojoubm5qKioISEhICAgSEhIoKCgNDQ0ODg4JycnHh4eoqKivb29l5eXGRkZUlJSgoKCiYmJKysrIyMjgICAcHBwNTU1GxsbqampXl5eWlpaq6urKCgon5+fsrKyf39/Ojo6enp6np6eZGRkX19fWFhYQ0NDlpaWREREioqKoaGhgYGBeHh4ampqaGhoYmJidnZ2SUlJp6enPDw8k5OTrq6uVFRUIiIia2traWlpJiYmLy8vmpqaMzMzfn5+o6OjjIyMmZmZWVlZQUFBrKysurq6h4eHsbGxRkZGSkpKV1dXT09PZmZmZ2dnqqqqPz8/MTEx+l4R4wAA/uRJREFUeJzsvQucJFlVJ3wj7yMibjwyIysyKrOyqqe7qrq6UUHRye6uboWufN1Ep3CyBqyCdloaqrGBaRtZoAcSHXCG7naGAWHQBRoFcQYYXoMgrjLCCu7i8vABgqLLKrqKu+rnLoLrp9/3/X7fvZEZNyKzOmcqqzMrImrmVHdPTp2M+z9x7rn3nvs45wIQkAIy/B+IeoQxwSoCUVKAppOQjygw+riqTqHkIyR+FWFDTE2CcMjdG7i4Rxq0gCgRKFbGxye2mUU5TIiKdMfR5XP8a3kwhV1bowRDnfK/CPsFSrENk+Ckvm9qcAcFUHs0TICQPyAAAKpJ5ePqMAEC/l7BDQxbNS3xhOJ/ZaoACq7taSrSdIgJ1dys0aPCtAC2ihiZjo5LM9y4TUwMpWfYvugWFzip75sa3EEBsKRrCxDytwhAoGaG3AEBDCQEgCjg7zVcbIri+Des6YLP1Qk3XqgXy7Nz+27Yf0AWyrkGKMyXoTuzoBYXRU2K6uj210pg2HC7uI81PW8bd4wC0EcWQJ3UiycCl5i+K2JY/pNcApMcXDp06HBRe8J3fOd3PfFJ392j73ny934fvbFyZH7u6LFl6C7wropoVInIzAWD6iMZdiLeN/G4gwKQHg0TIORfW4CAv2XI6LWsgL9XcAOiwovO8z9G5jgv+Dgo2ye+/wee8tSTK9Vavd5oNnrUZI166+TJ2tN+8IduKi4d2ucUy6ue2V8VwhVJ6vumBndQgB07+b0hY5iTD4QvRCcwuYgZNyDVA/7k0cc29tGn//DNddZgNeZTU1KjwVi9vbbG/8NuecYzf+Tg+uKyB3uAvfIfcfL4GNXzyLiDApg9GiZAyL+2kx/wtwhgImJSLJ/fK7iBYUOzIJ7gffaG+qxn39I4JeyZmzXvorldM0n1Vvd/mvWasO3WqR998q3rR4HFZTYKBaXrZetUTer7pgZ3UADao2EChPxrL8sE/C0C6JCYmir5ewU3MGxTPc2NWjlt/thzTrV80+X/NrrG3Kg3IqbNjZuxqjDtelN8bp557vMWDUNRCpUpAxhdw07s+6YGN6AC7zCAZcCAHIi9TRjlZwxwkM/ze6SVsxxiI1pEOetBPeCrJV8qS3I1As/CIg74qcdVCkWITDRfPmEf9W6CZ1fzoKI+/8fPVFlrrdZssG1SvcW79XMveOGLclP+GrclHBJttSsv74ES874pw5WUEatQFlgNLH9mhug03FYQo6yhwJIZ8LUiQQqYCgW0LH0B8Slqj3J2Pm9FylcW1EXq2vZgy0or7pShmK5qapv24uqJkr552/7zCz/xw6fYWr3ebvud8vaoWavy77YvtF78k+ZGTyxwK0nc+6YNNyTD7+JR4KusOvOeaRYiZXAunQnYpgrJ4GK4bqtFyZ/1/EXdvORq9lwZq/oWXyiluLzCnAVYxh6kbgnN3bD5kn/30q418w7b90O2SY0Wd7abDf7MC1728ougYGQUMFsudVF5D5WQ900drqQp0bA2NoMdHHrWvsnWQ2dHEUWtEjPge4QKT0k2LcPIk+xmuIN0u1boLx/dnrVdl27ZIUop7pRikLO2iV0P4mP73O9/xSu5kdZWOvyftuiCt91ji5WSWrW9Jp541U/9tBiEp0rZBeSvzCbnfVOHq/QIVMQAkDkaTIZ0zSHFudMFyQdg/4F1lA34WklfnFLk45xv3VGmaCbgzx6yuPdkyS9sHNKR7hW9gJ96XMtYL6qa5rzauQhf8zPCqs/cWW2K+WKj0axXt2vY/toIN2/WvutMk7Xueu2rL+UPzHpqsHyVmPdNG27QhSNcLGb12YuypXCvv3J+PieHCOSYS5GGwttcfh4TLeBnc3PT0YZUuLTs2Ni1A/7BDCjkK5ZsbmnHhfbR4Fn0xMvs3AVhn9VOU6zmNev1bfvY/Nti14bdycT6NmNrV372bgCmh+I+1vS8U1wQ7NhQgvSsqoNIS+IE3YBv6pjQTN4K+KIkrGIn4LuOyZ8phC0xbxI7Z8otpWymW2LATzsuWTh6gFeRNXXPs850t2F8k96ybv3o1KjVGw1/TbvVbFRZp3rqdfvARiZjWWLpLynvmzZcEAx5DqSO7riRJcINUAFQ7uhomORsEPrsYv/YdrDkw1yJTwPCOYFS8UzNpJLvgEKFD9+yZaUdV3XvPS2mkK9/Q4Oda3U9EFatjmrVvhfimzfv50WnfYV76Rd+7vW8KjOWkaD3TRsuCHwTE1Jkq33LgGIyKw+XYJOapP/4CaAhF0MCo6swAgLzH3n4BSrCDMLn04qrU6xjpOOyO38cgOU3XlnjhtkYxfV4ZKqxxqkGe9MPXOKzSLEdCfIKcO1QrseKnq8XV36AvAQtBgHShnt23tGW0X1O7s0eOPDzv8DatUa9Wt32fsyj0rnuQmHz2WfFJqTBO6OKAnMqiet904orPyAottxh38Gp3RAgbbiED64agbznvnj8379FrNY1Wu322Dps3mXXWf1kh6299W15sCF80kIFFVUzrvdNK678gBHRCUb9u/S7IEDacGc31dymVi5dnX/121fYubVWQ+wetra/IbMdy2aNlTq78oseF11IQLCqP9b0fL240tkeJoDkDxFAOvlDBJD8AQHSist/T4qQlo/+0nOqrL7GxIY4n/eNzbDbrNn2F8HvrDd/9j4u3nEFEJU7qo8xPV8vbggxZMiYtABpwzVVhGlxafUdL2WXb2bspB88MOJCyCNSo8HqnXZjRbSad/5yRRyLKmHnMafn68WVH4Y5+ZMWIG24uYWcc1+Z/oDfq17uCEus1cdp2LWev35B9N7v+pX7AdjQdOI91vR8vbjyw7BlmUkLkDbcE15ZXfVey+25WvWPU/sL0ds/proNqle5Y9Nc4e2mzh54ySVQODh7E4zrfdOKC4LjflnskFU9crAq0x0EAz5yubcULZ/zNQ1qAZ8W/ZMtGSm9Qe0SpeEBc15aVMLU4R4HwF5Y1IqrpZz+g9s/lrpj6+4R+57zAG/qJa2kQs1WyZ7X85hwIy0LajDrht+wQH7KcMNYNFVHJgCVCB+okUQmGGt9p8OBokMEqRbwKQhDAgWlDdcAhemca+uOu6S9+3L78qQNOwz+fc/5e0pw0SRUo45H97qex4ULguN+DuGtpxQJVfPbSE4mbvF0dZNYQG5dKgbIeKpk8ymVY/hJMwLawKUSRvI4IimAvo3TtOEawMqUiUMWFrMv6/ihXZOlIPi306m+d3nu5QSZiHdkOLvX9TwuXLnup2MMHX35kjxsogCjco8nd7zEws1iPnLMFSjH13XiBnwXLx+wMkbIL1wtw8h65OGCUahw6wj4qcPNWOAO1Zy513k7a16etFmHhl2tsebPeoC4pmciPgTveT2PCVc+wB0ZK6MU9gWxYxzZXL1q9Z3Kmp6ldsB3ib5+XIkKVJjDKjRl7Jp3pCIeCvgXlx1xJEvGvqUN90SRLIKpKXD6tR1W7dTGuCFzbQpcEcbuusB+gr+lUeDekOib9raex4UbDhHAd3+ycgjQqWaTsJO3hIfuUSccI1Qv042p7vIBcDaJo0v+ql9q6Nd7lDha+HzacB29xMdEsPHMB9mdNdZa2zXDXlursTPvE3P/jPAm97qex4ULgmSJoiRecW7gfLtQdTwc8kWOI4NQuZ5KIFUFbMgHqxhhO+BruJCxMpHnqe06GMnn04ZbzpLVaXD+/Yy1Ok021i2Za1LgioiIsQb7wPMv+uFSU3tez+PClQYuGkEmssCIdZfgEoh47bxtoXA2qkFNi6zCcJ3nEUHQlAJ22074BeRQB6tyazhtuKVZnYCp17/Tz4JT70zariMWzlqXGXvw9v1ijmTseT2PDTcUoD95IMIq/+lbOVeArYde+zVSUenEjCQX5NUQdXWgyNgTHn5JDa5KRL4xvHmohMDZF+6eQfcocEk+6J0GYH/3fU1qqhN7371Sv7ELkHBchKBIvowpnTl0+GXbjz4ft2G3PvSQP2yDxw37Og0bCd3F8OIJw1WRCXlNoNUPlw/+xAo7F5dhs9Z7LmXAAf99x2LYCdPz2HGHCQCFAGj3XzxpuJSo/rkFunzsbVX2ytpuG7acRNauPMvw547jMeyk6XnsuMMFEGdNBr6xKy+eMFwRZw0x3Tz/qx9haxPfcBxq2GuMffQJYFosc43JsBOm53HjDhXADySO4cUThqtDlffZhB758K+x6jkWW4/Nak32tKtj7LETpuex4w4TwBQCwIFv7MKLJw0XmSaiBOYe+sG1Oouhy5aG3TjHTv7gfv99x2HYSdPz2HFjFyDhuC7yRDDYHR/7dZE7ZPddkYB4q7qZPfgx/30fN+zt4PbI6iYCDIcMitUFZyqyZ58HSjkr+UTXNKCEfP6F+QVYlAJsEv/AS1i+eVYzdewE/LTgqjpBxF2+9z+cYcKyd325T1K1wy6w31gF+8HiAinvOT2PGzfaMvLAmJL5XBHy9KwX7umLrSJlXZPpYCF0HS6z3LNXrOPlEzS8coE6lsHLCwtYt0u2VpI519KCSyCB7sGj7z9VZ81Wo7nrPnZAjfoKq9dXvrsApmzVhnBS77tn6lfu6Yv+3VCOypxoJezBufP5yN574eK6ZsucapQcPc3HjJA/fZsOkczJVp4/PhUt/8gcJEjX5e1PacEtr+rQ3rf5m9ys6/XWOCPARqMWW2PsMmMfBxtoKbxEa8/oedy4chNfRbmyg65elAyrwIvfNx/wXdNZvRptCMACuu7Kwy0aLh7PR/jg+D4HZx++L+AfzvgvEbCNtOB2e5zf4k5IpykiyOOiNVarNTrNxie+/9LpgrL39Dxu3DD/A0Gmm12O+CYGHwbo7QFfN4kNQXhqSmRyyaIwqJIgJxhZulRZtVUIi5IvpItESqQF178WxnxaL4tqLbbZY7VVF2uNl9knl8F0NGRkj+h53LhhBI1dgkQ1pwLneyMvTmU5MqE2IlQjQMmEzrkFsqapBXyKNF9qyc9AlyAqJwU2Z/I5gXT604IrEkNu/MfGZXE9Y22Eu2XGTidrrOM3q98GYkq21/Q8blxp2A7VPL2o980mpyPrMJC773b3WHiXFMPQTIcGfOy5A6s0WIOmJpdhaF+7AunB5YPjqz/F/FQL8TkizF+PEbc23dz4mXkADmQm9r57pH7DHGsqdlyVRkNyeMsKWwaijj4Dwp5CaFZzwyuybSfr36MTPk9sDLXweTHcZEBmsGUlHRcUCuA/su5xf3F5XVx23fBHi0aN1a685ACXda/pedy4w7Ni+uFqsnxMITVp3/Jgf/JAPub0nWwR8cIRrp+9LdLNJB6X6AT6d6tVFO+pjd3fSh9Kp1qfVn1H1VeKknY9Two3dgGSihsYNh8kf2eM6a+vm+qn2Mp/qogVL2Ws77vX6jd2AZKKK3tscOk/szvZA3EbdEDtKmt8ZjPqdqZbz48b9i7jBoatKL+7Vq8lyLBZ+yT7L8b0uN93r9Vv7AIkFVf22Kc/yzqMJcYZaTXOVRtXPtd9ZyX9en7csHcZVxo2+WCz2nwgMYbNOm221n426G63KanX8+OGvcu4gWHnX9vi3eRKfBszg9RssZW1c2fFDp1I/ZV2PT9u2LuMK3vs59barMpiW78eJN5fn6ux5i8UxHsVrNTreeKGrTkwa2f1aAlca1l5DtYsLizATGSDiP8lVA1FIE5fOlcuQFbXdLnDZItEsZlwiyjpuOrD5ozI21x6KztTZ8kx7Hqj2ajzf2YAN+0pcdY53XqeFK5Mu6rnPOjlwjuvM4pIM7W8HPA3Mc7daxQiAJnjqybWAv6CNj81pYTLUNOV9WJO0yT/RkNk6A5fIOm4xdxSbt/GNHhHh51jjUaSDLspDPt1D4HjmQpQ0q7nSeGG5YmTfyB/f8BAulYu76uEB74BOH5gniwEfEr12ePRMcCyDnk2dAP+/FIl0g4BuHEZmqaT87YCJxPXAsolq1ic/bw4+1StJcbHFobd4P9c+cINRTjvzaddzxPDDffgRXBaJRJb9jA5iyJ8AxRAzpMXaZoYqsCKnMrKF6i7mZN7+NnNjJKPlu/ZWENQlp94XGHbdP73GFvhjm1yFkUaTdb0Lzp4e847i85upl7PE8MNTbx78KBHZg4vUhq5QkEcuF8gcgigmloCoO9x1SFQtrxlLH5lhG2PlpArntrSopOJa4kLItC+32etdpwxvFtInAsXdl1/54tuwxDTtOt5criydPEDbNkybFfXIrfeVETgg+1Ip143HQLyVniVxRTIOrmwZaknlLwVdfpVWIReGHSZdFwxxcl7q38g7LrZSM4GTcO/o0xEPfzhvblNh6Zdz5PCHSS5lFLWkWarkVUa8Y+L5RUKmqv2XbfK6UQpZGNT5e+TCZ1+SyNEg5vD8j8kDhcUlAw4lr1LhO82x3vd3XWRH8jDDbvFPmSvby7badfzxHADnyQvRgclzP9AbKjpXj5gKxVRHpWBDyKM3uOzVXn3B5+YYlgsSV+JmH6RYeSDbhK1mM0F/KTjilBocOh3Ge8i681uYFgiyDfsZpO12V1fXNfuyKZdz5PCDduFiKIEMhYSXSPdqwE0XQ35SOsLbVAAhVr0GjPfu5LP81ejJkHyYsqk42ZApqAcfXLcdjyUmqz2pcWcpg32jWnT88RwYxcgsbgWUMrvjtt+h1Ot/ZyZObEaMFCNqdPz44a9u7h5Pvd23xS3+Q6leqva/t45iB437McNezRcEfn84ZOJmTQO0gqrsidCE6m4b785fXp+3LB3GVdsb/1qI7GG3WIX2Kdvv4OKlVslInbq9Py4Ye8urn/X4NuSa9iseUud/co92uOG/bhhj4Q7JTKb/VFylvm2UPMcY588hoiqgOjyVtr0PDHc2AVIKO4UmAbWM1hiDfsk/9t5q1skRPEXddOq54nhhiRSs+4/LLNiYpsu33E6uhUHrJybC/i0pOZAdN6Snz60WjS1gL96qHK666h26cgRz5lHqhfwk47LlVcBr0jMadWtxC37cvOHzpOHNgrASK+eJ4ar9che1ZFnLu4Pfm+ATCFz8epiwN9c9eCh45GDrwCcP0pKNOAjdelSJSJQ/vRhPKstSP5VI+8nzUwLrleenb34pmZijqtuoRXGzrHvsazMEixDN5tWPU8KF+g9moFQy56YBX10wHw44G+Wya2OFUbhiJL0zRIK+K67aPU9e3z1PkxxLuDTLlcKmHTcrKvRq0+N8QaDR6Favd7ssKcYwMJnsW6qadXzpHAB7ZFj6qbpOvL5fIE3BKtoB3zTI9qqFUn3mi8AajpOwEeaJxpj6B1Vcpsmgl7A52NEIZ8BMgFu0nE5Fx79dbaLl6aPRiKpcIO9a6lgQQ0jiNKq50nhguCKAzOr4ZyqTlk9Eo0gY+lqwCYa1ctGBoT8Aig5KCuvWBDujUgmHfCtIoGaLa9QyIkj5UrITzquuJn+6NMSlLNvgMT5PlatfrwATKiVSgtp1fOkcMPYNNdEfG4KQlLARiY8wI1NB5f8tNw9Lm9kJVPHAR+alDe3jGxZBUOHOvTKAd/ZsPiwGTa8pOMijZj3/lpyV0Ua3LCb5+pPFGc+qVnU06rnSeHKD6brCYc8vBLBvzTBlAqjxKQzAESuVOCOOlVJwF8gm37BIZ+o1CU04JeFL6QoVsBPOm5Zxd6NT0quYfNZba3Zqn7aApuYd4ra9b7vXqtfebUBzHoUOjg0fT48VACV64eejc2sOBnUIzFmQHGTQrC+WHa7MkvSEMTh+qNj+BME+XzicV0XPvTlGG8weBSq+QFra819wJ4n1MTX/b57rH7lB4TEOncksYn/ZVUunGNd02l0Xd0CBlRDAESgFVk354RVTHCocP5sIfJ80nFNCNENP5BYu5Y39r5Z8RDO5sj1vu9eq9/tC2ByflQA7tlw0JC/RQCEuQiydF1cHxL5QtJxSZFqD31vgqJ4Bygw7N+ulClvg2Za9Twp3BEE4Gj9G6EZTMIhEFPYv97IBUDhRimChj993cGLx4Nrr9LsvQsrcdvvUAoM+8cL667pbMLrfd+9Vr/bFwB186SNIkC0ZSHLT+cz+ovHhKtCvTR38XJi99QDw/6Ise6vjqVVz5PC3bYAXAJiZiJjhj9kmCGfmH0CKNwX4nPbUIIdvnhcuM7Z2ZIO7krszmNg2LWLy7Zj67m06nlSuNsXQDU1Jx8RYMDJh6puPJIAOx2q4sLN3V7WbOVpiT2PLQ1bvQPDSIedNj1PCnf7AhDdzU1FDhRyl563KxqwdbHw0ufkQ9Eape+308lFXLjwBNSx9azk7jz2aO2HboTU1Mj1vu9eq9/tVzRx3FwlFEBcyKdjpAV8Bzr+iffwcXHawtQlf4fLQXHhUqzNL4PSubgNeBgFht189w2IHqXF633fvVa/UThxkKQcMHREkO71SQOUnCoBKcE5cSt2wOcfHBxpSUjtkwZs6DCnEmpuAU4srgWmzWPMv+KxmdzDUM0Xc5u4MZS7AlVHTH3To+cJ4UoAxb8eVWbc4Y6MiHTYIoDMyKNijz8gWxoXRueeT3hj6oAAwLOpqyKZsSfpuH6ogb7vKyIJVK2T3B1I9vmCSC4dTrCckmYjmBo9TwpXkiEiQo2C3IOnKsZU68+iZjjhHj6XUI9mmucPmwQjM+BvEcAsYehhWX7icUUWZrr0x6xRZ7V2gg27dhpMH78UGgosIejIM0TJ1/OEcMPCuwJIAAQhHPyaoUu2irBq5vu4FiJYPHNtASzkml6OuIMCJBbX4sNhSVdvYVWxS5PY9ezOyrG+O1gKUHN0h2xJq5tYPU8It6983j7kkOGYvP/XQV/jMCCRWS23CpDhAiA0fMhwqY3RtdK9JhU3AxC5+guM3cWSG0jDLlR/NWNtRA7iexpxuZ+aIj1PCjdSkQDIhX6d9+5cgL4xw0Chk75VgII4koWHOfmWQyAfL/RrOPmJxM0Iv9Ujc798ip1h7HLc9vsI9DoRdxVOtjwVaoSkRs8TxO2RvxwIpOVjfxW8jw8slcrbmvgX9EIfu4AwxGRYy6pAnDMhJVtaVkJxM2LWYxKv+GLWadaTexiqtcJaP3NfaCd5E+d0qGmjvu+eq9+ADHH7kmGhwFfh3X+/L+QLoDkBXzj51xCADvOFgGOrGsL6oC+UWFzeqRR4Fdzzsgsi2iCxGzWsVm+yu777Pim2V6IUYjTy++6x+o2UIEazKekL4SK2czMhW3A5RJihmxDTiIS9c/mpDU0asKELxCAULkMhru8s0be0rITjHjvxXHa53pEbInHb8SC1a6LZrZ38Af5mB0SNl4nuQdvc6fvumfqNQCgFYKwGX1jAGp11Rc7RCFFX3iWi8j/9W51A9zDJBvycBqInAMC0aiLTDi9VTQvu5sUfa7ALye2w/evxatV2+09+5DA3kamMC/W71fWtrkjC9Tx23OBqA9H9Z8CU3KP3ypgWNVCQVx/keePBUDrp0NFtUJBscW2Z7VDHkZMElRdXsDYk3yElU3dk+WnBPTFt/wFrJdgVERf11sU9Ym994x3CILwFvazb5k7fd6/UrzTwbt9v0CBVlKZmsyjasWdEXLwKQ34vyjIkF5Zg+Dwc4KqlBUQwGUxFlXRc7M1/9cG4jfeRqHsDNbuwwtgbbsqAi0sOhfS+LSm/kq7nceOG+RqUSoU3HhTkZVB1CE2zIPmFKe7XaCoM+I6ObGBkCpLPIRzTcWW+iNmCImI0A36FOOWyjYsBPy24jnqH+tlaK7EbNH53zYmdPMnYH/zpfkAXchiLLDXp0vPYcftpSpWZkHRCNS90hfwo9xyRGXwoVXPR9UaORkpYPk43l6cBiC5XQs3WKZH8tOASgo69/oNsJamTx5pwsnmv3WbVz6yxT/3ZxiwiyNFSp+ex4wYWLo5GGIXCXGD5mLrIXKoYAV8BG4VLczoJ+C517j0SzdCj7D+IclpZtsylI5m+8kX8UnlVG2xZScfNIXjH/H9dYY0exW3Ig9QM7scTktUa7I/MjHt22XHSpudx4wLYo7KOdS136Yh0vrn7ndl/SA/4tLw5ezWfidw1XrDKRboQ8F19KZMB+0N+YclDlOKAv77Pv4VVzgrSgsvHwtNg6muJNWxBPdv2x5OPfk1k4S2kTs/jxgXS63aprZ3oixfm4wCVTjvRSbbvuLjFHSdxO3uPsL/8GJJh8PJsqgZ8FRiKETmukxbc7hfwi9laW3SKyd2C7NEaew/IdxeChej5tOh53LgyKaUqFkxKA1NOhcghguiqa/YLoEANyUnBoADAj03D4aQBKH0CpAjXmgbGh+9i7K4qayWyx+6jtVP/rWCBA+Jt+DifJj2PFVcmyuYF6I5m9sGLEJ6AT3SsOZFzsqIssR8UeX5AAIiQipHk+wKEm6VpwRWTG3Er/Xe+kBtNfS2xO5CSbmFrP9J7X3HRQVr0PG5cmSgb85al22Hb6XpDGAd84iDqDQigUywTjm8ZMkT0mapKPvIFCOe7acEVh6GAxUF/6RbWafKRPuFU5z9vefl5PjcQGXuN1Oh53LjA7ZFYAkdu2LIUQ/EFCPjDBAj4gwIoPQEC/qAA6cEtTImczeDY77yAtarJ3YHsUYu1muyHdUskfxR9dnr0PF5c4ATEHW6k6WEBSlcAyR4yZAT8rUOGCSFGUPIHhowU4VbETRIXwfE3rrALcdvto1On0V5hfy5q2l9pS5Gex4orZ5E6JapO9S1DRjh7vbaTP2z2yn0hjNVwdjvo5KcF1/AjDqbEmYYjrz3FLifex677YfV/fFoRK5XASIuex40LglNRyCbYoTAaPuc7+QF/2LKMPFa1RQCxW6TKkJ7BZZnU4G4Iv84vwfL+4iO1eo/itd7htFIT8T4nV2ZP+0t+mdToecy48oNXslc3c3akgAr/OpTHCU1S1GikAAMoU2KcCPjU04SrE+7RZyAfY4iMbLD5cFEA4ZiRNlxOU/cc/MnP1xq+Ubdr/sJfs7vzx/9Nyh2+QcN74hHheG6kTs/jwpUfoEqcGW8hE+zgWFyAPIDyALi2oKoERHeIeMtSXXnu1/ZcHzzgZzIYmg6UAub8G3IkW0kbbkEBG07RfPMHT7H6hVPd4N56ZCqZFOck2CF98GMGd6Dyj9n6lS8u7sAhi2b4Dd/+ZySAp0OPgmkpYMbKA+qYMpZNX7a5OzqVDx+nC3RTNiys5Q9wH18BgwKkBVcMkS5eOpr9rx9l7Bw37JrYhGzcGTUp3n/HvoEj5wCfnBNjfur0PC5cebkSyamkpC3ILl+xCqfzwJW3M9mm5kflRKmkajIWTVNFvE84O60ABOeQJzO3+FmtMiE/dbi8CEjUzQPmr3z9FDdt3kHXq32edsIM+8H3i8sTN1Kn5zHhhk6+yf0aqg9AEOnk20WVblohgsV/CMQy1sxBIo5yOvKsegLO4DB11RQfb8J7KlOHW8mLhaZV5wmLp50/+/XLPQ+7ET070kyCQ9KQp7V+9kYxe0ybnseFKy0cUdtx4PLp4AvianewMSsz8CyYTq7cl/ChcGDVpDKFD3Hh6YIViS8+Pa+ZtJwL+OvneWOLipc6XHAxp5rZRfe+4v3qT3xaZKkUHXZ08thsxD+FDOz6Mjvz+oJSKaRPz+PBjfxKAfmN03MBo6xrxC7mowsx+RsdJxwisFk+Hl00sDbmioiUAj70g+gN2dT2ry6bDkWlrcDpwKULGE1bIBPUwV++7C3cimp1kf2ANeu1NT6RrLdqiXFFuDh/lbtfN3f6vumv34C6hQV8lX9zleLIjtB0lCtyrGkURHeM+NxqgRRlDjWoASUfXYG0F1xoe1vyXaQFV7dN3BswxT2wFjiN//vP3sJYVaQ/aNaqF7hTUutUk7O+fa7TfPP8jL7T9019/UoSGXuAIvMQc+8Fq2jgG5oeXiyJEe1LVKUAVaeR+/lQn3S8ZCwygOOQm25c/vC6+er3v+8DH715rdtN3/UbHVaP3RUJqFFvsM8uQTyu901d/Q4KEFj+MAFC/oAAvN2ZFIYtb4gAW1pWWnEz59H6Q4fmF3ParX/9p7/1K7/8u4dX/6a6lhjDrtVq7NfVVXNs75u2+h0UAEu6tgAhf4sABGphwp9BAQwkBIByKzT9uHl7oVQqlcvl1eXl2TK8Cm76BkvOzR6Neoed/PjVLT1n+vS8Q9wxCkAfWQB1Ui8eC+5+BRzM6U5RpRpFTnnVPr349mbrlrjtOaRGu8ZedhsZ1/umrn4HBZCnqoYIEPKvLUDA3zJk9FqWPH2Vety8SmnpxKqHqJtdmDkx/fG7EtRhs2adddjn1/XxvW/K6ndQgB07+b0hY5iTD4QvRCcwuYgJlz+OVL28rFEVOo6J1p0vs84VdnPcBh1Qu8WqjdatS2nX845xBwWQQZRDBAj513byA/4WAUxETIrl82nH3QCgaC/YSKMEmbqJDr/tXexUggLHWnVWZe23HU67nneMOyhAkFFnmAAh/9rLMgF/iwA6JKamki0Ze9KKCwomNFU3ZxLbpkTd96R6i7G12DdoIrTC7vrBLYadOj3vFFdWEzAKwDKCfCPQgdjbhFF+xgAHMQr4WjmL/H4rpHLWgzIRilrypQrP0WoEnoVFmehkr+DmaI4sO+qiLTzsBPXYXJZ2s/GUdQV0DSHteh4VV1LGz7ENVgPLn5khevTsigLyhgJLZsDXigQpkTTHBcvSFxCSSdZydj4fzQyoLKiL1LXtwZaVdlw7S7OqS6/++xV2OVF3i9VYrc5+2DPG/L5pqd+QuqmDZCKSVWfeM81CpAxxFHYmYJsqJIOL4bqtyqSX5qwnLm+3wuMtmj1Xxqq+xRdKO66HoOqaD/0JE2siyfFE6ow1W+yVRGaKTrueR8WVNCUa1sZmsINDz9o32Xro7CiiqFUiL5L0CBWekmxahpEn2c1wB+l2rdBfPro9a7vu1osmU46Lc65JXSd3iom0I8nJgFbjslRZywaWn19ESbueR8aVkQkVMQBkjgYL3brmkOLc6UIk8GH/gXUkr0zQSvrilBINjLDuKFM0E/BnD1ncewpjdjYO6Uj3ijIkaK/ganBT1/Xln+ZuSL2ZoPsg675n1JwBRoZ3cVbq9TwybtCFI1wsZvXZi7KlcK+/cn4+J4cI5JhLkYbC21x+HhOZvjWbm4ueBgeFS8uOjV074B/MgEK+Eh6s3Tu4/vG1rzY7wg1JjpPdYBdYvdH43LyOTQciPf16Hg1X5mGgBOlZVY8GVXKCbsA3dUxoJm8FfFESVrET8F1HZIcoRO4WMYmdM+WWUrZ3xjbg7xVc4Ad9FJ5Ra9a7+XwTQk22IrLCv23R1FRMKUy7nkfFBcGOjQOpoztuZIlwA1QAlDs6GiY5G0RDHfLAdrDkw1wJKJEoeaXimZpJJd8BhQqwDNmy9gourwnxpU/XhSeSIMP2R49W4xeP5VRkckNJu55HxZUxYiakyFb7lgHFZFYeLsEmNUn/8RNAQy6GBA7c+4Ew/5GHX0RSlEzk+b2Cyx1YQ8lMrcRtxltJuEaNr10V23IqRGnX86i4Yd4JXoIWgwBpx+V9dgbkDyYnciagZoMPIPW/vapTRAhMvZ5HxQ2jiaHYcu9LNrUrAqQd1xAZEQsvj9uMt1Kjweqtxncd1QlS+Z+063lUXPkBI6ITjPp36XdBgNTjCsNWXhK3GW8l7vI3OuyZV3UChWGnXs8j4kpne5gAkj9EAOnkDxFA8gcE2DO4fnLmZyZnnS+gOvdEOuy3j5ncD1GHG3Zq9DwibggxZMiYtACpxzXELtn/SM6WY4+4i11jbfb6O6AILxnuiqRGzyPiyg/DnPxJC5B6XEVs6z09OYdEesQF6rB2vTSHKNfF8MljavQ8Iq78MGxZZtICpB1X8X+eHrcdb6GmOJTV7iyuY2pCZKZez6PiguC4XxY7ZFWPHKzyM/mXsDzg7XJvKVp+RtzQBMO7jYv+yRaZw0cxqF0SO149wn5WtpD2Dq7487Jm4m46qFVZi3XO5xxERKL09Ot5NNxIy4IazEbyXlogP2W4YSyaqiMTRPKkWSK3PIzEqml9p8OBokMEqRbwaVc62bT2Cm539/F1ibsmr9locBf7o5miZ4oOzky7nkfFldmlHN6uUSkSqua3kZxMHeXp6iaJZMUU9yN4qmSrCDsGUCJHCjdwqYSRPI5ICqBv43Sv4FpiWUR5Yz1phi12jDqtr4iFNZXsAT2PiivX/XSMoaMvX5KHTRRgVO7xZL4HsXCzmI8ccwXK8XWduAHfxcsHrIwRufP6ahlG1iMPF4xCxQDysMtewTX89b6fvpA0w26IQIP6y4zAWU27nkfFlQ+IRIsZpbAviB3jyObqVavvVNb0LLUDvkv09eNKVKDCHFahKWPXvCMV8VDAv7jsiCNZMvZtr+AWV2HRfOhjiXNFRAbYJvvOG4zeIJ12PY+KGw4RwHd/snII0Klmk7CTF4EYwKNOOEaoXgYYsgDOdjaJo0v+ql9q6Nd7lDha+PxewUXYNUv33tpOnGHX6zXW/svFvaLnUXGB0SNREm9dbuB8u1B1PBzyuSdjGIR6AZ9Aqvp3l0k+WMUI2wFfw4WMuKlZ8qntOhjJ5/cKLq8m/b51812JM+waa7QeRN5e0fOouNLARSPIRBYYse4SXIpc/iHaFgpnoxrUtMgqjEhVjwiffUsBu20n/AJyqINVGvD3Ci6fxyw/vLj0wqQZdqPG2MpvHNbH/b6pqd9QgP7kgXwyzX/6Vs4VYOuh136NVFQ6MSPJBXmriro6UGTsCQ+/7BVcexlBFS29R2Q7qItt7KSQSJD9nauze0XPI+PGLkDKcTWTT1zUq19gtQZr+DdkJIM6TVZrvXq2uFf0PDLuUAGQuNgphhdPG66GkaMteSc74n6lVmJckSprtv/nIbQlAXtq9Twq7jABoBAA7f6Lpw3XoR7xtOJtX2+ycyxJV6y3Wuf+25GsPe73TU39DhdAnDUZ+MauvHi6cHW1bDsqvuP9jF1JUPYFcbbvysvntKGJ39Om55FxhwrgBxLH8OIpw1XVXMlB0COvZBf4+J+Y46t88HjVQdPcM3oeGXeYAKYQAA58YxdePHW4KrR1UkTHvrzWqifgAtOA6mzltXOqPtTHTp2eR8WNXYCU4+oqIWZpFu17/4PiAHTc9iyp0fi7h1cdfUsC9rTqeXTcHlndRIDhkEGxuuBMRfbs80ApZyWf6JoGlJDPvzC/AItSgE3iH3gJyzfPaqaOnYC/V3CD87+HH373Crur2Yl9o6YursITDv/fPrScXad7Rc+j4kZbRh4YUzKfK0KenvXCPX2xVaSsazIdLISuw2WWe/aKdbx8goZXLlDHMnh5YQHrdsnWSjLn2l7BDQ7flNb/+mZ2V2zmLKnZqda5XbeaH/nVnKs+Qdsreh4ZV+7pi/7dUI7KnGgl7MG58/nI3nvh4rpmy5xqlBw9LQ5tSv70bTpEMidbef74VLT8I3OQIF2Xtz/tNVznyP2/4AetJINq7HkPLc7um7l3r+l5u7hyE19FubKDrl6UDKvAi983H/Bd01m9Gm0IwAK67srDLRouHs9H+OD4PgdnH74v4B/O+C8RsI29hqucP//3HdaKPVpd3OzOGrX6W7LKhjJd2XN63i5umP+BINPNLkd8E4MPA/T2gK+bxIYgPDWV4d/MojCokiAnGFm6VFm1VQiLki+ki0RK7Dlc67YTf5CEix65Zbe4L/LkDS7afpDZc3reJm4YQWOXIFHNqcD53siLU1mOTKiNCNUIUDKhc26BrGlqAZ8i350zJD8DXYKonBSILTA+J5BO/17BtXqUUVbhx1/J4g8Ra/h5Vq8cFdGYU8DaK3oeFVcatkM1Ty/qfbPJ6cg6DOTue/fehx4phqGZDg342HMHVmmwBk1NLsPQvnYF9hyulcl6t3157VyjR3HZde1cvXOBfePPxAn9zB7U83ZxwxxrKnZclUZDcrhiwpaBqKPPgDCkRyhNc8Mrsm0n69+jEz5PbAy18Hkx3GRAZrBlpR03VOkJfO9f/kMjbsNmVVZbYT93Yy9jdGGv6HlU3OFZMf1wNVk+ppCatG95sD95IB9z+k62iHjhCNfP3hY5Pp54XHFpmz0KrqETZ993XG60GqwW4yG/Dlu7zF76/anR86RwYxcgabhyUmISXeu33EfEzVg5pC5l/1BsPq5VuX3FQdy3b9Qvs1P/1/3Gdt93r9Zv7AIkDVcGjUL+M4JhW4quluCy/uyqf99jw7eyXey45aT1AmOfnA9TbSRVz5PGjV2ApOGG0dK4P/nto+JqNqX63KtfwdZa3fsed3VpJGhGtXPsN/46EsuaVD1PGjd2AZKGG7gi3LKJY0WLfjRcW8vpOHf4Hz/FVs7s/mmoYHios3f9rw2wP/F6njRu7AIkDTfosDGBNJeJ5jt8ZFwFIKJjqsJ7//dHd7mz9qnRaHRB1/7TQ1HBkqrnSePGLkDScKVhU9NezUQffTRc3svbNj1x8Oj3fpDVRGyvMLddC+5t1USUfLPZ+aYqRLW2+757tX5jFyBpuE6PkKa7s4Xo0v+j4OY1XccQ5dzFe3/5nexku8Utu9HaNZekXa36tv3pN3OxlMq233ev1q/8oDkwa2f1aAm81WflOVizuLAAM5ENIv6XUDUUgTh96Vy5AFld1HWPbKHrTGgnceOWsFqiJY//ptDVi7HBS5l1qMjMTFSxrXB2Pu8LI9QubkoGWVXNPRquetPCHYt//Aom9v/EHFKE9zYnvF3juyDnLrOTjJ18FpgG4HS4WRe3nuPClWlX9ZwHvVx453VGEWmmlpcD/ibGuXuNQgQgc3zVxFrAX9Dmp6aUUKHTlfViTtMk/0YxPEZ2TuPGzRU9M6cX7/FVksnnRQHWPauu5zk6VKlGTIKOHp8q9O7jEPlAwWzR3Xw03Nwx86Y7rDd/qMXqly+3+SRSJK5hjYme+vMN+xRvRq23vG9f1waMwfd9rNVvWJ44+Qfy9wcMpGvl8r5KeOAbgOMH5slCwKdUnz0eHQMs65BnQzfgzy9VIu0QgBuXoWk6OW8rcEy44uoYkL9B450DpdjEalYtHwIZP+xI3Ctj5Av5h1bL3Nl2xXEyV6Pz58Gj41q+yMY973hn77qMrulN3Nc+J3KaXP7thxSMcgtl1U6MnuPCDffgRXBaJRJb9jA5iyJ8cZ9hzjPlEIKhCqzIqax8gbqbObmHn93MiG4ufN6zsYagLD92XCvDi56COiIqdHST8n7g1vsiGuOu4FT5prMaQaaum8hENrai5Q7BFfkSN8QJ4rd9oCM8bN+id+PkSKNabzzvmDjzmVswZXrp+PUcG25Yk6L1BIavmjm8SGnkCgUR4rNA5BBANbUU7cD4w6pDoGx5y1j8ygjbHi0hVzy1pUXHhdvlEhVBqNpZCrGemxULwMbU9PHpDWVqincHxy7NLZYdKC7zgYQq1sb0NnD9qBBw75v/psbataZ/a0ZzYvmzZYHvYuy9B618BVFoqkTf+r6PyfoVpYsfYMuWYbt6JN0KqIjZk+1Ip143HQLylvTajSmQdXJhy1JPKHkr6vSrsAi9MOgybtyMMgUKhsI7ZKhqVF+enV/cd8y++41/986XvusTD37iMw8++K43/dPXv/meb91N1g8tlXXekeDoRuQwXEuMslxooM/qz7yLrTHWEvPH6qQMu1b3i2yusPpTygqYLhx07WWkw8H3fazV7yDJpZSyjjQ7cljC/+RiOcZprtq/4wzAiVLIxqbK3ycTOv2WRogGN4flf9h1XKW7SOToWKMwx90+5wtfemmNT/V6plfrRi+u1VpX3vTZ59+0vnT1jquGVclvA1dUSv44dtbL3/4vrFMVnXajNinD5uXXG4167Qx7Wrki4Iua64kVtoToOTbcwCfJi9FBCfM/EBtqupcP2EpFlEdl4IMIo/f4bFXe/cEnphgWS9JXIqZfZBj5oJtELWblclncuBmwwbVimI5WKt57LPu7f/KpTpOdjHjDrZafxkDYd7O+duWnvvqtMtdm4dFw/QA80ado7vrBefevP3hzvXHu1NrEXJFza+1WrVVts2ffZHH8gpL1uGcVnmeOW89x4YbtQkRRAhkLia6R7tUAmq6GfKT1hTYogEIteo2Z713J5/mrUZMgeRZjt3FV7JctB0GxW24pQHvYe2jfw+94xZ3DAgQaPWOsrnz6s/+45AMbme7iNtZLUCp8ENcgpKTBO47Rn3zxCmt0OjXukLROnht71so2L7Gz1mSfepHwOzdi13NicGMXYJdwIVIJUbHMQZQRGzIbmdn9V2//ixeKHfAhhh3tZc8848m/m/FTXogbKKwZM+c9TMRmjrjTeQAXQO43EocuzZ/952dfabRY9cJao9kYu2E32mtV3m9/42zeX5CJXc+JwY1dgF3CxeIUCA5xRadbMcC9b/7Dp3LzqHYeKaRLGPe5U3eKlbuTH/riPUbF96MVhBag2GjA4kzgIG6GQGRiuIBm9x1Gv/KUMw+0WKPVHPeNB02RvLh5M3vn/+GIUyLRTNx6Tgxu7ALsEq5GMDSRGpmPb3Dce3/pwZP16p1nOo/oA4vAFP6f9skLnWbz8tP++7oldq0BhGVnEwVtZtAV0cQ0qEjo2W9rc7ctkn9+ymXWmUA6nQ5rrLDnvry7EiMkSJqBPW7Yk8X1u2tugsHvRTqhwvIzeTcqrK195tEM+87L3V3xCzVW/8oXl6Z5D4kWspoZHskZdEVUV1zUtuohFemODsDyS/7lrZcvj9uw69VzzQ+8SPgg/oGW2PWcGNzYBdglXB2qmui15XPcCP70A/4qSOscn9M9imE3WbPVblfrjXZt5Rxj//IxAKY9WBbb8dxzF7eHbTFsEyPVLJHSzKbGG1RFeD8bX/zRcRm0FLXNfvRhkBc3XytTGVCIW8+JwY1dgN2aPEKxJkKkK7IfXPyLFutU693rNYYmugl+J1pAw48+r4mrQdm/fBg8tMDnjMN6bAvrCBFdU5FXni07aAoc/qG/OlMd23Jf9/g1d/rZr2n+qnxXJ0rcek4MbuwC7BKurTrFHHJn5HMv//IZtrbiG0n9EaZ0wXIfa3RDB3zTFHvkn/jzu48u34ccnXvu1Ha39Ni6Q+wS0ubsuzfXD5fve98zzjXXOo+ENBrx4aObaP7HNZDpblgYwMg/bthbSaRm3X9YZsXENl2+43REgAKwcm4u4NOSmvNhA8pPH1otmlrAXz1UOQ0ikVVHjnjOPFK9gL9buPfMFbFZJMTJmTPfVheLoDCVF7veP/8Uxi432I570DZjr3qjemhdNXOe6qJZfL/FZ6N5USf+QYb8IXyWesS5e/HAjQvP/8q5eqvaajR3HlETjCh10b7EKHOyJXI8rL3h7ox1IHJMNS49Jw5X65G9qiPPXNwf/N4AmULm4tXFgL+56sFDxyMHXwE4f5SUaMBH6tKlSkSg/OnDeFZbkPyrRt5PmrmLuLbN/zkchEkd4PrIK+Bubf7qDafVX3qlb2K1Ha8r124+yTpPzIKpTF7MQyvg0mJxWfu2WqKqZlN74Y5L4nXzvAs9+sWvX+bfr7artXptDOeyubtfb7KbGbuzyl76tYJyFWllF8eo50TiAr1HMxBq2ROzoI8OmA8H/M0yudWxwigcUZK+WUIB33UXrb5nj6/ehynOBXzaO7EfsCeNy10ECE3dmcn4mBviHz5fPH/xnqXs7f/nHf/AGmst1tr5+hs3r1ta7BXf62OKetnQbyKOikzH0R3PQQsFUBAjw/1//1e8c68+4J/xG8sGDUcWzvU5XuzNv8/nsNRFRdeJS89JxQXBVROOqZum68jn8wURF1W0A77pEW3ViqR7zRcA5bUY8JHmicYYekeV3KaJoBfw+RhRyGfCRC6Txu3doUEQmDru78bw3nqKN/0vfOeXPvSqj5xhV7iJNK7D5a2z5jnuodf/YoG3loo4Tr98VtMd7vG5rsY9vjkwxX3ee+7+hyusfuZUz56b1x8k1nX5RQOpsVe9SCynL1MX2mpcek4qLgiuODCzGs6p6lSQFtefaVu6GrCJRvUy9x5DfgGUHJSVVywI98YCId8qEsi9gYCfU7prrQF/0rgIivgAiPxouw0/qsC490VPf8ED1dYaY/4Vum3uYu84FVn7Cn/0zCnGvv6ijD8WTHlm7sSmODDKoflrFTKgYD/zHGu2RetZq3Oqta5jiAgNW1g290Y6v/bm4xkrb+EFsjjrxKXnpOKGsWmuifjcNNLnK2AjEx7gxqaDS35a7h6XN7KSqct0BdCkvLllZMsqGDrUoVcO+M6Gxb3dsOFNGpf4GzIqsfNW18s+fvt3X/Z3tBttcRiuXl/rdENtd0bcWT51J/dz2+ylv3SDOHZcQGTZLDoiHgdS157nM8mPv7P7XeH11MVBkVp9xz12uBwp0l5y/Nq/E+sDXC+8eyPZbFx6Tiqu/GC6nnDIwysR/EsTTBmJQYlJxVpZeKUCd9SpSgL+Atn0Cw75RKUuoQG/3I2rsgL+pHER5s4IwWhJLFUA46G3v9R3H2pVcdC62es4azvPjiAidEXX2Wmyzv9YEsdVvRNEzZ2gBOp84q9TcPSJfmCY+FLrOpZfAryAmuLIeH2FvUTMWUX8tk3sE3A9Lj0nFVdebQCzHoVOJEiEDw8VQOX6oWdjMyuWFXokxgwoblII1hfLbldmSRqCOFx/dAx/giCfnzSuZ6qappqeyrvTqfIvnnug0eDTLbHc1uweseY993VZmm+w4lhTtXHh/34RfzNHz53F3MnGqq0VDx35/g812al2s2f/fgDD9XjYgV1f9hfST7712xdBoWAJlVLkINOOS89JxZUfEBLr3JHEJv6XVblwjnWN90IRtgUMqIYAiEAruj8BAFYxCXPhOfzZQuT5yeHy33E3RNdL2eIqXUBTIPe8F4SGcV3GfA1q+8dH/umnwQFHRSUC0SrZ1Fdz86/7gB+iPka8assfAepiS/9fI2N7XHpONu72BTA5PyoA92w4aMjfamC4e7q/S7q4PiTyhUni8h+IzxaXNjeXy2D+qz+6xpprkzLstZro/dmV11TOn9UcrYT4MOndeN8T221/P2as+USa/rJ7i33mf12cSoKek4w7ggCkP180HwIwMSUCprB/vVEYWLhRiqDhT1938OKj4vLXxtDc1GfxAp5ffNsbVlj9ysrEemzWqjXWVprsLT90cJHSIiph7C09/N6mH1S2tjY2GLGDzv/TOLfGPvXx/dE957j0nGzc7QswmC96GwJEWxay/HQ+o7/4yLhdw86pxEVHzz6PD9+8U2VrE0t/UPOPUd3JHnydeUgjcBPOHnz1vzXZFd5XtzpjDZhpVBvNteqF9w6kGIhLz8nG3bYAXAJiZiJjhj9kmCGfmH0CKNzAVBKRYIcvPiqu/+LcFck5M+b9H/65xgPclDudyeX14D52U8xC1xrVL3nH7BMYzt39hia7zH/VaYusCGMiIfi5Gh98/p8cKOwvRDIpxaPnpONuXwDV1Jx8RIABJx+quvFIAux0qBoVFwAoJo9YpctHv/VP3Boawqwn12OL6WF7rdaonmStt5MbtNWjd/P+eqXLYPWx+ditFVHelae9+tilDQCOx67npONuXwCiu7mpyIFC7tLzdkUDti4WXvqcfChao7xhdaeTi1FxFWCaUCW0/O2j932Q3dXx84Q02cR6bBnv1Wix+tOdq0u3freI12Jt8evGGOF8r+aDXwKE7LcAiOQ3iUfPScfdtgCQOG6uEgogLuTTMdICvgMdcUw28rzOLczUJX+Hy0Gj4ipA102V2jOF+/6qXfePwl3PIb5Hp+4Vz7WOv7r3tRsPv1fsSjZPMnFkml33vowksb7CC33lt8oXD/RdtBCTnpOOG4UTvUA5bCkE6V6fNEDJqRKQEpwTt2IHfP7BwZGWhNT+zIAbOuTzOWpuAR4zLoQF0Z/xx57e6IzRsB6VOlXugJz7sT9bYWusPf471UXcZYPPU590EWyuP3SiGLeeE48rART/elSZAIY7MiLSYYsAMiOPij1LpCTtERdGF8F/AX9QAODZ1FWRzNgzKVyii9RDlQx441tZN4/T7tHlJvvMg82VFcbGnw47WK4881v54q16thS3npOOK8kQSTGNgtyDp3wCRrX+eZnhhHv4XEI9mmmeP2wSjMyAv0UAs4Shh2X5k8IlpphZnQer/1N0oLt3eVe73lirtbhNr7S4EY7f9emeE+FzhGcUpzfV2dj1nHTcsPCuABKAj+lw8GuGLtkqwqqZ7+NaiGDxzLUFsJBrejniDgowblwo2qxSAH9UbXLPdxe77GqdYz3Aqqd4zz3WWWOX6r1rweq11x5dL5le3HpOOm5f+dwi5JDhmLz/10Ff4zAgkVkttwqQ4QIgNHzIcKmN0bXSvY4XF1kgb4DNZrPjh5SP28CGUoc1q7wd8eZ0co21xr7DGVx312Gf+cIN5MQjDM27pOfk44Yl8L856eSLOwv1vnhhYKDQSd8qQEEcycLDnHzLIZCPF/o1nPyx4lIvD6bA9L+yRn2FNc6M276GkvBCTtZZrdEUZ2Evj738YK2yeYp9efGY68Wt5xTg9shfDgTS8rG/Ct7HB5ZK5W1N/At6oY9dQBhiMqxlVSDOmZCSLS1rzLiaI3LHZE/xrrqx25NHJu7uErEEK5O5S6l3V/pdP7JPG9pj75aeE48bkCHiTAwLBb4K7/77fSFfAM0J+MLJv4YAdJgvBBxb1RDecoXEuHFVcaJm6reaYq+73ZxA1zmEOqxa6140XRfxCxNxgcSSn8i+8Lp9dKjPuVt6TjpupASxdDgV5nsuYjsXppfxtwQ4RJihmxDTiIS9c/mpDcNM+tAF3STUASFKYZboW1rW9eJagDi2LhVnIgNsbDxpgjsyMVPrHHvhiw6VgvfdNT3HVb87xY1AKAVgrAZfWMAanXXBVN9XqCvvEhHHMfq3OoHuYZIN+DkNRE8AgGlucqYdXqo6BtwAnegUyuDOkij56m/Ga3wTJDEsnPr9RbSLeo6rfq8PN7jaQHT/GTAl9+i9MqZFLbyawk9yhKF00qGj26Ag2eLaMtuhjiMnCSovrmBtSL5DSqbuyPLHhVswLGo6ZSTD8U2joLyc7Tj6POl0RQTsvAFd3W09x1W/O8WVBt7t+w0apIrS1GwWRTv2jIiLV2HI70VZhuTCEgyfhwNctbSACCaDqajGgIspgjTosW0RjvHa3fOtd5vabK3FPvOxe2PQc1z1uyPcMF+DUqnwxoMCA1F1CE2zIPmFKe7XaCoM+I6ObGBkCpLPIRzTcWW+iNmCImI0A36FOOWyjYsB/3pxM35cspUxgAFdFZnBi/EWbRjv3MX1610mPn1s1lp/e9tu6Tmu+r1u3H6akhmFdJ1QzQtdIT/KPUdkBh9K1Vx0vZGjkRKWj9PN5WkAosuVULN1SiR/jLhlSly5zGnyebG1Nrbz/Ymj1p0Ndrn+4qNBQ95FPcdVvzvDDSxc3IRlFApzgeVj6iJzqWIEfAVsFC7N6STgu9S590g0Q4+y/yDKaWXZMpeOZPrKF9l9yqvaYMvaKS7vsRWF99jAmj62XI6s6zoWyI//cq7kUIuxBjuTDXLUTVrPcdXv9eIC2KOyjnUtd+mIdL65+53Zf0gP+LS8OXs1n4ncvV6wykW6EPBdfSmTAftDfmHJ4zM6HPDX9/nXpMhZwfXiio1ZHSKs67PH9isbYQu+uE87Kw5t7FVq1lcajcbvyfedsJ7jqt/rxQXS63aprZ3oixfm4wCVTjvRSbbvuLjFHSdxO3uPsL/8GJJh8PJsqgZ87voqRphUc+e4HFmnqp478W3bwa79bXpI5FgJLTt/cd/yKzt71hdpiSOx7eofdm+n5YPWpPQcV/2OCVcmpVTFgklpYMqpEDlE8FmZa/YLoEANyUnBoADAj03D4aRBVEJEgB3jiuMBVDVRcXHW5C333qMPXbp69ju++q89+p2f/MLnnvCNXd9K3zVqs1qDT41/3M8g6/+ZkJ7jqt8x4cpE2bwA3dHMPngRwhPwiY41J3JOVpQl9oMiz18rqBZJvi9AuFm6Y1zeaD1CoF2y7c1N77aDP//Mf3uqSLkU5A2ptlc+H8Mhkd2iVrO50miyj4rzoP6NpZPSc1z1OyZcmSgb85al22Hb6XpDGAd84iDqDQigU6zK5weHDD/VmCr5yBcgnO/uGFcRk2iCzFmHLl5c/vmvfESs7LVfWe2RyDnZrrILcRvgxKjBLjQZqx0HvjaNiek5rvodEy5weySWwJEbtizFUHwBAv4wAQL+oABKT4CAPyjAjnF7hk1LaG7143/zVpE2REQYBlHojfa5kycvx219E6SWiOmtsllexVO+nUxIz3HV75hwgRMQd7iRpocFKF0BJHvIkBHwtw4ZJhQ50CV/YMjYMW7PFUHlq+Y/f0pEYtXa3SOqPWry0brD7ozR9CZKzU5zTUQzfB/o7kZPTM9x1e+YcOUsUqdE1am+ZcgIZ6/XdvKHzV65L4SxGs5uB538HeP2Jo+lY2e/ea650l2wbtZrMm9IuzmZw9AJoWaL1UWgztt8G8hPTs9x1e+YcIHc2LAJdijMRErwnfyAP2xZRh6r2iKA2C1S5Sm0wWWZHeP2lvuOfO6Td/pZZETmvGiIYU303nvatvkwxZrP86ugMjk9x1W/Y8KVH7ySvbqZsyMFVPjXoTxOaJKiRiMFiBuOxTgR8KmnCVcn3KPPQD7GEBnZYPPhogDCMWOnuFP8M/ZOLJX+rVFvTzIRTsLp3Rn/sjJrUnqOq37HhSs/QJU4M95CJtjBEb1BHkB5AFxbUFUCojtEvGWprswHYXuuDx7wMxkMTQdKAXP+DTmSrewUdzpvAI0Ul977IKs1WW3PLus9Gv0b14O4mWVSeo6rfseFKw1b3IFDFs3wG779z0gAT4ceBdNSwIyVB9QxZSybvmwbGTCVDx+nC3RTNiys5Q9wH18BgwKMiiuGKro8978vMLbmJxd7jNJXLMWwfGVNRs9x1e+4cOXlSiSnkpK2EKantQqn88CVtzPZpuZH5USppGoyFk1TRbxPODutAATnkCdvf/KzWmVC/k5xrQ0wfd++0h/UWL3aHO+FAamif+qtJExKz3HV77hwQyff5H4N1QcgiHTy7aJKN60QQbh3BGIZa+YgEUc5HXlWPQFncJi6SjjH4T2VO8YV3tjM0j836mLCWN29TE9Jo3/xdx3FJVuT0XNc9TsuXGnhiNqOA5dPB18QV7uDjVkZDb1gOrlyX8KHwoFVk8oUPsSFpwtWJL749Lxm0nIu4K+f96fwoXg7xS1sgDvWv878y2lZY/xXb6SE3t293FCZmJ7jqt8x4UZ+pYD8xum5gFHWNWIX89GFmPyNjhMOEdgsH48u4lgbc0VEwuhpP4jekE1t/+qy6VBU2go8Gu6qVipvLP5mXdwXXb+eG0hTTl9fFCfcTDopPcdVv+PDDahbWMBX+TdXKY7sCE1HuSLHmkZB346g4S6QosyhBjWg5KMrkPaCC20PbRFgRFwbl21AmH/FbfsxbNj/72EEbU3XJqXnuOp3bLiS/MNiisxDzL0XrKKBb2h6eLEkRrQvUZUCVJ1G7udD/fvgCsQiAzgOuTvDJQ4tbvzj6LdxTexGg92meqvRarHqjx2EGvYv+pyMnuOq37HhDgoQWP4wAUL+gAC83ZlhgiJ1mABbWtY2ceWL58yD+SePfjHoXjHsesO/WLL5HXNQJcgcu57jqt+x4w4KIBcIhwgQ8rcIQKAWJvwZFMBAQgAot0JHxQ0M26YPU/Ce0Zf59ophV4X3VWONb8+p0MbOlh77evUcV/2OHXeMAtBHFkAdi2FjEy2BT45uEHvHsGviFvgz+qztuKqujVvPcdXv2HEHBZCnqoYIEPKvLUDA3zJk9FqWPH01Im5g2GqOakdePPqG414x7BqrNls19qqDXqmoQZOOW89x1e/YcQcF2LGT3xsyhjn5QPhCdAyTC5rb/9A72ci3F+0dw26L1aB/XdftMnbw5PQcV/2OC3dQABlEOUSAkH9tJz/gbxHARMSkWD4/Km4g+MwB+t53jT533DOGXW92eKtuPX/Z0Rzi2GPXc1z1O3bcQQGCjDrDBAj5116WCfhbBNAhMTWVbMnYs03cwLBvuO+bD7B65zG7KtKsifCgK08o6rZqw5mtFX2deo6rfseOG1ABGAVgGUG+EehA7G3CKD9jgIMYBXytnOUQG9EiylkPykQoasmXKjxHqxF4FhZlopNRcdfPksXsidml23/Gvyl09C57TZwsqfIn18QBk1b3CshmM3UGL441tp666kCo63wqPW49x1W/48aV5IfyW2A1sPyZGaJHz64oIG8osGQGfK1IkBJJc1ywLH2Bz+0Cfs7O56OZAZUFdZG6tj3YsraLezar2uTo0u3PucDWLtebI5/DbvjzzWpH/KfF/xXXgaYxTkEcI2iufdeNRNMI4eoct57jqt9x44Zk+F28TESy6sx7plmIlCGOws4EbFOFZHAxnA+OMumlOeuJy9ut8HiLZs+Vsapv8YW2iQv3zc+sPvS5T3Kz5D1ua/QAg2qrVmt1WKPZrLda9e5FReO/tW7i1GG1FfbR37uXO6PC4dTHree46nfsuJKmRMPa2Ax2cOhZ+yZbD50dRRS1SuRFkh6hwlOSTcsw8iS7Ge4g3a4V+stHt2dt19160eQ2cUtwc2H+4XdXa52VJmuO7mNX271H6lW/7+511qnrs2tspd34bJkrSrirBI1bz3HV79hxZWRCRQwAmaPBQrfOJ93FudOFSODD/gPrSF6ZoJX0xSklGhhh3VGmaCbgzx6yuPcUxuxsHNKR7hVlSNCouF4JP1T+i7dw55o7ESOkCZb5Rnhnx7v6U2LPsr7WaTWadWHgqTNs1myzF/z8ER0RFULea49bz3HV79hx5TIKLhaz+uxF2VK41185P5+TQwRyzKVIQ+FtLj+PiUzfms3NRU+Dg8KlZcfGrrwb5mAGFPKV8GDtyLj8G597qr9+3Wo0tr9BIyeHVd4YPvjrz33gggxOqFb9jGEpmzxyDTxxfzi7Grue46rfMePKPAyUID2r6tGgSk7QDfimjgnN5K2AL0rCKnYCvuuI7BCFyN0iJrFzptxSymb6R4hRcfn0efZJ/pJGYyQ3JMw30mn+G58zazPfets3X3WSXeZdf63RqMqcfymh5mX21Df7FmD4Yerj1nNc9TtuXBCsDzuQOrrjRpYIN0AFQLmjo2GSs0E01CEPbAdLPsyVgBKJklcqnqmZVPIdUKgAy5Ata2RcxfqRU+xBsUjXYI3tzx0Dw36QsU+9hpvD/PzSbbflfu81r3hB2y8rbYbN1hrvnRKHmIWNcOMeu57jqt8x48oYMRNSZKt9y4BiMisPl2CTmqT/+AmgIRdDAgfu/UCY/8jDLyIpSiby/Oi47j+wxp3bNsDAoLkT3V7h7eAU+8RP5kXgP7GJt3xw0XnC877BXZG3ihXtcx3WXSZhj+6SxOW6iLYs8l1dbnxkc2qieo6rfseLG+YV4SVoMQiwbdzpd5xkO4ndbYjpYvUUe+B39oOpgqHxPkSzzdny/Tfc+r7ncpZITXL5MutZamINW1Lnz08DMGVNTM9x1e+YccNoYii23PuSTe2KANvGXX0OW7kyet7rlXbdz9Lwgn8+IrLLiDMzIps+Ld2Hlq5++M8/wDt0sWmz7XJjNOy6P6K86vv6Nt7Grue46nfMuPIDRkQnGPXv0u+CANvFnXrWSdZpjZ6UT1hss33lE1+4BDbEUoJJXA062D1cummhuO/Y3NPvZLewEa6FjM0VYc0Gq7fZhZ84plT6rs0ar57jqt9x40pne5gAkj9EAOnkDxFA8gcEGBX3wHOrFxqsOvJB7AZbu6XR+KYtFsjyBsiXsKMTTXXumzm4mN2cB/e85htsbYQ08c0BGlWenVPT77PfcOsRkW5gY1J6jqt+x40bQgwZMiYtwHZxy5ert7Da6JPHFjfap70aiBUjv2yuZKQSono2hJSu81/9/W/yYWBl1Mnjrht2vSlOfp36y3vXp8GGMTE9x1W/48aVH4Y5+ZMWYLu47xPn80awI7mM95kv3XqAP38JgANCAk91qelhF9qqntPUylQFvPrz7CT/vr8/+agNJy7DblaFI/KWvz24jiqZTGZieo6rfseNKz8MW5aZtADbxX3TCltptLfvYweGfd9Rv0w/iZZhAIsg3VRVmCti2zVLqkDb+NZzWK1eF9+uP+oWe1yGvbbCqifZn9jF+xCYBsaWVZFx6Tmu+h03LgiO+2WxQ1b1yMEqkX8ZlLA84O1ybylafkbc0AS1gE+L/skW2ZUoBrVLlIYHzP2sbCFtF1fHWQiVwtGRN1I6rFVtsdZVkLci6Ze34oq9n9J7uft6pcabjn/Qu1EfbsAd8aktvtYS4eK7d9akzmrs0188rZsO1204eRyXnuOq30nhRloW1GA2kvfSAvkpww1j0VQdmSCSJ80SueVhJFZN6zsdDhQdIki1gE+70smmtV1cke+IAOPEqIbNXdIWN8A77xBdQCY8LbYVN3O/AnJf6wgrrQcBCExOUrf2zI2THbFGKFJ8NOu7tmNZ5fPmT/xheZlkqdCiMW49x1W/k8KV2aUcwltPKRKq5reRnEwd5enqJolkxRT3I3iqZKsIOwZQIkcKN3CphJE8jkgKoG/jdLu4WMeuBqaeP6pht0SPutb4uzu6xWaG4gqhKhnw1efWWFs0Bd+wwz37wZ77ziY7V2XCtK80WHMXLwA+ydjfLh78sCfuTFQi6UXHpOe46ndSuHLdT8cYOvryJXnYhPcKlXs8me9BLNws5iPHXIFyfF0nbsB38fIBK2NE7ry+WoaR9cjDBaNQ4T5uwN8ubknNlQ8C8LxRfdqmcMer7GvHu7l2jWG4oocoiP78NW+qizsSWk1/6zosZxC3IYKz/J34TrW+Gy42n9H6B2Sqb8AZU9fh6v6MAsau57jqd1K48gFxViyjFPYFsWMc2Vy9avWdypqepba8vJ3o68ejCgaFOaxCU8aueUcq4qGAf3HZEUeyZOzbtnEVkL/hofKnRp+sVcWVB//f+VlkmqqGhuF6RU8171i+afbY3f/aYd0eODoubMEVB2f/8+/8VKtRq0c8lkmSD36F/ZsONm4Qg8/Vsofo2PUcV/1OCDccIoDv/mTlEKBTzSZhJy9OSAKPOuEYoXoZvzPs8QFwNomjS/6qX2ro13uUOFr4/HZxRQnGkv7pkXvsWotdZmsHQY7PTrSsOQxXXyCraEYrl9CxuR97pfBD/AmhPKe9BZf7Ii/4s9PgXz4j/meEg+HXSy9+2Jc7DxQx31LHree46ndSuMDokSiJty43cL5dqDoeDvli384g1Av4BFL1/2fvXeDkuM460VN1HlV16tFd3dU13dMzsjQvKXt/bAirljQjWEv9qg5xE884ycyNsXYNo6A4EoYfIfb1BBQiI5kYQUAm2DuXu8HrsPHdOPKNwTiYsNeBGIhJLlkS2Mtd2AQ2WfJYngbChs3ec6q7TlV3T08/ZrrbcuqzAlJ/3fWdc+p/zvnOd76HX7tM8EEdI2wFfBVnZFOO/J5ajo2R+H3/ctnsc9X7BgV2qVouF72fTgMGAwxpsptcg7UrhzTHyiqK+l/+qFKslSocsIFO3w7wBzzvdX+jg5XFz3q1RyujX7JL/u5RKT16r8S0KpkfpIiqWHT/x3lS73c0cgXA+SSQIwZGrDkE5yLFP/jcQuFpVIWqCqJ2tHQKEQQN0cDG3Am/gGxqY0W8kH7lSlwDrhuPDgqIMo+h2noPr56GVRSewtvlMi0QUmhThOdntpcW73jqElOeTxW9dmCXm1R583+dl/iN9sf/uuIN5W44GG0V2RwrFbf+TgayOcXegmQSA1p4v8d5Uu93ZHLDBrQmD0RYYf+1WM4lYGmh1r5DKiqNGJHkgv6JLfwx5Bl7QueXnnK5cpb2+VOZqewT/QIhWNa3uB2h8ha9X7kKZNu7AXT7b+8qe7XV1XKzIFmlXCqV2CHRt5WwBfQ7f/Y8G1bu+v6OL/D1uupVijwlAp8C+wHkYCJVeCZs9vDKqndr0fvAt45snCf1fkctd+IN6Aps/nC94Fugs18e2K625W2drr1wsW+5DNiYAxtc/mevvI1bIThMS2vnio0rmPLWpStb3pW7Pn2cKbmHpkwJHEr96ke827e2eMA8B/5+X0I2ckNUt7grwQtfvnEB9pIDNuKFnSbQ8aZc/4KKE/u/h999boiLkHKp9p/0vuVi/g3DtxBnpv/orWtM+SgW/dgxrn/4qL37A98WhDhJaXAGHPnbR/jGUOb+3CPQSVgDtmqe9/ia9/Q7or4h+zvOk3q/I5fbrQGQNwCNv+MRuTLXzy4A8LZ3D4MbhonnX5TSfQObQxuyCcX7dNMd3//EbVzPuHI/1woYtksPfOEXv2U+xfYR0+TFu1nXD108/xcPe6e4xjKCxDulpi397pr3y/9Fark13u9xntT7Ha3c7g3gviZt3xhLx5tyJa6DpNgh44efKhevDIzsrVLJe/+UJA2wRTaOHtLBmwr8yLP8uf/8xlt5rgev9MAXv/MX/83nLPbxhQX+08yGzLqeUmYP/OozDIEev7Lcd/L9sUqnq96fPFQY5ThP6v2OWm7XBkDcfsYcT8cDuSng1wrfeMOHvUfK3u394qHSVHa3GNp+cwC5SCEQIl5ojX2cmvINsCszufm/e8tbHtrMHzlz4ERSO8raNLXhl2OTmZaNrl2c/Z2nyl75dFMV2Q9vv4hZs7TK5kzp/fceBpHMSPs+zpN6v6OW260BBm8AbPvGGDoeyOXZ2Q7q4KZvO+c94JVu7RsY3P/UR4V3+p1HCgMMuEKYaL+9Z840k4AemjPys7OLc3kbYhXTXONiQM/wbptAsp1c8uqLn/aN2eVqU2fZK7ADM+O5cqXIDhbFX8eLCptiIxvnSb3fkcudeAO6yd3geuz1nz23xmBT6T8VWa1W8pG9dul9n2MP6NvcBwkxDA5s2fRNq/z0uuKXFySEJ44j9XyOF8OVG+jmf2zNNdT1d/34U17t1FoD1uU9X9gEwK6duv+SV37dT9nbyzxbnTyycZ7U+x253CaZje0ufNEUK/N2OnJnnwJSPiH4RFNVrgdL4Rfm5mFWNGCT+H4e4fONs6qhYTvgd5OLWCMdN93o8MZrLnGbRGWgLb7oeZfWmG7wGwUwxSDap9z2/nIvX1nbDC8G2vrLfps/a2iKdqz+qrd6VaZpV73SOW+13xvSHb/H/7W2xpWQKo/uvO17Pn7QyJ91+Aay3+M8qfc7LrnRmcHO/GmRzxUhV0u44Z0+1yyldVWkg4XQsaP5LSRzJX+ShiUXqM2WNz0dPmDdyllqTuRc6ybXps78NTfD5LEOf/lD3qDuqtysfIXpvd7X72isc33Kbe+v3OxvkDKrvb8glc6eZe/hmrOcfM3HGCJPPz7AvtLqDhtgmv9tjSfxZjr7Fc+7+XefXVjESdXNgKjvzP6M86Te79jkijt9vr7r0nGREy2HXTh7IRW5e8/cs65aIqcaJcfP8L1e8KfOaxCJnGz5uZV09PnHZiFBmiaqP3WTq1CYdbcPpnmE4sdf6zVU10H8sKt+FMyVW38F+BkQ+5W7U38vXKROMGAd/ZUyR9wkda5ifI9s/fjNnh944EXi3Rvupv0AO1pbwdu6UvXOnSp5T3ztfyxdWD85r7jbF3Sw7+M8qfc7LrniEl9BybyNtu8RDDPDHn9gLuA7hl3fjk4EtlVrmiOcW1ScXUlF+GDlgI0Tz14L+EfkxlViQN3kcgcXM3Oivpi/fMv/5Pcfno/svtfCCg/eOr3l/ZVz1FJdxehXbnt/E8jInwAgsiW29pfQ5Sm/v6nLBwE48NB//4jn3X6l31a2qSL+DXrjrzx5D/vf2jv/9CJoZqST61DJ7fc4T+r9jktumP+BIMNJLEd0E7YomfTegK8ZxIIg9Jrizu4JFAZVEmQHO0uDCnVLgTAr+Lx1kUiJrnKlDPd7mX/x+ItfrfnRhw1k9wuYmlctn1qtPrx5cXlaZWeSvuW29VdBioojTmLt/cUkCfzUUoD76QBw05ue4W3dEsBtxW/H2t35efOvpbWat/UnP3TIfzpDAZOgEBuJcdyvcZ7U+x2T3DCCxspBohjpYIHa8GNgbZFQmy1RKgGSHCrnJkgYhhrwKVL9Vgu+DB2CqDgUWKBx5xLwu8ltLFN5d339h8qVO8urXujX1B/53k/v+/IJzWHHFEL6ldveX8KQTVsuyFr7y/Y+nV/TADnFFQWGwDs+WFl7oK1cU7UnsEN9peEbUmJK9iO/O8cemeZb7hRvgkMNcerfr3Ge1Psdl1wBbJuqrpbVWk6TUxE7DGTqu9VwC2+QpOsqO+qJF+06bVYarEJDDV9Iy7wCu8pNS2c3H3vTW/1SMwNfehTZXLj/xy+4VIWIKAPJbemv4tqsv5GdpLW/hkb9sP+NhvlPkgpHT/zS1x8I0xJXyw2vwB7AbqKbHQx4gEOVaSEffb0h+YZrM9OIAQMWigRD7eM4T+r9jkNumGNNwbbD1ygxc/guSCNmOFubBmFID9+DVSd0tbDshF9HJ/w9sTBUw9/z7UYGcvvMapfLO7EB4BL5rFdb89exQW/z7vS8f1SWHdtQqV96uz+57f01qGFMR8zH7f1VDX891/1dlKf5mELuAfdbvi6AXSmurRUrPYHNu1ha3Vqrloq1ilcuft+rntRO8LXa9K+BfJM50RRh7tqvcZ7U+x2X3O5ZMX2MiedjCqlBW8yDrckD2Z7TsnHzeOEI18/eFr1l6Cp3ii+T+LGfu9U7Vd4hP043oHAFt8yAVGYq6l+fPZgcWO4e+8uO4Yq9vDT7U+9/oeRV106d48a7YvW0V63xsk7loPFlX+UoC7+pK+d87bp25TT77K2f/uT80vVlLZoleFTjPKn3Oya5E29Au1w+O3Vw/BUvNEy6A7irltdKXvmB6pb3J/Dok3BQuXvvL6JYS9qF/Bt+671Mzy9W3/dAsdwIiizVakWmlzT7Ui01M6lVajwMrVJ74L7T/B8f+ef/yx2zj51Ynn+XnzlkxOMcA3vMHedVB0zpxB97XmXVG+TGg+vWNR7N/ZVvncsa2qBy995fTImiUKd+/vDmf3zPzfzUWzlXqp2KXLJXK+VSrXmoPNcsz7dW8+fk/T/wh3dcPLCgIVWhcBboh0Y9zjGwx9zxjJ8h93+8ubRaqhQHyIbte5R4q/d57/zc3HLOGvuKzdQnDBHC1zbR7JGL6iv+v194uw9Z9me1WA3PwP4R0Wsu2DwvSfXOm9//s6+Y2T5+MU9yFs5BW3NTet9yX+oAi4EtnsoNk39V5nv4aqn7kl1tI/5Zma2Cr54+kl20c3RQufugihi2YcAD2h335vLrixlw+cVPvvFO79Kqb4gP1m3f8fBKyStt8YPl2m2P/sgnTrDmLcA6dFQtb2MXJqZxS43OGxtgMbADsTJ7q4vPM0BXSjuFXLUDWgDbL0hau7R8+Th8Vj0+sNx9UEUg139yKnazmjqN0iCdvufogTf93hf5rWKxmb6yUm5c4Zzzah/66ieffBCkC0DW0y4idt12NlXDQhgtA7PQv9yXNsBiYAu5aVD4i3KN7+DeDsWOuuX7OOdVbve8X8jyYhzJROjGOLYBlwh7JGH6iIEIO0ZqDcvlFJuphQNnX/PNf/B9T3/gqUfuu/+RZ5557Y/91ut/afY6x66Z8R+iG45KkJ20EVXzSYpaEufe2ACLgS1oBRz9Ra8R9V3pVLK7Ads7terVfivHlPScOqdia+wDbqoYKrjh5sqvPLlYHozDQSpL4Phs3WAjAunczMzxxYv+1bGfz8iPw+e57BqZjBI2nFdamnxjA2ziwFZtmLASWsurAiAhLgaM7Pw8lCMXROx/hCphE4jdks6VNSChqZqwTvCIQSCHymNXuUzF/pnnux8SfR2lslbl/7dc890zyqWKt7Va9R7+1wf4HdSQcve5vzl+yRLmZ5c0201m8/W6tpxHNspG/bonM84vc7ki7aqWdKGbDGteyxJPM7W8HPA3MU5e1TMRAfJK3cBqwJ9X59LpSN7mqcJ6Nqmqgn9U5xm6ww50k5t6DGz86C5pp6vlS1sVb7WRod2rrZ72M7V7t5/yPvL9F0Dh4LBy97u/5/l9GPeJbz6BEqLw2BEI1XkKZy5Mepxf7nLD53HPPwargIE0NZ8/UAiXHKYjHJoj8wGfUm1mJboHmOZh14JOwJ9bKshRVfHoMjQMO+l2Cm6VO0s2yJe8012R/T62aNeKd3MvuC1/wfbKW7evMWh/1+8fv0lTloaVu9/9vWndhUizuZ8wzzeAdL2xPEt+Ojv9crCyTGqcX/Zywy2RB6cVIrFlz5KzKMLX2TafdA2xhTCNEpgRr6xUhjqbSWE/TmzKUir6fNfCKoLi+d3korMX//S0t0t9umpljad5CjTuK1wVL3u3/dEnzi9s5pT5YeXud39NLWdtqnSeLdGI689ivLlrCVgRSRYnNc4vf7khxPnsCYCvGEm8QGmkhALXfueJ2AKoquQAaPm5YhMoZt4y5h/p4dyjOeTwX3XM6Fa5cGbxH0tr3fN0VB/wKqd+2rtyusSOljz/WLXmVZ759j8/cXjGUZdnnGHl7nt/MXFRvZ70sasoJFhEQMMjEE56nF/+csXT+X9AWBMSlqOpkao3BR74YNlCqdcMm7Ajv9Da9TRI2MlwZiknJW4QCGeOArPQDYMuu8m1rrvfV655u/iInC6dOgR+9K33bVWq1QrTxm//l5+cnjtWRxSTnOoOK3e/+ys7Kq+5x1cSrlkbYiX3S+IAkeB6UuP8cpfbTsKUkteQaikRKw3/Pw4WJRRUR2kpt8roZC5kY0Nh/ZFDpd9UCVHhZrf8D0Lu5tUXH/daagq00a2e91+5q+ixk7/6uz/+G9/2M9rlI7NzyLVyKjQwJcPK3e/+gmRWw0kHceMUPzIGH6f8bGVSbtLj/LKXG6wkKb47SGH+B2JBVXNTAVsq8OdREfjAw+hddloVtT/YwRTDbE7oSsTwHxlGPmgGUbIJ4U7aTS7c/hzTL3ZJrnrOO/3vQMHPEgUyOhsYc0ZxVZrHFoEIGcPK3e/+mhjnrGRCg7Chi+h6g6WDQ3w1CtM6TGicX+5yw3nhJz4UsZBoh3SvOlA1JeQjtSW0QQIUqtEyZr52FV6VQ0wNgkTC8na5QcOyx/9jdbd8SpVV7wVViuYjAIqFVDis3En1N5Y7YrkTb0AbsNHCd3uVWqmrKlLz1v55esOMymWwpjGwY7mtcifegDZgaws/yR2aui/ZRe//NsH5qFx+aRsDO5bbKnfiDWhXReY+UNo9wOCFHwb6VLTlmqLFwI7ltsmdeAPa5Lr2pVK12plwOnB2KnuvNPy2hBQDO5b70gd2HhbLFa/UsWSHAQX/7WCLOShWRWK5NwKw63S1utPJUaTguNNywUokk0R8eIzl3gjARtdKXrlS7nDEDoBde+Mxko6qIrG5L5a7K7D9DHQHj4ismNiiyxfPRBqQAWbSSQZ8mlOSvtiAUlOH61lDDfj1w4UzQeEvTseOufYcUtyA3y6X3zvzXh/Gl7xKpRSqHvxPo+Yij6Ypez+xPSNHaw3tUe6k+hvLHbFctUlWXUOusXAw+FwHcka+Z3sh4G/WXXh4JeL4CsCF4yRHAz5Sli4XIg1KnTmCZ9R5wd/WU37SzG5yTZ/kzNSJ0wzCp0uRpdrzKmVuACzV2FL+xHVwMJ/Nkv2SO6n+xnJHKxdoTZqGUE2cnAEtdMh4NuBv5skdthlG4fAnaZs5FPAdZ6ElUg+s1K9hipMBnza4ooFd5W5sVWreVmgFiWQt4Nc2/8C+ctJxyb7LnVR/Y7kjkQtok2xDMwzHFr9PZdhEMLNWwDdcotbNSLrXVAZQw7YDPlJdPhlD7aiQ3DQQdAM+2yMyKTm8Cm+X21iw5Yw0xcs7r0ZLL/sqyGq5ytbtavlJdnLM5VByv+ROqr+x3NHKBUHGfiOh4qSipM0m8Ukgm5oSsIlKtbwug5CfATkbJUSJBa7e8BSKAd/MEqhaooRCkruUSyG/Xa5o+Mrz54qVMDasUq2U+GGyuXCf4tGviDjafsmdVH9juaOVG8amOQZiZ1MQkgQ25NCBGxs2zvmx1U0um2Q5Q8MiQMCgPFO5mFkZXYMadPMB394w9UYG0Qa1y/XdtXTTXLn83V/7wT/+yXf+WpPe82v/9POf/r3//fd+8Gt/9mdf+8cfehXYABnkQrhfcifV31juaOWKvxiOyxXysCSCXzTB0AI+JQadBiBSUoEp6lQhAX+ebPoPDvlEoQ6hAT/vuyFLZsBvlysFvQK8xsj29SNNOn7+wGEeCcr6JvEyHjyyimK4uV9yJ9XfWO5o5YrSBjDhUmjjEPpseygAKuyHroWNBEiJmcX3DIhQaF/MO402C1IRxKH90dYbhbgC7s5y2Zqd5mmElWXYJGwjsjDVDCUyZYnn9sM0r+6v3En1N5Y7KrniLwhxO3c0cQ3/siIM51hTtZbSFSbQoRIKQASaEbs5I6xggoXh3Ga/zUR+3yFX0mVJPwh4DRqgG2JFVqFCF5j6IRzI2bJNlJnkvsmdVH9juSOV238DDMaPNoBpNkxoyO9oAA8cEfKRJkmNRBtdOt44PXJdi19U2SJ0ihiYLoZhBf7cpvMnT+6X3En1N5Y7WrkDNIBJa70IlTnqBJ/CVnsjawAKL0oR1P3ja9eO892GQ5rXetYztiiuYxErN7MCImki9LRj20v7JXdS/Y3ljlZu/w1AjTxpgzQgOrOQ6afz6d5x/TLgJk5d4qafZWGnNpIaXJ8SuJZ4Wb+5hcQt+yZ3Uv2N5Y5Ubt8NYC0ghhzZM/wtwwj5xGhpgAR4No1IC3p0/FDj42a+ifNHLjfp/GNHz19u7Zk+l53bN7mT6m8sd7Ry+2+AYqh2KtKANiUfKpq+WwN6blVm4tVfeOHpn/7S/7zrtV/6rqee+WKTnvjAB55472u/cvNdTXru7c+9/Zl3Jhb2Te6k+hvLHanc/htANCeZjjgUMpWezSsasDVueGlR8rmzXlhhtdfhQgYLzxdrVb/0kLfllUPvPn6hHtZLrPHsT/fPa/sld1L9jeWOVm7fDYDEdpKFsAG8IJ+GkbAn29DmbrKR32uGAQ0BwF7moKl0nftgn/ZzQNU8ERrmez61Zl+trD56fHa/5E6qv7Hc0cqNiuNGtXzA0BBBmtvSGiAlFSGQEpzUG6nLfWJ/sXFkJiGlpTVgQ4NJhVCjQ3BT7vLRazw6vXeZMLZoe8+FTjN7lTup/sZyRyxXCJD88qgi4w5TZHikQ0cDhH1Zwa7p5w5tEGuMxjSfsFpXWwOAa1FHQSJjT7tc5eKT3O+6d13HarXEgC3tl9xJ9TeWO1q5gnSeFFPPiDt4qmBM1dYsarod3uGzFmrRTPPsxwbByAj4HQ0wchi6WDy/XW5i4V3tKsfOuK54Ze+94ZP3KndS/Y3ljlZu+PBGA4QAnkix/Wu6JtgKwoqRauGaiODQ6669ASZyDDdJnPYGBHKt2RcrQVTBblThtQzeK+2b3En1N5Y7Wrktz2fzQ2wZtsHWfw20TA4dkjAVWUcDZNYAhLpvGQ61MNop3asvVznxYkUUGB8I2HuTO6n+xnJHLjd8AvufcC7S2OrOGtCyZ+goVNI7G5DhLlm4m5Jv2gSy/ULbQcn35dKlez0e2zioKrJXuZPqbyx35HKb5JsDgUA+9q3gLXxgKlRUa2Jf0DIt7AzCEJNuM6sAcdKAlHTMrKZca/ZdfQG7/fC4V7mT6m8sd8RyA9J59SXdFJn22fLfqgv5DVDtgM+V/B0aQLvpQgy6ioqw1q4LBXLp0ovlfowi7ea+vcqdVH9juaOVG3kCNx2mhS6Es9hKTodszmUiwgzdhBh6JOydtZ9a0BA1zKED+CYU3vMjSmGCaB0zqymXbv9dLXIvsxvVvBfCru1V7qT6G8sdsdyICCkD9HrwhXms0hkHpFu+Qh1RS0Rhf1qvOoHmYpII+EkVRD0AwJRiIMMKi6q2y1VPvKVS6RfYT6TN/ZI7qf7GckcsN3AH5cu/DNLijt7NY5pVI5ErKTZ5MBRKOrQ1C2QEm5cts2xq2+KQoLDHZcwNwbdJztBs8fx2ueTE25h+XeutY3tesfoBE+yX3En1N5Y7WrkC4I21X6dBqihVSSRQdGGXeVy8AkN+M8oyJAfmYPh72MZVcvOIYNKeikrIPXEvU7D70LE5+p+T9k/upPobyx2p3DBfg1QosMmDgrwMigahYWQEP5Nmeo2qwIBva8gCupwRfCbCNmxH5IuYyUg8jivgF4idz1s4G/Db5Trrd1R3zffepFKVof+ZMA/FXuVOqr+x3BHLbaW0EkSuaBqhqhuqQn6Ue5KIDD6UKsmovZFJIzksfk43l6cAiJoroWpplAh+u1xr/WyVac89VRGew6968/7JnVR/Y7kjlhsgnBeo1jOZ2QD5mDrIWCroAV8CG5nLsxoJ+A61rx6LZuiRDi6ipJoXM3PpmNzyfJ7dJ19X22dWIHfmqFLyir11Ea6IV56T5f2SO6n+xnJHKxcE+TvyGtbU5OVjQvlmaqx88LAW8Gl+c2Y7JUeCajNmPuvXCvfJ0ZZkGRwM+ZklF1GKA/76Ab8KqzgVtMt9LD2z1Q+wS1xhefjA8f2SO6n+xnJHKxcIrduhlnqyJV6Y7QNUKO1EI4kWd3GTKU68OnuTsG9+DEnX2fMsqgR8BeiSHibV7JCrSw+WaqVesGaqSImB/zZN3S+50T3RzKiiZjeFdKT9HXScFWpYhoqojV0QNXcBGVmWYqHg51Bu5LJrl6uoCrXOKtHnMsIJIdeg8yjyO35vYlisNU0aVi4xVEie1MaOK5GUUuEGk1zbkVMiYosgmuIYrQ2QoIrEoaC9AcCPTcPhoQFILQ1ol2vqx6r9XDwyWJe855ft/ZIb6Q+jSKydSzaV6BFkn/s76DgrClQMbCCGJX5yCvk6wx6k4gKkHWDCwEsRRgkUfS77GhL2Y+TiHGz5JZBsqoir8GHlWooD7fn6wP3d6ziLRNnsAZqtGi3ieQhPwCcaVu3onGXP4vdBkd+3NQCyt4GR4PsNCC9L2+VK+jGvGeHYS8kuVT68mN8vua0v2g7D/u22F73P/R10nBG/WOYh3RaUWuCnM+xFiksZbMWLQkz0h00oTY20mf3N1CMlMFxkaa1PllwG7IA/rFweGpa03NZb8jHgSiTK9jtuhXOnoQ1hHPCJjajb1gCNYkX8vn3L4F1jW3rAR34DwvNup9ybvErZ662McB37kRlt/+SGwy2zIQ1UkQTCJButCbHv/R1snCFi6yOx2Nastb5nU1MwW+KCFVLTQeO/JoUrtsIeoIn+8BiVjK6J36kGViMRW7xduk2JiFwZVi5f0g0LpiPPHQuugNMkbgJHTriSMKXXb0DA79aAgN/eAKnZgIDf3oBOuTdxl9TewOb+2B/Jw/2TK34oyaxHAbAdiGlypP0dbJwhoQpWKVKIZkp66N3YL8Ag07IxCaHL3chSUuh0pxqI9zdsFwO2S6h47rByKTsXKDSUOy5cATsgpnAjNZyVjRMqxoLdZcsI+J1bhgHZ3gkFv23L6JArPcZX495adkPHdvdNbuRFmyAb5qtIMlWk5bC0z/0dcJxhDqtJy04yZVhvidruUyVgX1AVko/2V8oAW6giig2pHd2hGGVxNK/NcHIRcVWqjB9X4hSpUaJoVOvYIsPT685KfrfTK9OF2DQPT7ftSn6H3AGAXXl0IbtvcoPu+KHRSeFzwHTO1gHf7/4OOM72vL05N+3aCkq2BQz2d4ijWCMKzYrPuVwT2I5YkW2uY0stwM6j0LloWLkuyVpsnxHIGxeuRAMQU99sCuXIE3wlP1SxdjbLhDpYewP4bZESbmVtZplOuTfx5As9L9WrTA+vPr9s75/cZnfY1psCSKQv3mTn7jkQ2eP2vb+DjXN9Pn9t4UlIcipMNbJ6NalPs1uCMiBadsuE0oE9H/At9uiWIy1rfhaHVrlh5SrTaB4ncdSbbyy4CmdWzqpvJq3IAwrs61CYgwySVWnkAawXab5PBHzqqlzViRy2INtjiIhssNh2kQHhntEp96BXLfX2W616pZL34Xx2r3IRdGY2NdjQQXT/51OXH5uFdZdps9hwbXz2DnuFdzTdSCyeAZKi2Mpe5Q47ztrZWXpAc5GmzR7yQ2QDSp9gezPMuk2aTfmbj5iQwecwycg9Hsm4xFOsH7YDPkkmtYsR2wU/S28nk4I/tFzbnnET7oVx4yo8XCjEnnbn5eAGx2QNSAEoHMD51QUB0RsiNrMUJ0z36zq+8IAvyxgaNhQNTPo3IGHW1Ha5qfRj3BGk5+GxVK1UvUc0Y69yEUxkc8hiLyK1wcP9L/M1RT5vH9hen6kvLB1fOv/YY+xNbpyReSUrH9umhkLH3732d+BxTh55Mb988eLiwuENEKXU+eWFhYWLi0060noVAoLP52bX19fnroZWEV73ZONqPuDPrK8vHEiFKzLDfeb8+uyioCHlrh/YXlbwY2Dg/u5xnAWweQ0csmCE3/CbNy0EuBp0KZgSL0Q2U4DahlAJtGVLl0E6Ff6cztNNMbGwmjrEdHwJtDcgkAvA5VqljwsavzzeU/XsXuVSNJ+161pjrdAzBTbpj6CPf/Kbnvnoo4/f9/xTb333d/y333/Xkj+mfhzaCkjLybw6s1/9HXScreQn/p+3f+yuu15719Ov+/sPfuYPvt6kv//Md931sY995ZefbtKXXv3X3/e673v1GwN+8PlX/uXTT3/sro99MPj8Dz7zmQ9+8OtP3/y0oNe+9n/76w9+RvDfyJ78lY+9VnCHlPvc029/4u3f7UqD9nev4yyKK5GkwvSo+ciMzpxJAUdUZ7IM1Y/KiVJOUYV5TFV4vE+4lxUAgrPIFdWffIOPHPLb5abkE/zo2IfjqlepfmEmuVe50GatVxMmX7DZyIGlV/zbr1yqVbzTq6wJleJWkSlFH/nvb3pLwfT1FK6UAII3yV7lDjvOZPYn1rwtr8id1ku8WHGTyjU/z1DwTzaC5XKt6p2utFG1zKOgvVXxvWqlxKvCiuf4A1sV3y9WS/zJkQcPJ7dyerVS/O1ladD+7nWcQ53T4EUx2ozwgIRbb1ahm2YogdcfIBCLWDMbcT+EqchvlZNwGoepq9JscQxjcHeQu73l26h7r9ie97yh7FUutBV24rH5RpYCG5/449P+my3zl8sl8FfIi7iv3fVTJ4B5kJ1oUjpwkLZnucOOMznxlnPeFYbMkg8yjiOfeEtLFZGMlsGxUi5WqucCvshay/5WrIifNRYQBm7xO47ZyHP5v1n/xYOHlsvp00fGjiuBcEQt24bLZ4Iv8NLuYGNGZOCZN+xkviXhQ+ZQ3aBiBSMOPJMxI6ePM3OqQfNiZV2/ECR1bzavTa4OFq9U+glS5xfvTy2s71Wuwu86snNn2JCmf/hptpJVy8XTp2s+urnPSs1vS5UtUnd+jcHwQZCSUwZ0nb3KHXac0fLbytUrXrnUgF1NAKdUqRZLbPEMVtKSD7iiqGwcrKg19j1uUQqAyNbrSqVUDPgl9kwemCeAXC3XKqWtcsgfTu5tW9Wy9wsHpwbt717HOfKRxHblM7MBI6+pxMqmokeC1FHbDrcIbORXokYrc2M2i0gu4EM/iF4XHTpYXzZsinKdghtyyaKfu6/YB7QrlecOynuWmwHyoczB8weVV72Xv6daJfL8im9Q9180+2fx8e/5mbSmuctnoh4Pe+zvwOMszayy8RG+NC35w6NUa3hAtqyYzT0o8rNqp1NO2xf8D3b41qByPe/u4m9klsePq4AaDwv4CvtmneKIZXIqyuU51lQKWhwZdWeeZMWKBlUgpaIWSGvegZaLOhrQlEuWnuxLwy5zyN0cNYsOJ9f0639I6z/yY1f4Y095fCv2S7c33l+zKSW+W3unv/7NCycMpgqu7Ft/Bx5n/Tib9EW+obQmgiv58IuoHHyf2QGIRa5mtZlTq2FCfaZBN5WRAOZc7a5E+MPJZSv9qve9E8CVIJ6xB0jiipRpL1hBbd9QtdAbDCPakqhKAopGI/X5UKv7rgQxzwCOQ26rXLr+rsqOC0kb+S/nBXPPchvR0w/+i1rJP1p1l1fhG3Ct+O1GfYEdITP9ytUhUjSeMTfQ+fY6ztJxHzu9xuclR9wF4t8CY+D+7hVX7QMeIL9bA0J+WwPYvDMoDGdelwZ0zKy9AntYuQ+yVfv6995dK+8ObK4tMmiXtt5zy/G2CNFecgl7XV2BPfA43+DAHjuu2gccC9q5ASG/owEEqmHCn44VDPEGQNTtRe8B2EPJzYCMfv6P2I5a5tDdVayPbc/76h2g9RJiV7mAD3joHNfR34HH+QYH9thxtecBD4nu3gBlVMAeSi57wuEf9GqXypW+gF25ter9wOGW8Ojd5bJXqUKKuvY3BvaIcdU+4MKrqksDQv7ODQj4HVtGc2YJ76s2uXsF9sByzZu+u1pe5ZjeFdiB6apavuJ988H++9sL2AOP8w0O7LHjqn3Ah1bym1tGNyU/2Jr3/fA4rNypf1/0bvef51V7ALtht73de/Q1qYHldgN2fHgcMa7aB1wEUXZpQMjfWckP+J0rGCIGxeL37XL3engcWO6PPLzqebd5DVN1b7wU17xi+aO5vuX2OjwOPM43OLDHjqsOgDWpWwNC/s5mmYDf0QANEkNVSEfGnn0y9w0q96Z3etUivzH2+gO2Vy6WPO/1Ur9ye5n7Bh7nGxzYY8dVQBmgZ3jYckA2xO4mjPJlHSxiFPDVPI/lb/FkzCdcKBKhKP7iFonIUAk8C7Mi0Um7XHzibeV+gtRLlWr7ij2oXJm3+kdPe/fzeql909Zp7yOlc6p/wZKRu8oVHsvuPFaVvCGCS5vE7yNkWeQp6n+czQNeqa9ktK3U9aKxb+IJuvrxTdtZLj+ilF+fsseNK0Gyn2Mb1APkT08TLeqrI4GULsGcmHlqliApkuY4Y5raPEIiyVrSSqWi8JPmlQXqWFb7zArkwu17S/2lFWF/ngivZAeWe8gP9DjyoQq/xlvt+4WX2H9XPO/b/aEAkrSbXO4+WcDODExQEgSX6k0CwL/yHHicJf2qV+6jksl+EztcsC2yO7C7TZrIzXzZe72pjRtXIen+GxOJSOr2nGsYmZY9H9BpoSspkLQbwzVLEUkvjRmXxxGZ4WlLtWbzWNE6dKGmXLp4b+BZ12OgebZVc3i5fDEwwd96q9yZsI+o+CYVefHrqnf3rJiPXeU2vOWN3FxeVYwgkiRsbgro6ZTQGfsdZwlcrfaVZHmfqez/110yNxjt9NYiwC553wy0Qfu7Z1wJSvOFc0PE/NGz1i2WFio7ftBPnYgbJB6az38l8KmnSGIzvEG6V820Ph/dm7Acp7PQZFOuU7+DDUbvktNl7ngXybY6sFwTyJKUerS8Vq1cqfYPbCaZ6S1XvF8pMJncUbKLXD1IUZC/ZimUiFRsgSM8/1bGT2c02DjL4HhxEsCu+P5Ou1uNun3edCLhviL5Qfu7Z1yJyIQC3wDk48FhR1Ntkp09E2aeB+DgoXUkSiaoOW0hLUUDQcyLeYqmA/7MYYYgPYzZ2TisIc3NipCgdrkzxxXuvNbz3dW4a+QLhcKwcmU/RA4wjdkrrfbh/y2ozB2Iat6/0hvA7ia3oWRL+qGLNjKSSRysJKEqoptTkiza0+84H0vl+/B8HAHtjuvmdzqdBoN/s/V+zfs5/eLYcSXMKDibTWgz94iZwk51hQtzSbFFINtYikwUnm9lDhORvjWRnI16g4PM5WXbwo4V8BdlkEkVQsfadrlTqe1SsQ8VssRP2Y8eODGsXMQTheMltvCXa15lq/8XzNZ2/u2vHVaQZs+QbnL5QdGAWDl8SJdTsixCmoLDDXGMZQ1fFD7E/Y5z/vpmI/hhQNrz4bHqHy92+71/QOwObDbI33HopnHjSoTJU4K0hKJFgyoZQSfgGxomVE6Z0S0VK9gO+I7Ns0NkIrVFDGIlDXGllJBbd4h2uQA8xqONepv7+LL5+II7rFzEs2dZyTu90lqlxc+yDyquepV/fDBHsWInusnFClVVouDtFdBCS006fnF7O3sWDjzO6tJDHvcSHajBniditwb9naCyt1Zd6z5QtVKpXBaw7gQ224Nr1X84Xxi0v3vFlcjYwxMBabYTMRFugAKA4kZHxSRpgejNWwpYNo5kTsqxY0B4JpAKrqEaVPBtkCmwfTpcOdvkSvIRP6l775GubnnPL9rDyiUudbSscdrzY58GsWMV/Wn3/guKhhyNdJPLFhuLwuzy9sV6djlp5IPD4//VpI//5g+/LTsbXaP6G2dn6RMNF+kBac/ALnmnylfKXdWgtbXVIj9VdwM2P3tW3zOrD9rfveIqTB4IKbKUFjMgN1aEd8IGNUjrFQSI3BhjSGCbVyfiyUGFsw9PiiJHft8p9yh7bb11bB4/6r05zCsyqFzI660lsw8M+55/6yhWIIZd5WY3Fw3n6syPPHzrWqVF+RQLmPfA9/xlyw1FX+NM1t+xu1NLNzrFltuy98Vh+3vKu/JFr1jeZcH57e/5sVf/2Gdf93vv/6tv+offfv8vNOmrTfrM33/1qz/5KtsctL97xVUY3MqeoE4A2KHccQI7f+ewL7oBbNRVrobR9Lr2h8+dW614Ycx3JdRBK6te6aP/ui2t7giB7dPNWB+SQKpAv7jLRnHpvSdnDi9cXDwQdKZJ201aPHx+ltKWYN7xAhtBfuXekmxqLA0I5V4fC7C59wZJ5m8dDiBMFbm+O7CJm9u855+8l3+1Wi6VO4BdqZ1e9bzvVAcd52GBzWYwG7Cn2tKEDUTarXw2dqNH0PpsHtkzGTMjpUJdODC/5bR8PqnMtV6SjxPYGBGNYDT2BgRyJXC9Og5g8wSiJDlz/6AACei3j/BsTt2BTV3kHn83v6vneTuqXjuwuXHlTu/UPzaHWOp3nIcF9ipTh66US9elIYmpt+j0Ltaj4uO2lqMneZ7DFhJX6EmSUKbp2BfMMON9F2ALfpcGCCW/SwMEv33lbJOrgyMDAXtYuQ1gL39kUIAE9OnzvMndgY1hfiZ3t3dfmS/XkQQzwvxVq3Kz4Ucb9gFJ73ech1ZFqqfLa6Vq261G/yRngFuqnOqujNztJmmWZjWeHk2XzECFCQCWs5zcDOw8U4waV6GILqrIqBsQyDXBER4TPXJg86g5mpx7fmCANOmV59lDCe4ql6hZ95ZVPw2B5/sNtlH53CmvXPRONy9yxIo9KmCvFUs1pkeAoXVsAPLl7kYRr/RAMq/aOQtm/GyrHYnfbcMmeWWz4/A4NmB3OzyOugGBXBOcHxOwIQP2wqODAiSgHzjAHkq7A1uhtuacC4AQ2n9Dcxhb/NaqXkaWmmM84hWbiV4rlQpgWJJS9tZad6NI+U6UzUEjSCMs6jcG/dFUmMAtNabHDOxu5r5RNyCQK48J2KQB7A8PARCfPt8D2K7hZrHXyJ25E7BXeRpkdq5MZcTiNlpgX+E+TFv3gOEpu5uzWPnx5EWs5TmwTRApvxTcAGZJ1rGINXYVFwTufglsk7oWcaySuRNcDgsHb4epltHny7xCE1QDPtOydBCkg+Gt16mVozR0qPezsoXULleWjjVcUnsQg3Wx+KEFbWi5WCHEXn7rwABp0jsvUoIpsbrJVbLYzvXxnA0/nljve5wTJ96y2kf68B2p6BUP7YTYPim5W4BD9RJNJkhC7fV+o/0ZB64iKydkm0Yk76UJUmndCWPRFA0ZIJInzeS55SPl1LDamj9Z0iCCVA34tNE6MbU65d5U7RPYtfKjeWVYuYZtIFhfem4ohDD6/BHN0NhDusmlNrbVPkJyCgGw+xzn+dl/xrs+VJtHCezTjyfnFE0xer9f0Z+x4Epkl7IJmz2RYg2SP0eSInWUqymbJJIVk9dHcBXBVhC2/XI9gjZwLoeRcEckGdBycdop93q5T2CXvefrcFi5RFEdS1t+YiiEMPrsCYVSVSHd5E6rqkGiucK6UKoRsND3OKtLb/MGcB9voZGu2LcbrkMt0vv9NvszJlyJ06vGM+tqy5eF/ZIdBAoPuiLfAzfMLaQibq5AWlnXiCjO4+DlQ6asR2peb+dhxB55JKNnCjoQzi7tci+nF8oVr7cXGlvWq95Txy8OK9fN2po9s/7MUAhh9MFt19aMpN1NbnZ5YXamj34U2CuWeOWbPsd55vrJPtOHd9Ioge2dys9omuv2er/jxpX4Ad8UZSlzQLhXYmzUt80WL7SpGWqJ4u1EW+cpGkN+ZhYr0BCxa+6xQsOg1aB7lm3ukiVi/drl1o/wDby3rw73e6+8sJIeVm7zZX12KIQw+g5/WQFd5ZoZs3BTrbcXHrUNxTCw0e84P1iwy7uFaO1GowT2nTf74wF6vd9x40q03n8pIJUQW4BGVYtEimZxDd2ldrhHKK4cKbbD2PYmsTXB98tnR4IuXUpsNfx9u9zc4h2NTGK9iDubvj1s96ByM6apm3rq1UMhhNE/5VEGsiTvJneqVuoJbMtAqoIp7necdbBUWh0gLiJKI12xH01xRULu9X7HjSthuOdPYrPLCZRvByq2i0M+02R0nVA34BNIFb92WWjIr2OErYCv4ozM6/cIPrUcGyPx+3a58+vvKPcJ7Er5ueHlNof7jUMhhNHnwxe+o1x5iv3pY+chNs8TpcB+xxmA4wygL0Fgv7nxAnu933HjKmw+mwRyxMCINYfgXCRtLp9bKDyNqlBVI1YYnqoeEQRFxp9mSGb4BWRTGyuiQGi7XLr9rlql2geweZrnZzak4eXywR4e2N/DE4NkdpHLJKf6CFghruEDu/9x3vbKQ6YVGe2Kraf8Cnc93u/YcRU2oDVZIsIK+6/Fci4BSwu19h1SUWnEiCQX5FUBI6oO5Bl7dsllN3tvuUvAcwvx0ifeM/LQcpvOGR8cCiGMvtpYn8xucrnkQ30k4rCyTHPkFZv7Hec9JMwZKbA/LDVqTfd4v2PH1cQbMGZgN++w/34YgHBqAlvvJjcG9ksd2H7auZctsIe2ivzifgO733F+uQB7XLjq1gDIG4BensBmSvY7hwEIp79vHPT3Ddh9j/PLBNhjw1X3BnBfk7ZvvAyAzT9jZ+b3DAMQTn8g7Tew+xznlw2wx4Srrg3wA4nH0ICxA1viwP78MADh9MbG6XP/gN3vOL9cgD0uXHVrgMEbANu+8XIAtsSdhsErhwEIp79uAFvqJndQYPc9zi8TYI8NVxNvwCSALYNPDwMQTq8z+XVuDGxBL1VgB3frZiMRYLhlUKzM2+nInX0KSPmE4BNNVYEU8tkX5uZhVjRgkzTecsCWjbOqbWNRJUd8DjZAKg2Is3CyUquWe1+tcci8N2LfXwGKY7hiZBzFvy4Ie07PQmiExXn4SwAZ8E3DAITTn2R2l5vJAOlMsXc/lKSNNQ3xbA3Jk07kwmGDh8+GxYYQQblGruUT3tZL0G3Ve6sOTO4Qwt6voWG7/f2OGlfd5EY7wPPbinyuCLlawg3v9Pn7lNZVkWYYQsdmbRZ39pK5kj9Jw5IL1Gbd1dPhA9adHCW5XGe6Vw41c5ounvT68e5j63Wl/NORKX0GoASFIvnjPPR9HMOOzTmqqjqJFrkm+I6hEOI1Vuxecs/0kXY7gRRLUVQFuSibiG6gHAYztshdZ1OFB4mwT7fLay9BYFc/2lxF1q2cpeaszvc7alx1kSvu9Pn6rkvHRU60HHbh7IVU5O49c8+6aomcapQcP8NBKfhT5zWIRE62/NxKOvr8Y+uIQFdTAn4QG8daaLLd6vjCAbJz8e52YsCuvHcjHfwe6KnzSYRywXMXDjdyLwf8m5YwYTtFpKqUxIH9c0MhhNFnpEYEbje5spxJXe/Dbdphu4imYZhQsWGvX5ZFfxgQ7llkC1OT1Jxx8YwEzEOpOR5WNlSbRwnsrbduyBnZTB+bhQSxDgXtHhuuusgVl/gKSuZttH2PYJg87PjAnHBeMez6dnQiMHRomiOcW1ScXUlF+GDlgI0Tz14L+Ecypn8VHfCDrcOCcwjm82fOFGartT5iHn2HiTdf3Q5+n4N2mtc3CJ47dWYpS7WEFfDPA6Yc+JaQBrk2dF1t+91DIYTRo/mspmmu3U3uzMLcdt7r7a005Sek48PI9l1wcV30B2kzS9FxZBMpiUli4ar60vQVuXNxfW5uLn9E9kEaNFsfG666yA3zexBkOInliG7CxtSk9wZ8zSAWBKHXFA+yTqAwqJIgm38cKr+FuqVAKIJulbT/SLGFCJ1LTbIdme/FRyur1T68oMrsO4/MCN2W2rB5QAmojhzXUYXO5ms6cpgWgHBHscO/NhRCGD1VT/JQU6Wb3E01l6R9JLuc8m3hemPMzNyzoY6JVSXMigu4fyyhEKoz17zeafF3ppEC+xwbUUfN+Z6okUiYceGqm9wwgsbKQaIYwoF/I8W9smyRUBsRqhIe9SGUcxMwxVUAiCI/a5cu+DJ0CKLiUKByfT9yJgg+T05b2LZU9v1jXrHahyd9rbRafXhGxA4xjPnnweC56Q3q4BnNDfiUj2Qh5BOVB2ec/6vhIOJ5X5hxseI7Uu8sl2rqjNXHir3hB0mZUirD1+R6NmivilEO81NoMI6SbvL0PNbMs+Va8aVnFVl7X9Lm8LTYF/ne0/5+R42rbnLDxCZUdbWs1nKanIrYYSBT362GW3iDJF1X2dEm4GPXabPSYBUaqjDDKDzld8SYEcwsO6farpKXpfQ9HNi982Ovlmvew8tiRmuEnURaWl0nUHGEGyTk231Yq8evdwnx9d8aBiCcPlR3eYUrpZtcnCcLaqk3sNONeO3GEw7mwwKdSjJnA1k8WTKlQhIZiMzdUa6sDnd6HCWwy3dzBZcBsGXdBGPDVTe5YQ49BdsOW9/CmcPDIsKZgaitTYMwpIfvwaoTlgS37ER0AWO/JxbTM0L7JS8C59d/aVAQyoMMN0kTszqQV7y1Prba2la16t2XFUBQ5pfTkQnNJu+yajg4GfCzvoM0CCsLKJT9ufoLwwCE0/M2ojxLWje582i+nqv1PuX5WQj8g2zBBCuL82Kik+x0EoS1KjbYtMzmFJfW38Gzh3dPDrkLjRLYlUvZPA9vQVydkMP3Oy5cdZPbPduqH64mno8ppAZtMQ+2Jg9ke07rAgYUJcLFqPEaRQOsJm2SRAJPQzll3sTeWrGfFWmt/Mz6bHAKTirrZiMFXpPMuU3DpSIjvuG7/odT2mUnPyu//f5hAMLptoXFa3Mzjt1NrruIL073ccqLjKMOzszQoL0wa9C5SN4mJqGwgA3XOPDQFs8hNUybR6pj30ZnDKJCpLeEB4wPV13kjq0BPJ9PeiM0PwaZ/o28oc2gGfbk655fDKMHlUvVVe95K6xFnmMrp27qhSZlCjPTGCVE3hE0BaYYV/BVpqU47sLwwHZnr1GaMLrJ3aQnl9/lVa/0ek6KUYaRLLGD7cG6UJ0spFgzh4AcPJcpK4dmVKJsLv5MzRsyschIgX0/mTEUanzDAps2F83ALHMioMOzSwdmDzPO+ftW+zgbVXgOgpuTR+tNsvFSayZR6aq7MGcH7PqCr9mHLVuYWZitL5743mEAwunN9MjC3PLyeje5C0uLD05f6f2ccBQZbSy5QXvd5Zn61dakXoVZzbYvPvjQ7TzH2TBtHukFzX2kbijkGxfYmGm60vXf/F+/3KRfb9JP/ftXffJffPIPX/MXP/umc2v9FQ+qnfvK35281iSasA8cPXrs2INN2p7F01bu5HzA184fO3/02GMB+8FnX3z22r1Pzv/oMADh9Msf30zc8uSTT3aTe8uzTya+9fm1ngA8xugmRgeOXj/64GGbBu29Nj+/iZaungiee/36scOaRdWHbvk3tw5pFBntin0fySOe6fMbFdjct9z80y91vHD+AS+qdPelN/PSxj0PXaf5huw9dancJPbRarF4eq3WpEtXStVSqVIS/OJarbha3Ar4q8Vz506fe/NQAPHpkbvv3KoVt7rLLd32hLfVU2VYZbTFqLZWLPLkrKK97GxcvPv2U5H2+np17baH2VZVHKB+X0gjBnaSnx2/YYFtpKaA+dlSudSkICF6sVKt8BfKNIxKnyejc+fWbhX5ptcqpWK1WhP2lMZfquUwIXWt5j++hW4fHB1Nuvvuhohuck+XeILTcz2fw/vO+12tMSCXPNHexmNCHJWrq1uV8latWrxz9dKQbR4psB8nLlHwNy6wNXAIXL7Tu7t9XPwlqlL264P2czZqX/KrbY5TPOVtNZI7rz0f4Kp/AhvOmagpsFZcYxOnq9yyt1oeeGEVz6q0P9gLq/aVvOJQd48j1bGfR0kFwm9cHfss406d7ry48D36Gmmki43at73IV1dq4QrHs+yE77vcrBUpFmwvyFUt+MPZzAISTdxZbuP/9XVWaFTHY18tVcIV26/uEWkwm/g+rsq+L8FwVadHekHzqJHF7HD7kgW2asOEldCiT2Bn84TwgzWy8/NQjlwQAe7DoIRNIHZLOlfWgISmauKGyWCsy+Wt4UsfxzQ0jfbmcRlvzp/M5fg3I3exwXvPZS2LPJsMceHbkkhO4CKpPksj+VLTfhphDPvFlcVt/nJooBLADnwUtKQL3WRYS12WeJqp5eWAv4lx8qqeiQiQV+oGVgP+vDqXTkdqkEwV1rNJVRX8hZUz5tG14dwuY9objVTHvvvEYn0uv3DVNOXoFWHw3mEd23m8cFPo66GbG4XZmYD/rIptXiMyvFkE6RlkbfaLq6M6z/weLrgdOfx8CzNIPRYmD1Tz+QOF0OEbgJVDc2ReOBdRbWYlugeY5mHXgk7An1sqyFFzbOH4wraxNngt8Jj2TqME9uqHU6Yspcx7Zlzbztr50O89oBRfUY8Gn7uKkZ/bNqM1cVIrrvNswJ9PwJmWTO89cHV0GRqGnXQ7AB3OFO6DWYjElj1LzqIIX2ebSNIVMVYGhgowI15ZqQx1NpNiC0lssu5Gn6+p7i1rQ+bBjWlPNEpglz7cTBqnWIpD5oXzknjvEs+duiFwRZwE5WknA75psu8oWeHtZzOlHMhyoW9cuRZWESQdckPyQ8lEtlYjiRcoBS0zC8wTsQVQVcm1dJ81zyZQrOjLjUQHYe2QnLV+clh7VUx7opGqIs/zwIGUCVQ1C20k/KTFrxuu8MJpzXaxoc5HysZwX56zoQcEpiQBIkWaeuEK0BxyOBo7VZAAtfw/ICJPEpajqZENpcDbb9nisKgZNmH9EVq7ngYJOxnOLOUk258iSr+kWBen7xwyD25Me6JRArv2VONLpjpvKypV2hLsg0xKZriSqUjsDi2DROHHC59SdloMSEHRctw9cQUUmIVuGMzbrRPClJLXkGop0YnDyMGihILqKC1lfBmdzIVsbCi8PxFX2pnphWt31nrfXMS07zRSO/bDMsiYaRMskbqrCI2iDWApsSDCOZzE2ZWQVWCr9xwRfLdhwYtCa1dcmSohKtzsnn4h1QgzCcPgLahqrnBjlgr+vAsbDil201JY+4MdTDHM5oQOTgz/kcJheWPu5JJzWyk2i0yARuqPzXTsTGYqdXDuDkfd1ERwc+hfzS1pBS34/CS6puaWj4U6cgEcWlnfFMG8hmPBqKN7L1wBjW0A2USyu47dCC5FobLTke5VB6oWUYbYltFalpJCNVrGzNfaw9/fkpM/9fg4X2dMAY1Ux35vmi2gDIrn59ZnZ5cWFpsU/Nj0/5eeDT6fW1xfWDwfCWliCNnYrtcDfn5Wuya1FCTYHVcSD4liC36Hbj82YKtzF//TaqxiT4JGCezbn3OSyRNzF+GTb3nbJz7xir97W5MON2n2xNXtpauzNPj8oXe84xUPPUuyAX/74vGrc9a1swH/y2QWg0gw80se2PLS9b95zjs9zvcZU5NGumJ7P33bpbvXarfWqqVqtdSxcpWrxdVye2BUdetK8NdKtdZSqf2t36+p+gC4mjiw08ey/8GrnouX7AnQKIF9/ypfrKpsyeIOP2XhvRm44Va9RspB8XmlWq2UI/xqaWurtnol4HtvOmFErX0veWBnrv78h7zT8f3MJGi0K7bnXTp166lKA9gdC9dapbbGXW+Df/NsX+XIBXT7g2s/f4wBWw91kZc6sIH16aoXX9BMhEbqBLW1tcUDVUvVWsNvvEmBv33ww9B5sVoplatewF+t+ct7SfBfs36yJebuJQ/sP33YO13sXdgzpv2nkZr7/D+rQk1uCZjwuH8xUy/KxejnnZlHuedyk7Z+/rjT4oj6Ugd25j9wJ/89OPjHNDSNEthF7oBeLvPym+xPl/fbkrmusWqH/2qLrPh3SyoALebAPQIb8NSsB4+IrJjYoss8z6egDDCTTjLg05ySBNGrzdTU4XrWUAN+/XDhjG/FvAAy3Fsr+T7vzuHSvcS0Vxq1jr2fVP2dwwsgmjOsG66adOyYa88hxe3wKlSbZNU15BoLB4PPdSBn5Hu2FwL+Zt2Fh1fMqMfgheMkRwM+UpYuFyJAT505gmfUeaqpdU3Ds3M/6LGDc7mvEJmY9pluJGAXH9IfO+LW13vhKuBv6yk/GWs7noHWpGkI1cTJmdYuHTKeDfibeXKHbYbKD3+StplDAd9xFlqzYazUr2GKkznFgUZu8doVr1QrDxvbFNOe6EYCdvUaKORPnsW9cBXwaYMrgB98DmiTbEMzDMcWv09leEr2rBXwDZeodTOS7jWVAdSw7YCPVJcv8qHWXUhuGgi6OO9kjeTsr3tb/BgRm/smQTcSsL07GOoMB/bCVcAngQNhk4LPQVDiwEioOKkoYaUAHnhgakrAJirV8roMQn4G5GwkSmBArt6YYSUB1jwCVcsixjzKzSaea2QtvzK28YkppBsJ2LVbTMmtY9gLVwE/yUNgpJAvSnaImEfHQJoSPVRKYEMOHbixYeNcNL0tW7xzhoZFbJtBeZ0KMbMyugY16OYNhKFy4C/ZyFS2+otCj2m/6UYCdvkOIBGEjV64Cvj2htmo7tQkEXAgImYclyvkYUkEv2iCoYmIGWLQaRAtqcAUdaoQEXRJNv0Hh3yiUIdQXqws6X7eK1drtfYcHzGNh24kYFfvBaZqQaMXrgJ+nuvYkiRKwAhgB/Y/mHAptHEIfaZ2FAAV9kPXwkYCpMSKzXURyCspBPbFvNOYC4JUBDEkmNjO3C2P+ofGrWHLXsW0J7qRgL36IjCxyis37o6rgG/rvkFD4FLYs8MbGW7nhtELGT8EUgjQVI1G72tMoEMlFIAINEFLDCVWeKZ7lWDlsf8c36VPiniRiIq3dmZ4XEvJyjgPjwkZqFiFvXAlgM0wmYngcnBgG4wfBTbTbJjQkN/RAIRZExBEzsL1141tWGJqo4qfRWpvwC73U81tv2gzA7CN7F64CkjjqUoiXxgC2AzFrRfsMiaGkIApbLU3sgYghZdDS2yrl+JT46Ror8Dm1fjK1crY7LSVeVlCfjWU3XEVENR9s8gegI0aUZaDAJvPLIzt9Z/yanGEwYSo4lX2CuxsqdpHxeT9au+8JEFV7YkrQaafJmp4YDNk83ouId9XRYyQT4yWBkhMF1KIgvPTh/Ovq8YXjpOiMgN2yTu9l8NjdqwR2GcBcFWY74Wr/QO2Yqh2tABc2+ERKpq+UwOSn7g+/WjsrTox2iuw2QvPj9OUVb0GZPukhXrhat9UEUQ0J5mOOKoylZ6t18Iso3HDS4uSD/kqD+Etx77ldi9OuzAp4umH9wJsWZfytUplbIfH2h3yRn7TsnrhSvD3eniExHaShRDYvCCfhpGodmVD2y9OGP5cMwxoaPbCxs+teqvxkj0hagD73NDATsl6tlga38JUfmhj44S7nO2FK8HvZu6LwJg7kgjdRkMEaW4Lytn5WBFApgQneVXsgM/+YuPITEJKozU6uPxur1aJgT0pusTr3XjiZs4ckNiLT5b6qA2/b/RLS3UpFVUMdsZVQBsaTCqEGp2ADoAr+eVRRcYdpsjwCJoOYIuMPAp2oxU8Gcg1brYO+EEDJDD7tNdPnbuYRkMVr3Kl5BWEq8TgtH6q1Fdh2f2hTy1k9ZQpsNsNV4JcizoKEpmgOlqv85h3PSPu4KmCMVVbx0G3Q98Qhnwtmmme/dggGIk7frFiy9P3eVsxsCdFxTVvjV+pBytwekC6fCadLXljNGu9YcaV5HACdsOVICOHoYsFbrsBWwAX8cSXbV/TNcFWEFaMVAvXRATz37Q2wMz8SsWvaBTTZIgHd5Q/sJcVe/nucnVPZXsGau6nZnjIYbSW9464CrmO4SaJ0xXYjYeFqohtsPVfa61ro8MwK2YnsGXWAITatwzZ/KRXrsUJ3ydG3A9+7aM/Mdckd0DKQus3b70yxua+oe62AntnXAlyHWphtGsaYe4llRSHR7a6M2C3zHAdhUp6J7Az3NUPtyv5sv4DXrESr9iTotUt35D9xeDftQGpXLn0qHelNr739/NZm7uh9sKVWLFtApkeIqwknbD2zYFAIB/7VvAWPjAVKqo1sS9omRZ2BmGISfvMkjMf8FarcXj6BKnENeT2fB8DULUyzqzmP1+3eZLgXrgKqABx0oBU8DtwrfPqS7qJAl2FLf+tOrYPbNWOHh53ADbt0LE3rjAl79QYRyamKFUrrfpxdUDyyv4BaXwXbG9Yzram7tsZV4JsS1ER1rrr2P7qnxY6Ns5iKzkdWfIB3xRwmPmdECOaeZ7NC2pBQxTXUeaBn4oE0DtXuSE1ppj6oeqfZ+sgklakHVfQ4WpAJPAAUQoTROu6YjPoShmg14MvzGOVzjjRlDyMqCNq1CjsT+tVJ9BcTBLi8Ok0y1m+43TJq8U36jH1SV82XAC64yqpRsukAjClGMiwwmK94ULdpIw/EdLC98PNY5pVQSYsS8YmD4ZCSYe2ZoGMYPOyZZZNbeEgrim8HpSe1v+SbWexE1RMfVL5dxbrwDT1XXGVMTcE3yY5Q7MFbjtKdTR0Cp0GqaJUJZFA0YVd5vkWFBjym1GWITkwB8PfB3Wj/k8exxtf0MTUJ/3lbB1k+sBVQEpuHhFMOlKchT4BhQJblFGQl0HRIDSMjOBn0kyvURWR78HWkAV0OSP4TIRt2I7IQzKTYbONTZdvrxaLq9XYjh1TX1T58nI+lQHy7riSBC4LxM7nLZwN+GHemxZKK0EmHU0jVHVDFduPck8SkRmKUiUZtWMzaSSHxc/p5vIUP5Dq4J/XirWtGNgx9Ue1L9sLKRBmdtoRV9HrFahaGiWC37Fi8wLVeiYzGyAfUwcZSwXhDSaBjczlWY0EfIfaV49FM/RIBxdRUs2L31+8yZ816btqlTiAJqa+6Z8sP3aZL4ldcKUsHZNbcMuzkeXraseKHRREzWtYU5OXjwnlm6nf8sHDWsCn+c2Z7ZQcqb2eMfNZOi8qrmpLsgwORmqvn8gyhRxf+MJYnR5jusHpgYQkJfPE7oqrzJKLIpV81w/4VaOFFUNUBhZat0Mt9WRLHDqbN1Qo7UQjiZYwBJMp5Lw6e5Owb9Zu0eq5uoJmn/eN+/GVekz90UkASILQbrjSdYZTiyoBXwG6pEcqIIhDpFjiucEk13bklIhQPYimOEYrsCWoInHY7AQ2UjCG2vLjfrr32CoSU19UPsnvXBDtjis/VCA0crC1PApskZQySJTNHqDZqtECax4aFvCJhlU7ajlnz+L3QZHftwMbI6S57v0ev9KNgR1TX1Q7K0kaMmh3XEHElkwk+D6wQ/tgR+J3zFZszQrX5IaWjUUCbmIj6rYBW6NYEb9va4AE2LzChm3f5gM7VkVi6osq13gYF1MQuuBK51GNiiJwh3xgh/Y5kfjdaRI3gSMnXLEl38MK44DfDdgBvxuw8/dxVaQa36nH1B89y1BnQdwdVw1gB/x2YAefAzsgpnAjVQsfIDWALdhdVJGA300VWXzEK3qVSgzsmPojBmzFQag7rgwIMYKC36aKBJ+LU6RGiaJRrUMVCa0iOx8eu1tFGofHE496qzuU2I4ppp3pGkOOCpXuuIIYK6E1rv3wKKwiwoHbItimMFI5snF4FF6qXcx9oRvrzua+wx/21kpxWpGY+qTSWV/Hpr1wJbxM28x9wssv+Iubs+qbSSvygAL7OhRuqgbJqjTyAB1Iab5PBHzqqlzVCe/oZch0F0KWvuJVapW4WlhMfdI0kJO5cL3shquAbzWKQgpdpAPYbPG3p915ObjBMRmwUwCKwAJ1XlEIiN48shVbcUSeEct1zIYK0yBZxtCwoTH7Oq+yWl2NKxnE1B+9qGcM4qJeuBL+2X7lJcGWOoDNayuRBSP8ho//aQFcV4MuBVMC+LKZAtQ2RIyktmzpMkinwp/TebpJ8In3cCN2HEETU390bpMrG6Gm0A1XYsFNHWJnRwl0AFvEOCYVklPnxZIvmZkzKeCI6kyWofpROVHKKaqIRVMVHkcWnk4LAMFZ5OLHfo+p2HHe95j6pPIt7ACoJI1euAr4fhY+OeSL2McA4chg+jINzX0NIuLwaGUVummGEkz2H4FYxJrZiMdRTkWV/JNwGqsHvlbziqVYx46pP6o8y1A3TdVeuAr4JM3040geoI4VG1HLtuGyyHyf5jbvjRmRgWfesJP5lkQimUN1g4rUUMSBZzJmJPThzJxq0Hzy2F9UeAWT2I4dU19UvEOeWsSu3QtXAX/9AlvEo7DvjFaXQGrjzGzAyGsqsbKpqIEvddS2Q9UDG/mVqHHQ3JjNIpIL+NBPzqBPgfyptVpxK3Zcjak/+vPZ9cwhM9UTV006WF82bIpyOwC6SXIL4BX2zTrFkZvGqSiX5+5TKWgJJ9adeZIVOdSgCvxssHqqUvG82yc9XDHdIFT5fw1FoHEXXAmy5h1ouSIfTieweSYoIIk8xEx7wQpq+4aqhQVLMaItCdAkoGg0UvcRNVEvf8krxmmEY+qTKr+6mDVbM+bsjKuADTGvWIBDbhdgB8jvBuyQ3wZstp4bVPxcCRogSZ8tl1fjGJqY+qPq7/vAlnrhqh3YPVdsYSDsAuyQ3wFsAtUwkVTQABO8frWyGltFYuqPqr+/ntcjBQW64SogHXFgQ3GhMwpg052B/Tc8P3YM7Jj6o05g74irENhKf8AWXlVdgB3ydwZ2wA8aoIOZilcqxu59MfVFzRVb6oUrAcrmit2RMKcd2EMfHptbRruSr0sXHvbim8eY+iR2eEzKLdDdGVeCuI5N+zg8iiDKLsAO+TsfHgO+aIAuv6caG0Vi6pNKv7rgtmY464KrgAxEDIoFLrsCO8io0w3YIX9nc1/AjzTgVatVL/bui6kvqv3Igp0CfeGqQRokhqoIfgeuM0DPAFMP8o1AG2J3E0b5sg4WeandBqn5BBOxEX1EPuFCkWBHyfmtMsEKyJ32Yve+mPqkNywvFmSpN64CUgk8C7MigU4HsGU/xzaoB8ifniZa1CeKZ5iUYM4I+GqWICmSPjtjmto8QiLJWtJKpRrSU5dvX4t1kZj6pE/N1FsW3K64auJyXlmgjmV1XbH9mmEAiEQkdXvONYxM5BncFXY6YBsKJO3GcM1SRNJLY8blxdv9O//MK8dXTS2mG5zWfnjOAHphpQ9cNVdsazaPFa27jp3mC/bGZnCDQ89at1haqERL/FF1IvxkXUK5Bi6WbF1PkcRmeDN5r9o4AqSZLvL7VyY9XDHdMPTlfMvJrhuuBKF7E5bjdBYwFZEJBa5YyMcDQ7em2iQ7eyasaADAwUPrSJRMUHPaQlqKBtyYF/MUTQf8mcMm08pNni8+c/0pb20PVati+kaiz11f1Kc25F64CvgbhzWkuVkRwih+J8woOJtNaDP3iJnCTpOFC3NJoXog21hq1VxSc5iI9K2J5GzUGxxkLi/bFnYsF63fIr2wp3JsMX0D0d1nwYPHk1qyF64C/iJbOVOF0GFbqCTBjQ0lSEsoWjRYlxF0Ar6hYULllBnw+ZOwgm2RrNXmWUcykZo1BrGSBjuAOu5Nf3gqXrFj6ouq94K0QQjqhauAn5BbNQ9xAxnc2NiQ2prtROwsG6AAoLjRUTFJWiBqYUwBy8aCD5M5drwMz5pSwTVUg2JDwejErzwar9gx9UXVJwGg3ImvB64EbkGmAExdrNjiBjLQTQxIkaW0mAG5kUQ4l2CDGqTV/QTQkIshgW11PxBG3OydcGleeT/PSlmpjrMQZkw3JFXOMuSE6Wq64krweYGCCC6FM5T4AnuCOgJgG/O2Ak/8H+eqHl+tK/GKHdOuVJ7m+bGh0gtXfQMbQX7l3pLEbJ+Ajcn8sfmbqzwfVCW+WY9pd2okft9HYGNENIJRq/fHfqgiCkWbF5f+rOwVa7wud0wx7UrXuO+0BnvhqiewhRtqF2ALfhdgCyW/SwNQXc1ifPwVt3oeA3Z8AxnT7hTo2D1xFfDbgC0Oj+Hxc2dVZK/AtrKJpHZ2bukX7/bKXnUtjn2MaVeqbfI0woj2wlXfwO52eNwrsFU0j5Tp7MKnvuKVmToSR9LEtCvt+4rdzdy3V2DbiGILL9PDr/SKxThYPaZedIcuQZR19wzswN0vgW1S1yIOezIPxM1h4eDtMC08+nydZ4/XRKlfK2m31grRqZWjFCJMKGXK+z2bt3tb3pVJD1tML3Fae5bXwkiEpc2zviee3I4rEfDiZ5EMSbivhis2VGEikk/VBKm07oQxjoqGDBDJk8bEYWKIKyJoKGlgRrAtaRBBqho8gJhx14/9RrkcKyIx9aJ7AdAUagvcYbUlmiXAVcCnDdSLJVus2IG7n80WVpSLVA3z50hSpI5yNWWTRLKtSjowkxiKRCUK4VEJmRDZGziXw8jAPGqHKHgTuM97d1cvTXrcYnppU+kWAGxnU+AKYaYJSBFX1SauBOwyoMXRQ7ivBnY/DWNoa8uXhbOJBPTCg67II8INggupiJsrkFbWNZIL+PNq3s/UKviZ7by/WGPsp41aAuCbinHsY0w9aOtd6Y2lur0c4MrBy4dMWe/AVUBHMnqmwBbZjsTvwQdsqTVlKXMgiB3jRRrr22aLt9/UDLUCfo5o6ytSFOipRczml4iJdI8VGvtD06t2+cLbvhSnYYipF/350pEVOaWHuMrMYgUa7bgK+Pcs29zVT8TqtnqngiBrUyohtgCNqhaJZHPlGrpLRd5ipoUkTaBHswca09TWhGriR65Fgi5fgY99d+19sRNUTLvTl42F6GGQ/d3eJLvgyqXEVkNcis/1JjWyNgEnUL4dqNguDvlsRdZ1QoUZRjEI5wo+OzfWFQjFYVLFGdnklpUmGzjKTb8TwzqmHlT8lF2XpbQc4g7UmT5rteNK8Knl2BgJXEZ+Fyy4PIwrNFxjzSE4Fyn+wddsFDmNajydVOT3KckmJPSjbYb6CjPNyoyh3XvOOzfpgYvpJU5vyM+1ZA5JpxBB0OiGK4BsamNF3FSCDmpLSomwwv5rTZMGLI2fMK266kCKlXkgi9A0ftj8/9t7EwC5impvvLrv0tvtnt5nJrMksyXI3wUlnclMUKbvVpcnA+kOOiOR0eFLnh1MHPWBQBqNMjEdhDyUzYSoL8REDBKDCUICBgUFl4DggsgfFx5qMIgCiqi48NWpu/Tt7ulMb5PkwzlKkpnqvqdu1a9OnTp1FrcQ9ViGczdPo8fyOjzPzf/KxGxyymKaqQAMtYga/fyZIvlrA3F7MSVCvIcXbMlQIW2eTYVmIBMUW3m21XLA5hhXE1k25HDpotVObco6XOJYZcwCvMPpsAEbCVzft2d9oEpopoFd/OtG82k0KV8bCM4ssKEU+hTAbiXHSsHj7WFYl5uoL5YSH3YgL8d5rDB4V6jo8R5X36mzxr4SOlbA/n9FbKsf655ZYDMAbLYU2HGBJ/q1JxQSWMbv8PmtwyPRdphgi6ULuT3kPOp35A+XArf1OhnP3j0W0bEDdqM5zBB9rJcAuyDHWaOBDb4mRZ8gwA5wQqgtxHg8gjDsLGwOsXGBCxnEttNSwBb5PczWU09AH6gpJdsMCrdjxa/cc094nfv5XrLX+2cQ2DRAvRTY3t6+FcPxgZH29vaOLmdeFYk5m9tbuoPD3Qb1Lo5Bcfe82aSvZfgHB9UTzuD3agf2sX6/ekn9Xa/gK8xP3VhgCwBspugTBNjtfQ8e2bv08H1Hjtx35PQLnrHommcuuPDCW/duO2LQvn2Xnf7Kre++xmzftva+C+47AQ8vr3ZgKwbBrxRZlk50YCs39TLFid+PCbDnDNwkpXASdDYFS/mBUhVR0kSsmQMpYon8b0IzmzNYUnDuxBvQfxtgq6pMJkg84YF9ci8XawSwTXOcX08wmVdFwFAdith9QZCjrYlh2/+bAFYtO0EzvQWm8RCWj5aeBPT4TKm9vJi/Yvu4rJEnqvA3NMsp0SjBoCil71kF5b+ngrhU9NwT9HeKpJq/kMm7SBqRpvQnVRet9QwTCGb4U9IImuVsSpMJL9nsiihqEuUhy0bPNMnq7AkAeOntwwBOy1eEAK+7h2mxgL2Cp3cmedwKK92ChwuZ7SW+IgiQ64tYeYJZNu5piud9RcAA4xhxs9HQV7GiZq2VXy015u2VkoVkSSY6q6VfsfirFK46rsmEY0UDTBsAVBTdTUvRsrppst7+0he2LSdzRar5ZkWWRA36Q/7SV1Q9o6R/V9H0R+uvCYsG4C6bHvFKekj/vaqLiBMp3cvjIwMFEeX+wbYl3nyJGG/IT1TwSB6YI4HWgLvVyuVn/d7yFQH57nP0WznRWrk407EmbLt7j1084g70bv0nGXyQAoWAKgfk4vZ633soizUNl3d/zYJQwvrE2SnPX5eMRWJRIbs0iDBFlbINLfxuAlUxOkF/IlpBStMxltahrmRgj4GFZn6pVn6KRJ9BwIy1XBYns4aIBqaSJGupZCZFO5UFjlnadCIB+w+LOwd9TpuPUvNqD8NaOSTbugcjdtwu6mB41uOxqopZ37OcmthgW4jderHV4I+Rs2lnt+UUJYSGt5IHRvx3k3FSSnS4YwVs6vkqlULPej5tK3WPLeVPNmNJIpJZUZWSiYUEKLqwrbu/dn7kacm0FdCsSqk0+M6kMxI2tJQGcCF8DBzDn8YGlMqQhStaCpyayqTpXgE/yCeUETa5JDE6f35oIO/01DIYtgEZDXaGuKa7rzXbT3JSoWs2+yyfEcvpiWeFaNOATTfxkW3Ae4nZ7hH4AIPgISvIAOWjzW2n7gKaKWCnRTi1qiWqkNlORBCZW7EE2ebnqFiW7XXMtGyKiDLyDymbUujWnE0qWJToJ2qe9CnvslWJSElV04jkBF0XfpfTR06UdNzpL1LDKJnvZ2wAsKvlcrAvZSeXrXr25bNO+fjNr/35Z777hvXLxicgCQawVdQTL4PRpBf5BPbuHsvpiQ2ZmrBOieGAi2FarHZAvS2yywK2qXR7Aq0M7xIipvI9GgZvv5CVUJvlvW4eOZx+tITAQsxrjccY2BjAdhSfE0VJTnm0LFgBBso0SVYPP/W6m2/51Od/8IOv/ec3P/7D9zxKhLVk6sK64lBbv+GNTc70D10wKpkHzn/907e86xsf+8mvnvvUm7/1s8PrAWYEYIZyrJ8gqx8m28LVrJPz0Bmv/XbrQph5XSf1hRMosmDJ5/52BEZQhM8NwcyRNdXA+amPXnQ4GY/LOgx6WTeyHyaRk4nyrNcycoDDkiOSP0xa1hHzHyGvO+5p8RScJpup15NhJSHqewD5/QTYql2QlRuQcqpJ3S8+kcRZD2qeV0RrDIogTwpnJkq+ZvGnOiho0pkH/vjN1sE1cMUUDvvDRrkd56KeP39ybxKnyLES1O5yC3c6goMaXRiEH1neoOYqe7/wA+7KLr9+JqJhIH4nCi++7R2Xr6ddBH5weDEsJFVRfoTFoaSqpnDymvfNGUVQiAikEYo5bbd5BAD//D/bSJeSOzNERslk86j1PRtN2rUEujyUWzQoHi0qJ8q5GcFtmfe8BfJ6qtx9Li4UdXlt5r0Ykdj5lcF6Q5459BlzQGJP28FiIDcK2AQhqcymolQTdoptBYNG2YUmZzZOaEp2+RW/XzJPj8SIgWeAQ0ebjxygyY/zAl89/0Ki/kq5yVonnGgbFNmKJGoy+WPn7W9qi+gO7A57MD+1Nvk3rPv+C0fI0WX5LvIlsF/UDGy61Wjbz/+dK2KBmIZek3/4fLabYuRjHtlPPpveOU70Ee1EAbb0IiR+t2DHBUJNtO5XHpd8gGPceVyCeuxEzrISuyTFGQ2DtJ7PeRmv4IXn+uYox/X+kMjb3LpSPFMB6IRLpk14yg4SpRZMKUPkj11vuKudHI5hkp10tq0INwgEolJuDA286epd5DGTImjsmkwfWYHGbVu9WYIYuj9o+1/4/QaaRCCWMAeXimu/EapBK/x4P/+bvWDTJoq+ks3BP8hzshULBFjOROLnNKxue9+cMade7xuOVcDLaaxcAAB4rjnAOID6P/J/9sH61UBPEskDsvLx1keKs60SHbnwuga58m2AW5896qCSNMInKrCzZPI7fWOOIvJDmBqKRcoBm0qyjRsJyk7/1nlX+qjOSZDlKxw0CjSfgYI9d7/xbPLFDD1gybolZtqtyuI8TtShtIY1eeiV176GlvbxOckMhGNOiuWwuUf4dJ0Eftrwid8+M0TWbdJcQlVcEC2nfVM0PP7of7ZT9zNnWE+G4bTXNETm1YUuzx3O1g8fkLNZ1TQ7HnefB5WmOPPk49D/XYBNDdirbfYdy94Z8UWo/Jsa2Go6A6c07S1/HtbRa1xPxQzVM0YA56PvDDJ7NLxjjPydaLnuqQdAI6HTXnVFBoLHdPpfn+4mj+/y6QvJWD1OIi79kQj9MUYLco6GIU9A84bXvj+NpZ0TugpTweHVaiefSBFo/+tdww7/WMIAcHhQfzt/2AmLmIYywVKiqkk4AtkDHMFTVmGJHkoyuRPA8gdphF2hvC7y7wJsCcvJ1OpEoccsohf+5M/mcFlVZChLpOi5jzjD4TCZYz+ZVwg1NjNbWXqvTbw5CRoinc9dkEuLqqJfDVb+4hMS1tJq5tB1LQnkG+syHpsPMtVVEMKCNkCNNrpPONG6X91JBDZcMIF1I1UxsMWhNMavvPFi3f7hMHk5/DFaytZv7BDm+5JXh/3jSvKvyIrfPkAWBaz74580VNXzY//7SWyiGmB1D4r4iwkNGr4xhcA2ISFiLbP24/N9g9ScH2nO6yAOQ8d2OA3pDZM/FjFEHUIdv1ylSBJs11XcZajUhLf0m8YK0THmoAc4M6rfYgAJXeCfkYgzMo8I98DbDql4SDZvLStTRZZhVcqdxYKRxx8h/KgSH4uZNbX8cJRwOmOxRNjS6vWFDIsq8r+fXIqVpbaLreM2w/++OjZhPr6yf1OwiNrbWg0zfiGwFdOgLOK/tqAuBHqGrgIg/+C8wfAlX3nuZ2+5dSfRoyf33/7Z5x48j6g5zc26OIUxg1D/M++ZJJKscksFWO81srm/nsyJLxaBGoI+B1Fv4KkD3uu/8Zkz9o5rWmr80Fv+8T/vjW6ivR5zGLldSN9GX/okBmENV4MVS+w03vaS05xix6hp3CM7FFk2/nDXmrmLNhiGEr/xMedoxKFvdKPof7aTo6c4ZPW/5umpk4pr0PzbADsLzEvN1AS4Dyxw0sSbhcA2zG6qsvumGJl3au/y+WkGt9XX3fxKVr//o+c8+HQaJ2/9xT87HY6Ek5oOEj7kJDD/4AQ50KXSFenYur8Rxs/8AZlZOp26EbnzK9+5t/CjkohTWy79+Wlg5qEJ6hL63/0f2kivSFMT0wFbNghL39pD9BtyYHQ49Q0ApLVzEI38981PXvPAxqwoS8llew/d/r73LgDV2hnWV/eg3webUwQ9dMOkroqY/T8+VFw17N8G2ET1hIPSVANv6I+FwKb310Rqv66VzLLfYeqejvjvriBbr+F0pN8x6tci4PD3wNVvWzcPNF8nWFsIBCKLrt6CVQLu3LTdo7iQJOUfbAyWkXEx4kPcG9+5PpsXhIbTqgKesurE5iNfa+3SNWB6rvM5XvwvGS+X8LQ3tppBG98EarqVUpfaXjasfOPl1CfENOzLqSRZwMoDN/yqBz7kS+gKuZ9Auwst/vuBFFSd0Ptf0VTMBNHDo6dxh0d3iGkKNHnsTyBj1GT5wQotPT0MPeksGdKmBtaUVO7msVEXNiYpOBehiiUBtqwqqkJ9NlXqEyHLmz+MIgmQnHQaUdefXifqs1ey5dJZJUJ+6cunnWSqorAcFnx4GV0F+kPL79Q5lYhhSZp46wY0RuShjlRH32ueWZXBWCn13tKdDsg47P37a64kPaSXEbCvBD98EEvAEr4ilXgz2lQQnMGZ97NhH+S0AyuiLwbdXv2npy/dWTr+II0VWcz+8eZryYCEL6YLiYwLOU53fXofzpFFQNZCppEuEFWRdgnyeXsCVrJTjg8VpAkmwG7yuD3WjXgAjv/O/NWjBWwzW4InGGfiwXwtdSqrfAMDZvsKjgtuIkN2sfOjKUWt3OxVDtiNpmJg018RJCWVTFbe9UsUcVLbbRcaHd3x63s2EoUSLpLVEqAp1G8ZkDv+188zXWhwlFq2yR8P3odlLanXqyzvNqtpIkHwu7/qDMeAJVpD/uv92FuSuRRFfNkbUaJdbXnhrq30eohe+6INz+3CSbxewlL2KIe5FF6+E6s/dIep6RrCReAmaM26j/9mFWmVJkrGX5HIHgYLZfsX7uqn0oteSqE1CdT1h6ewSLQR8TimNRq6xNE1MjwQN3HX4+6OkA3FsiY1J0Zagm6322xf6IPM73lTVkkOP2oZRuEd+aSU7ra2zoT1DTLYg13dfM/Anm/DMNcB7JmBdzGwDVEnplMivvW9sDmH9aj+5l+fQzRqVSPnO/JfyXsogGzyx3IQsOc8Dgs9EqNA833infqmDl8qv2MlieZ86SV+ekLbAF8feesZOhcI1Cnttz4kSjZHzq8b/+uDa+hxLhYhYirylWchJZwkH80pSk3JeP3/jPhGkTMCSXYJ19FEx/cPQtP4RrV0/Mny0siWBCqQ9Me39yH9yAHKPVkRt/1FAm0reRzTZLy9vy/stLmH+P0L4gEmauKye37Cab9wWjjACEIoGC8BdP4OHoIeE7bYsrv5layt3UcmNxgX+I67AEX1qCIzIraLga3KVA0hPZXO+Cj1/6LbPPrQf4k4LSsTEsROkfkt7a+hGshgF57Y/9F11MqMYKNf8hcy5SmVRnOVI/IBfEWwGTLXgm3FP+979ywjcnWSuhJO8Xn9l2QdpneOE8ks3fAJcnD1gwMa+eO6p/AkYScebSFN4twtJyF/l354GCXKz7obyRF1COyFipycAtgaHDqwOpnDeNnut4/QVTtIVBJn2De4+AryVaymj5/MPrmbL8BlOOaNrghaOnfTCqcjbG+PBzg3y1i4nSI0jIoKK5GTEOR6vV5baQ7Yrnp4d6DvLgismnZFFw/oMVdFQGQDUvBfWRQO08C3MdT/NE5PZBWqg6vkhFcKbIps0s1xAt5khhzgPiuARhEjIjjsj96AFYivUUpVCpNEJXtWG0g/Iv+6HKjvrG0EPvtyYJ0hrVqJw60RCAl/KRMbU1hc+8h8qjIh8OZYcjlWwHek/LBl1KVP7EAbHFSpaCZ/zb3rXBUntxB9oqAySl7JVmic2Dj8MpvCmdet8KFERL9jH40hz9/gduj4hdSkHu9tQhF/2AZLV4hnekxcDnDwK1/+vOhtZaMur7tEYudRC/9DVu69pkDU47ZVU0pAQE0gxPLzT6Pm1ek6OB2wGw30EmBnjfuUG5pgzq4cRWEf+sMzOUAWaJkgzWV1qjwnZq9kom3KRBW4/yswiolmUC56roCvE7CV1ZWx+OPVaBEVCETGn7Yd677dWcMtu9Rv3fwrlVRAJ06m8aU9sXmG02F4x/YcnlJeW/wOPrEOzHpOfwJ05Wb2FzJOpRSRHju1fCBBHte0H7Kk5ci7iakU3vnGk6juQzemK9HA1XQ0Z1oQlaXnhwP2REu+CGoKBfMS27XEQV1x80o108LE88G8JcA2P2Z+oM3DugOuwsTwKMpFXTqwp1VFygFbj79TpEa7SZZYRZLUYDDxShuRfgCUHQjdkqaHPhFmW7WFIk75PJnAA86CQ8rkzRejhQSnG8Dl49EkzolKaeCJ+T7L37mHfJgc5eYl0NzPgjaeoqJ6WpAoIvWxw8oQzj5HFd5m0Hw7/4bxTlA4yvBTbhlE88LIkaC35qvfLkvGbkI6n7UpFHlVxIj5NK9RNS3z5KmEWyJBHuIjfN1vkZRszX7o9ZL8g5E4CjvsavSSVi5qKciCiwyuTQf3u3nezawon34hTO8G8nlF+ADj9sTDlvdcAp7njXMuomMTjXDa9JLlgE2DWBUtNdPABhm4EcvXtEfoTRv5f/BHy2GLpc6regIZ9SjWBpqWQdE/sOwL11JjKTmdR649B7zoSmMqzYuSyxaDyup0XInQypeXa3RTh9Wsm8iPcvFhnj7IgsLKRXNhOsCZA11/bgrSM5S8r0FvC+liDUWaUTj09QOUTf4UZPHLS2A9VB1cAeGTWXB3feZ5eicJzumE73nX5JfNsT9E/q5vAOUrxIDlk2NaWq0bG16gUM1H1HgE3tXSFCyvYzvgvRxW4nZIIlyosZAPCC7G1fdVmPCyoWCYimNw85R0C4ispUQjzwWcWshuuzFpfVtUDb8izfb9mkjFOd0PKrwBpFBKozc5991G9DWImIihh74s41LrXgUkL5fx7a9B1HBAjmYrT4fDY4lzkoKTkPrh8G0wJ3AR5PzEueDfXC23FIR14o3Pdqwxa7D9egvOJPOvaX2OKBOKcsYiovvTj/kTaOAL1ecfJ1OREfG+b81DzlF6jOzyoZMPSGRFkPPH8SgRfvJwHNlVDQfyetweq1Auy6HCZobzCjxrtZcqIRUCm9OBPcVFgzHRIJFBPcWSaPh6qrJIo7EpCjYmAe+Z8Y3pbFZM6q7O6VT9OrcJbEe407AyL0+md31kbIzg0U822H/+EeO12erNWCIVf9KW22AI4Eg395/rsVhquBMJ05yy/COxBFHpI0SNePACLG1MTvXIo5KmKoSlmjsjPgqRIWtQ8+iDoqYkizeXHJ5IpuQjl1A/Wx+KkK499McabBkwIKmUlP57BxyxYzQoofnTGXpfKeKjRZfOEJ3cHtTtGBbseMErFAHbhsqGAXtkGmAbhoYJMjTpXBLsEssPXHbpOaf88m1PvPmJt/3yhb/esXdnml7fgefRkEbTeah155SzJDbaSrQSoisMSVi8eRA281GyVZ+3T8PQmeVVP5gs1CxZjPd/1Uke5IgR8X+LqJQCOwUeLOlv+CBudhRtQJ+/kwa1VA01VdMUCdTyx14co5q2A4VPwcmSyBZJJG+59FcoEiZSdh5Btu81ZxDhO14tv1Q6LctDRPs5q488C/lBbUPNH6aOs9kKVM6G08ndbQU5zJDDxdhqqxdlAG4ksB8/KrBVM2eWnIRln1l1zi/fO9LssCI3/A7fWMsfXvvkJPhHp3Ml3691PExgJ1AHyBkN79KkL14JpoWYI4K+dwFOJXVP/GqfK9FOTeJD1xnj4NxxDzUtF30OwuN/HENEzhKm/ocmxdSQiKuvuQNrRskklTR+ZaWuZ4+hK7+sP6YgK0qOPPy14FPugz/moj9dAL2qPlYSazARSQm/MB+On+CCtQb1nwOoVlPH4Z7m5N62wizCPlot1AI2g5DDpos0FNjSFMnzTGDqGeFkejZJ3fv3r8ViuhtQfg06nLFwODzyk08+QKS2SJMdiNO7Z05HJrB9aKFpv121EoF5lmzS572bqhRasnrfHg26ByZx+ewXqevHWAyxz+TtvFa/xQw+Ix4j3IigTaw7CDeGZp60qvjpNzZKOoufbCXcwADgi16m58Cx4Qwugv66CXrkQDEi2C/5spLMidWnCSE9TBNVSyWi/hedYIghenYsnFgyhOGW/zj4Qp3c3WKvskgOK3bcsi5GD4BqOLDZjqMDG/ZIUNwknDn3+QVGBxxhqx522Oyz3zn/pxdQNQT2dblRwHb42sihJ5sewgduSoz6AGlo+J1ETZCSgLLqZ16W1VRWS5ED8cNzdI/vUfTVjSVWn1QWrz1Nt9D50I5tGNaQmqppJ4c1KMvkWHLDYvJGYyBBT8PFqcjIz0deIl0JjzrB+3rRAVxpuHEhpUC0SCmwKSpXLaROBxFg+sZlOFeBVbfx9HZyeLTp2EQTC7kFWzU6ATlmCNh3qUcFtpIlR2k1jX/BGhuGU89vkLfBOJz6bT/R6D5yPxnSZE5pnCqCBntupfAVr5hLO93su/IGiagScJSdIjXatKTfLsPmgv9jEQ1BCzsTF8nFiYDSkvrGRWHkDKM1kbHHyBlQosn5atnLNU1VyUkUi9nXdVHHJr8fPQZRl6r9LjGtfD/STP1cF0ZQy18wEfFaLQ7F+uLTIOwx/fU1Mf8o8oMU2vBFepCtofv1kfT2ICSWtIXQRYJRD18AbHutjGMG7KU0unDX1S1jkA0BjRqOnxBEQo8EVmA40QzhquzXP9qItaF03Xmb84dHH3/bVld393lzw34aWDD65514PcgeasSt9rlgyc3SkyFOTb4t4gcJ6kRtO0szXD17CX2vLuQ8ZdLQdsXqt3ITuwocCHZ+imwAo7A6V06kFZpo0qQsvnQF3ffAJrjpRi1JjevVW2FAF0mCWo+1CbzlTeSR83Rv2w8ehhwux1wXEd8eYguBnQhGQ7xVZpH3VAlsxyiAzjHfa1KLm433hu1JeJzztoai3oGvSmQIS184jWVIboCzGayccz2Kxcgx0ZTVRuVf3YveD95yDjoh8OPiD75bAVegFBUedex9SQKBiG0Z0rjcWBe6Kakur/90n8LZHN77PNJ1UHQj3kIOb0TfUhQwbaaIJvJpSBpCeMZ+kMRL62VHT50y3vtr3S0xgq7CSVElnYDk4LAhZfHzeq4dqDn4zRoAXUSKBnvS/Z8ANcQPDm/+zyjiZA2qW730vy19EWceuH6UWNAb9PaYsOzeCo71CR1MBFWLFsVD3awrbmZbtQDgNkhwcVzcM2A5n1DX7a497daND+tp76SxgCsm1SkAqJvSNuKdEn7g+6vRleZzEmHriEs7QkGtm3Ni1EsL+YLvGweVNDlOzzE1kiiN+wpC12PwBj4/ct8AaWfqG2yg5Zoi43Mhm1MMouG3QRA5HQVJpKrvky1UNRxF3H51iivw6ikLAv/STkA1kVHxI0SYjCt6yA0Wk/jlXnLG8tNRfPGCBuBPwWmirz06LwYHBSJxfA9dhuWhY396XIISnV7BSnHGCh0bwrYL9tGLF8Q9QhMveASBYTyhrb5w2C7hTTwjj0HMMH+tx3tt3h0QshSNeV40P8iy7kB7F3jJnJkUpVI/ZuqBoalDWHn0vTT2CvmbY9TfAYU7XS89fsE1tx7ZfeTQtvd97iFh0yBcOjtozm0QrZ0fe5iav6VMPYeVHNz6+/MJdMiOCtx/ltFq2qKLiUB1Pca/QJBJ2XclehxPTBKdHTxYwU0Qy9+GXCXA8CKwkjXA/puiJr03r4YxJBLh/5PA9YxG8ajgg/UHRC9USetJVzQgbQKZURluY77hp2kp4MD/NiwfrPstqqbz0CJhZUu7iTtPUx+yVzBAzcEAEcFB3ksavbzL6zc3aJ1MPCNTxPeEuDmhPlc+DzH9wtZgu0GeIOPqg0s89CIZ1WzJRYcGCXyXE6XsqvnIsWbQR8/XMQdKeD5/wypInqWfpWBB5C77xck99PFEZXX6QDO55B8AhRz4AtdIWjbpLAh+o6Ehvnmn3oeXKXiobpENN00QBfPf+jY4Gn4FZ0VFprHA5D/pqQG0I+YjO/hNWjor1X9hl4btICWn932PSoeYc/EhWFg5CD4jC3Xo3MVoMIY2JEh33iRRQ0p9RLMYy1lpaShGY3uJ1Glan5s85qfH7HXIudXTFjVxF5zTS68i8rhsEeLeOBMSiF4teDw87FlOZGkaJp6RVQLB1T7fLcTzuGgmm3msm4h7nTzDbW2racaVF1dNFSROplLJKXjLgwtR7ErIfQfP2NP037vGIZzU9ENW1SQ1+qcmHnt8DDTiUX0XiY294QHyaylZs3VElvFgQWhcV4Ti/FwVjzfiZjgFcezSOD6fDLJjA9FzPqbpty9QA4GoxNfBuzj9aO69oKfV5JRSQCKoOuAv/vp+Mpig9D6igjShl4Hk6acimjqKvDF7P1G/634/PSCMPPsLMCew9fmafzjUiK2uOtr3vUiif6DDY+JugF8Xs8srn39+Xzcf9zAud8DNu/gghMCAN7pBVskOy4G7iW35xapdFxwy6JrLnn3msstWHdxv0IW79x3cd9kzR+57+GxwXSrtEVzB4vuuR3TAIfN8DHEX7bKpLIpE48WpEwlBA9584wIavx12Qllf9C1JXl5B5qOyJO4iwF7TbG5ZcOW4Bl38PZlusg0ICIG82SrRtx7Uh3mw8w4MtkAIFhOVybMHYRklnI6fLgUDRQNWEn0w+W/jg7BBOH2oZT85qkLsBE5m8OZmMF1AqI3zs5AzuG52YAyFs0JO+5PDMYoScNq/e0sjzgpV0rN/fObAgf2bTdwdObD79P2nX3DExOWhew+s2vvA/vvbQpyLYxg2NEqOurb0tVbAgfkPfg5z0nfh5Ux3RQqt/J2qvudK5OgMWC11o5TJ9ojvvA0Ngm6egJQ0ritA7tCcHgoNptLDRLB+zwC36VtuaTfuugAVjx/E2dolNhbvGLCfHckDx0ZR4FF6XVdDWt4SIvptDtbHUx7qA4fQ5+7LgMN2Cg6uy84JtYyMQbB0LgnqQg1XjsUET4DbbvzCMDD0O0d/nlxOk6qQ/y78lb66iPxo2ownGqCK6EWWYIs4e+HoIFzSIEfzy1P458400VBp0f6jfhVrkEY9aeXN7XGO51jW1UZN+Q6r9LkFbNP+x8S5kXvsVjyReusWAM1AR2bKIG3y2zv+CfksfE7Q0hY+sVMd0ko/qFkuDykCiX/956jTD5eRRHG4+LlVOFuzxM7h9L/+cs3Zp5sFUw+P71qb23dEMQambmDryIEBv//s/bsvOOOPjz0MdUGS5IU0slltx6mNu/beu+0I6NcN8R3S659BOPkr715+YEI6cjhDfjckEemSw8rP3/S76//U4+0eGP4mnF4bEHyr28iJFrX+TzRsAfSR5469D5Skg8vmekT3WzHfTiNAD3QHWQJsjg/5kJXfHMiyZ1s3Mpx3wQ21JADSC/RAjOgRclDvSlC//ljPkQk9qWLZF4AcAJom/jBAlBGwaRMZ+Agk/ZwkJzG1+p3cyohk/izpVP0LHZ3AcKNB9rEpSpDImli7KlWGJAiD0VIK+K1rKT0mj2j1EKRLwzOTmiyKSuNKeZPX+/KYrxPO3l1o9VpdYkvHPVelReCNRPq4agCCwVwuNgS+MrazVQmwPQK36eWa5kOleWdyePkP/F1E2ekiut/Fz8sb9fwHZVcK1U8ItPHD/5sgx9Q1cCm54UZQ6UCNTFW9wkxgJwml0+CLSbMoNHxGQKmBRE/FpMO5obV2dH4pHdgm0XxtMtQA0+gLZmWwNtZ/WLVxPPht0N9jRHNNfFevQnX8Cx1YRMa4ANgeiOmwudiVAJvn3f1X1DY++iQe/CkB6CBaA5lwP7uThidJytEmWId2Bq//ABigHY7mBFrwOjkHLlFS9Xu5CWwTY/rftbzONEQdNuRUMbCNkjOND1IGJ2BwWpfhcKNqxnrV+RHSVFqftGHIE8lu+QIE2TWDaeslWxTdiUHFwGZ81CxyFGC7+E0vK9XvOSJsyllysjzFh+bqiee472C8XtVSmnyUx1mHgSGc+cYg5AAOo5hv5GVw5klPVO+gL8s2aENaEfmoq6p2omlvVCuUzRYbqNqpUexUXdOWdYRDnh85X3oJEpapuKFJJMEddjf4CI2CV+Hcg4av7AkDbCOcc58JbNZP00SVB7bHI6x+uYb+02KmBIbfbUHO0VE06kT8e1QpiacKQLUTzRUJn5gYx7kn+uHeGDq4cgKnkkQRqfqO2IQ1JN4DcMtyDaW3KiA9f4GqTAFsPBOqCEhMVYa9T1H1Utkq9YWivCWNXucrUi1ui2XZaeKN+nEsgtA9+EQS15SqBLab9/Z/sqaFSS2DWwIRhxNUERT9DVw/i/pwlMcWBTaGsyJZFum3hWlOZzTo/OlysJ1mqo8EKQKULrdreJ1KeEFZryIq14/6memqOzWTGmmjYG1Zmo9Ckzs1TgnOqhr+K02ED24VN8EqboCxtIGkwjlnb8WqiNfFbbq8hlOCmE7iCW3ZnxMx8Gy7GKEboOArTS8G2T3KntYVc/YlGMvNP292wr1dGDk/A+tkY82vbWojNT+gEppCMufLlTZYFTEeRnUdm5ywOCj5FCEN4Ud2Abx+AaL+KX5/H1iB5BPn7Ih1YKt7Kz48zl83Mu83NZxBYFyTyv39PriGJWr2d9ZTf34YjwqOouBRD6ltxJ03xWIJ5PQ50VfuA1/QmodypoULOfAelUXDgW3B2X6VYAgG1bhIa+A6ztKkASuJhPHRtGnLIKPWjO19tVAhsMua+6ybOoff8cMa1KkkTmp4+01h+vww+inWkzpW3k1DVV11PXKOUb+Rb6p47ZQ1C2bpGJBCzbe/tXDxKL0cOeYuI0chmup3t9m/UQ8TdPFeoWygAdRJvKiG2iMZnBPxj9qNa+zrjljZSisk0wg8fvkC3SHK2XMHiOxq+zFLjSFZJUq2+m7L7+hphYaAHO9u2agQ2Cge8EZdrJUJqgTY4CT/9xpUAI1oyBtP1RNIo3VvwEYwYMVKH9WIwR6r/X4MbnGR3/Eu5Tj43sySTqqagYplVqDIaRC1c0IdH4uALbRyTJzzls22CsC+6GgZxssRUTlfvxCNJcBt+F0TWTDiqcrRMkgXfd0ofiTiVZc4fDSHdfwAPhEqaf67koaHUlgwcdGSpVlaTqD5KAS2n40K8SAfLQtsyJP1w1rY5PDGX6PBZrAltp6Od8o6sCseCL30kYozqnLF2BhUE0n4P5udIm/1LB0rUsQU/oGJiw1JIrGzJy6wUTzqDXBs+TTCtQJbSeFz5kKIoxP5zhpSzJuLilUaUyHXZDz5bR9UUokg1/5ZFft4EU2Zr2U/a+IitpMC+wSakCKJHeIZood4ykepk//VAmyycT1H82JFUPSBJNWNa7MNEWX93EV65VD0uuORW2uWgCQ4KEry1RYwLoSo4uOQYKQsFQI7wXBBgfHyZSU20EU1WIEz+AgDhYDI19+oh33UBmyivmhDr6HPiaHP5XI1PGKWGkAqObhrGv6jBYqzpaw6dfmc40RFqkgo4HKznOcoOrbfcZb962WujIvbU/iG0dGLw34fcr2SqiciivR26F+/ffNZ9zx2zp2Hq87liKfs5AzQdOMxU/xm6vnFpDv6Z/dawHgBKnpUXpplut9XiquyfCiwlf26muFwINbrZZp4z1HNff+wHfqmZWC2Z95Bvz6KPjaBU2LtyM5mzTqdci1W0xNIpPw/TRK9QZfG30ro84Teug1yxpZ3jTCp0oVXMa7KtduBTajZJbBCIF+sNw/ofCIRxy+OwqDcz6lDrYOjXeGII/I3rO6sw5KviKJE66akh5LyFEVeqqRjJeFebaRQj3NVzRJKEToABpH0UQJGykjgaiX4dM+z2g1gWxU5Qnyr4Al5zcPjFOXwQMeevsMlHbpzA1VkELNbXTpZu+CUqF9xdqIiF5N/QyqdB7UhsZxTUaF8hkRIlZc/rPRzlQK/pL1IYiNXaw/Lc3xJijMzH4PuK1IFA4OWPzynbSC8A419ZBVhKOWme7FypOVvKxVJEmuNji47YK8Wst7PKqvdYILLZxmyjIiiBpQVIZq2pOJEpRK6bP8rbC/52QC206AEH2prC3AtZj4RE8/TSuzpOiDjnZCDcXJtEkuZuq7C5ZQoK3L10Y72Ps2Ao38Jj9okTaP45YFNww0av7tRyx6NbNDvF1RaoqJEYFQK7GoXQKXAtkDLuAMeL2/lUp1CYvvQPySxpOBlMU3BEIpUYImmoJioeWIL/K9qudrH9MKzbABAo6hcmbiZKh9XHA1vvZcCUTONi063EayagucqUxQ0rRQfxeNS6ffKtueB7fD5icgOsU1C27C7RGKbqaRc8eH+e2xbm/lAI4uBVJzewGKYAVuGRvMcKPVchCtGBuuCFCZVEMW1ZG2Zxf1tFB0vYJvzMNPAVoyZ0DR91hUxm1ZweorAisJxLm63R6BOBezpcFXuuSawg8F4yCMw7EgnrRodMw+NJp6RqXTHezwnvcdmhxaTsA3ZgSFie00l8HC3Pk37Dba6hoxzEnzJ4eEyrtyZivqA05SWxldECacbkdqsmCQtC5mk1WK3gTSkWM02HGgaUdFyUOLJ+NkM1IHBSUmN9+Gg0jmNJVmRCiKq1YK/gIpeVYV6CuVujPO/rgpXU/BVoVcqfqA7zrl4r0twIZ/DZ8tGah0iTRHewrctuBzbKgtAMjfIYGFQSs7SWobWilI1nJFTGvmALKVoiSS5QcCGl4CbXbWqGiiQDj0LeE6JqbSY2plOYZkaxxtLmqyvOHK2klWbijBEI00ar/LSCh143DrMZbMiRNyRVUuktazNgLOYbMQKk2WKNdGcf5Ov+b7mOJvtCtS5yJ8xVQs3WjatiSm5WlyV5askJTGZvnCAANvFuxgXchQA20pKaeYhDgRa5r/H/n4qFXr5zEqQvK5AQyj8WaH/P3rYVCWkJzUyk1pVvlCyIvBO2xa7nE3imbgKXi5mp0h2DBcb8gxkuiPDkVZStggW841ScEM4AzsSVrNGhkWqWZfwLfct/dQ5/XhXiaupn6iubw9xHACbo8COWcAuSfze4uHY3yRt1bvIRgepFUWDaP3tVDJntifTE2nQd7QU2PFFuHJUcAOApNKXJeKaVousXCCRkdq8nHRh43JNktUsAd9GgjSp4TMv0ZJD2Y3gcJvK5awdTsFDObLPNjykjezwKaIV7IMxBqEN60fMZIiQkw7UkH5leqJ1Z5JkrofS1CpikMnXfF9znK12SAah5EuHm7+nolkRd1aNqzJ8xydS5Nni0jaBxjwyLAW2lR47n/g9alBrT+vqlXcHLSU8kUDh2GjHOtOMEox7hjt2rBkz25sHE/O6g8NtNKu82+vaqalHy2g2LdkPCbpGBi9V+Q6gpM5tiwwidNLqkKt1JcO2cp9bNlW243oJwmezu97UKgwv3tGVGFxj3dxu8HxjfePZEZTRIfgAzAFIIqZt3Y6x0a6LkX/Rgp8cbrxRhGrzShZv2NB1cbsn7jEloMnXfF1znM321aNQtDhi3WSbv/dybrcrENpRNa7K8F20KeR1BdxsnHGxLOQVKQK2iWcUMmg4tKI7yrbnjdox5HdE2qyKBuQD7evyEp/exreHgvH29oHu9uHuji1ZVa7nvsAC9kEd0RpUjqgq7v+OUd3LcGt3iO/oHpj30VU4MwP2bMivmrpkNRPfOlowGuikfx7AmYYHBypEKqfwUjoHw4SYeD+tIAWVfa5dNhMloWma3V1wnTwQD3qGDTL55kkfZ7O9l+bZz9+LDFsNLS3dLVurxlV5vouHB+JtQQ/nYhnyX7EqYuLZOkW6PCuGuTjjs0oihMHhz8OZ5hN3kOeCTiiQZJAfOV1unmdYxsNwoYHt1Bm99uRLJrCzX3j/X95/xraHt0EIQxUCScQX+vTiCCGW72njV/a6vixlZ8KNODsh3eppd7e2jSF/2BqPsG+B69IaSrVXwE8awu9cQKaA+kIEosODyBd2QC7uTQcaz03BSchK/DdYO0QoWgUWTb4WPoxxNtvZsJ7m3Gy38tV4vF5PoMVRLa7K8g0HvaybcTMunhWgZGPR4dGyipheUa6WJk8ra3NnbYZesgGzPdrGuxm/rSIqkRisSxA4njzcKwxsptt+7Tq2CewboeIFWp24ZzmN5agCmZuhpI0fhTlO8A4EhGD3dzBONlyi5eCY9MkFHBNoG0U+m6iJtQ/cjnc2mh1V7hR80QKanJ8QmYgEWVBQlQahpxqfFiFLtiQF574EJclcPGM5YVh8TTLG2WyP+qHiUCnAAh6eD0VDeaekCnFVlm9ECLB8nCw5nhGgGmmRuc/y8jP/EW8NDK8IBmwiH3aWUNRsb4u2uFpRXpkhvYvEWd7jZmDZhLYelqHwVx04SmGad/GX4FHliPe/VqpW+u/Si5E4Gc4d4vlgYNNzWJso8XGog/TnKBlV+cBiluxUZASQpY44UHDRx1Na45VeKAidummxNU9eD2Suptvz2POQA0qVlAb6jGTxUrBjLyZjGQlxvDAVXx0A+jib7W6oYebI46NeXFXKNwB1N1FeFykBNhHtoTnxHqeppPtQxOdEnrjZzl/rEgLIVpaMAJDhAl4vVXTi/RdAZrMpSnhUTMa580ZyvvCF2U2fgR80rWKdNSsdgN75nE6OEUKM0NY0d8XZjS8sC++Xyrb2hXiOR07beDgj3I6vnJ1svMFP1BRlPzdiAaiV9zmIngpF61DbehPQDTxLQPnAd8LTfawr6i7ma72vMc5me5CWaSPi06B6cVUlX0cxXwvYUYH18L2CzT8baInFIO5lur2+hNUec4YRH/eEXETRYdlg/9Vwfpdqd8qR9Oth6Q907XpO+g615Fdzelxv9Nnb413Bc0xrqOVveGnDD48TeBzfPr894Am6IIV0xBouR09bz+WN5gY2X1HBl3daEi7YQqdSL7g271n9Q43MK5uFg8I3kJNs/96QECrmm4eHPs4WAMNdPqirVQywWnFVFV+yVZQA2yquFHTxre6efI1qNDrahXqGrXZvazDv7KpTK+f28oyLdDK0+CoaUVSHPzat7iUr7X5Hs9Mv7PkMnPyqgHVWXEU3qgRimQ6WCIQzt/Z96uCM+CtvvGVsBet2tyK7b2QMtQ4s+LM4A1YKNXvwrRsEcx6aAjz4ZBKdNOyPoXdlaELKBgJbTuNJ5YGQPr8ut7eUr07mOJvtQToIeV24XlxVypcWcHTmzzpW7KOJcFYg+hToMwUUYK32UKvL68yX3INy1y6GEzgBjhiejs8Dhuo4y1B/gYyK6dA4POTkJ6lYq+YwehCOcmRFu5Ywczh3YKBn9ZL71eqDJ8uQ5asxga+Zs3BlKC4IyKjpbdAKvvuhQ413myXr+w53myXhGLYFRt8Hyr0f8Wt1FbtxJEuqpL0Bnk2eTia2mG/+ffVxtlQKyJxhK0tXN64q5RuhppgSvhbCWW8gFGIGxswPRGI+5E8MW5LC7eHiIwXFyp2D7YLbzZPjKcu7hs/LQTXu2sP0wYWIHFrWh5vhxN/f/3e4zpWqcL6Q9uknkLFut+BtC7q6v903/F3cMKCZ+QjJzvLkDpfXy/PxMZCZJvkdLna45XWN98teJuKfXylY88BxvfNM+eVE8z6JdXndsMOEImVw5l1Q6irWNSx4+an4Ivs4G9Qxj6xyW0BWvbiqlO/ImgLpkpfYeSJH2tGxDrOBvFTAG7dbzh3NG1o460W9rGd40OnQ38XnRzuOqCKUZql1QFXIyqJKT17Zx/N8SzM6Rat2g13aKbi8bsYDffY1o7nkrz0ZrVHupLJR+0MSD/fo8xceaWO8Vmot1wCEyJ23tuHATov3cbabNUc4PNweCKzwuMja6uv42nJaobVxd+uKlMT3vrRQcHNC26ANcCZf83WtcTZo3vCAEHJzTaXAqg1XVfH1sq1TANpcKAWAdwXcQoh159cg5MRBrNtaaQzn5aECNV1MoAQ8JWbqy8oJKeKGnmj3BAQvF0OPSFW6C8q7ThI4lmFIn6E2MBiBfOhHSqOAbeQYJH38ogPNgyT3qKmVa7F0QZ6BIYx9stHAJhvh7ShWIJSaWHcbB/4/PXFv327ygZTaOGCTrg+9YaT/EpbouaighrfO15p/Y5wtcvdEmUCILQFYjbiqmG8A+MZL+eaXBnTBwZg3PkR74Vxs0SfcHj7fznoLtohfKepSnKx5QkW8lGjZEy8NAAuXz/EI+KyWkdlThoCpyzoZsnNBkisYNSoTYm2TchZKq+6qtVsWSWY54qVRFEExKJnj8niZ/Hh4YPwuFtIKZNScbIxKQg6GQ/j0PzhsGfstvi4mznjji9+xEWLEqMZWHz8N4k5puOP91/Xf3V4yv0Xva46z1UwQKfAsV5JqrF5c1cq3uAMm8st1IN9e2AFn70G8U6s9Y46SBS37fqGF9XIshxAFdrlpmmoCi4CtZyMc/DBUSs02YKtWhoj0lBWi8IIySeWQS/Baw+XiGPq7wTdkRPBxqbuQqRGtq0jyf3hQxG+fasqXc7s5V8DV0nc/Hpek+hPlg3EFjv9kAn+xddOZpQAret9yACuRnHXiqma+xR2wDIRlOpBvL+pA4j1qXdlmd+KUhD9M9GQ3Qec0wJ6KKLC5/Ip2Igd5oeEhCDCebEDm8kmFHnD3tpJX1VVennEL+dFg4aSB0CXXYMiP0ogKvTSqFl/wkTWwRdhGmvIVvG4OkiAt+ukhTDe7OkmGEo/wD/X8605qioamAFjx+xYAzMcCwBjL2tEwXNXKt2EdGDx5l0Y0wpppI1EZDvx6Mcu7eZcO7KPqxSXAUSiwmSJgo0cyUhonxQbovORgLIn46xEC4AjFmdc+4CArHM6YL/YEVpZjqTGqCJHZ4seHO8MI2T0JKV/CGUwlTF/rKTibqX/hqlQZkbG285at8daOlVMAzHt0gLlmCti18S3ugOV8UqYD+fbCDvhQ3x0i3D3WOKGKTMD3Qh95A3IQ45DjzYbEVouoZEJMosBmBfPFac0rojQ0/xFPQtRWvUCbII8QJfyv+eBqpVsp6IBbA+L2Id2M/ihoIvUDm1YDw/iK2xZwo1CevmiivTx5V94lcJ3Rd6a0+tMw0FN6img0N3gX380ONJUDmPm6JSqBITlLEtfUiaua+RZ3oFYl34/CN+OcVvOEQoTdxNfmRjmG4Sxgl2YdKHm2hWt5WSdrBza12BDJ+qVxomDLU363GlLVrJLEy14ENyunfmFAt0hzPASeltkiq+lP24n8bITzFYQe5r6yrpcoPxfb54Hy9XKCh+WY+N396CbzCKFWkZe8lJtGD+vrH29m5zAre8upBOUOcQh0Xe8MHB5r5VvcATMYslwH8u3Fqgg672B6omZgS1iTLg8siLoEgQW+BNgSVJwtBrVRsqaEFHl9J5loj/niDqKYgrffaPwfkzi9sX4Jms6KytAvdT8NPzVS0UONOR4Mg/wxn8/fjNacskzG6Xr5KTQ0+cKz2kY4F7i32YjyhUmEyWLnOBLf0WimIpp/oub3k1Pg45v5lGf4zN7euz3lDnHm+5YAjOwfgpez8NEwXNXKt7gDZshOuQ7k24vNMs6OqyS8sdYJVdLSrhu3Bt1egk2XQIGtKZomFQNYMqoxFefZUKT1m+zA9hG11Od3OtCel96D8XjdEjSrkcPVDXvIc2MxetdlmKHM8Ygy5iCh4N9wbnm9/CaxulHBr1/R5m1lfDZfCZMv541GeY6PtrkRCv0Y8AyVf2qPWs9C1CIe/8vA1gDbNscdL2d2M9+3BGAehhfcLqu9cbiqka9JMbhl8fvMwAYmxHDxFYy9nWy/fXADYkQ+tDWx9jON0+8YOfPLOKmqKbKlJStOZUUjkmURizn8htWdD3WYfD+F1UkIwgIf70Jri0gzM+S/L1Hfq/V4V2fQzUTBuddu4Hf2d77mdAITSSJCLTd9v4oJki3AqSpD/nHZJwr8ntqa4ozHSjhk8AXH4RcfpskywM2jFjMj+POR10qr8hlfXcQyKzzOAqNIId+mrRvC6KNDUMEbnMFrcZslGyPUDcqKE/jcM3tbGN7lcrcWz2+597Va3TyzkmmxImMahata+eaBSXO/o2ET+XPm8B6774oDhX0OplUw290tPOuw+X+jSGxH35vXA0xTZHSn3YrNdghYBkf5LL7m8W5PwOJ76i68kSyRbEoVyWylrKtx+EYaHLUN0uQspjFkmb9sYqOsOxgIh+3oW9MRHPjaEXDF1OD+IVc9zIy83evx2u/Znhvz+z09LDmSm0GpFt9m5Hh+G+FElltaxlUnj9RzhGOizuCDH1gc4hg+aAd2Md9oJ0zd8zR0R8xUv47MKVKSREDc+twY2QkCHNGsiue3/Psa+Ohx9ZKvBoolZ724qpVvnnxUxLOmrjIc6o4LQsz2DHCFnWM2Cy6ysO1fT/jD8Rb3VTgtUcPYtM5HVjvcdsuaqky8Y2HQ3Rcw+S64GlIPyFk9e07e2kJTAoDBxPwRlgZI9Pv/cxPnCoba41A0Ph9L5Gt7qHfTLcuo46GYqj7EhzqJa5DJbdcpXahrnu2VPQGXleRTsPg2Ez1l7OSkTPNzQAJeWU/SUTkpYpYwlKR9X1+8I8ryumdmOb6tbTG0BnU9oajpFNHnqn09M6UcmYUcXvvBixlIOcAxrKt4fsu+r0nuQEcb5/KU6Lp14qpmvhZFYGGNWs4m3pWBMwMem2oHjxrmrTv9OO8FTckeQdxz90m/PkzEhoJT6YpVEdjm0yoRul+M9vOtRJcy+V7/ZaKvy3gimQMtwFI9wG87nZtMmnkp0rkcrAx877fubumJRqOXuAtDnlH7R13r3L/MKkpOrSWIXMU0T9oQxmetsysiPl+Yb1qRvzGz+JKuz0OxG5O0MINGM69Vo2lDfhZQvJZi+ZQ9ve9l2rx83D7OxXzneMfg4I6+tR3nai6hC2fvFN5/U3/7eSGy6QuMy108v2Xf1yT2kqZANFpaSLROXNXM14pMSMAG4Ow3Dd0ed4hv6RiL2QIf5nWNsE1mu7vV0xtx2AIjBjesHl7Y97W1WNsIOKhYYmf1iL1Lr5/vZj1RweQb9gdPe9cbb3zHm9/8tidufu3Pnv65QU//47Pve+0pj5zyfYNOedspN1911W9//mDPjoG2YQ/TvsBPtLZ8rNCC3vY4tyD+vp04M05U0Ion3uofuISTb+WeXoHGULMvPx7+dW1edo45HiZfPwo7USKBfr6dpqmjOdSVCtKj5HckarLL4AMfD80VovNdAU9vzGcPnSrku25+8yBqbkaDnyHngCpCxOzzA9fpQ3jn8749rZ0cxwgeD8OWzG+Z9zXbRxd4WE+8xQr5ahiuauVrmVG4lpYmT7tlMCUqvy+xpjtobRFsSJhvWygQwtHN8Vb61hbvMCInJ/+XVoGzkDatFSIPbGqhOigYq9TkO6d7/vyR7v4dC3bsuXgNKmS8Z9HFCzcZtGgudJkMngNtiDnDzbENA6EAFw2Y/ZqvL/DEW9dimjqr0sOjbUeBGpTqW1cnfJ6OFdaW2BTsaLZ3y+TrDfUwAytXLO574iCVvSB9ZW16TSSPa/IdooDl3pTwj0WccDEzOsJH2XJ80Y7V8VA7s6Rr5WeXGVk5qwK2io0dZec3O7deiUbDMT/kQHAWz2+59zXb+8hBIJzIO6g3Cle18rXC5L0862lyeexBlYSYqNkueDje6wxbQZXwJM7Fhazwe09Q3wH+vBlkjjodgMz2SYzHx/HpdyE9DMJn8g2yLqHNE/Wu5JtcwYgjv3f5HE6id7pNg7zX62n26zeBum9nWOADQcG6yhKaIXaatD93K6QtrTjdb77/Q0sxPv85eHSU9Vo3YNGQQMYolpc8Bl+WE9p4V3vTpoUn78PL1xrW5enNcCa/FA2IUzNLBp0JsA6EIZ6Ib20py3cDw69wx4Ule4I/2ygnS/JRT/t+9AygpZe+vdvrMqO9p5rfMu9rtjcZd6Nme8NwVSNfZAIkxHhDnlDUZiIcJUhhrBsdN8cHAzaHd7hWDoCrjHlj1NbaRcel85adOClVDGy8nhzoD31aV1/phZ7Olw+EXC7BG2IHeD5UaLBHnJex3L1YLyhsCd3tN4z8jkRccAteq18eP5giQaZ/6FkoYljtxCfJ/iNe+jh9OhuKWwuKCbaSZ+aVbpMv38bzTNTlcSHfD+4Af1k5m5IVMVcpP3Iw3qjgxx4ku5RvkN7dJxws2AXK8G1GLjYecJEJHPB+6jDWTPt+xcCGZMTK5ANfO6mzxx2GMPOp57fc+1r4Aadxfz7RSqNwVStfRD0FCTEc+A7aLOcABp+Qj01jOZ51FpjOYzyZP7Od4Vng7uhCc///zVhO6smAxbIDLCsS5B5W8ZCCr/k+VzfffDPLsS7W+j7joP5QRD9GrV/MgJ1Xpc5MoFlOueoUQ2+QUjSb/aSGh16nx6JWxbeXzNVtL4s4K8pyKimaJ0hq/1NUXKISQWpdUFs0WcLr/7HELuEq4utdInS2felhSOhJTslSjt7P6hAu4GctWJobFS4QhiQ89KP3rm4LRItMCjWNs0nW7xuEq0r5QgvBNE//Af/iXAHG6y0EmM8hWJICdhUuVtABp4t0wFpZRgfIB9a8dS+Y1VRJlM35nEJyyymaaZPI6zt/4t3qq5ev2ehANG9yfsWbLz42D+351F4jFEI0EqBMUYOBOoum9EOmkp5Q8b5v7NH1/6r4uiNEk1jz+wmai0qEkDlVE2VsDUbpjqalVD0L5/jTI8h2SK2Mb0vI6+7Ycd1ZScWKz4OrSKl48E2+sGlRRYv0affNc9Yw3gAfdxRc6tU2zhbAdGoUrirlawpqY2VBPlavh/yZfzy9x7WClDnwEGcKLOPIz/GCtbJYvdWBBhNo8MHzsSxmwHQ8pAfBlDrn0MlNpzWceurk/q0dsbr5WsRMuaLpI3x/epmgNqcRTTuryVQhMRdeAdAUCAHDqUxWksS/Xt9Mw/ur5NtD80Z2vubwhJICo3a6uABAEbABYKmsRjhf+qUFyGYFqZDvCq/gbQ12tJzyFFkiayf0Cg+41H5uAZuq/bKUxNpjH1m9qcnrEkJxp8N+dV/TOJtk/b5RuKqQr4FrjhweadgJI7DeEISBFHXAsh+SxeEq6oCP5QUrcoH8mw5KM/BxXnJRhgzq5NHSMaipNBl1cfw/PrR4ZA7rq5ev7cXJW7OWDm6+OBG5iQhyzP3OveBSb3jDKZZ9rMhjEBChkB0lffADIaIV+qk/VVV8XeS8MBrzoa7vj5P9AVv7lslv6jOImj18VdPihTGns9r3bW8NBNkmtrfZe8s1+at1VS5+v7wuj+U0uKnf+khg4TrXHCEUYln7rUSN45wHmE6NwlWlfOkmAaqIiXDWFRC8PGdnQDoQsvJZcOC9ErPd0RN2Am/3H9c7MErdOh0Ln74UvKCpMltwUjMHNqsqWRlndn8usGek9cWgo16+1tcdHO/yuvI6mvnicNnVFUOL3v7XtXTG9SkvUZH06EFJnKDlQi7yEJEZcYDfaLV8wRKDfF2OwSUXEXUrA3WEbHc1xSov2E5UMhzv/1h3hOtJoFi17ztMPiIMh1auQ7Ff3zCBl1NTjKyW1nAxKEMDC5S1V93VcaXwoTn9Lpc3ytu9vmsdZ4MsidsgXFXK11JFGIYgnOg5HoaPc6xg7wDZl+Ju07lEEBiugAX5tweSCJvOKbxH19DCzXA8cKBL7hk3hlKxx+TmJRWB+7KnVy5eHIry3Ii/br4W6SvaIuPFY7RTvjWedQve+3IKp0ABnfr0KOsn3rQmvZ6BglTImQj7/dXyhVxKMQgWI2BZ8XLaVHvlYtXHJCgHkH70risXdjNN7Ynq33cOO8wt8QbZIGTwmPNJnd0UqlZ+/JMpPPEf161b0Me3soKXQsiMKa9jnK1WgxqGqwr5QiECjjzVkth6Bwq8U8gyilvpXjkaiG0jP5Sxzus6Lj7kQKZ/JcGB37nu+XNTOGs4jZSUQ1uK8QM/Oi140rBrZSDuHfbVy7f4xUtWtM/pAFuWEPAs6Dj1O+uhDoVKz5Dg3Ga361Ibhpw9/J1/biVrlCaerIFvECS2I4wGyWIiEurPk1lFEalxZKqqjQC0zX//aP9Wj+B1N3XYU0xVyLfF7RVYLhR3j6KE3zcau/2VpVCuUTL5FdeLXAbeNUxnv5vjW5m+dnB84gRb1tOax9kg8/eNwlWlfEHHoZGv0YDbxZJzA+9ugnuzgrXjR8GoWTKhqTUadcVsTyAdiJMOmO1WBxwxXdnv6uzgnn8yJdIkt/laMNZE7v/7D/itA01ur1tgzytw0K2Nr0ExpzsQIC9llXowXtyh49MpBAJsW8dA4Okntyu0uq2ipVJEWpp1BXNgUxC3XHPXa/gOsCXTyx242KqWL/nuqHnh5Giee8mfv7yTJhADU4VciuwvvOPadSNcq7fHzfSE7F6bFfLlozzrjnqjbdSCE4sgz7vO3ZI1TCOEXzGwl7/w0FwUHpnjdvOcu6fVtSLgbnL7q+dbPM4mmb9vGK4q5Au1H11etxsxIVeQDTHMSHv74sVt/aiAwv3cgEGh3t7hBU5k18IiHYIgmO0cO9JVcHid1x1csGFx9BePbQcnJcsmMAmuQVueffQPPQvmLugdHm443/BJvW3D7WbzQG+YRo9bQ9M77OGYYN/i2KYVH7vo2eVE+SWd0kTNUpe0tXde9Lx7Qd/ibqa7sBhHVXxHIrSahpXTqGtu38ovve6QKFLfZ7LQwZ1VTeVERZ145eenuXo7526K86GRut930ACAD8XWfe9bb4F1CgEbxttJ4MGw7PYbP5qAMXF2tszUOFvjcIznlwsy3m4XH0Rz3PEFgVYPOXu4PCFvsCC4DvkXdZuqDMTe9M3LpySCSevsG+kz2/v6OiP2DoSbN7GtnsV7IlvvftPT/1qaV2HTp3/xV95mtOmk/nhTjyvUaL6JuR1BAdx4DFoQA906n3DGxXqgqKvAtmxduKCNd3/9Z1/em9Zva7Sd+x9+y5dOOzPY37l1pK1vID4/Ycu0XyXfTTFQfPJ8r+VHruzaMcC/6fc/fmUnGGYkovUMbT50809co+Ss3d1BxFR7bzxQ7/v2R+hmb7BObFh52iNX3EsY5pIpWcnu3Pzoz04b7qJSzkl6uJWfqXG2dOBjPL9twRVNe+IrWsGiOOe7u3cfvnD34cO7Dx959yGD9h/adu/pt65attugw3u3b7/vsmefPWTRZds279qyy2zfsnbzoWtOv3Wb2Xr40LYL9+3bvH773lvveOedzxwxcb3swkufvPzRZw8te2Df7m3XXLat0XzPv2D/3n17yTPN9v3bDm279ci9ZvvevaTx8H33bd++atXeQ5fefsPlf7nzyHrw0Ncmthy6/6nTL3vmmnuP7Nv+wN5VB1dd88q2Wvke3H/voW2Hjtx777Zt22699dChs4+snVi+Zffpzz579jX7V60dB9PesnvPvecvj/3r3dsOb9+++8CW7bsP3be97vc9dPr+Q4d2H7l/2+alu46c/+j97z7//DvuXbUWNiR5433P/Ouxtzz68AXbDm2+94LTL9u/2Xpuo8fZ/P0xn98jF74Q5QJxFGfbhH9hK1+nVaePOu/Y7HSpIjuVrIope/k7CPDS5HzI1pAIZYhELJekKdMtbeBLr+pRBA3lS5PqKraSxgrNTaYVtJMPpHTbhxXiAo5Ayayk6kY58gAoRqhJdfCFCg84Zeb8w2p649LlWVXWsumsDPm8zZekZdI1rNB7Sa3u901pWP8pO5HT71UVjZ4h4JwMpVcNBtmMJmnp8ZkaZ+v3x3h+yW/+GG8hqghstj8Wl6fULBSRKbn6tg43miJns5Ii5RmCz79oHUZkqx/G+9DOkwlTyeFFEy0/6CFq+ZKytGhQdmh5o/mqoMFqmvWiMg1DsCW3lMVsll6oK2KWKKCTEKMjS4UVb+gEwEfyM1AtX1V3Mxet9MOqfVw0WnEHikgbtlA1JSlQvbvu91VFPSgJDsRkMU0sh0OEomVN62aGPJwMQToLe1Rasp7b6HG2+nOM5zc7JH5BD9tx+h1XQ8xpinbAtnLo6UayecNBhJTdIV7GqmadtmGIYDXmm9O5pGhbmhYRQIkwxlKKCpRG8zW5mO0a9acukSRpjT6ZTjZ4VFDAqZKou4crRJpJMvkpWztfSO9NVGkjqh4cjqCEMTZixbCqFpj36R+G+1U97wveLxJ1A1cMMz1ZL8anZCJhyAhL1EccQvhEbHfjbeg4W8891vOr4nuQkyYY8qGrISJQr9KY/6I+2Hlkkg2hSKtQccnFXd5erRh/0C1QlSxno5SxtjTKS8k2mi9UOQbjltUkUcFr/QwaBhm4LMw7xGClqEgg/1INwIEkndonsTq+sv7UKR4CjaJu8TPTEwNb4KqIdb+vvlOoGt0SxbRl7DEKH9CdQ0kPQYIcqWAna+w4F/TnGM4vGfffILh+cCK/70kD2JotXYCiP822FysFvkwKDc2zvYfeXkHQqoUg/fkzwtf2BVmXAbZGvUyC9RFFsjPLX0Erkp1R9XxhieTZ6sLJeK4uocxx0C1/qu0Rdb6vZO4Aeptq/FO/iSKyGv7UaO2qokc0dpzNBx3T+SUt9/ic+gWX/+rGlQmcpVk6vqQoN5hm7Vlgz9Krh2aBPUuvSpoF9iy9KmkW2LP0qqRZYM/Sq5JmgT1Lr0qaBfYsvSrJBLbP4UPvocAuvLIsvsIsd9l/VCY2w3r5z8/yneXbOL4yxvcgvSyqA70sU2+pihLaTfeR/Ecr/eQs31m+jeOrqenfUPftWHjM+WVNrShvtFrRlXllHaiGZvnO8q2Ur4xzl8fWOJ1o3fyOhXdK9RfAnKVZOjFIPGfhwOI+5HLHR+7XylUtr5ym1o2mL882y3eWbyP5qlh553yGaUJcT3vbO1NGxiBVsST3dEp8ySFgqs9XcLiY5TvLt5F8JVF5tLeFa0XxOR3s+yU9esmeJsHmCG57XD4kp7i9hIGkFPRmiucZ35vlO8u3cXyVDH6LZ5hjUPDMjp6naLEiTIM8yncAkgaksuXaizuQEjW50hef5TvLt2F8k/ixFULUg1ytwZFTf/2JD33otutec9tL1wmLDepd1zcw0tZ05kMGvfTej556m+CJm+3twWDbte89z2x+6NpLWnvXdXT0me0h4bbrL7nt1JfM9rv7+0fWjSy2yPz9LN9Zvo3k+4lTr7+u2+P2IlfAs9jVNn/dSH/HyOLeTchnkB/ykCQWB+cb1Ne7uHc1BJIZBFeWJ7X395rt7fGtYZqXzWpfPbxuq9U8vxdy/Pjz3zd/P8t3lm8j+W7tbRO2Cm4XahGiQkDguSjnbnU3Ba1Esn6wcid6A2a61kCUi7bMS1i53UZHR7uCS1ytVjpXb9+oPWGPs6ttidsVsNLBDvuQjybjNcj8/SzfWb6N5MtygrslyrYjwbOy1evpcXs9rIsLdFsPiPnCTjTYcrdZhYnjPN7uwhJ7vt7WEGe2t85p6/I5/fksa87eJpfgCpnt8bADwiutVFbm72f5zvJtJF+3NwTF89r+Lxv4xfgqM+7WAAAAAElFTkSuQmCC" })),
        React__default['default'].createElement("use", { id: "Background", href: "#img5", x: "0", y: "0" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$H,
    GroupsIcon: Icon$I,
    HamburgerIcon: Icon$J,
    HamburgerCloseIcon: Icon$K,
    HomeIcon: Icon$L,
    IfoIcon: Icon$M,
    InfoIcon: Icon$N,
    LanguageIcon: Icon$O,
    LogoIcon: Logo,
    MoonIcon: Icon$P,
    MoreIcon: Icon$Q,
    NftIcon: Icon$R,
    PoolIcon: Icon$S,
    SunIcon: Icon$T,
    TelegramIcon: Icon$U,
    TicketIcon: Icon$V,
    TradeIcon: Icon$W,
    TwitterIcon: Icon$X,
    AuditIcon: Icon$Y,
    Layered: Icon$Z
});

var MenuButton = styled__default['default'](Button)(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$x;

var StyledLink$1 = styled__default['default'](reactRouterDom.Link)(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Logo$1 = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Icon$q, { className: "mobile-icon" }),
        React__default['default'].createElement(Logo, { className: "desktop-icon", isDark: isDark })));
    return (React__default['default'].createElement(Flex, null,
        React__default['default'].createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React__default['default'].createElement(Icon$K, { width: "24px", color: "textSubtle" })) : (React__default['default'].createElement(Icon$J, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React__default['default'].createElement(StyledLink$1, { as: "a", href: href, "aria-label": "Pancake home page" }, innerLogo)) : (React__default['default'].createElement(StyledLink$1, { to: href, "aria-label": "Pancake home page" }, innerLogo))));
};
var templateObject_1$y;

var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://exchange.pancakeswap.finance",
            },
            {
                label: "Liquidity",
                href: "https://exchange.pancakeswap.finance/#/pool",
            },
        ],
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        href: "/syrup",
    },
    {
        label: "Layered Farming",
        icon: "Layered",
        href: "/layered-farming",
    },
    {
        label: "Lottery",
        icon: "TicketIcon",
        href: "/lottery",
    },
    {
        label: "NFT",
        icon: "NftIcon",
        href: "/nft",
    },
    {
        label: "Profile & Teams",
        icon: "GroupsIcon",
        items: [
            {
                label: "Leaderboard",
                href: "/",
            },
            {
                label: "YourProfile",
                href: "/",
            },
        ],
        calloutClass: "rainbow",
    },
    {
        label: "Info",
        icon: "InfoIcon",
        items: [
            {
                label: "Overview",
                href: "https://pancakeswap.info",
            },
            {
                label: "Tokens",
                href: "https://pancakeswap.info/tokens",
            },
            {
                label: "Pairs",
                href: "https://pancakeswap.info/pairs",
            },
            {
                label: "Accounts",
                href: "https://pancakeswap.info/accounts",
            },
        ],
    },
    {
        label: "IFO",
        icon: "IfoIcon",
        items: [
            {
                label: "Next",
                href: "/ifo",
            },
            {
                label: "History",
                href: "/ifo/history",
            },
        ],
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            {
                label: "Github",
                href: "",
            },
            {
                label: "Docs",
                href: "",
            },
            {
                label: "Blog",
                href: "",
            },
        ],
    },
];
var socials = [
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: [
            {
                label: "English",
                href: "https://t.me/midasprotocolglobal",
            },
            {
                label: "Announcements",
                href: "https://t.me/MidasPR",
            }
        ],
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/MidasGoldFi",
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = styled.keyframes(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled__default['default'].div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.textSubtle : "transparent");
});
var MenuEntry = styled__default['default'].div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return (secondary ? theme.colors.background : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var templateObject_1$z, templateObject_2$a, templateObject_3$6;

var Container$2 = styled__default['default'].div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled__default['default'].div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className;
    var _c = React.useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React__default['default'].createElement(Container$2, null,
        React__default['default'].createElement(MenuEntry, { onClick: handleClick, className: className },
            icon,
            React__default['default'].createElement(LinkLabel, { isPushed: isPushed }, label),
            isOpen ? React__default['default'].createElement(Icon$8, null) : React__default['default'].createElement(Icon$7, null)),
        React__default['default'].createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React__default['default'].Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var templateObject_1$A, templateObject_2$b;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : reactRouterDom.NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React__default['default'].createElement(Tag, __assign({}, props, otherProps));
};

var Icons = IconModule;
var Container$3 = styled__default['default'].div(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = reactRouterDom.useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React__default['default'].createElement(Container$3, null, links.map(function (entry) {
        var Icon = Icons[entry.icon];
        var iconElement = React__default['default'].createElement(Icon, { width: "24px", height: "30px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            return (React__default['default'].createElement(Accordion, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: entry.initialOpenState, className: calloutClass }, isPushed &&
                entry.items.map(function (item) { return (React__default['default'].createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React__default['default'].createElement(MenuLink, { href: item.href }, item.label))); })));
        }
        return (React__default['default'].createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React__default['default'].createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React__default['default'].createElement(LinkLabel, { isPushed: isPushed }, entry.label))));
    })));
};
var templateObject_1$B;

var Icons$1 = IconModule;
Icons$1.MoonIcon; Icons$1.SunIcon; Icons$1.LanguageIcon;
var Container$4 = styled__default['default'].div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var PriceLink = styled__default['default'].a(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
styled__default['default'].div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled__default['default'].div(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav; _a.toggleTheme; _a.isDark; var cakePriceUsd = _a.cakePriceUsd; _a.currentLang; _a.langs; _a.setLang; var priceLink = _a.priceLink;
    if (!isPushed) {
        return (React__default['default'].createElement(Container$4, null,
            React__default['default'].createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React__default['default'].createElement(Icon$l, null))));
    }
    return (React__default['default'].createElement(Container$4, null,
        React__default['default'].createElement(SocialEntry, null,
            cakePriceUsd ? (React__default['default'].createElement(PriceLink, { href: priceLink, target: "_blank" },
                React__default['default'].createElement(Icon$v, { width: "24px", mr: "8px" }),
                React__default['default'].createElement(Text, { color: "textSubtle", bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (React__default['default'].createElement(Skeleton, { width: 80, height: 24 })),
            React__default['default'].createElement(Flex, null, socials.map(function (social, index) {
                var Icon = Icons$1[social.icon];
                var iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
                var mr = index < socials.length - 1 ? "24px" : 0;
                if (social.items) {
                    return (React__default['default'].createElement(Dropdown, { key: social.label, position: "top", target: React__default['default'].createElement(Icon, __assign({}, iconProps, { mr: mr })) }, social.items.map(function (item) { return (React__default['default'].createElement(Link, { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "textSubtle" }, item.label)); })));
                }
                return (React__default['default'].createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
                    React__default['default'].createElement(Icon, __assign({}, iconProps))));
            })))));
};
var templateObject_1$C, templateObject_2$c, templateObject_3$7, templateObject_4$2;

var StyledPanel = styled__default['default'].div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 1px solid rgba(133,133,133,0.5);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 1px solid rgba(133,133,133,0.5);\n    width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "1px solid rgba(133,133,133,0.5)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React__default['default'].createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React__default['default'].createElement(PanelBody, __assign({}, props)),
        React__default['default'].createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$D;

var Icon$_ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React__default['default'].createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React__default['default'].createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React__default['default'].createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$$ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$10 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React__default['default'].createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$11 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React__default['default'].createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$12 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React__default['default'].createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$13 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React__default['default'].createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var Icon$14 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("image", { width: "96", height: "96", id: "img1", href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAADMCAMAAABHob8QAAAAAXNSR0IB2cksfwAAAwBQTFRF/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIO/sIOkCiH/QAAAQB0Uk5TAAosSWV/l6q6xNDc2cWoln5jSCseT6nP8v/xzqd8TRomaKLYniIFktaPQgQCn+/uoEWR6+mMWs3GUwzs6HMHEI78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" })),
        React__default['default'].createElement("use", { id: "Background", href: "#img1", x: "0", y: "0" })));
};

var Icon$15 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("image", { width: "96", height: "96", id: "img2", href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IB2cksfwAALtRJREFUeJzt3Qd4W9X5P3A7g73CLv1T+EFLWwqFUrrooE8pJGTH2SEhQAaBDAghkxk2JIS9ApQkzk68HdvxnvHeQ9Pa1rC2ZO31P9dTkiX5nruvLZ7nLU9pseX4fHTv+erc900IBAIJVJbDwLnGJMn5u7r5wLOgDnSfX54qyJlfDYorzJmvAKUW5obXgv7qzgur86ElOp80UPlhVTBQ4uAqXBhSEqSKIlTxIrU0uEpGl6xksVpWGqHKFqvlwVW+JKQUFVGqcml/9QRXVWgpLywLreqRUgVXzfJRpa4Nq7oVw6UZqvqwalih7m14YqQaR0obXE0rQ0rXHKFaVg2XHqnWkFKA4urbVlUZO9af7ZN9sw/UWqe+8K8em+Aqqtcr6d/AZZVfZOhO/7Oqaf9r3flPlAtykkyCc/M8oAIDNT8AcAyXcKhyw2tBAKAYXedDCwAZqPywKhgo8VAVLhxVEqSKIlTxooA0uEpGF0ASAChCq2yg5MFVviSkAIjIVbk00BNcVaMLwAit6pFSBVfN8lEFYIRW3Yrh0iBVH6EaVgQAjpFqHCltcDWtDCmAYnS1rBouPVKtEaptVcDQ9uRQeQwdTxmMXc8V98m+3u3Q5j7gdSqnsBKI3+dKtCqr7lA17tsjyF3Sxs+e5wIV6K9zAyUIqQhIRgFhNpJ+ICxCMgoIE5G0jUISMLQPl9PYubapT/bVNre57ja/353IeCB+n3uSVVVzv6TshcP8rLkmfhbAkDUII7giASEDSTiQ/DAgMEgAijiSASCEIQkHAo+kv4wdT+otwle/d1safxcgGAoxX8jvT7AqL9whKd18mJc11wUqgBS/vyIAIQPJeeKQSEhCEgsIHiSjgBCERIMXSRgQkpGAWu2wCF856DY33BoI+JkBxGmRXC6t2P4GL3OuFVRgCAe5SBYwH0k4EDxIAApKkYRfRRiCJBaQICRImazdb233OuWX0gpEL0j5K//ckmYAw9+PY6hGAYFEgnLTjgtJ+H4EEgmmTTuNSHBv2tEgQXmrhQrJ2Jv2sZD4TV3P1ji15+6nHIjHYZiqbNi3mZsxx8rNmBtAKgQIDBK0m3YcSFBv2qMhITLZQoEk1q0WrUjo3rTDI+m/mtgU3zzj8xgnUwLE3ae6Slyy5XuAwwcqMFBokUTftONBgjfZElONhKGb9vGCZABICBKPpfvVTwGSy0kFYlXVXM/LWpTHTR+CEVwUISEp/sWUbMXjXybGv9GQBACSFI+NfzUpQACOG7mZC2o4CI6hioBkFBBIJPH4l6VImBn/hiLpXB0wda0pcluariEUCMAxjZsxrw7BMVSRgTAQCYHJFllI4vEv6fFvCBJj19MlXrvwCkKAeBy6K4T5a3ODcRCKJB7/sgcJ++PfYSQW4Z7TPo9hzBg4Ng67doqoaOPXnLTZAU7aaCDQSOLxLzPiXyI37VGQYLnVoij+DULyygd+b1/MdCs6EL8voaf+o/UAh3cASGQksfYjTEcyoePfeLKFIHHbVUeXBwI+eCA6/tn7ulJnG0EFQoBQiYTm+JdyJERu2uNI0CLRuM21d0EBcZrFl3AykqoRHKFAyEQSj3/HXbLFkvjXxNlQ4Pdap6IGIq95dxuA4R8CQgQSYpMtkpAwKNkaN0jYEf/6+mSfr0UFxCwr+xkAYQjGAY2EUclWPP4lFQmRyRblSEJutVQeu3BaTCB+nzuxu+C5z7tSRuOIioTA+BfTpj0e/8bjX4LiX4tw99sBvzs6ELOi6v+6Umb19QOhEgmByRZpSCZy/EsgEobHv3q3uf7miEB8XmeCIP/ZTzpTZgEcswJ4kUzo+JdiJBMh/iULSfh+pE/+9ZsRgdj1nJsADiUCBB5JPP5lcvxLFhJWJFuwSDqfFnnt3deMAiKrfndt59kBHKOQoL2KxOPfePxLIxKCki2/XXVicQgQj8MwiZu1vDgcCBVI8Ma/lCAhMtliKBKyDjZSEv8SjMTMfzk94PcmDgMxycruBDjM/UAiXkUgkZCVbMVP/07MZIus+Df6pl3rsQt/NgxE1fztM8M4mI4EQ/xL2sHGiRz/kvVcewOBm3Yc8a9dmbxwGAgv64kTnWfCgETbj5CChKRkiwokEyzZIgsJk5ItpCzde7/pB+KyKiZ3pS6Q9AOhAEk8/mU/kokQ/5q6NrT7fY7EBKuq/o6OMzNtHdGAQCJhRbLFsviXrE27YgIkWzgONlrcltYbE/SCzOkAiB8BMj6RRNm0U9EhheXJ1gRH4nFbmh9KkNfu2wiABAYKAxK88S9Jz7WjQkJD/Bv1VotIJEw92Miy+LdP/u3KBHnNvo9GgIyBhEHJVrz5AwOTrXEW/wIgryQI8jYc6TgdDGTmCBCGIyEv2SIfybhtkM3i+DccCQDyRQLAkdkPBBcShsa/0TbtBMa/EzrZogAJncmWWfBackL76ZkFw0BoRMLUg42sQ8LQg40sjX9TECCl7cFAoiEZV8nWOI9/ibyS0L1ppzfZSkMFZHwiice/rEm26EMyAoRwJPH4l3lI4vEvbPwLgJwaAYIZCYOSLfLiXxYcbGRqssXe+HcQyKkRIKj2I0xEwoaDjWw7/cvQZIvC+DcICKuQMP/0L1nJliQe/1KZbCFAHh8BQgqSePwbj39Zi2QIyOMBOCRkJVtkISHnkV1CkbAg2ZqA8W8wkMhI2BD/suK59nj8y0YkYwMhAgmm/Qib418WHGxkW/xLU7KVltB2MhgIwUjoTrYo6f3L3mSLLCTjKP4dAAIqgBcJ/ckWSfEvC9qasi3+JautaQgSYjbtI0DGB5KJ+1w72+JfliRboUCoRUJ7/OsBSPQAhUSYu5QjKd3YCKpeUraxWZi3lAdwyECZQPnGw8HGGPGvDZQS4OCr6ra0qutfrFfVv9ACcPBBKUBZAQg/I+Nf8jfto4HgQ0JcskUCEqswb0WjpPzFA72dPy43y4v+4DR1/xzUFW6bclJww2Lw3yc7zd1Xg7pNzz/xV23X/9bKKl76vrtgJQ8AcZCdbJEV/4LyAySmngvrirTt779mFB6e4TC03uWyiq4DNRWZSzk0n9JtFU0BNQ3UnWbp6Ud0nR/sVNWuzwEw9CFgSNy0MwBJZCBRkRCYbFEU/3r42UklyvoPnrX0VNzhdVkS0czGjlZet2WyVVl5n6rpo93C3IXtAImPJQcbvfLKp8r1vIPPOAxtt+D5M3Aa2683Cr5frqx+JhcAcTMy/iVu0w6AnEADhBwkJMa/Zmn59q/0gtTf+n0ezIshViFXHaMo7Z+S4rUpAIWbofGvT1G55oxJcvZPfq8D15tDeIGvl2Drrbhb07zrB4DENU7j30EgJ0YDIWI/Qlr8Gx2JVVyy6Qubrv1WcJtA6IKIulB8bgAl/X5J6bpUAMPDkOfa/fKq9VUm0am/I6+P1D8DvzcR3ILdq6rbkAOQ+OhokE0ikthAWJRs+XnZSwqMonN/8HlslMAIL/B9p+i4h2aKCpZ30hz/mnvb9+/w2FWXUfnzexyqi/ScA2sAkl5Gf0YCl2wFAWEEEgyb9oy5ZknFzm1um/piOmCEl13fNk1+4eVvR267qIt/pSXLBCbxWXDV8NDyJoHczoLbrnt6LqxsoC3+Jfa5dgTIjBEgrEKC3FItEGg5R/9ON4pRVxO3NVHd8vEqAMNIGZKiJXV2bf3P6f7ZkXLoG6ZpGrfmjIP4dwjIjAC5SIiPf/nnllc6DPz/R/diiFUGwcm/ACBSsuNfSfHSMpu2/lq6f97QNwnTpZqmbadYHv+mJbQOA8GBhOL4F+DIdRgFV9O9CMYuf4Kh+8yvABAuWfGvpHj5BYDjOvp/1ohILu9t3p7O4vgXADk+o7R1GAgzkMTatPOylxU6jMIr6f7lwyE5ewcAIiIaCcAhsPXW3U7/zxi9nMbW65UXnqxlKZJBIMdnBGCQ0JVs8bJXNIDbqhvo/qVjKYPg1P3CvCQ1gfGvTc/98V90/1xoyqGru7snON1iS/wbAiQECZM27YNI0uYoDKJzv6b7l42n9ILjcwAQGxHxr7L+1Vf9g4MmGV9+b4KB/9VqgMPPsvh3NBBmIpnt0nJOziHyl+bz2BMsivIbQf1HUfv2WlA7QO0BtU3T/t2Tlp7yh2y9zYTeyvncfQmK6p2vE5BstXqc+ouIeE0em3KSTVP5WwP/x2W9be+/DOp1UNvBf18J/vl9HrtyChHfx+vSJ6rrN+UxLf4dA0kYEIYikZRu/xgsaNzvlh6HPsEkLbxPXrP3PW7mvHZuxhwvN2OuP8rpXz8oJy97fmVP7d5tZlnhLwhZkA7dpaKCFUU4kLj1vEP/xfs6bJoLv1HWvbxPWrxYKi1e5I9y+tcvK12iVjVs/9osTXnA57bg+p59yvO/U1Qu7WNR/BsBCNlI4DftXLuuaxqeXwxy3KK3K/nv/Owl2dz0OU6MR+Qt0rItBy3ykrvA18O1UCyKwnsBECuW+Fde+XyO3+fBfHzErm++Tlm/4wtJ8SIr5BF5h6rh5aMOQwvmaN3v9ySoG174jkWnf6MAgdy0k5hs+VUt3ywYPoaNoRxG/o2i4k3fcdLn2Alq/qDrqXtnp8sqx3yUw+91JcqrXnofw+lft0FwDNPVA+xXEszSzD9LS1d04mn+IK9YKTMIfpyOdf/Tpy66B1xFrCw5/QuAHIsChAFIulLnV3hdZszvlkZx7h+5GfM7SeiQ4hcVrs3rU9dhPjruNAmmARxaGCTiopUNHnsv9N4DwaHjHnxEUriwl6DmDxYD//ulAQxIkFPFqrrnMlhyRH4QyLEoQOiNfz2ajuQZWBegSZL/H07abCPRHVLCHtnlmWUF/4f1NfbUvfYqzOlfZcObW7G9a1feJy5cqCG496/VwPsO09XMKDiYxJLmD2kJLUNAUCGhbtPOSV9YBzbVmK4eBlHOvwEOC0Wj34QmSe5t2K4iwpu6zy/Sozz9a7frWn4J+z1cVvGVkuKlbWQ0f5CXL1c49E3QV1GPXXU9AKJkKpJRQFpQAKEaibLxyzWYcHRn/ZqTNreHyg4p3QWrq1xW2TVYXq+0fONBNM0fxIXLwRuGbirs19e0vLcXwPCT1dZUWbvlJ9jXhDySoKrbmM6C59oRINP7gTAMSW+fpuVn0O/IFullvOxlJXT0/pWUbvoUbL6hr3h6/rGHIz1oFY5EUb3jM9ivbeutvU5ckGQmufmDp09d9hvY16Ztf+clFjR/GAIyPUA7kiAgvHOrU3weB/y7ceWrLwAUvlhH5ElEYtdyDkMf/XCauy8T5ibxx3pk1yA8uQr2a/e2f/oiSc0fQpD0tuw9gJw5g3lt1p7cf8ZsRkcgEhxtTYOBoEeCLdmKDCQSkp7GL56GXQx2Pfd6Tto8JZ29f4W5S8vAbRD0VURa9vy3YzV/MEmzH4D5mj6PfYq0dHUpRb1/+T635VKY1+fQN94EYHiY0NY0RrIVDmT6CBAKkYTdajnB7RX0ZlRStmsnIc3o8CHx6DjJj8C+dj3/5KIx2gh5+9Q1UIc0XRbJNFF+kpWi3r9+qyLnV3CArVcAFD20tjUdG0kkIMQjgdyPcF3Wnsth/rA9TuOkrpRZQjobZA/daomLN5yABWLrbbwD6bcVA4nO57ZeBfM1zdJzf6By9BsAMh8SyMUARDvDe/8CIEcjAYFFQtx+RJi/KRP5YAvqHbg7+09MaJA9iMTqNIugPmV325RXAiDCGL1/ZQAI1JsGADKTyt6/AMgGSCBT5eVLahneIHsQyNFIQKbTsmnvLtz6Iew7sLTy9VeY1NbUJD0PdZuFNLQTFz1dGqOtqRgAgUIHgMyncqoVALIZEsgUAKSG4VOtgoBEREJ9sqVuP/w8zB+03+dOFOY/n8Gk3r+K2r17YJHLL+w4HKP3rwJsgq+ABPJfKnv/WhQ5UJ9bDV5B6umaaoUy/g0DwgAkOkFGEuS778WdZ2e14+2QQiQSAOQINJCqHR/GaJBtBlcQqGfwAZC7qJxqBYA8CgnkEoCDS+d8RBSb9ghAcCDBnWyd6gcCe3tyBcChitn8Ae+mHRZJ9vwCr9sKdZBPXrV9T4yBPX6TNAfqmLnXZb4CAFFRhMRl01RBfbALgFwFYOiZPNVKjQBpjgQkChIq4l8dPwOqzxUAcjWAYSa9rSlc/FuJNLqGBLIt1lQrkyT7YZiv5/e5EmWVm1KoGP0mL19V6/PYoI7B9KkKb5OXLfYzcqrVCBIAJHl6aTMqINTEvwDIPyGBXAVgGBk11SpzbjkGIC/HGv3W2/H1Jpivh5Sed2gRFaPftB37t8O+NossbRYLRr+NACEMCc79CADyGCSQyzvPzJIxafRbd8GaHJ/XCXuL9Xq0+YgIEHnVtuSAH+Y4hz/BbVNdBoDISEZiGxipAHfURNO0+22qR78p4Tftg0CSB4BAIyFh0w6ALIMEMhUAqadiqhXa0W+Kmr3fwr6jyqq2fzLG6De+26ZElWS5rNJrNG2fPA9gVIPykzkfcfAq0q5peWe3TVOJ6ui712WYrKh6qoyy0W/Yk60gIFBIyEu2ZNUfvASzsJDnw4X5G5OZNNUKANmIAcjpMeYj+vSCk3+NeduiKP6FvHLLvu7zSQYq5yMG7UdsytqtP/SpSu6O9Tqdpq7bkacSCZuPSF78iwB5bAQIA5AIC178EnZxyWv3b2DKVCukTNKC++GugubJ3QVP1Y6e1x6KRFqx5eOIC84iukFWufUtgMKIp/evGA0SdMmWTVW/7Wu7tva2SK9X2/7B8xFHUTMESQQgjwXCkaBNtoiOf7mZq4phR6VZeqpvA0B80EjISbZkPo8d6kSvu095LT97nmJoyi4/yrx2Yd4iicPAGe7wAmBN1bR9vqz7/BIBAQ2yPQCJHcDoEw/83Y03/pWVrVCBDfxmt00xfNLX69RPVVQ9XRN1XjskEpLj32Ag2JEQHP/KXNYe6DY/nSnzytBOtSIUSRgQefUbH8G+dqP43O8BDm/MUdQDSPy97d88g/w7Nk39zZKSdSdQTbUKReIS5S9WSIqfzOzt+OJdHeeH1aD+4zTx/gDqblB3gfotqPv13B/+ref9sFLb+cWb0rLVKZKSJyQAiBPyMxK/omptobWn4C7kdZtEJx4BMNzho6hlWOa1k59shQN5bOxbLSKRRAbi03fnQj37gJSm48jSjjMzfRROtYqExGaS5kO3R1W3fPYsqnnt5xAAizp7O759BGCRQMxr94kLV1SBjfs2i6LgD06zAFO3RPDuP8mua/qdruurjbLSlYUAhRviYKNOz/06SV6+Kj/KOOqYVxFKkq3RSCIBQYGE5PhXVLJnJ+wvz2PXX9SVltRI8ei3ECTikk3fY1l44uINqaOAjHElGWte+yAStbxq6/sWRdEvkVarWF5brEIG9mha3n0F4BBHRRI2hjrqvHamIBkF5EgMIDRt2jmZqyph7+MHryKPIQ9cUTL6Lax4WQuVVuWF22Ffs9MkvIGfPV892CFlFJAxkq2ISMCeRA72JjtcVtm1ZE35DS53n+xKXdcXz0pLlvGxNn9Ai4Ti+HcQyJFwILQj6QO3WTGjwkiFtBgV5j//+ahmdOQj8aiaPnsKy+LStH+3lJ81198PBD8Sm6J6xye23gbohhcEQblWVb/7NYDEiBkJs5KttISmISAUIxlr0y4q3fMWll+S06K4mpv1RCnRU61ibNr9wvw1X3pdZuj7emTYpiBvRV7wc+1YkXTnLW4zitIeon0kgt+HNMa+R1qyvAIZRw3ZjI5pSAaANA0BQYGEqvi3/fQcmU3HxTR+wCDKuwXAaCNqqlUsJMLzT5919SmhGhYMFZJeARyO8OYP6JAM70d80vLN/7Npmxk1ks7dJ71UWbf9Q4DETQcSguLfESBNUYGgQELOwUZ/d/EOqIenQhafpPAmAKSWRCR+Qd5TyW4bfK/coRIVrDkUrUMKyk27Q1b58hav24K5fzGZ5XNbEwyCn5YBJGZCkFAf/4YCwYWEnPhXZtNzoZ7FDi5wu3UVL+fpHwASD9rPSFAisfbUfbjD3afCPFzGKMq+G+Bwx2ojFO1KMgjEouefWETXTHT05U8wiU8/DJBosCLBlGwRg2Q0EFRIKIx/xaXIqDEf5kXgdVmn9DR8vrArdUEXAfGvj5+zqkTHO/0X5FFfrK/J4zBMERWuT0fTsTHKlcQGcMwO+P0MxzFY/n4kfwVIdGQkWyTGvzGAMCfZMumFOb/F+0tymiXXyKrfe74rNakTAPFAInHwspdXaNr/t8Bj112M53UgHVtUzZ8v5GbM9aJtaxoGxKnt+mkl7YseQxm7T/xXWrzYzKL4NzIQujbt0ZB0pCzMd9s0mDbCo6HILtLxUh4WFW39AFxVqjpT5iBPI7qQcQugvACHB5SrK22elpO+IF9R++Eus6LyPq+LmPv8PnX9z7kZc8To25qG3Gr5ZBXbXvHiHIVGZ2k7P31KGrxxpyj+xbhpB0AORwbCtGRLmP/i62CREv4Ls+m6ppgVVbeC+j2oP5p7qu4BdbPb3kv47YvXbb1IeP7JNPjevwNIRAVPnQJfA7rD+1jlcWgB3OrrQN0F6l5QvwZ1I/jnhP8Z+DzWRFXDro9ZEv8OAjkcGQjDkDhUbYegOp4wqRDckrKtbwEYfixtTYW5y/g2XdtNxEC1TLKqqu5VN+/fLspfmiPKX6zqzlvgBOUG5ek+D/6OHGosWKwVFSwt1LTuf80kTv+TD/Ix4hggr5SVr7rAgvg3CMhYSAiMfzEjOTVTp247HPOhIaaWou79Z7jpc1xYOjaC8ug4R2bjX5j6i3XcQ/PFhavKhbnz7WimWgUdkXdKSlY3aFr3rXJZpZiTxaGy9hQ8CDbtNobHvwiQR0eAUIgER1vTHk3H0d/jGexJafl9iVru8aSQIaKQSERF60/6vU7M795IFGwQnv2LuOjpEoDCh2ZgTxQkyHMjfnHRsgajKOUxPNN2ka4ryrqX9sFOtaI4/h0C8mgAOxIsyRbu+FcGkDwI18SA+kIWppZzfBmA0YdjqpXTKM6+E+trcNvUU1XN+3YLcuZbUZz+RYsEKWdP7c6PPXY15vDEaRZMA0C0ZB1sJCD+DQYyNhKGxb9adduRWXQjiFZI6iUu2bqNkzbHibX5A1KigjXfYH0NHnvvxeKiNceHjsejPCIP9TSirHxdocfRi2n8HFLqxtd3jXFEns74Ny2hMQTIo+iuIgyJf0E5Bec37/E6zZiPe5BRfZqmaaLC5w9z0mb7cPb+tRnF56AfwBq4cigvAzjS0R6Rx/PIrqx8fZXbproO21WEf520ZKmGEad/RyOJAYRhSGKc2fJ1pizKM8kq7oQdm0B0ISdpdfyUf3DSF3QQ0fwB7D3SsDzPgTyrLi5e992YR+THmGoFhaRiQ6bb1gPVgX6oFBc2fYphqhUVyRYAcujR0sYQIPQgIeC59l7ZhQ+2Os1SqEEzhMDwuRMsyupbxKXbPu1KnW0jqPmDT9t1ZB6W16JqPrCef26eN8rTiMQiGWn64Fdc2LoXyxEca0/BnwAQJ8Z57WQiGQRy6NEAZiTMOf07cEz+zLxWee3HTzhMEkI+eY+9GD3gFkF6rbzmvR0AhILI5g/czHlyh1EI3bzCrCj5JT97nmaMR3axIYm9aUeqzyA4Dh3Dgz3MVFnZqmYMo9/ITraCgLAOyZjdUTiKuk9ftKoaricaBvJ8t1FScGd34eb3ulJmqcloayoqXH8Uy2uTlG05gvK59jGQYEq2ApKiFSVIcwfY161u3vsu9Og38uPf0UCIQ0JS/AuHBGlG5+hMXZihqPvkGYuy/k6PXYfp+ITHoZ9iFJ+/T1G37yVO+qLKzpT+c1uktTXVco9Dj302ywruBSgcqJo/5JCGxAOuIjNgX7tJdOpfOOe1kxH/hgHBiIS0+Jf4Btn2zpQkXlfa0mPy2gO7lE3fLNLyUh+y6Tj32HWcX4G6E9Rddj3n9zpe6sPK5m+eUNQd2MvNWJbGSVsoHzzUSEXvX5dVXX8X9NWj5LnPiWz+gDX+FRcuyYB97e4+2Y0ARi9VSFAmWxGARERC3Kad7t6/EaZa+UE5QVk7Ts+0gOoD5Rqa2U5eh5SYm3aRq08JFTY4zeIp/Ky56qjPkeBEAplsuWy9dVCxL9iHTJGWLK/FMh+RxPg3ChA8+xHmxL8wSEaPow4DQmXvX0Huk6VelxnqVtAkK/gbEc0fiIp/DcLjUF36kVLV7TqCZT4iiclWDCBUb9rJi3/HRhJ5Xjt6JNHammJEIinb9j/YxaWo3bsd8pFdUuNfVePbX8D+DMq6XW9gHSJKEpIxgIxDJFBXEYxI8I5+A0DegQZSs/dIxKcRqUASedNe4nNbodIsPf/QOpjRbxTEv+iAjLP4FzcSstuaymvegpqR4gULkZ+1oDj4iDyK59rJjn85AMglMD+HWXYuCWb0GwXxLwogTIt/owFhLBL4ZMvQnfUcHBDLVICjHkPzBzKRKAAQqOdGAJDHIQf2kI0EJRBGxL8okBA4r51OJADIBkggFwEcDRg7pJAV/yoBEFQj44KATMcw1YrM+BcCyMSLf9EjIXT025yAuu3gFkggkwGMSkxthMiLf7sBEKjDiwDIXJzz2omOfyGBsCj+JQ0J3vgXxVVEUrrtNZiFhZwJk5S+mArZIYVsJLU+yAYTAMgqvFOtCE62MABhSLJFyWckeJMtjJ+RSEpfgp/TWL33PTTNH6j6jERe9cIx5GQxzM+grNu9PdJsRBqRYARCLZJebvb6NN6551IjVs7oaj81r4vK+Jeb/WSlMH9TajdSBWFVGKEKns8EIJzRkIiKNmbDLi5t15H5aDukUBH/aloPvACLXFm388toA0Rpin/xAaEISYnXCde0TXD+hZ0xb7UIRqIXZPwbas/gslwJriLaGLdbHa6+HqiI1Kqsnoac4RoLCd5kK/qtVggSv1VZBjXfBdyOJcoq1hdiHUVNUvyLAwh18W8tAAJ1L6tqPbyayk07APIbmNfncRqvAbdbthh7ErPLIvs57DswL3P+OfTN6MhAMpBsic4vave6TFBHZdw25dWigiQRnnntJCDBCYSa+FcAgEA9/KTlZfyRwmRL7zCJoA4W6oWZt461H9Fyjk+HBTJwmzXHRxoSlJt2Tesnm2Ffu0VReM/gKOrRM9shkBAc/xIAZKz4Fz+SPodJAvVknV3PuwLAUFKBhJO+7LzPY4fqWQWA/HOsTbu08nXocdIeh24qP3txI1xbU2Lj3+68RVKHkQfd5UTb9e3G4ScT0SIhMv6NjIQgICR/RqLlpt8P84ft97oSudnrfqQi/pXX7HsWdjH0NBx4dqz4l5e1tBXLcJ7ezkOzBvYi8L1/CUDiU7fsXw/7mv1eZ6KsfH1O0KO7YwKh6DMSAoGQmGzJaj5dB/uHruNn/Qmg8BEX/0YEonMYRdCjz0TFL32P4jMSp1GS/yD8YnNNFhdv/Am29y8R8a+kZO15cBWDCheQsuvbfgFQGEKAkIwEZfxLMBCSkPByNiXDthr1OE0J3Kw1aSSe/vVLKt7cBbsY3HbtJZz0RW1oDjZKq17fD/v1kXIYeDfwMue1EolkzPg3N0lqVVb8EsvrVTW+tTms+QN+JMTEv+QAIQGJyGnpgW7noxfm3QFAaGPfamFD0nFmXoPD2A3dB8ogyrt7+NHdMZBw0ucrHUYBpuGcRnHObwAOBVokOJMtk1ma9w8sr9PrNEwRFy5vi9AhBTUSEpMtEoCQE//6Va3J/8XyC5DXfbYAoHAQvB9RmqRwOf9QSSpe3QNxRN4vrdgDnQgNlUmafzfAISNk0x4did4sL/gX1tdoEByfD3B4o7QRgtu0E4+EJCAYkcTatHelP5Xs8zigfwFIt0NF/ZdrAQo7QUjUPY1f/gtLF0e3TXMJN31JG+RxFKnDIMDUsXDgSpJ7hzBvVSUZSIQ5Se0maR5UgBJy9XBbJosKltTF6thIFBKMyRaJQCLuR3D1/jVYlE13YPlFIG36AZIkgEKNB0nH2QVtWl7qA1jagSKlav52Vv98RMgzW7ILe3cFcAwydVnlV4lLNr0DkJgJSrbs0vItXztN/BuwviZkT6ntOrgcTVtTKuLfKPsRkoHg2bRHQCIs3P0h1l8I8o4Pbovu7DiThGzcXXBIZloE+Vs+taoar8X6/cHVY3JXalIRxtO/eqRRHebF2P8m4U40y0vuFZdsPgaA2DAicQjzlmXreEf/Br4erpmNDiP3OoCjG23vX5qSLQqA4EESBqTl2EyjUVJ2O55fjMdpTtR0nPg7P3fjT60nHjcAIP4oyZYfwJDy8zZ+ZJKVQ/eoGnX1aP1h1pjz2mMg4WYtTffYdYR0sTdJC38lr9n7Ki9zfsPgrHZ/FCR+AMTLz17Q0VP31ntmeeF9HqcB9/f3eWyTemr2fAnZ+5cOJBQBIRBJZ+qqk0QsEqScFsVFRknpn8VlbzwDag+ovaB29jR8vcIoLb0b/O+ETLZ123WXABwcnM0f/NLKV6EepEJTtt7may2K8n8rat9eA2oXqDcUdW/vBrXe0lP+X1A3Ia1Wifyeve1fLRTm9s9DhG2QTV2yVUIDEIKQ+GTVB+b5ffSOOkBbSEggKt7+NjHNH+ZYtJwT/6b7Z8JTZmnu74R5C1RYe/9SjIRCIMQikZlkVbfT/ctGU8rmbx8BOByEdUhJmyvVCzNw3/LRUU6T4GZx0ZMteKdakRL/Rk62KAYyFpIoQCIhaT0xt9BpllM+CwTq3bKn+s7O1AUiops/8LKXdTqMwp/R/fNB4TB3Xy0qWFlG1Og3iuJfGoBERIIt2eJmbzjscRgupvuXH6ksPTU3dKYsqB37iURsj+zyspc3OQz8WwMBZg8y7cdhEk4TFawqjPWgFaFIiNu00wTkEI5brVAkfk7muoMACdQDVRTguK7jzNzK8MONJDzXztVyjt9D988bq6yq6l+AK0cNWaPfSE62aASCB0lyGJKMNSccRhHu4fYE4bi14/TsBkqaP/R/RjJHo+k4PN/rstD+s4eXnnf8X4JzC0Qkj34jEwnNQIhDEmg5PrvUJKvE9Ek7EYV8EKfpPPHPjjPzhDT0/nWISrZ+5Lapr6QbBVJuu+YS+YXdOwAGCyEdG+mLfxkAhEAkrcfnyGQ1ny/2uqxTqFwQLqvyMmnVuzvbTj5uobP3LzdzcYOm/X8P+zw2qCcciSrwfRNNkpwHhHnLivjn5vmpHP1GUrLFHCAEHmz0dKatPmVRNiJjoTGfX0J11fC6Jqnbjz7EyVhZBWD4GdIg2ynIeyZZL0j9NZaJs5jK70u06zpulZRt+ZKfPa+PgramVMW/DAEyFhKI+DfoiHwfL2fTAXNP3e3Ev1PakeMqD3alLT/VduJxH0N7/zoEuU8d0fFT/uj3eUiBghzaNAhTfyur3PEVP2uehe7RbyTEvwwCghHJmM+1H51hbz+z+LSm89Qch0mC6x7dqm6+WVH/+erOlMWlbSdmeMjt/UtYx0YvJ31+raL2/S1mRfmvwWYe1/EZ8O8n2rQtt6taPlvHP5dUwsua6yGzrSnN8S/DgByCv9WCaP7gaz0xR91xdtlpRf1Xm1StyX+z6wW/AHUF8ksPXgROi3IS+OdX2w2CO9Rtyf8Rl76+qzN1+fnW4zOM/YcbCR79RmFbUxs/e1mbuOSFzzXtP640yYoecJiEPwd1Odi3hfwZeN3WRPDPLwP1M/D/u6+348clkrIX9wtzVyBjFix0tjWlMP5lIBBykQR3bPSBMoCSdKauaOdmrasGVQWqtu3U/K6WYzPkrcdmWIZP+5Lb/AE3EoxTrTyc9Dk6UGJB3upOUdHztaCqQNUIz69u52bMEYHSgnIT3/yBnNFvBD/XzlAgeJBgaZCNe6rV+Bj9Fmlee2hBICF0YE8UJOQfbGQwELKQYBnYA4uE9k07ttFvmJEwZ6oV0fEv84EQF/+ShISxU63IQkJvW1OKkTAcCOFIxtFUK5LmI1KChLypVkQ/184CIGMhIW7TzhIkxCVbaJBwcSMhJ/4lFEn0TTtLgByCv4rQhYS0qVYkIUG9aY+ChElTrWCTLRRIWASEIUhYkWzhj38pRcLUZEvMOiB4kIzT+Je0TXs8/mUpEEKR4JzXjgoJkzbt8fgXctPOXiD0Jltsjn/JSrZIQkJv/MtSIIxAwqRkiylI6I1/STj9y2IgEZEwM9kiDQlJBxtDkcBv2tkc/44vIIfgryK4Nu0MiX+pQEJ3skVn/BuEpB9IIe2LnC4krIh/yWn+EI9/USFJQYBk0r7A2XYlice/EyL+7anZlpzQmb72CO2LmyAg8fg3Hv8SmWz1tn/6RYK4/P19tC/u8YhkgiVb0W+1mB//Rtu0AyCvIkA20b6waUYSj3/j8W8kJADIqoReTvoMsLD8tC9sUpEQt2lnBZJom3ZCkYz7+Ndj0zY8lGBW1N0JFpWN9kVNApIJEf9S/BkJ3mSLEiTENH+w2LVNNyY4zfLJzcmzpLQv6HGKhMhkC/qIPN3PtbMh/o2CRFK8ssPndST2t3hpO7XkJO2LOY4kHv9G2o/Q9BlJT82u7xAb/UBktV+tpX0hkwiElGSLtM9ImLRppzj+jYaEhvhXx/lh8TAQg6jkl2AxWWhfzGxDEo9/mfcZCTHJls5p4t0yDMRtN0xqPbmI3WeySEAyrpKtaEhY8Vw7tfGvtHxD5lDj8+FWk93Fb66nfRFTjmQin/4lCwlDky308a9fx/1p6ZCLYSB9vV03g0Wkpn0RU4CE7oONrI5/SUq2mBL/is4vEjtN/GmjgPg8joTOtGc+p30BMxkJQ5OtUCQENn+YgPGvonrn28FNvENa2xslFePzQ8MJgGQiJFsUIDH0qatviQrE53Uldqav/Yr2xUsREMYfkWdsssXe+DfWfkRWseW98KlcowakGETFt4AFZKJ9AbMOSTz+ZcTBRuzxr9ph5F4b7iHiFKHu4jd3NI63A4wEIiGtQwqTkLAi/o1yqwWPxKdqev/ZSBYiArEbRJc2J8+qo33xUoiEDckWkUiitzUlDgkrki1QooIVxV6XZSpqIEip20890DhRbrVYhISxo99YEf9G3LRrrarK30RzEH2Cqd+XICp77zmweLy0L16mI2FoshWPfyNdRUKuJG5t1w8rA2CtQwPpP4Ji007tylh3kPaFG0dCW/xLGhIGxL/Sihf2+9zWybEMjDn212VVXdmUPCuf9oVLIRDGj35jbLLFnuYP0rLNqR6H/tKx1j+q2dgm2YXrmg5Pb6R98bISyTg62Mjm+Dd4P5KzoMJh5F2FZu2jAjKI5OamI4830L54GYwkHv8yJf6NfiUR5C4s61PXTkO77lEDGUBSdWNz8mz2d2KEQEJWssXqKwlL419x8fpMGBzQQJByWpRXd2U8+xNYQD7aFzDLkcTjX8qQeKXlL3wJ9hxXwK53aCD96ZZdfxH33JaXGuMHGylLtshDQk6yRSgSfMmWRdW0/1mP0zAFy1rHBGSo1O2n/tF8bG5740Q4lsIAJJjiX5JutVgQ//oFuUsaDMKUB/GscVxAkLIbxFeCq8k74/5qEo9/2RT/WqSV2/c4LZLL8K5v3ED6y+9HniW5q/XEwuNgMblpX8ysQDKONu20IgnZj7gkJZt/siov3I6sSSLWNjFABsvr6pukaDj4YGfaGgTK+OySEgvJhEu2yGprCh3/GiWlLxyyqmru8/vck4hc04QCGSqf1zXJICm/i5u96Y3mo7M7x91VhSXxL2nPtUdDQm386+JnL2rrqf9wt6Wn8g6/15VIxlomBUhwOUyyizUdZx8C+5S3Wo7PrwELzNw4Hg5AxuNfaCRd+JB4QZl455ZW9tTve10vTPuzyyq/iOz1SzqQkCuLx5FgVtRe38vNfBgZuyAo2P0FWGxZoJBP6EWgNKAMrKnDjxqaQuqxkToSuZqRSo5U00fq6HRDS3gdi1Qz+qsVqeNR6sQMQ9twPT5SJ0cXgBFUM0fq9Eh1BNeZ4JrVX51InY1QKQPVNVyzDQBEpNIAHN2g6nlZizN66vd/1tOw/zmD6Nw/rOqGa31eJ6VrFvmP+F/xv+J/Rfnr/wNVnTAUJZk17wAAAABJRU5ErkJggg==" })),
        React__default['default'].createElement("use", { id: "Background", href: "#img2", x: "0", y: "0" })));
};

var connectors = [
    {
        title: "Metamask",
        icon: Icon$_,
        connectorId: "injected",
    },
    {
        title: "MidasWallet",
        icon: Icon$14,
        connectorId: "injected",
    },
    {
        title: "Coin98Wallet",
        icon: Icon$15,
        connectorId: "injected",
    },
    {
        title: "TrustWallet",
        icon: Icon$11,
        connectorId: "injected",
    },
    {
        title: "MathWallet",
        icon: Icon$$,
        connectorId: "injected",
    },
    {
        title: "TokenPocket",
        icon: Icon$10,
        connectorId: "injected",
    },
    {
        title: "WalletConnect",
        icon: Icon$12,
        connectorId: "walletconnect",
    },
    {
        title: "Binance Chain Wallet",
        icon: Icon$13,
        connectorId: "bsc",
    },
];
var localStorageKey = "accountStatus";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React__default['default'].createElement(Button, { fullWidth: true, variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(localStorageKey, "1");
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React__default['default'].createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React__default['default'].createElement(Icon, { width: "32px" })));
};

var HelpLink = styled__default['default'](Link)(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React__default['default'].createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React__default['default'].createElement(HelpLink, { href: "https://docs.pancakeswap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain", external: true },
            React__default['default'].createElement(Icon$o, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
var templateObject_1$E;

var StyleButton = styled__default['default'](Text).attrs({ role: "button" })(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled__default['default'].div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = React.useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React__default['default'].createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React__default['default'].createElement(Icon$n, { width: "20px", color: "primary", ml: "4px" }),
        React__default['default'].createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$F, templateObject_2$d;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React__default['default'].createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React__default['default'].createElement(Flex, { mb: "32px" },
            React__default['default'].createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan"),
            React__default['default'].createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React__default['default'].createElement(Flex, { justifyContent: "center" },
            React__default['default'].createElement(Button, { size: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(localStorageKey);
                    onDismiss();
                    window.location.reload();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React__default['default'].createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React__default['default'].createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    return (React__default['default'].createElement("div", null, account ? (React__default['default'].createElement(Button, { size: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React__default['default'].createElement(Button, { size: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};

var Icon$16 = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React__default['default'].createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React__default['default'].createElement("g", { mask: "url(#A)" },
            React__default['default'].createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React__default['default'].createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React__default['default'].createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var StyledAvatar = styled__default['default'].div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"])));
var Pip = styled__default['default'].div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var Avatar = function (_a) {
    var profile = _a.profile;
    var _b = profile.username, username = _b === void 0 ? "Bunny" : _b, image = profile.image, profileLink = profile.profileLink, noProfileLink = profile.noProfileLink, _c = profile.showPip, showPip = _c === void 0 ? false : _c;
    var link = profile.username ? profileLink : noProfileLink;
    var isExternal = link.startsWith("http");
    var ariaLabel = "Link to profile";
    var icon = image ? (React__default['default'].createElement("img", { src: image, alt: "profile avatar", height: "32px", width: "32px" })) : (React__default['default'].createElement(Icon$16, { width: "32px", height: "32px" }));
    if (isExternal) {
        return (React__default['default'].createElement(StyledAvatar, { title: username },
            React__default['default'].createElement("a", { href: link, "aria-label": ariaLabel }, icon),
            showPip && React__default['default'].createElement(Pip, null)));
    }
    return (React__default['default'].createElement(StyledAvatar, { title: username },
        React__default['default'].createElement(reactRouterDom.Link, { to: link, "aria-label": ariaLabel }, icon),
        showPip && React__default['default'].createElement(Pip, null)));
};
var templateObject_1$G, templateObject_2$e;

var Wrapper$1 = styled__default['default'].div(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled__default['default'].nav(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 1px rgba(133,133,133,0.5);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 1px rgba(133,133,133,0.5);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled__default['default'].div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["  position: relative;\n  display: flex;\n"], ["  position: relative;\n  display: flex;\n"])));
var Inner = styled__default['default'].div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var MobileOnlyOverlay = styled__default['default'](Overlay)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var FlexCustom = styled__default['default'](Flex)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    position: absolute;\n    right: 250px;\n    border-right: 1px solid rgba(255, 255, 255, 0.4);\n    a{\n      padding: 6px 20px;\n      margin: 0px auto;\n      color: #fff;\n      font-weight: 700;\n      border-radius: 20px;\n      font-size: 14px;\n      @media screen and (max-width: 500px){\n        display: none;\n      }\n    }\n"], ["\n    position: absolute;\n    right: 250px;\n    border-right: 1px solid rgba(255, 255, 255, 0.4);\n    a{\n      padding: 6px 20px;\n      margin: 0px auto;\n      color: #fff;\n      font-weight: 700;\n      border-radius: 20px;\n      font-size: 14px;\n      @media screen and (max-width: 500px){\n        display: none;\n      }\n    }\n"])));
var FlexCustom1 = styled__default['default'](Flex)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    position: absolute;\n    right: 350px;\n    a{\n      padding: 6px 20px;\n      margin: 0px auto;\n      color: #fff;\n      font-weight: 700;\n      border-radius: 20px;\n      font-size: 14px;\n      @media screen and (max-width: 500px){\n        display: none;\n      }\n    }\n"], ["\n    position: absolute;\n    right: 350px;\n    a{\n      padding: 6px 20px;\n      margin: 0px auto;\n      color: #fff;\n      font-weight: 700;\n      border-radius: 20px;\n      font-size: 14px;\n      @media screen and (max-width: 500px){\n        display: none;\n      }\n    }\n"])));
var FlexCustom2 = styled__default['default'](Flex)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\nposition: absolute;\n    right: 150px;\n    a{\n      padding: 6px 20px;\n      margin: 0px auto;\n      color: #fff;\n      font-weight: 700;\n      border-radius: 20px;\n      font-size: 14px;\n      @media screen and (max-width: 500px){\n        display: none;\n      }\n    }\n"], ["\nposition: absolute;\n    right: 150px;\n    a{\n      padding: 6px 20px;\n      margin: 0px auto;\n      color: #fff;\n      font-weight: 700;\n      border-radius: 20px;\n      font-size: 14px;\n      @media screen and (max-width: 500px){\n        display: none;\n      }\n    }\n"])));
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links, priceLink = _a.priceLink, profile = _a.profile, children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = React.useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = React.useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = React.useRef(window.pageYOffset);
    React.useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle__default['default'](handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React__default['default'].createElement(Wrapper$1, null,
        React__default['default'].createElement(StyledNav, { showMenu: showMenu },
            React__default['default'].createElement(Logo$1, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React__default['default'].createElement(FlexCustom2, null,
                React__default['default'].createElement("a", { href: "https://midasdollar.fi", target: "_blank" }, "Mi-Dollar")),
            React__default['default'].createElement(FlexCustom, null,
                React__default['default'].createElement("a", { href: "https://bsc.valuedefi.io/#/vswap?inputCurrency=bnb&outputCurrency=0x35e869B7456462b81cdB5e6e42434bD27f3F788c", target: "_blank" }, "Buy MDO")),
            React__default['default'].createElement(FlexCustom1, null,
                React__default['default'].createElement("a", { href: "https://bsc.valuedefi.io/#/vswap?inputCurrency=bnb&outputCurrency=0xc1edcc306e6faab9da629efca48670be4678779d", target: "_blank" }, "Buy MDG")),
            React__default['default'].createElement(Flex, null,
                React__default['default'].createElement(UserBlock, { account: account, login: login, logout: logout }),
                profile && React__default['default'].createElement(Avatar, { profile: profile }))),
        React__default['default'].createElement(BodyWrapper, null,
            React__default['default'].createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links, priceLink: priceLink }),
            React__default['default'].createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React__default['default'].createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$H, templateObject_2$f, templateObject_3$8, templateObject_4$3, templateObject_5$1, templateObject_6, templateObject_7, templateObject_8;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React__default['default'].createElement(Button, __assign({ as: "a", size: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React__default['default'].createElement(Button, { as: reactRouterDom.Link, size: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a$1;
var alertTypeMap = (_a$1 = {},
    _a$1[types.INFO] = variants$1.INFO,
    _a$1[types.SUCCESS] = variants$1.SUCCESS,
    _a$1[types.DANGER] = variants$1.DANGER,
    _a$1[types.WARNING] = variants$1.WARNING,
    _a$1);
var StyledToast = styled__default['default'].div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = React.useRef();
    var ref = React.useRef(null);
    var removeHandler = React.useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = React.useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    React.useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React__default['default'].createElement(reactTransitionGroup.CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React__default['default'].createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React__default['default'].createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(Text, { as: "p", mb: "8px" }, description),
                React__default['default'].createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$I;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled__default['default'].div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React__default['default'].createElement(StyledToastContainer, null,
        React__default['default'].createElement(reactTransitionGroup.TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React__default['default'].createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$J;

var ResetCSS = styled.createGlobalStyle(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1$K;

var baseColors = {
    failure: "#ED4B9E",
    primary: "#FFCB23",
    primaryBright: "#FFCB23",
    primaryDark: "#FFCB23",
    secondary: "#7645D9",
    success: "#31D0AA",
    warning: "#FFB237",
};
var brandColors = {
    binance: "#F0B90B",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#FAF9FA", backgroundDisabled: "#E9EAEB", contrast: "#191326", invertedContrast: "#FFFFFF", input: "#eeeaf4", tertiary: "#EFF4F5", text: "#452A7A", textDisabled: "#BDC2C4", textSubtle: "#FFCB23", borderColor: "#E9EAEB", card: "#FFFFFF", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#9A6AFF", background: "#343135", backgroundDisabled: "#3c3742", contrast: "#FFFFFF", invertedContrast: "#191326", input: "#5D512B", primaryDark: "#0098A1", tertiary: "#353547", text: "#EAE2FC", textDisabled: "#666171", textSubtle: "#c9c4d4", borderColor: "#524B63", card: "#27262c", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    } });

var light = {
    background: lightColors.card,
};
var dark = {
    background: darkColors.card,
};

var _a$2, _b;
var PRIMARY = variants.PRIMARY, SECONDARY = variants.SECONDARY, TERTIARY = variants.TERTIARY, TEXT = variants.TEXT, DANGER = variants.DANGER, SUBTLE = variants.SUBTLE, SUCCESS = variants.SUCCESS;
var light$1 = (_a$2 = {},
    _a$2[PRIMARY] = {
        background: lightColors.primary,
        backgroundActive: lightColors.primaryDark,
        backgroundHover: lightColors.primaryBright,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        color: "#FFFFFF",
    },
    _a$2[SECONDARY] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: "transparent",
        border: "2px solid " + lightColors.primary,
        borderColorHover: lightColors.primaryBright,
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TERTIARY] = {
        background: lightColors.tertiary,
        backgroundActive: lightColors.tertiary,
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TEXT] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[DANGER] = {
        background: lightColors.failure,
        backgroundActive: "#D43285",
        backgroundHover: "#FF65B8",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUBTLE] = {
        background: lightColors.textSubtle,
        backgroundActive: lightColors.textSubtle + "D9",
        backgroundHover: lightColors.textSubtle + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUCCESS] = {
        background: lightColors.success,
        backgroundActive: lightColors.success + "D9",
        backgroundHover: lightColors.success + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2);
var dark$1 = (_b = {},
    _b[PRIMARY] = __assign({}, light$1.primary),
    _b[SECONDARY] = __assign({}, light$1.secondary),
    _b[TERTIARY] = __assign(__assign({}, light$1.tertiary), { background: darkColors.tertiary, backgroundActive: darkColors.tertiary, backgroundHover: darkColors.tertiary, color: darkColors.primary }),
    _b[TEXT] = __assign(__assign({}, light$1.text), { backgroundHover: darkColors.tertiary }),
    _b[DANGER] = __assign({}, light$1.danger),
    _b[SUBTLE] = __assign({}, light$1.subtle),
    _b[SUCCESS] = __assign({}, light$1.success),
    _b);

var light$2 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
};
var dark$2 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$4 = {
    handleBackground: lightColors.card,
};
var dark$4 = {
    handleBackground: darkColors.card,
};

var light$5 = {
    background: lightColors.card,
    hover: "#EEEAF4",
};
var dark$5 = {
    background: darkColors.card,
    hover: "#473d5d",
};

var light$6 = {
    background: lightColors.card,
};
var dark$6 = {
    background: darkColors.card,
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark, button: dark$1, colors: darkColors, card: dark$2, toggle: dark$4, nav: dark$5, modal: dark$6, radio: dark$3 });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light, button: light$1, colors: lightColors, card: light$2, toggle: light$4, nav: light$5, modal: light$6, radio: light$3 });

exports.AddIcon = Icon$4;
exports.Alert = Alert;
exports.ArrowBackIcon = Icon$5;
exports.ArrowDownIcon = Icon$6;
exports.ArrowDropDownIcon = Icon$7;
exports.ArrowDropUpIcon = Icon$8;
exports.ArrowForwardIcon = Icon$9;
exports.AutoRenewIcon = Icon$a;
exports.BackgroundImage = BackgroundImage;
exports.BaseLayout = GridLayout;
exports.BinanceIcon = Icon$b;
exports.BlockIcon = Icon$2;
exports.Breadcrumbs = Breadcrumbs;
exports.BunnyPlaceholderIcon = Icon$c;
exports.Button = Button;
exports.ButtonMenu = ButtonMenu;
exports.ButtonMenuItem = ButtonMenuItem;
exports.CalculateIcon = Icon$e;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardRibbon = CardRibbon;
exports.CardViewIcon = Icon$d;
exports.CardsLayout = GridLayout$1;
exports.Checkbox = Checkbox;
exports.CheckmarkCircleIcon = Icon;
exports.CheckmarkIcon = Icon$f;
exports.ChevronDownIcon = Icon$g;
exports.ChevronLeftIcon = Icon$h;
exports.ChevronRightIcon = Icon$i;
exports.ChevronUpIcon = Icon$j;
exports.CloseIcon = Icon$k;
exports.CogIcon = Icon$l;
exports.CommunityIcon = Icon$m;
exports.CopyIcon = Icon$n;
exports.Dropdown = Dropdown;
exports.ErrorIcon = Icon$1;
exports.Flex = Flex;
exports.Heading = Heading;
exports.HelpIcon = Icon$o;
exports.IconButton = IconButton;
exports.Image = Image;
exports.InfoIcon = Icon$3;
exports.Input = Input;
exports.Link = Link;
exports.LinkExternal = LinkExternal;
exports.ListViewIcon = Icon$p;
exports.LogoIcon = Icon$q;
exports.LogoRoundIcon = Icon$r;
exports.Menu = Menu;
exports.MinusIcon = Icon$s;
exports.Modal = Modal;
exports.ModalProvider = ModalProvider;
exports.OpenNewIcon = Icon$t;
exports.PancakeRoundIcon = Icon$v;
exports.PancakesIcon = Icon$u;
exports.PrizeIcon = Icon$w;
exports.Progress = Progress;
exports.ProgressBunny = Icon$z;
exports.Radio = Radio;
exports.RemoveIcon = Icon$x;
exports.ResetCSS = ResetCSS;
exports.SearchIcon = Icon$D;
exports.Skeleton = Skeleton;
exports.Spinner = Spinner;
exports.Svg = Svg;
exports.SwapVertIcon = Icon$E;
exports.SyncAltIcon = Icon$F;
exports.Tag = Tag;
exports.Text = Text;
exports.Ticket = Icon$B;
exports.TicketRound = Icon$C;
exports.ToastContainer = ToastContainer;
exports.Toggle = Toggle;
exports.VerifiedIcon = Icon$y;
exports.WarningIcon = Icon$G;
exports.Won = Icon$A;
exports.alertVariants = variants$1;
exports.byTextAscending = byTextAscending;
exports.byTextDescending = byTextDescending;
exports.dark = darkTheme;
exports.darkColors = darkColors;
exports.light = lightTheme;
exports.lightColors = lightColors;
exports.makeRender = makeRender;
exports.menuConfig = links;
exports.toastTypes = types;
exports.useMatchBreakpoints = useMatchBreakpoints;
exports.useModal = useModal;
exports.useParticleBurst = useParticleBurst;
exports.useTable = useTable;
exports.useWalletModal = useWalletModal;
