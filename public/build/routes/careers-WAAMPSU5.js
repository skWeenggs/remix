import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-MLBUYSNZ.js";

// app/routes/careers.jsx
var import_react2 = __toESM(require_react());

// app/content/carreier.ts
var carrier = [
  {
    brand: " Fullstack Devloper",
    desc: " Fullstack developer having great command over debugging and troubleshooting skills. "
  },
  {
    brand: "PHP Developer",
    desc: " If you are good at core PHP and have extra ordinary skills for handling large projects \u2013 you seems to be a good fit. Be ready to take the challenges. "
  },
  {
    brand: "Javascript / jQuery Developer",
    desc: "Anyone with strong understanding of Javascript is always welcome without the limitation of any specific framework. "
  },
  {
    brand: " Project Manager",
    desc: "If you are capable of handling the giant product to extreme level, you are welcome to prove yourself with the help of dedicated team. "
  }
];

// node_modules/react-accessible-accordion/dist/es/index.js
var import_react = __toESM(require_react());
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var AccordionStore = /* @__PURE__ */ _createClass(function AccordionStore2(_ref) {
  var _this = this;
  var _ref$expanded = _ref.expanded, _expanded = _ref$expanded === void 0 ? [] : _ref$expanded, _ref$allowMultipleExp = _ref.allowMultipleExpanded, allowMultipleExpanded = _ref$allowMultipleExp === void 0 ? false : _ref$allowMultipleExp, _ref$allowZeroExpande = _ref.allowZeroExpanded, allowZeroExpanded = _ref$allowZeroExpande === void 0 ? false : _ref$allowZeroExpande;
  _classCallCheck(this, AccordionStore2);
  _defineProperty(this, "expanded", void 0);
  _defineProperty(this, "allowMultipleExpanded", void 0);
  _defineProperty(this, "allowZeroExpanded", void 0);
  _defineProperty(this, "toggleExpanded", function(uuid) {
    if (_this.isItemDisabled(uuid)) {
      return _this;
    }
    var isExpanded = _this.isItemExpanded(uuid);
    if (!isExpanded) {
      return _this.augment({
        expanded: _this.allowMultipleExpanded ? [].concat(_toConsumableArray(_this.expanded), [uuid]) : [uuid]
      });
    } else {
      return _this.augment({
        expanded: _this.expanded.filter(function(expandedUuid) {
          return expandedUuid !== uuid;
        })
      });
    }
  });
  _defineProperty(this, "isItemDisabled", function(uuid) {
    var isExpanded = _this.isItemExpanded(uuid);
    var isOnlyOneExpanded = _this.expanded.length === 1;
    return Boolean(isExpanded && !_this.allowZeroExpanded && isOnlyOneExpanded);
  });
  _defineProperty(this, "isItemExpanded", function(uuid) {
    return _this.expanded.indexOf(uuid) !== -1;
  });
  _defineProperty(this, "getPanelAttributes", function(uuid, dangerouslySetExpanded) {
    var expanded = dangerouslySetExpanded !== null && dangerouslySetExpanded !== void 0 ? dangerouslySetExpanded : _this.isItemExpanded(uuid);
    return {
      role: _this.allowMultipleExpanded ? void 0 : "region",
      "aria-hidden": _this.allowMultipleExpanded ? !expanded : void 0,
      "aria-labelledby": _this.getButtonId(uuid),
      id: _this.getPanelId(uuid),
      hidden: expanded ? void 0 : true
    };
  });
  _defineProperty(this, "getHeadingAttributes", function() {
    return {
      role: "heading"
    };
  });
  _defineProperty(this, "getButtonAttributes", function(uuid, dangerouslySetExpanded) {
    var expanded = dangerouslySetExpanded !== null && dangerouslySetExpanded !== void 0 ? dangerouslySetExpanded : _this.isItemExpanded(uuid);
    var disabled = _this.isItemDisabled(uuid);
    return {
      id: _this.getButtonId(uuid),
      "aria-disabled": disabled,
      "aria-expanded": expanded,
      "aria-controls": _this.getPanelId(uuid),
      role: "button",
      tabIndex: 0
    };
  });
  _defineProperty(this, "getPanelId", function(id) {
    return "accordion__panel-".concat(id);
  });
  _defineProperty(this, "getButtonId", function(id) {
    return "accordion__heading-".concat(id);
  });
  _defineProperty(this, "augment", function(args) {
    return new AccordionStore2(_objectSpread2({
      expanded: _this.expanded,
      allowMultipleExpanded: _this.allowMultipleExpanded,
      allowZeroExpanded: _this.allowZeroExpanded
    }, args));
  });
  this.expanded = _expanded;
  this.allowMultipleExpanded = allowMultipleExpanded;
  this.allowZeroExpanded = allowZeroExpanded;
});
var Context = /* @__PURE__ */ (0, import_react.createContext)(null);
var Provider = /* @__PURE__ */ function(_React$PureComponent) {
  _inherits(Provider3, _React$PureComponent);
  var _super = _createSuper(Provider3);
  function Provider3() {
    var _this;
    _classCallCheck(this, Provider3);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", new AccordionStore({
      expanded: _this.props.preExpanded,
      allowMultipleExpanded: _this.props.allowMultipleExpanded,
      allowZeroExpanded: _this.props.allowZeroExpanded
    }));
    _defineProperty(_assertThisInitialized(_this), "toggleExpanded", function(key) {
      _this.setState(function(state) {
        return state.toggleExpanded(key);
      }, function() {
        if (_this.props.onChange) {
          _this.props.onChange(_this.state.expanded);
        }
      });
    });
    _defineProperty(_assertThisInitialized(_this), "isItemDisabled", function(key) {
      return _this.state.isItemDisabled(key);
    });
    _defineProperty(_assertThisInitialized(_this), "isItemExpanded", function(key) {
      return _this.state.isItemExpanded(key);
    });
    _defineProperty(_assertThisInitialized(_this), "getPanelAttributes", function(key, dangerouslySetExpanded) {
      return _this.state.getPanelAttributes(key, dangerouslySetExpanded);
    });
    _defineProperty(_assertThisInitialized(_this), "getHeadingAttributes", function() {
      return _this.state.getHeadingAttributes();
    });
    _defineProperty(_assertThisInitialized(_this), "getButtonAttributes", function(key, dangerouslySetExpanded) {
      return _this.state.getButtonAttributes(key, dangerouslySetExpanded);
    });
    return _this;
  }
  _createClass(Provider3, [{
    key: "render",
    value: function render() {
      var _this$state = this.state, allowZeroExpanded = _this$state.allowZeroExpanded, allowMultipleExpanded = _this$state.allowMultipleExpanded;
      return /* @__PURE__ */ (0, import_react.createElement)(Context.Provider, {
        value: {
          allowMultipleExpanded,
          allowZeroExpanded,
          toggleExpanded: this.toggleExpanded,
          isItemDisabled: this.isItemDisabled,
          isItemExpanded: this.isItemExpanded,
          getPanelAttributes: this.getPanelAttributes,
          getHeadingAttributes: this.getHeadingAttributes,
          getButtonAttributes: this.getButtonAttributes
        }
      }, this.props.children || null);
    }
  }]);
  return Provider3;
}(import_react.PureComponent);
_defineProperty(Provider, "defaultProps", {
  allowMultipleExpanded: false,
  allowZeroExpanded: false
});
var Consumer = /* @__PURE__ */ function(_React$PureComponent2) {
  _inherits(Consumer3, _React$PureComponent2);
  var _super2 = _createSuper(Consumer3);
  function Consumer3() {
    var _this2;
    _classCallCheck(this, Consumer3);
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _this2 = _super2.call.apply(_super2, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this2), "renderChildren", function(container) {
      return container ? _this2.props.children(container) : null;
    });
    return _this2;
  }
  _createClass(Consumer3, [{
    key: "render",
    value: function render() {
      return /* @__PURE__ */ (0, import_react.createElement)(Context.Consumer, null, this.renderChildren);
    }
  }]);
  return Consumer3;
}(import_react.PureComponent);
var _excluded = ["className", "allowMultipleExpanded", "allowZeroExpanded", "onChange", "preExpanded"];
var Accordion = function Accordion2(_ref) {
  var _ref$className = _ref.className, className = _ref$className === void 0 ? "accordion" : _ref$className, allowMultipleExpanded = _ref.allowMultipleExpanded, allowZeroExpanded = _ref.allowZeroExpanded, onChange = _ref.onChange, preExpanded = _ref.preExpanded, rest = _objectWithoutProperties(_ref, _excluded);
  return /* @__PURE__ */ (0, import_react.createElement)(Provider, {
    preExpanded,
    allowMultipleExpanded,
    allowZeroExpanded,
    onChange
  }, /* @__PURE__ */ (0, import_react.createElement)("div", _extends({
    "data-accordion-component": "Accordion",
    className
  }, rest)));
};
var DisplayName;
(function(DisplayName2) {
  DisplayName2["Accordion"] = "Accordion";
  DisplayName2["AccordionItem"] = "AccordionItem";
  DisplayName2["AccordionItemButton"] = "AccordionItemButton";
  DisplayName2["AccordionItemHeading"] = "AccordionItemHeading";
  DisplayName2["AccordionItemPanel"] = "AccordionItemPanel";
})(DisplayName || (DisplayName = {}));
var DisplayName$1 = DisplayName;
var counter = 0;
function useGlobalCounterId() {
  var current = counter;
  counter = counter + 1;
  return "raa-".concat(current);
}
var useNextId = import_react.useId || useGlobalCounterId;
var idRegex = /[\u0009\u000a\u000c\u000d\u0020]/g;
function assertValidHtmlId(htmlId) {
  if (htmlId === "" || idRegex.test(htmlId)) {
    console.error('uuid must be a valid HTML5 id but was given "'.concat(htmlId, '", ASCII whitespaces are forbidden'));
    return false;
  }
  return true;
}
var Context$1 = /* @__PURE__ */ (0, import_react.createContext)(null);
var Provider$1 = function Provider2(_ref) {
  var children = _ref.children, uuid = _ref.uuid, accordionContext = _ref.accordionContext, dangerouslySetExpanded = _ref.dangerouslySetExpanded;
  var toggleExpanded = function toggleExpanded2() {
    accordionContext.toggleExpanded(uuid);
  };
  var renderChildren = function renderChildren2(accordionContext2) {
    var expanded = dangerouslySetExpanded !== null && dangerouslySetExpanded !== void 0 ? dangerouslySetExpanded : accordionContext2.isItemExpanded(uuid);
    var disabled = accordionContext2.isItemDisabled(uuid);
    var panelAttributes = accordionContext2.getPanelAttributes(uuid, dangerouslySetExpanded);
    var headingAttributes = accordionContext2.getHeadingAttributes(uuid);
    var buttonAttributes = accordionContext2.getButtonAttributes(uuid, dangerouslySetExpanded);
    return /* @__PURE__ */ (0, import_react.createElement)(Context$1.Provider, {
      value: {
        uuid,
        expanded,
        disabled,
        toggleExpanded,
        panelAttributes,
        headingAttributes,
        buttonAttributes
      }
    }, children);
  };
  return /* @__PURE__ */ (0, import_react.createElement)(Consumer, null, renderChildren);
};
var ProviderWrapper = function ProviderWrapper2(props) {
  return /* @__PURE__ */ (0, import_react.createElement)(Consumer, null, function(accordionContext) {
    return /* @__PURE__ */ (0, import_react.createElement)(Provider$1, _extends({}, props, {
      accordionContext
    }));
  });
};
var Consumer$1 = function Consumer2(_ref2) {
  var children = _ref2.children;
  var renderChildren = function renderChildren2(container) {
    return container ? children(container) : null;
  };
  return /* @__PURE__ */ (0, import_react.createElement)(Context$1.Consumer, null, renderChildren);
};
var _excluded$1 = ["uuid", "dangerouslySetExpanded", "className", "activeClassName"];
var AccordionItem = function AccordionItem2(_ref) {
  var customUuid = _ref.uuid, dangerouslySetExpanded = _ref.dangerouslySetExpanded, _ref$className = _ref.className, className = _ref$className === void 0 ? "accordion__item" : _ref$className, activeClassName = _ref.activeClassName, rest = _objectWithoutProperties(_ref, _excluded$1);
  var _useState = (0, import_react.useState)(useNextId()), _useState2 = _slicedToArray(_useState, 1), instanceUuid = _useState2[0];
  var uuid = customUuid !== null && customUuid !== void 0 ? customUuid : instanceUuid;
  var renderChildren = function renderChildren2(itemContext) {
    var expanded = itemContext.expanded;
    var cx = expanded && activeClassName ? activeClassName : className;
    return /* @__PURE__ */ (0, import_react.createElement)("div", _extends({
      "data-accordion-component": "AccordionItem",
      className: cx
    }, rest));
  };
  assertValidHtmlId(uuid.toString());
  if (rest.id) {
    assertValidHtmlId(rest.id);
  }
  return /* @__PURE__ */ (0, import_react.createElement)(ProviderWrapper, {
    uuid,
    dangerouslySetExpanded
  }, /* @__PURE__ */ (0, import_react.createElement)(Consumer$1, null, renderChildren));
};
AccordionItem.displayName = DisplayName$1.AccordionItem;
function getClosestAccordion(el) {
  return el && (el.matches('[data-accordion-component="Accordion"]') ? el : getClosestAccordion(el.parentElement));
}
function getSiblingButtons(item) {
  var parentAccordion = getClosestAccordion(item);
  return parentAccordion && Array.from(parentAccordion.querySelectorAll('[data-accordion-component="AccordionItemButton"]'));
}
function focusFirstSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var first = siblings[0];
  if (first) {
    first.focus();
  }
}
function focusLastSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var last = siblings[siblings.length - 1];
  if (last) {
    last.focus();
  }
}
function focusNextSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var currentIndex = siblings.indexOf(item);
  if (currentIndex !== -1) {
    var next = siblings[currentIndex + 1];
    if (next) {
      next.focus();
    }
  }
}
function focusPreviousSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var currentIndex = siblings.indexOf(item);
  if (currentIndex !== -1) {
    var previous = siblings[currentIndex - 1];
    if (previous) {
      previous.focus();
    }
  }
}
var keycodes = {
  END: "End",
  ENTER: "Enter",
  HOME: "Home",
  SPACE: " ",
  SPACE_DEPRECATED: "Spacebar",
  UP: "ArrowUp",
  DOWN: "ArrowDown",
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight"
};
var _excluded$2 = ["toggleExpanded", "className"];
var AccordionItemButton = function AccordionItemButton2(_ref) {
  var toggleExpanded = _ref.toggleExpanded, _ref$className = _ref.className, className = _ref$className === void 0 ? "accordion__button" : _ref$className, rest = _objectWithoutProperties(_ref, _excluded$2);
  var handleKeyPress = function handleKeyPress2(evt) {
    var keyCode = evt.key;
    if (keyCode === keycodes.ENTER || keyCode === keycodes.SPACE || keyCode === keycodes.SPACE_DEPRECATED) {
      evt.preventDefault();
      toggleExpanded();
    }
    if (evt.target instanceof HTMLElement) {
      switch (keyCode) {
        case keycodes.HOME: {
          evt.preventDefault();
          focusFirstSiblingOf(evt.target);
          break;
        }
        case keycodes.END: {
          evt.preventDefault();
          focusLastSiblingOf(evt.target);
          break;
        }
        case keycodes.LEFT:
        case keycodes.UP: {
          evt.preventDefault();
          focusPreviousSiblingOf(evt.target);
          break;
        }
        case keycodes.RIGHT:
        case keycodes.DOWN: {
          evt.preventDefault();
          focusNextSiblingOf(evt.target);
          break;
        }
      }
    }
  };
  if (rest.id) {
    assertValidHtmlId(rest.id);
  }
  return /* @__PURE__ */ (0, import_react.createElement)("div", _extends({
    className
  }, rest, {
    role: "button",
    tabIndex: 0,
    onClick: toggleExpanded,
    onKeyDown: handleKeyPress,
    "data-accordion-component": "AccordionItemButton"
  }));
};
var AccordionItemButtonWrapper = function AccordionItemButtonWrapper2(props) {
  return /* @__PURE__ */ (0, import_react.createElement)(Consumer$1, null, function(itemContext) {
    var toggleExpanded = itemContext.toggleExpanded, buttonAttributes = itemContext.buttonAttributes;
    return /* @__PURE__ */ (0, import_react.createElement)(AccordionItemButton, _extends({
      toggleExpanded
    }, props, buttonAttributes));
  });
};
var defaultProps = {
  className: "accordion__heading",
  "aria-level": 3
};
var SPEC_ERROR = "AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n\u201CThe button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.\u201D\n\n";
var AccordionItemHeading = /* @__PURE__ */ function(_React$PureComponent) {
  _inherits(AccordionItemHeading2, _React$PureComponent);
  var _super = _createSuper(AccordionItemHeading2);
  function AccordionItemHeading2() {
    var _this;
    _classCallCheck(this, AccordionItemHeading2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "ref", void 0);
    _defineProperty(_assertThisInitialized(_this), "setRef", function(ref) {
      _this.ref = ref;
    });
    return _this;
  }
  _createClass(AccordionItemHeading2, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      AccordionItemHeading2.VALIDATE(this.ref);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      AccordionItemHeading2.VALIDATE(this.ref);
    }
  }, {
    key: "render",
    value: function render() {
      return /* @__PURE__ */ (0, import_react.createElement)("div", _extends({
        "data-accordion-component": "AccordionItemHeading"
      }, this.props, {
        ref: this.setRef
      }));
    }
  }], [{
    key: "VALIDATE",
    value: function VALIDATE(ref) {
      if (ref === void 0) {
        throw new Error("ref is undefined");
      }
      if (!(ref.childElementCount === 1 && ref.firstElementChild && ref.firstElementChild.getAttribute("data-accordion-component") === "AccordionItemButton")) {
        throw new Error(SPEC_ERROR);
      }
    }
  }]);
  return AccordionItemHeading2;
}(import_react.PureComponent);
_defineProperty(AccordionItemHeading, "defaultProps", defaultProps);
var AccordionItemHeadingWrapper = function AccordionItemHeadingWrapper2(props) {
  return /* @__PURE__ */ (0, import_react.createElement)(Consumer$1, null, function(itemContext) {
    var headingAttributes = itemContext.headingAttributes;
    if (props.id) {
      assertValidHtmlId(props.id);
    }
    return /* @__PURE__ */ (0, import_react.createElement)(AccordionItemHeading, _extends({}, props, headingAttributes));
  });
};
AccordionItemHeadingWrapper.displayName = DisplayName$1.AccordionItemHeading;
var _excluded$3 = ["className", "region", "id"];
var AccordionItemPanel = function AccordionItemPanel2(_ref) {
  var _ref$className = _ref.className, className = _ref$className === void 0 ? "accordion__panel" : _ref$className, region = _ref.region, id = _ref.id, rest = _objectWithoutProperties(_ref, _excluded$3);
  var renderChildren = function renderChildren2(_ref2) {
    var panelAttributes = _ref2.panelAttributes;
    if (id) {
      assertValidHtmlId(id);
    }
    var attrs = _objectSpread2(_objectSpread2({}, panelAttributes), {}, {
      "aria-labelledby": region ? panelAttributes["aria-labelledby"] : void 0
    });
    return /* @__PURE__ */ (0, import_react.createElement)("div", _extends({
      "data-accordion-component": "AccordionItemPanel",
      className
    }, rest, attrs, {
      role: region ? "region" : void 0
    }));
  };
  return /* @__PURE__ */ (0, import_react.createElement)(Consumer$1, null, renderChildren);
};

// app/routes/careers.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Careers = () => {
  (0, import_react2.useEffect)(() => {
    document.title = "Careers | Weenggs Technology";
  }, []);
  const [ind, setInd] = (0, import_react2.useState)();
  const handlechange = (e, index) => {
    e.preventDefault();
    setExpend(!isexpended);
    setInd(index);
    console.log(index);
  };
  const [isexpended, setExpend] = (0, import_react2.useState)(true);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-full w-full  bg-no-repeat bg-center bg-cover ",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "bg-[#060606] opacity-90 z-0 flex",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
            className: "lg:h-[320px]  lg:w-[990px] block m-auto",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "lg:h-[320px] m-auto flex text-center flex-col justify-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                  className: "text-2xl pt-10 lg:text-5xl md:text-5xl  text-center  text-[#ffffff] z-30",
                  children: "Careers"
                }, void 0, false, {
                  fileName: "app/routes/careers.jsx",
                  lineNumber: 31,
                  columnNumber: 9
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "text-center mb-10 font-md lg:text-xm   text-gray-500  m-5",
                  style: { letterSpacing: "5px" },
                  children: "OUR CULTURE"
                }, void 0, false, {
                  fileName: "app/routes/careers.jsx",
                  lineNumber: 32,
                  columnNumber: 9
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/careers.jsx",
              lineNumber: 30,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: "app/routes/careers.jsx",
            lineNumber: 29,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: "app/routes/careers.jsx",
          lineNumber: 28,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: "app/routes/careers.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "bg-[#fff]",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
          className: "lg:max-w-[1140px] block m-auto",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "w-full md:flex lg:flex ",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "lg:pt-20  lg:w-3/6 md:w-3/6 py-5 md:py-20  w-full",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                      className: "text-[#000] m-5 text:text-2xl lg:text-4xl  mb-5",
                      children: "We use unique, custom-built tools to give us the edge"
                    }, void 0, false, {
                      fileName: "app/routes/careers.jsx",
                      lineNumber: 46,
                      columnNumber: 6
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                      className: "py-5 m-5",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                        className: "m-auto text-sm text-gray-400",
                        children: [
                          "If you are good at something and want to check your skills, feel free to apply for your favorite position on",
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                            fileName: "app/routes/careers.jsx",
                            lineNumber: 50,
                            columnNumber: 161
                          }, this),
                          " ",
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                            href: "#",
                            className: "text-blue-500",
                            children: " hr@weenggs.com"
                          }, void 0, false, {
                            fileName: "app/routes/careers.jsx",
                            lineNumber: 50,
                            columnNumber: 167
                          }, this),
                          "  "
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/careers.jsx",
                        lineNumber: 50,
                        columnNumber: 8
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/careers.jsx",
                      lineNumber: 48,
                      columnNumber: 6
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/careers.jsx",
                  lineNumber: 44,
                  columnNumber: 6
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "lg:pt-20 py-5 md:py-20 p-10  lg:w-3/6 md:w-3/6 ",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Accordion, {
                    allowMultipleExpanded: false,
                    className: "w-full",
                    children: carrier.map((item, index) => {
                      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "m-5 border-2",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionItem, {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionItemHeadingWrapper, {
                              onClick: (e) => {
                                handlechange(e, index);
                              },
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionItemButtonWrapper, {
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                    className: "flex m-3 justify-between ",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                        className: "",
                                        children: item.brand
                                      }, void 0, false, {
                                        fileName: "app/routes/careers.jsx",
                                        lineNumber: 66,
                                        columnNumber: 20
                                      }, this),
                                      ind == index ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                                        className: "fa fa-caret-up text-green-400 mr-2"
                                      }, void 0, false, {
                                        fileName: "app/routes/careers.jsx",
                                        lineNumber: 69,
                                        columnNumber: 37
                                      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                                        className: "fa fa-caret-right mr-2"
                                      }, void 0, false, {
                                        fileName: "app/routes/careers.jsx",
                                        lineNumber: 69,
                                        columnNumber: 96
                                      }, this)
                                    ]
                                  }, void 0, true, {
                                    fileName: "app/routes/careers.jsx",
                                    lineNumber: 65,
                                    columnNumber: 17
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
                                    fileName: "app/routes/careers.jsx",
                                    lineNumber: 72,
                                    columnNumber: 19
                                  }, this)
                                ]
                              }, void 0, true, {
                                fileName: "app/routes/careers.jsx",
                                lineNumber: 64,
                                columnNumber: 17
                              }, this)
                            }, void 0, false, {
                              fileName: "app/routes/careers.jsx",
                              lineNumber: 62,
                              columnNumber: 15
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionItemPanel, {
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                className: "m-auto p-2 text-sm text-gray-400",
                                children: item.desc
                              }, void 0, false, {
                                fileName: "app/routes/careers.jsx",
                                lineNumber: 77,
                                columnNumber: 19
                              }, this)
                            }, void 0, false, {
                              fileName: "app/routes/careers.jsx",
                              lineNumber: 76,
                              columnNumber: 15
                            }, this)
                          ]
                        }, void 0, true, {
                          fileName: "app/routes/careers.jsx",
                          lineNumber: 61,
                          columnNumber: 11
                        }, this)
                      }, index, false, {
                        fileName: "app/routes/careers.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                      }, this);
                    })
                  }, void 0, false, {
                    fileName: "app/routes/careers.jsx",
                    lineNumber: 57,
                    columnNumber: 8
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/careers.jsx",
                  lineNumber: 53,
                  columnNumber: 6
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/careers.jsx",
              lineNumber: 43,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "bg-blue-100 border-l-4 mb-4 border-[#659bbc] text-[#659bbc]  p-4",
              role: "alert",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "text-[16px] text-[#659bbc]",
                  children: "Remember"
                }, void 0, false, {
                  fileName: "app/routes/careers.jsx",
                  lineNumber: 90,
                  columnNumber: 9
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "text-sm",
                  children: "Work from office is the first preference but developer can still apply for WFH position as well. Previous work record and document verification is required while interviewing."
                }, void 0, false, {
                  fileName: "app/routes/careers.jsx",
                  lineNumber: 91,
                  columnNumber: 9
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/careers.jsx",
              lineNumber: 89,
              columnNumber: 6
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/careers.jsx",
          lineNumber: 42,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: "app/routes/careers.jsx",
        lineNumber: 41,
        columnNumber: 5
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/careers.jsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};
var careers_default = Careers;
export {
  careers_default as default
};
//# sourceMappingURL=/build/routes/careers-WAAMPSU5.js.map
