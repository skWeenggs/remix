import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-MLBUYSNZ.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React4 = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame2 = componentFrameCache.get(fn);
            if (frame2 !== void 0) {
              return frame2;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            ref,
            props,
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV4(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV4(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx;
        exports.jsxs = jsxs;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/nuka-carousel/lib/types.js
var require_types = __commonJS({
  "node_modules/nuka-carousel/lib/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ScrollMode = exports.Positions = exports.Directions = exports.Alignment = void 0;
    var Alignment;
    (function(Alignment2) {
      Alignment2["Center"] = "center";
      Alignment2["Right"] = "right";
      Alignment2["Left"] = "left";
    })(Alignment = exports.Alignment || (exports.Alignment = {}));
    var Directions;
    (function(Directions2) {
      Directions2["Next"] = "next";
      Directions2["Prev"] = "prev";
      Directions2["Up"] = "up";
      Directions2["Down"] = "down";
    })(Directions = exports.Directions || (exports.Directions = {}));
    var Positions;
    (function(Positions2) {
      Positions2["TopLeft"] = "TopLeft";
      Positions2["TopCenter"] = "TopCenter";
      Positions2["TopRight"] = "TopRight";
      Positions2["CenterLeft"] = "CenterLeft";
      Positions2["CenterCenter"] = "CenterCenter";
      Positions2["CenterRight"] = "CenterRight";
      Positions2["BottomLeft"] = "BottomLeft";
      Positions2["BottomCenter"] = "BottomCenter";
      Positions2["BottomRight"] = "BottomRight";
    })(Positions = exports.Positions || (exports.Positions = {}));
    var ScrollMode;
    (function(ScrollMode2) {
      ScrollMode2["page"] = "page";
      ScrollMode2["remainder"] = "remainder";
    })(ScrollMode = exports.ScrollMode || (exports.ScrollMode = {}));
  }
});

// node_modules/nuka-carousel/lib/default-controls.js
var require_default_controls = __commonJS({
  "node_modules/nuka-carousel/lib/default-controls.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PagingDots = exports.getDotIndexes = exports.NextButton = exports.nextButtonDisabled = exports.PreviousButton = exports.prevButtonDisabled = void 0;
    var jsx_runtime_1 = require_jsx_runtime();
    var react_1 = require_react();
    var types_1 = require_types();
    var utils_1 = require_utils();
    var defaultButtonStyles = (disabled) => ({
      border: 0,
      background: "rgba(0,0,0,0.4)",
      color: "white",
      padding: 10,
      textTransform: "uppercase",
      opacity: disabled ? 0.3 : 1,
      cursor: disabled ? "not-allowed" : "pointer"
    });
    var prevButtonDisabled = ({ cellAlign, currentSlide, slidesToShow, wrapAround }) => {
      if (wrapAround) {
        return false;
      }
      if (currentSlide === 0) {
        return true;
      }
      if (cellAlign === "right" && currentSlide <= slidesToShow - 1) {
        return true;
      }
      return false;
    };
    exports.prevButtonDisabled = prevButtonDisabled;
    var PreviousButton = ({ previousSlide, defaultControlsConfig: { prevButtonClassName, prevButtonStyle = {}, prevButtonText, prevButtonOnClick }, onUserNavigation, previousDisabled: disabled }) => {
      const handleClick = (event) => {
        prevButtonOnClick === null || prevButtonOnClick === void 0 ? void 0 : prevButtonOnClick(event);
        if (event.defaultPrevented)
          return;
        onUserNavigation(event);
        event.preventDefault();
        previousSlide();
      };
      return (0, jsx_runtime_1.jsx)("button", Object.assign({ className: prevButtonClassName, style: Object.assign(Object.assign({}, defaultButtonStyles(disabled)), prevButtonStyle), disabled, onClick: handleClick, "aria-label": "previous", type: "button" }, { children: prevButtonText || "Prev" }));
    };
    exports.PreviousButton = PreviousButton;
    var nextButtonDisabled = ({ cellAlign, currentSlide, slideCount, slidesToShow, wrapAround }) => {
      if (wrapAround) {
        return false;
      }
      if (currentSlide >= slideCount - 1) {
        return true;
      }
      if (cellAlign === "left" && currentSlide >= slideCount - slidesToShow) {
        return true;
      }
      return false;
    };
    exports.nextButtonDisabled = nextButtonDisabled;
    var NextButton = ({ nextSlide, defaultControlsConfig: { nextButtonClassName, nextButtonStyle = {}, nextButtonText, nextButtonOnClick }, nextDisabled: disabled, onUserNavigation }) => {
      const handleClick = (event) => {
        nextButtonOnClick === null || nextButtonOnClick === void 0 ? void 0 : nextButtonOnClick(event);
        if (event.defaultPrevented)
          return;
        onUserNavigation(event);
        event.preventDefault();
        nextSlide();
      };
      return (0, jsx_runtime_1.jsx)("button", Object.assign({ className: nextButtonClassName, style: Object.assign(Object.assign({}, defaultButtonStyles(disabled)), nextButtonStyle), disabled, onClick: handleClick, "aria-label": "next", type: "button" }, { children: nextButtonText || "Next" }));
    };
    exports.NextButton = NextButton;
    var getDotIndexes = (slideCount, slidesToScroll, scrollMode, slidesToShow, wrapAround, cellAlign) => {
      const dotIndexes = [];
      const scrollSlides = slidesToScroll <= 0 ? 1 : slidesToScroll;
      if (wrapAround) {
        for (let i = 0; i < slideCount; i += scrollSlides) {
          dotIndexes.push(i);
        }
        return dotIndexes;
      }
      if (cellAlign === "center") {
        for (let i = 0; i < slideCount - 1; i += scrollSlides) {
          dotIndexes.push(i);
        }
        if (slideCount > 0) {
          dotIndexes.push(slideCount - 1);
        }
        return dotIndexes;
      }
      if (cellAlign === "left") {
        if (slidesToShow >= slideCount) {
          return [0];
        }
        const lastPossibleIndexWithoutWhitespace = slideCount - slidesToShow;
        for (let i = 0; i < lastPossibleIndexWithoutWhitespace; i += scrollSlides) {
          dotIndexes.push(i);
        }
        if (scrollMode === types_1.ScrollMode.remainder) {
          dotIndexes.push(lastPossibleIndexWithoutWhitespace);
        } else {
          dotIndexes.push(dotIndexes[dotIndexes.length - 1] + scrollSlides);
        }
        return dotIndexes;
      }
      if (cellAlign === "right") {
        if (slidesToShow >= slideCount) {
          return [slideCount - 1];
        }
        const firstPossibleIndexWithoutWhitespace = slidesToShow - 1;
        if (scrollMode === types_1.ScrollMode.remainder) {
          for (let i = firstPossibleIndexWithoutWhitespace; i < slideCount - 1; i += scrollSlides) {
            dotIndexes.push(i);
          }
          dotIndexes.push(slideCount - 1);
        } else {
          for (let i = slideCount - 1; i > firstPossibleIndexWithoutWhitespace; i -= scrollSlides) {
            dotIndexes.push(i);
          }
          dotIndexes.push(dotIndexes[dotIndexes.length - 1] - scrollSlides);
          dotIndexes.reverse();
        }
        return dotIndexes;
      }
      return dotIndexes;
    };
    exports.getDotIndexes = getDotIndexes;
    var PagingDots = ({ pagingDotsIndices, defaultControlsConfig: { pagingDotsContainerClassName, pagingDotsClassName, pagingDotsStyle = {}, pagingDotsOnClick }, currentSlide, onUserNavigation, slideCount, goToSlide }) => {
      const listStyles = {
        position: "relative",
        top: -10,
        display: "flex",
        margin: 0,
        padding: 0,
        listStyleType: "none"
      };
      const getButtonStyles = (0, react_1.useCallback)((active) => ({
        cursor: "pointer",
        opacity: active ? 1 : 0.5,
        background: "transparent",
        border: "none",
        fill: "black"
      }), []);
      const currentSlideBounded = (0, utils_1.getBoundedIndex)(currentSlide, slideCount);
      return (0, jsx_runtime_1.jsx)("ul", Object.assign({ className: pagingDotsContainerClassName, style: listStyles }, { children: pagingDotsIndices.map((slideIndex, i) => {
        const isActive = currentSlideBounded === slideIndex || currentSlideBounded < slideIndex && (i === 0 || currentSlideBounded > pagingDotsIndices[i - 1]);
        return (0, jsx_runtime_1.jsx)("li", Object.assign({ className: isActive ? "paging-item active" : "paging-item" }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ className: pagingDotsClassName, type: "button", style: Object.assign(Object.assign({}, getButtonStyles(isActive)), pagingDotsStyle), onClick: (event) => {
          pagingDotsOnClick === null || pagingDotsOnClick === void 0 ? void 0 : pagingDotsOnClick(event);
          if (event.defaultPrevented)
            return;
          onUserNavigation(event);
          goToSlide(slideIndex);
        }, "aria-label": `slide ${slideIndex + 1} bullet`, "aria-selected": isActive }, { children: (0, jsx_runtime_1.jsx)("svg", Object.assign({ className: "paging-dot", width: "6", height: "6", "aria-hidden": "true", focusable: "false", viewBox: "0 0 6 6" }, { children: (0, jsx_runtime_1.jsx)("circle", { cx: "3", cy: "3", r: "3" }) })) })) }), slideIndex);
      }) }));
    };
    exports.PagingDots = PagingDots;
  }
});

// node_modules/nuka-carousel/lib/utils.js
var require_utils = __commonJS({
  "node_modules/nuka-carousel/lib/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getBoundedIndex = exports.getDefaultSlideIndex = exports.getPrevMoveIndex = exports.getNextMoveIndex = exports.isSlideVisible = void 0;
    var default_controls_1 = require_default_controls();
    var types_1 = require_types();
    var isSlideVisible = (currentSlide, indexToCheck, slidesToShow, cellAlign) => {
      if (cellAlign === "left") {
        return indexToCheck < currentSlide + slidesToShow && indexToCheck > currentSlide - 1;
      }
      if (cellAlign === "center") {
        return indexToCheck > currentSlide - slidesToShow / 2 - 0.5 && indexToCheck <= currentSlide || indexToCheck > currentSlide && indexToCheck < currentSlide + slidesToShow / 2 + 0.5;
      }
      if (cellAlign === "right") {
        return indexToCheck < currentSlide + 1 && indexToCheck > currentSlide - slidesToShow;
      }
      return false;
    };
    exports.isSlideVisible = isSlideVisible;
    var getNextMoveIndex = (scrollMode, wrapAround, currentSlide, slideCount, slidesToScroll, slidesToShow, cellAlign) => {
      if (wrapAround) {
        return currentSlide + slidesToScroll;
      }
      if (currentSlide >= slideCount - 1 || cellAlign === "left" && currentSlide >= slideCount - slidesToShow) {
        return currentSlide;
      }
      if (scrollMode === types_1.ScrollMode.remainder && cellAlign === "left") {
        return Math.min(currentSlide + slidesToScroll, slideCount - slidesToShow);
      }
      return Math.min(currentSlide + slidesToScroll, slideCount - 1);
    };
    exports.getNextMoveIndex = getNextMoveIndex;
    var getPrevMoveIndex = (scrollMode, wrapAround, currentSlide, slidesToScroll, slidesToShow, cellAlign) => {
      if (wrapAround) {
        return currentSlide - slidesToScroll;
      }
      if (currentSlide <= 0 || cellAlign === "right" && currentSlide <= slidesToShow - 1) {
        return currentSlide;
      }
      if (scrollMode === types_1.ScrollMode.remainder && cellAlign === "right") {
        return Math.max(currentSlide - slidesToScroll, slidesToShow - 1);
      }
      return Math.max(currentSlide - slidesToScroll, 0);
    };
    exports.getPrevMoveIndex = getPrevMoveIndex;
    var getDefaultSlideIndex = (slideIndex, slideCount, slidesToShow, slidesToScroll, cellAlign, autoplayReverse, scrollMode) => {
      if (slideIndex !== void 0) {
        return slideIndex;
      }
      const dotIndexes = (0, default_controls_1.getDotIndexes)(slideCount, slidesToScroll, scrollMode, slidesToShow, false, cellAlign);
      return autoplayReverse ? dotIndexes[dotIndexes.length - 1] : dotIndexes[0];
    };
    exports.getDefaultSlideIndex = getDefaultSlideIndex;
    var getBoundedIndex = (rawIndex, slideCount) => {
      return (rawIndex % slideCount + slideCount) % slideCount;
    };
    exports.getBoundedIndex = getBoundedIndex;
  }
});

// node_modules/nuka-carousel/lib/slide.js
var require_slide = __commonJS({
  "node_modules/nuka-carousel/lib/slide.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var jsx_runtime_1 = require_jsx_runtime();
    var react_1 = require_react();
    var utils_1 = require_utils();
    var getSlideWidth = (count, wrapAround) => `${wrapAround ? 100 / (3 * count) : 100 / count}%`;
    var getSlideStyles = (count, isCurrentSlide, isVisibleSlide, wrapAround, cellSpacing, animation, speed, zoomScale, adaptiveHeight, initializedAdaptiveHeight) => {
      const width = getSlideWidth(count, wrapAround);
      const visibleSlideOpacity = isVisibleSlide ? 1 : 0;
      const animationSpeed = animation === "fade" ? 200 : 500;
      let height = "auto";
      if (adaptiveHeight) {
        if (initializedAdaptiveHeight) {
          height = "100%";
        } else if (isVisibleSlide) {
          height = "auto";
        } else {
          height = "0";
        }
      }
      return {
        width,
        flex: 1,
        height,
        padding: `0 ${cellSpacing ? cellSpacing / 2 : 0}px`,
        transition: animation ? `${speed || animationSpeed}ms ease 0s` : void 0,
        transform: animation === "zoom" ? `scale(${isCurrentSlide && isVisibleSlide ? 1 : zoomScale || 0.85})` : void 0,
        opacity: animation === "fade" ? visibleSlideOpacity : 1
      };
    };
    var generateIndex = (index, count, typeOfSlide) => {
      if (typeOfSlide === "prev-cloned") {
        return index - count;
      }
      if (typeOfSlide === "next-cloned") {
        return index + count;
      }
      return index;
    };
    var Slide = ({ count, children, currentSlide, index, isCurrentSlide, typeOfSlide, wrapAround, cellSpacing, animation, speed, slidesToShow, zoomScale, cellAlign, onVisibleSlideHeightChange, adaptiveHeight, initializedAdaptiveHeight }) => {
      const customIndex = wrapAround ? generateIndex(index, count, typeOfSlide) : index;
      const isVisible = (0, utils_1.isSlideVisible)(currentSlide, customIndex, slidesToShow, cellAlign);
      const slideRef = (0, react_1.useRef)(null);
      const prevIsVisibleRef = (0, react_1.useRef)(false);
      (0, react_1.useEffect)(() => {
        var _a;
        const node = slideRef.current;
        if (node) {
          const slideHeight = (_a = node.getBoundingClientRect()) === null || _a === void 0 ? void 0 : _a.height;
          if (isVisible) {
            node.removeAttribute("inert");
          } else {
            node.setAttribute("inert", "true");
          }
          const prevIsVisible = prevIsVisibleRef.current;
          if (isVisible && !prevIsVisible) {
            onVisibleSlideHeightChange(customIndex, slideHeight);
          } else if (!isVisible && prevIsVisible) {
            onVisibleSlideHeightChange(customIndex, null);
          }
          prevIsVisibleRef.current = isVisible;
        }
      }, [
        adaptiveHeight,
        customIndex,
        isVisible,
        onVisibleSlideHeightChange,
        slidesToShow
      ]);
      const currentSlideClass = isCurrentSlide && isVisible ? " slide-current" : "";
      return (0, jsx_runtime_1.jsx)("div", Object.assign({ ref: slideRef, className: `slide${currentSlideClass}${typeOfSlide ? ` ${typeOfSlide}` : ""}${isVisible ? " slide-visible" : ""}`, style: getSlideStyles(count, isCurrentSlide, isVisible, wrapAround, cellSpacing, animation, speed, zoomScale, adaptiveHeight, initializedAdaptiveHeight) }, { children }));
    };
    exports.default = Slide;
  }
});

// node_modules/nuka-carousel/lib/announce-slide.js
var require_announce_slide = __commonJS({
  "node_modules/nuka-carousel/lib/announce-slide.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultRenderAnnounceSlideMessage = void 0;
    var jsx_runtime_1 = require_jsx_runtime();
    var styles = {
      position: "absolute",
      width: "1px",
      height: "1px",
      overflow: "hidden",
      padding: 0,
      margin: "-1px",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      border: 0
    };
    var AnnounceSlide = ({ message, ariaLive = "polite" }) => (0, jsx_runtime_1.jsx)("div", Object.assign({ "aria-live": ariaLive, "aria-atomic": "true", style: styles, tabIndex: -1 }, { children: message }));
    var defaultRenderAnnounceSlideMessage = ({ currentSlide, count }) => `Slide ${currentSlide + 1} of ${count}`;
    exports.defaultRenderAnnounceSlideMessage = defaultRenderAnnounceSlideMessage;
    exports.default = AnnounceSlide;
  }
});

// node_modules/nuka-carousel/lib/hooks/use-tween.js
var require_use_tween = __commonJS({
  "node_modules/nuka-carousel/lib/hooks/use-tween.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useTween = void 0;
    var react_1 = require_react();
    var useTween = (durationMs, easingFunction, navigationNum, shouldInterrupt) => {
      const [normalizedTimeRaw, setNormalizedTime] = (0, react_1.useState)(1);
      const startTime = (0, react_1.useRef)(Date.now());
      const rAF = (0, react_1.useRef)();
      const isFirstRender = (0, react_1.useRef)(true);
      const lastNavigationNum = (0, react_1.useRef)(null);
      const normalizedTime = lastNavigationNum.current === null || lastNavigationNum.current === navigationNum || shouldInterrupt ? normalizedTimeRaw : 0;
      (0, react_1.useEffect)(() => {
        lastNavigationNum.current = navigationNum;
        if (isFirstRender.current) {
          isFirstRender.current = false;
          return;
        }
        if (shouldInterrupt) {
          return;
        }
        startTime.current = Date.now();
        setNormalizedTime(0);
        const tick = () => {
          rAF.current = requestAnimationFrame(() => {
            const currentTime = Date.now();
            const normalizedTime2 = Math.min(1, (currentTime - startTime.current) / durationMs);
            setNormalizedTime(normalizedTime2);
            if (normalizedTime2 < 1) {
              tick();
            } else {
              rAF.current = void 0;
            }
          });
        };
        tick();
        return () => {
          if (rAF.current !== void 0) {
            cancelAnimationFrame(rAF.current);
            setNormalizedTime(1);
          }
        };
      }, [navigationNum, durationMs, shouldInterrupt]);
      return {
        isAnimating: normalizedTime !== 1,
        value: easingFunction(normalizedTime)
      };
    };
    exports.useTween = useTween;
  }
});

// node_modules/nuka-carousel/lib/slider-list.js
var require_slider_list = __commonJS({
  "node_modules/nuka-carousel/lib/slider-list.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SliderList = exports.getPercentOffsetForSlide = void 0;
    var jsx_runtime_1 = require_jsx_runtime();
    var react_1 = __importDefault(require_react());
    var default_controls_1 = require_default_controls();
    var use_tween_1 = require_use_tween();
    var getPercentOffsetForSlide = (currentSlide, slideCount, slidesToShow, cellAlign, wrapAround) => {
      const renderedSlideCount = wrapAround ? 3 * slideCount : slideCount;
      const singleSlidePercentOfWhole = 100 / renderedSlideCount;
      let slide0Offset = wrapAround ? -100 / 3 : 0;
      if (cellAlign === "right" && slidesToShow > 1) {
        const excessSlides = slidesToShow - 1;
        slide0Offset += singleSlidePercentOfWhole * excessSlides;
      }
      if (cellAlign === "center" && slidesToShow > 1) {
        const excessSlides = slidesToShow - 1;
        const excessLeftSlides = excessSlides / 2;
        slide0Offset += singleSlidePercentOfWhole * excessLeftSlides;
      }
      const currentSlideOffsetFrom0 = 100 / renderedSlideCount * currentSlide;
      return slide0Offset - currentSlideOffsetFrom0;
    };
    exports.getPercentOffsetForSlide = getPercentOffsetForSlide;
    exports.SliderList = react_1.default.forwardRef(({ animation, animationDistance, cellAlign, children, currentSlide, disableAnimation, disableEdgeSwiping, draggedOffset, easing, edgeEasing, isDragging, scrollMode, slideCount, slidesToScroll, slidesToShow, speed, wrapAround }, forwardedRef) => {
      const renderedSlideCount = wrapAround ? 3 * slideCount : slideCount;
      const listVisibleWidth = `${renderedSlideCount * 100 / slidesToShow}%`;
      const percentOffsetForSlideProps = [
        slideCount,
        slidesToShow,
        cellAlign,
        wrapAround
      ];
      const dotIndexes = (0, default_controls_1.getDotIndexes)(slideCount, slidesToScroll, scrollMode, slidesToShow, wrapAround, cellAlign);
      let clampedDraggedOffset = `${draggedOffset}px`;
      if (isDragging && disableEdgeSwiping && !wrapAround) {
        const clampOffsets = [
          dotIndexes[0],
          dotIndexes[dotIndexes.length - 1]
        ].map((index) => (0, exports.getPercentOffsetForSlide)(index, ...percentOffsetForSlideProps));
        clampedDraggedOffset = `clamp(${clampOffsets[1]}%, ${draggedOffset}px, ${clampOffsets[0]}%)`;
      }
      const slideBasedOffset = (0, exports.getPercentOffsetForSlide)(currentSlide, ...percentOffsetForSlideProps);
      const isEdgeEasing = !disableEdgeSwiping && !wrapAround && (currentSlide === dotIndexes[0] && animationDistance < 0 || currentSlide === dotIndexes[dotIndexes.length - 1] && animationDistance > 0);
      const { value: transition, isAnimating } = (0, use_tween_1.useTween)(
        speed,
        !isEdgeEasing ? easing : edgeEasing,
        currentSlide + animationDistance,
        isDragging || disableAnimation || animation === "fade"
      );
      let positioning;
      if (isDragging || slideBasedOffset !== 0 || isAnimating) {
        if (isDragging) {
          positioning = `translateX(${clampedDraggedOffset})`;
        } else {
          const transitionOffset = isAnimating ? (1 - transition) * animationDistance : 0;
          positioning = `translateX(calc(${slideBasedOffset}% - ${transitionOffset}px))`;
        }
      }
      return (0, jsx_runtime_1.jsx)("div", Object.assign({ ref: forwardedRef, className: "slider-list", style: {
        width: listVisibleWidth,
        textAlign: "left",
        userSelect: "auto",
        transform: positioning,
        display: "flex"
      } }, { children }));
    });
    exports.SliderList.displayName = "SliderList";
  }
});

// node_modules/nuka-carousel/lib/control-styles.js
var require_control_styles = __commonJS({
  "node_modules/nuka-carousel/lib/control-styles.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getControlContainerStyles = void 0;
    var types_1 = require_types();
    var commonStyles = {
      position: "absolute",
      display: "flex",
      zIndex: 1,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    };
    var getControlContainerFlexStyles = (pos) => {
      let alignItems;
      switch (pos) {
        case types_1.Positions.TopLeft:
        case types_1.Positions.TopCenter:
        case types_1.Positions.TopRight:
          alignItems = "flex-start";
          break;
        case types_1.Positions.CenterLeft:
        case types_1.Positions.CenterCenter:
        case types_1.Positions.CenterRight:
          alignItems = "center";
          break;
        case types_1.Positions.BottomLeft:
        case types_1.Positions.BottomCenter:
        case types_1.Positions.BottomRight:
          alignItems = "flex-end";
          break;
      }
      let justifyContent;
      switch (pos) {
        case types_1.Positions.TopLeft:
        case types_1.Positions.CenterLeft:
        case types_1.Positions.BottomLeft:
          justifyContent = "flex-start";
          break;
        case types_1.Positions.TopCenter:
        case types_1.Positions.CenterCenter:
        case types_1.Positions.BottomCenter:
          justifyContent = "center";
          break;
        case types_1.Positions.TopRight:
        case types_1.Positions.CenterRight:
        case types_1.Positions.BottomRight:
          justifyContent = "flex-end";
          break;
      }
      return { alignItems, justifyContent };
    };
    var getControlContainerStyles = (pos) => {
      return Object.assign(Object.assign({}, getControlContainerFlexStyles(pos)), commonStyles);
    };
    exports.getControlContainerStyles = getControlContainerStyles;
  }
});

// node_modules/nuka-carousel/lib/controls.js
var require_controls = __commonJS({
  "node_modules/nuka-carousel/lib/controls.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var jsx_runtime_1 = require_jsx_runtime();
    var react_1 = require_react();
    var control_styles_1 = require_control_styles();
    var default_controls_1 = require_default_controls();
    var types_1 = require_types();
    var controlsMap = [
      { funcName: "renderTopLeftControls", key: types_1.Positions.TopLeft },
      { funcName: "renderTopCenterControls", key: types_1.Positions.TopCenter },
      { funcName: "renderTopRightControls", key: types_1.Positions.TopRight },
      { funcName: "renderCenterLeftControls", key: types_1.Positions.CenterLeft },
      { funcName: "renderCenterCenterControls", key: types_1.Positions.CenterCenter },
      { funcName: "renderCenterRightControls", key: types_1.Positions.CenterRight },
      { funcName: "renderBottomLeftControls", key: types_1.Positions.BottomLeft },
      { funcName: "renderBottomCenterControls", key: types_1.Positions.BottomCenter },
      { funcName: "renderBottomRightControls", key: types_1.Positions.BottomRight }
    ];
    var renderControls = (props, slideCount, currentSlide, goToSlide, nextSlide, prevSlide, slidesToScroll) => {
      if (props.withoutControls) {
        return null;
      }
      const disableCheckProps = Object.assign(Object.assign({}, props), {
        currentSlide,
        slideCount
      });
      const nextDisabled = (0, default_controls_1.nextButtonDisabled)(disableCheckProps);
      const previousDisabled = (0, default_controls_1.prevButtonDisabled)(disableCheckProps);
      const pagingDotsIndices = (0, default_controls_1.getDotIndexes)(slideCount, slidesToScroll, props.scrollMode, props.slidesToShow, props.wrapAround, props.cellAlign);
      return controlsMap.map((control) => {
        var _a;
        if (!props[control.funcName] || typeof props[control.funcName] !== "function") {
          return (0, jsx_runtime_1.jsx)(react_1.Fragment, {}, control.funcName);
        }
        return (0, jsx_runtime_1.jsx)("div", Object.assign({ style: Object.assign(Object.assign({}, (0, control_styles_1.getControlContainerStyles)(control.key)), { pointerEvents: "none" }) }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({
          className: [
            `slider-control-${control.key.toLowerCase()}`,
            props.defaultControlsConfig.containerClassName || ""
          ].join(" ").trim(),
          style: { pointerEvents: "auto" }
        }, { children: (_a = props[control.funcName]) === null || _a === void 0 ? void 0 : _a.call(props, {
          cellAlign: props.cellAlign,
          cellSpacing: props.cellSpacing,
          currentSlide,
          defaultControlsConfig: props.defaultControlsConfig || {},
          pagingDotsIndices,
          goToSlide,
          nextDisabled,
          nextSlide,
          onUserNavigation: props.onUserNavigation,
          previousDisabled,
          previousSlide: prevSlide,
          scrollMode: props.scrollMode,
          slideCount,
          slidesToScroll,
          slidesToShow: props.slidesToShow || 1,
          vertical: props.vertical,
          wrapAround: props.wrapAround
        }) })) }), control.funcName);
      });
    };
    exports.default = renderControls;
  }
});

// node_modules/nuka-carousel/lib/default-carousel-props.js
var require_default_carousel_props = __commonJS({
  "node_modules/nuka-carousel/lib/default-carousel-props.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var jsx_runtime_1 = require_jsx_runtime();
    var types_1 = require_types();
    var default_controls_1 = require_default_controls();
    var announce_slide_1 = require_announce_slide();
    var easeOut = (t) => Math.pow(t - 1, 3) + 1;
    var defaultProps = {
      adaptiveHeight: false,
      adaptiveHeightAnimation: true,
      afterSlide: () => {
      },
      autoplay: false,
      autoplayInterval: 3e3,
      autoplayReverse: false,
      beforeSlide: () => {
      },
      cellAlign: "left",
      cellSpacing: 0,
      defaultControlsConfig: {},
      disableAnimation: false,
      disableEdgeSwiping: false,
      dragging: true,
      dragThreshold: 0.5,
      easing: easeOut,
      edgeEasing: easeOut,
      enableKeyboardControls: false,
      frameAriaLabel: "carousel-slider",
      keyCodeConfig: {
        nextSlide: [39, 68, 38, 87],
        previousSlide: [37, 65, 40, 83],
        firstSlide: [81],
        lastSlide: [69],
        pause: [32]
      },
      onDragStart: () => {
      },
      onDrag: () => {
      },
      onDragEnd: () => {
      },
      onUserNavigation: () => {
      },
      pauseOnHover: true,
      renderAnnounceSlideMessage: announce_slide_1.defaultRenderAnnounceSlideMessage,
      renderBottomCenterControls: (props) => (0, jsx_runtime_1.jsx)(default_controls_1.PagingDots, Object.assign({}, props)),
      renderCenterLeftControls: (props) => (0, jsx_runtime_1.jsx)(default_controls_1.PreviousButton, Object.assign({}, props)),
      renderCenterRightControls: (props) => (0, jsx_runtime_1.jsx)(default_controls_1.NextButton, Object.assign({}, props)),
      scrollMode: types_1.ScrollMode.page,
      slidesToScroll: 1,
      slidesToShow: 1,
      speed: 500,
      style: {},
      swiping: true,
      vertical: false,
      withoutControls: false,
      wrapAround: false,
      children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {})
    };
    exports.default = defaultProps;
  }
});

// node_modules/nuka-carousel/lib/hooks/use-state-with-ref.js
var require_use_state_with_ref = __commonJS({
  "node_modules/nuka-carousel/lib/hooks/use-state-with-ref.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useStateWithRef = void 0;
    var react_1 = require_react();
    var useStateWithRef = (initialState) => {
      const [value, setValue] = (0, react_1.useState)(initialState);
      const valueRef = (0, react_1.useRef)(initialState);
      const setValueAndRef = (0, react_1.useCallback)((newValue) => {
        valueRef.current = newValue;
        setValue(newValue);
      }, []);
      return [value, setValueAndRef, valueRef];
    };
    exports.useStateWithRef = useStateWithRef;
  }
});

// node_modules/nuka-carousel/lib/hooks/use-frame-height.js
var require_use_frame_height = __commonJS({
  "node_modules/nuka-carousel/lib/hooks/use-frame-height.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useFrameHeight = void 0;
    var react_1 = require_react();
    var use_state_with_ref_1 = require_use_state_with_ref();
    var useFrameHeight = (adaptiveHeight, slidesToShow, slideCount) => {
      const [visibleHeights, setVisibleHeights, visibleHeightsRef] = (0, use_state_with_ref_1.useStateWithRef)([]);
      const [initializedAdaptiveHeight, setInitializedAdaptiveHeight] = (0, react_1.useState)(false);
      const handleVisibleSlideHeightChange = (0, react_1.useCallback)((slideIndex, height) => {
        const latestVisibleHeights = visibleHeightsRef.current;
        let newVisibleHeights;
        if (height === null) {
          newVisibleHeights = latestVisibleHeights.filter((slideHeight) => slideHeight.slideIndex !== slideIndex);
        } else {
          newVisibleHeights = [...latestVisibleHeights, { slideIndex, height }];
        }
        setVisibleHeights(newVisibleHeights);
        if (newVisibleHeights.length >= Math.min(slideCount, Math.ceil(slidesToShow))) {
          setInitializedAdaptiveHeight(true);
        }
      }, [slideCount, setVisibleHeights, slidesToShow, visibleHeightsRef]);
      const frameHeight = (0, react_1.useMemo)(() => {
        if (adaptiveHeight) {
          if (!initializedAdaptiveHeight) {
            return "auto";
          }
          const maxHeight = Math.max(0, ...visibleHeights.map((height) => height.height));
          return `${maxHeight}px`;
        } else {
          return "auto";
        }
      }, [adaptiveHeight, initializedAdaptiveHeight, visibleHeights]);
      return {
        handleVisibleSlideHeightChange,
        frameHeight,
        initializedAdaptiveHeight
      };
    };
    exports.useFrameHeight = useFrameHeight;
  }
});

// node_modules/nuka-carousel/lib/carousel.js
var require_carousel = __commonJS({
  "node_modules/nuka-carousel/lib/carousel.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Carousel = void 0;
    var jsx_runtime_1 = require_jsx_runtime();
    var react_1 = __importStar(require_react());
    var slide_1 = __importDefault(require_slide());
    var announce_slide_1 = __importDefault(require_announce_slide());
    var slider_list_1 = require_slider_list();
    var controls_1 = __importDefault(require_controls());
    var default_carousel_props_1 = __importDefault(require_default_carousel_props());
    var utils_1 = require_utils();
    var use_frame_height_1 = require_use_frame_height();
    var default_controls_1 = require_default_controls();
    var Carousel2 = (rawProps) => {
      const props = rawProps;
      const { adaptiveHeight, adaptiveHeightAnimation, afterSlide, animation, autoplay, autoplayInterval, autoplayReverse, beforeSlide, cellAlign, cellSpacing, children, className, disableAnimation, dragging: desktopDraggingEnabled, dragThreshold: propsDragThreshold, enableKeyboardControls, frameAriaLabel, innerRef, keyCodeConfig, onDrag, onDragEnd, onDragStart, onUserNavigation, pauseOnHover, renderAnnounceSlideMessage, scrollMode, slideIndex, slidesToScroll: propsSlidesToScroll, slidesToShow, speed, style, swiping: mobileDraggingEnabled, wrapAround, zoomScale } = props;
      const filteredSlides = react_1.default.Children.toArray(children).filter(Boolean);
      const slideCount = filteredSlides.length;
      const slidesToScroll = animation === "fade" ? slidesToShow : propsSlidesToScroll;
      const [currentSlide, setCurrentSlide] = (0, react_1.useState)(() => (0, utils_1.getDefaultSlideIndex)(slideIndex, slideCount, slidesToShow, slidesToScroll, cellAlign, autoplayReverse, scrollMode));
      const [pause, setPause] = (0, react_1.useState)(false);
      const [isDragging, setIsDragging] = (0, react_1.useState)(false);
      const [dragDistance, setDragDistance] = (0, react_1.useState)(0);
      const [animationDistance, setAnimationDistance] = (0, react_1.useState)(0);
      const prevXPosition = (0, react_1.useRef)(null);
      const preDragOffset = (0, react_1.useRef)(0);
      const sliderListRef = (0, react_1.useRef)(null);
      const defaultCarouselRef = (0, react_1.useRef)(null);
      const autoplayTimeout = (0, react_1.useRef)();
      const autoplayLastTriggeredRef = (0, react_1.useRef)(null);
      const isMounted = (0, react_1.useRef)(true);
      const setSliderListRef = (0, react_1.useCallback)((node) => {
        if (node) {
          node.querySelectorAll(".slider-list img").forEach((el) => el.setAttribute("draggable", "false"));
        }
        sliderListRef.current = node;
      }, []);
      (0, react_1.useEffect)(() => {
        isMounted.current = true;
        return () => {
          isMounted.current = false;
        };
      }, []);
      const carouselRef = innerRef || defaultCarouselRef;
      const goToSlide = (0, react_1.useCallback)((targetSlideUnbounded) => {
        if (!sliderListRef.current || !carouselRef.current)
          return;
        const targetSlideBounded = (0, utils_1.getBoundedIndex)(targetSlideUnbounded, slideCount);
        const slideChanged = targetSlideUnbounded !== currentSlide;
        slideChanged && beforeSlide(currentSlide, targetSlideBounded);
        const currentOffset = sliderListRef.current.getBoundingClientRect().left - carouselRef.current.getBoundingClientRect().left;
        const sliderWidth = sliderListRef.current.offsetWidth;
        let targetOffset = (0, slider_list_1.getPercentOffsetForSlide)(targetSlideBounded, slideCount, slidesToShow, cellAlign, wrapAround) / 100 * sliderWidth;
        if (wrapAround) {
          const slideSetWidth = sliderWidth / 3;
          if (targetSlideUnbounded < 0) {
            targetOffset += slideSetWidth;
          }
          if (targetSlideUnbounded >= slideCount) {
            targetOffset -= slideSetWidth;
          }
        }
        setAnimationDistance(targetOffset - currentOffset);
        if (slideChanged) {
          setCurrentSlide(targetSlideBounded);
          const msToEndOfAnimation = !disableAnimation ? speed || 500 : 40;
          setTimeout(() => {
            if (!isMounted.current)
              return;
            afterSlide(targetSlideBounded);
          }, msToEndOfAnimation);
        }
      }, [
        afterSlide,
        beforeSlide,
        carouselRef,
        cellAlign,
        currentSlide,
        disableAnimation,
        speed,
        slideCount,
        slidesToShow,
        wrapAround
      ]);
      const nextSlide = (0, react_1.useCallback)(() => {
        const nextSlideIndex = (0, utils_1.getNextMoveIndex)(scrollMode, wrapAround, currentSlide, slideCount, slidesToScroll, slidesToShow, cellAlign);
        if (currentSlide !== nextSlideIndex) {
          goToSlide(nextSlideIndex);
        }
      }, [
        cellAlign,
        currentSlide,
        goToSlide,
        slidesToScroll,
        scrollMode,
        slideCount,
        slidesToShow,
        wrapAround
      ]);
      const prevSlide = (0, react_1.useCallback)(() => {
        const prevSlideIndex = (0, utils_1.getPrevMoveIndex)(scrollMode, wrapAround, currentSlide, slidesToScroll, slidesToShow, cellAlign);
        if (currentSlide !== prevSlideIndex) {
          goToSlide(prevSlideIndex);
        }
      }, [
        cellAlign,
        currentSlide,
        goToSlide,
        slidesToScroll,
        scrollMode,
        slidesToShow,
        wrapAround
      ]);
      const prevMovedToSlideIndex = (0, react_1.useRef)(slideIndex);
      (0, react_1.useEffect)(() => {
        if (slideIndex !== void 0 && slideIndex !== prevMovedToSlideIndex.current && !autoplayReverse) {
          goToSlide(slideIndex);
          prevMovedToSlideIndex.current = slideIndex;
        }
      }, [slideIndex, autoplayReverse, goToSlide]);
      (0, react_1.useEffect)(() => {
        let pauseStarted = null;
        if (pause) {
          pauseStarted = Date.now();
        }
        return () => {
          if (pauseStarted !== null && autoplayLastTriggeredRef.current !== null) {
            autoplayLastTriggeredRef.current += Date.now() - pauseStarted;
          }
        };
      }, [pause]);
      (0, react_1.useEffect)(() => {
        if (autoplay && !pause) {
          const adjustedTimeoutMs = autoplayLastTriggeredRef.current !== null ? autoplayInterval - (Date.now() - autoplayLastTriggeredRef.current) : autoplayInterval;
          autoplayTimeout.current = setTimeout(() => {
            autoplayLastTriggeredRef.current = Date.now();
            if (autoplayReverse) {
              prevSlide();
            } else {
              nextSlide();
            }
          }, adjustedTimeoutMs);
        }
        if (autoplay && pause) {
          clearTimeout(autoplayTimeout.current);
        }
        return () => {
          clearTimeout(autoplayTimeout.current);
        };
      }, [
        pause,
        autoplay,
        autoplayInterval,
        autoplayReverse,
        prevSlide,
        nextSlide
      ]);
      const onKeyDown = (event) => {
        let keyCommand = null;
        Object.keys(keyCodeConfig).forEach((command) => {
          var _a;
          if ((_a = keyCodeConfig[command]) === null || _a === void 0 ? void 0 : _a.includes(event.keyCode)) {
            keyCommand = command;
          }
        });
        if (keyCommand === null)
          return;
        event.preventDefault();
        event.stopPropagation();
        switch (keyCommand) {
          case "nextSlide":
            onUserNavigation(event);
            nextSlide();
            break;
          case "previousSlide":
            onUserNavigation(event);
            prevSlide();
            break;
          case "firstSlide":
          case "lastSlide": {
            onUserNavigation(event);
            const dotIndices = (0, default_controls_1.getDotIndexes)(slideCount, slidesToScroll, scrollMode, slidesToShow, wrapAround, cellAlign);
            if (keyCommand === "firstSlide") {
              goToSlide(dotIndices[0]);
            } else {
              goToSlide(dotIndices[dotIndices.length - 1]);
            }
            break;
          }
          case "pause":
            setPause((p) => !p);
            break;
        }
      };
      const dragPositions = (0, react_1.useRef)([]);
      const handleDragEnd = (e) => {
        if (!isDragging || !carouselRef.current)
          return;
        setIsDragging(false);
        let distanceFromInertia = 0;
        if (dragPositions.current.length > 1) {
          const startMove = dragPositions.current[0];
          const endMove = dragPositions.current[dragPositions.current.length - 1];
          const timeOffset = endMove.time - startMove.time;
          const goodInertiaFeelConstant = 9;
          const goodFrictionFeelConstant = 0.92;
          const initialVelocity = goodInertiaFeelConstant * Math.abs((endMove.pos - startMove.pos) / timeOffset);
          let velocity = initialVelocity;
          while (Math.abs(velocity) > 1) {
            distanceFromInertia += velocity;
            velocity *= goodFrictionFeelConstant;
          }
        }
        dragPositions.current = [];
        const adjustedDragDistance = Math.abs(dragDistance) + Math.abs(distanceFromInertia);
        onDragEnd(e);
        prevXPosition.current = null;
        setDragDistance(0);
        const oneScrollWidth = carouselRef.current.offsetWidth * Math.min(1, slidesToScroll / slidesToShow);
        const dragThreshold = oneScrollWidth * propsDragThreshold;
        if (adjustedDragDistance < dragThreshold) {
          goToSlide(currentSlide);
          return;
        }
        const canMaintainVisualContinuity = slidesToShow >= 2 * slidesToScroll;
        const timesToMove = canMaintainVisualContinuity ? 1 + Math.floor((adjustedDragDistance - dragThreshold) / oneScrollWidth) : 1;
        let nextSlideIndex = currentSlide;
        for (let index = 0; index < timesToMove; index += 1) {
          if (dragDistance > 0) {
            nextSlideIndex = (0, utils_1.getNextMoveIndex)(scrollMode, wrapAround, nextSlideIndex, slideCount, slidesToScroll, slidesToShow, cellAlign);
          } else {
            nextSlideIndex = (0, utils_1.getPrevMoveIndex)(scrollMode, wrapAround, nextSlideIndex, slidesToScroll, slidesToShow, cellAlign);
          }
        }
        if (nextSlideIndex !== currentSlide) {
          onUserNavigation(e);
        }
        goToSlide(nextSlideIndex);
      };
      const onTouchStart = (0, react_1.useCallback)((e) => {
        if (!mobileDraggingEnabled || !sliderListRef.current || !carouselRef.current) {
          return;
        }
        setIsDragging(true);
        preDragOffset.current = sliderListRef.current.getBoundingClientRect().left - carouselRef.current.getBoundingClientRect().left;
        onDragStart(e);
      }, [carouselRef, onDragStart, mobileDraggingEnabled]);
      const handlePointerMove = (0, react_1.useCallback)((xPosition) => {
        if (!isDragging)
          return;
        const isFirstMove = prevXPosition.current === null;
        const delta = prevXPosition.current !== null ? xPosition - prevXPosition.current : 0;
        const nextDragDistance = dragDistance + delta;
        const now = Date.now();
        while (dragPositions.current.length > 0) {
          if (now - dragPositions.current[0].time <= 100) {
            break;
          }
          dragPositions.current.shift();
        }
        dragPositions.current.push({ pos: nextDragDistance, time: now });
        if (!isFirstMove) {
          setDragDistance(nextDragDistance);
        }
        prevXPosition.current = xPosition;
      }, [isDragging, dragDistance]);
      const onTouchMove = (0, react_1.useCallback)((e) => {
        if (!isDragging || !carouselRef.current)
          return;
        onDragStart(e);
        const moveValue = carouselRef.current.offsetWidth - e.touches[0].pageX;
        handlePointerMove(moveValue);
      }, [isDragging, carouselRef, handlePointerMove, onDragStart]);
      const onMouseDown = (0, react_1.useCallback)((e) => {
        if (!desktopDraggingEnabled || !sliderListRef.current || !carouselRef.current)
          return;
        setIsDragging(true);
        preDragOffset.current = sliderListRef.current.getBoundingClientRect().left - carouselRef.current.getBoundingClientRect().left;
        onDragStart(e);
      }, [carouselRef, desktopDraggingEnabled, onDragStart]);
      const onMouseMove = (0, react_1.useCallback)((e) => {
        if (!isDragging || !carouselRef.current)
          return;
        onDrag(e);
        const offsetX = e.clientX - carouselRef.current.getBoundingClientRect().left;
        const moveValue = carouselRef.current.offsetWidth - offsetX;
        handlePointerMove(moveValue);
      }, [carouselRef, isDragging, handlePointerMove, onDrag]);
      const onMouseUp = (e) => {
        e.preventDefault();
        handleDragEnd(e);
      };
      const onMouseEnter = (0, react_1.useCallback)(() => {
        if (pauseOnHover) {
          setPause(true);
        }
      }, [pauseOnHover]);
      const onMouseLeave = (0, react_1.useCallback)(() => {
        if (pauseOnHover) {
          setPause(false);
        }
      }, [pauseOnHover]);
      const { frameHeight, handleVisibleSlideHeightChange, initializedAdaptiveHeight } = (0, use_frame_height_1.useFrameHeight)(adaptiveHeight, slidesToShow, slideCount);
      const renderSlides = (typeOfSlide) => {
        const slides = filteredSlides.map((child, index) => {
          return (0, jsx_runtime_1.jsx)(slide_1.default, Object.assign({ count: slideCount, currentSlide, index, isCurrentSlide: currentSlide === index, typeOfSlide, wrapAround, cellSpacing, animation, slidesToShow, speed, zoomScale, cellAlign, onVisibleSlideHeightChange: handleVisibleSlideHeightChange, adaptiveHeight, initializedAdaptiveHeight }, { children: child }), `${typeOfSlide}-${index}`);
        });
        return slides;
      };
      return (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "slider-container", style: {
        position: "relative"
      }, onMouseEnter, onMouseLeave }, { children: [(0, jsx_runtime_1.jsx)(announce_slide_1.default, { ariaLive: autoplay && !pause ? "off" : "polite", message: renderAnnounceSlideMessage({
        currentSlide,
        count: slideCount
      }) }), (0, controls_1.default)(props, slideCount, currentSlide, goToSlide, nextSlide, prevSlide, slidesToScroll), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: ["slider-frame", className || ""].join(" ").trim(), style: Object.assign({ overflow: "hidden", width: "100%", position: "relative", outline: "none", height: frameHeight, transition: adaptiveHeightAnimation ? "height 300ms ease-in-out" : void 0, willChange: "height", userSelect: "none" }, style), "aria-label": frameAriaLabel, role: "region", tabIndex: enableKeyboardControls ? 0 : -1, onKeyDown: enableKeyboardControls ? onKeyDown : void 0, ref: carouselRef, onMouseUp, onMouseDown, onMouseMove, onMouseLeave: onMouseUp, onTouchStart, onTouchEnd: handleDragEnd, onTouchMove }, { children: (0, jsx_runtime_1.jsxs)(slider_list_1.SliderList, Object.assign({ animationDistance, cellAlign, currentSlide, disableEdgeSwiping: props.disableEdgeSwiping, draggedOffset: preDragOffset.current - dragDistance, disableAnimation, easing: props.easing, edgeEasing: props.edgeEasing, isDragging, ref: setSliderListRef, scrollMode, animation, slideCount, slidesToScroll, slidesToShow, speed, wrapAround }, { children: [wrapAround ? renderSlides("prev-cloned") : null, renderSlides(), wrapAround ? renderSlides("next-cloned") : null] })) }))] }));
    };
    exports.Carousel = Carousel2;
    exports.Carousel.defaultProps = default_carousel_props_1.default;
    exports.default = exports.Carousel;
  }
});

// app/routes/index.jsx
var import_react3 = __toESM(require_react());

// app/content/frame.ts
var frame = [
  {
    name: "Mobile Application",
    logo: "https://www.weenggs.com/wp-content/uploads/2019/01/service_icon_2-1.png",
    desc: " Turning your ideas into working applications, we create mind-blowing Android and iOS mobile apps that are robust, offer easy navigation and drive results. Our 100+ personal and enterprise level applications are used in more than 20 countries around the world."
  },
  {
    name: "WEB DESIGNING",
    logo: "https://www.weenggs.com/wp-content/uploads/2019/01/service_icon_3-1.png",
    desc: " We are the one of the most effective Web Design Companies Powerful web design that will out-perform your strongest competitors. Color scheme, layout, sitemap, and style. We will bring your brand to life with a one of a kind masterpiece, built just for you."
  },
  {
    name: "WEB DEVELOPMENT",
    logo: "https://www.weenggs.com/wp-content/uploads/2019/01/service_icon_4-1.png",
    desc: "Offering excellent user-experience, we code some artistic, professional, and easy-to-use websites, that help turn your visitors into loyal customers. We can develop, design or even redesign your existing website for you. We offer website maintenance and SEO services as well."
  }
];
var brands = [
  {
    heading: "We Are Industry Veterans",
    desc: "With almost a decade worth of experience on the table, we know exactly what we\u2019re doing"
  },
  {
    heading: "We Listen To You",
    desc: "No matter what happens but listening and understanding your needs is priority No. 1"
  },
  {
    heading: "We Follow Proven Processes",
    desc: "Following strategic and proven processes, we deliver high-quality work, everytime!"
  },
  {
    heading: "We Are On Top Of The Game",
    desc: "Not bragging but we are pretty good at what we do"
  },
  {
    heading: "We Are Always There For You",
    desc: "Whatever you need, we are a phone call, email, text away"
  }
];
var datasubject = [
  {
    subject: "Android",
    marks: "60%"
  },
  {
    subject: "Ios App",
    marks: "95%"
  },
  {
    subject: "html 5",
    marks: "99%"
  },
  {
    subject: "Php",
    marks: "91%"
  },
  {
    subject: "Sql",
    marks: "95%"
  },
  {
    subject: "Sass",
    marks: "91%"
  }
];
var details = [
  {
    title: "  Tushar has help me make my app even better with his suggestions. His team has provided more than I expected and can not say enough good things about them. I had 67 proposals but selected Weenggs Technology because they had done cell phone apps in the past. He was not the cheapest nor the most expensive.",
    image: "//www.weenggs.com/wp-content/uploads/2019/07/placeholder-profile-150x150.png",
    name: "William M.",
    link: "CEO at hoaviol.com"
  },
  {
    title: " Tushar worked closely with me on this very complex Project, Working with him was an excellent experience. I needed some changes during the project, which he accepted and was very flexible to these adaptions. It was very pleasant to work with him. Communication was excellent and I would definitely work with him again.",
    image: "//www.weenggs.com/wp-content/uploads/2019/07/image-1-150x150.png",
    name: "Arash M.",
    link: "MBA Executive Candidate at AGSM, UNSW"
  },
  {
    title: "A great team of developers with excellent communication and attention to detail. Very glad I worked with Hitesh & team Weenggs and will do so with other apps. ",
    image: "//www.weenggs.com/wp-content/uploads/2019/07/steve-150x150.png",
    name: "Steaven G.",
    link: "CEO, ContractorForeman.com"
  },
  {
    title: "Tushar and his team are professional, courteous, and expert programmers. Our team at Midtrade are quite happy with their work!",
    image: "//www.weenggs.com/wp-content/uploads/2019/07/andy-bonn-150x150.png",
    name: "Andy B.",
    link: "CEO of MidTrade Inc"
  }
];
var client = [
  "https://www.weenggs.com/wp-content/uploads/2019/07/mu-logo-2-1.png",
  "https://www.weenggs.com/wp-content/uploads/2019/07/vidioowhite-1.png",
  "https://www.weenggs.com/wp-content/uploads/2019/08/Mid-Trade.png",
  "https://www.weenggs.com/wp-content/uploads/2019/08/worx-sr.png",
  "https://www.weenggs.com/wp-content/uploads/2019/07/contractor-1.png",
  "https://www.weenggs.com/wp-content/uploads/2019/07/spenifex-1.png",
  "https://www.weenggs.com/wp-content/uploads/2019/07/Prolong-pro.png"
];

// app/assets/onetwo.png
var onetwo_default = "/build/_assets/onetwo-5A2P6UAD.png";

// app/assets/tech.png
var tech_default = "/build/_assets/tech-H72BTXPA.png";

// app/routes/index.jsx
var import_carousel = __toESM(require_carousel());

// app/ImageViewer/index.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Slider = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
    fileName: "app/ImageViewer/index.jsx",
    lineNumber: 8,
    columnNumber: 1
  }, this);
};
var ImageViewer_default = Slider;

// app/ProgressLine/Progress.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ProgressLine = ({
  label,
  backgroundColor = "#e5e5e5",
  borderRadius = "10px",
  visualParts = [
    {
      percentage: "0%",
      color: "white"
    }
  ]
}) => {
  const [widths, setWidths] = (0, import_react2.useState)(
    visualParts.map(() => {
      return 0;
    })
  );
  (0, import_react2.useEffect)(() => {
    requestAnimationFrame(() => {
      setWidths(
        visualParts.map((item) => {
          return item.percentage;
        })
      );
    });
  }, [visualParts]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-sm text-gray-500",
        children: label
      }, void 0, false, {
        fileName: "app/ProgressLine/Progress.jsx",
        lineNumber: 40,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "progressVisualFull",
        style: {
          backgroundColor,
          borderRadius
        },
        children: visualParts.map((item, index) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              style: {
                width: widths[index],
                height: "20px",
                alignItems: "center",
                borderRadius: "10px",
                backgroundColor: item.color
              },
              className: "progressVisualPart",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "flex text-sm float-right text-white mr-2",
                children: `${item.percentage}`
              }, void 0, false, {
                fileName: "app/ProgressLine/Progress.jsx",
                lineNumber: 71,
                columnNumber: 15
              }, this)
            }, index, false, {
              fileName: "app/ProgressLine/Progress.jsx",
              lineNumber: 55,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/ProgressLine/Progress.jsx",
            lineNumber: 54,
            columnNumber: 13
          }, this);
        })
      }, void 0, false, {
        fileName: "app/ProgressLine/Progress.jsx",
        lineNumber: 41,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/ProgressLine/Progress.jsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
};
var Progress_default = ProgressLine;

// app/routes/index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
{
}
var Index = () => {
  const [currentImage, setCurrentImage] = (0, import_react3.useState)(0);
  const [isViewerOpen, setIsViewerOpen] = (0, import_react3.useState)(false);
  const openImageViewer = (0, import_react3.useCallback)((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);
  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  (0, import_react3.useEffect)(() => {
    document.title = "Weenggs Technology";
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 33,
        columnNumber: 2
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-screen w-full bg-no-repeat bg-center m-auto bg-cover bg-[url('https://www.weenggs.com/wp-content/uploads/2019/08/bg.jpg')]",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "bg-[#7f818b] opacity-80  flex",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
            className: "h-[100vh] justify-center items-center lg:h-[100vh] p-4 lg:w-[1140px] flex m-auto",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: " text-center flex-col justify-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                  className: "text-2xl font-sans lg:text-4xl md:text-4xl mb-10  text-center  text-[#ffffff]",
                  children: "The epicenter where latest technology meets creativity!"
                }, void 0, false, {
                  fileName: "app/routes/index.jsx",
                  lineNumber: 40,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "text-center mb-10 font-medium lg:text-xl text-sm text-[#e9e5e5] text-md ",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: "A team of professionals that help you nurture & grow your business!"
                    }, void 0, false, {
                      fileName: "app/routes/index.jsx",
                      lineNumber: 42,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: "Design & Develop Stunning Websites"
                    }, void 0, false, {
                      fileName: "app/routes/index.jsx",
                      lineNumber: 43,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: "Code some Kick-ass Mobile Applications"
                    }, void 0, false, {
                      fileName: "app/routes/index.jsx",
                      lineNumber: 44,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: "Provide 24/7 Customer Service"
                    }, void 0, false, {
                      fileName: "app/routes/index.jsx",
                      lineNumber: 45,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/index.jsx",
                  lineNumber: 41,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  className: "bg-red-700  hrover:bg-green m-auto flex font:semibold text-sm text-white align-center uppercase py-3 px-6 rounded-full",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                    href: "/request-a-quote",
                    children: "LET'S GET STARTED"
                  }, void 0, false, {
                    fileName: "app/routes/index.jsx",
                    lineNumber: 48,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/index.jsx",
                  lineNumber: 47,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/index.jsx",
              lineNumber: 39,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/index.jsx",
            lineNumber: 38,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: "app/routes/index.jsx",
          lineNumber: 37,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 36,
        columnNumber: 2
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "bg-[#f8f9fa]",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
          className: " py-20  lg:max-w-[1140px] p-10 block m-auto",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-center text-[15px] font-weight: 700; text-[#999] ",
                children: "YOUR NOT-SO-AVERAGE"
              }, void 0, false, {
                fileName: "app/routes/index.jsx",
                lineNumber: 60,
                columnNumber: 4
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                className: "text-sm  md:text-4xl mb-10 text-center  text-[#b52332]",
                children: "MOBILE APPS AND WEBSITE DEVELOPERS"
              }, void 0, false, {
                fileName: "app/routes/index.jsx",
                lineNumber: 61,
                columnNumber: 4
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "text-center mb-10  lg:text-sm text-[#595959] text-sm m-5",
                children: "Inspired by art and technology, we integrate designs and smart development to create some of the most user-centric websites and mobile applications. We are all about bringing your unique ideas to life and delivering success."
              }, void 0, false, {
                fileName: "app/routes/index.jsx",
                lineNumber: 62,
                columnNumber: 4
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "container  m-auto my-5",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "grid lg:grid-cols-3 w-auto  m-auto ",
                  children: frame.map((list, index) => {
                    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "lg:w-[300px] md:my-5 bg-white h-auto m-[10px] p-[10px] mb-0 transition duration-500 ease-in-out transform \n				  hover:-translate-y-1 hover:scale-110  rounded-lg  ",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "flex justify-center  animate-bounce",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                            className: "mb-4 text-center m-auto flex",
                            width: "80",
                            height: "80",
                            src: list.logo,
                            alt: "Weenggs Technology"
                          }, void 0, false, {
                            fileName: "app/routes/index.jsx",
                            lineNumber: 73,
                            columnNumber: 7
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/index.jsx",
                          lineNumber: 72,
                          columnNumber: 7
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                          className: "text-center p-5 text-md uppercase",
                          children: list.name
                        }, void 0, false, {
                          fileName: "app/routes/index.jsx",
                          lineNumber: 75,
                          columnNumber: 8
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                          className: "text-[#999999] text-sm text-center hover:animate-pulse",
                          children: [
                            list.desc,
                            " "
                          ]
                        }, void 0, true, {
                          fileName: "app/routes/index.jsx",
                          lineNumber: 76,
                          columnNumber: 8
                        }, this)
                      ]
                    }, index, true, {
                      fileName: "app/routes/index.jsx",
                      lineNumber: 70,
                      columnNumber: 7
                    }, this);
                  })
                }, void 0, false, {
                  fileName: "app/routes/index.jsx",
                  lineNumber: 67,
                  columnNumber: 6
                }, this)
              }, void 0, false, {
                fileName: "app/routes/index.jsx",
                lineNumber: 66,
                columnNumber: 4
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/index.jsx",
            lineNumber: 59,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: "app/routes/index.jsx",
          lineNumber: 58,
          columnNumber: 3
        }, this)
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 57,
        columnNumber: 3
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "bg-[#bf1e2e]",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
          className: "lg:max-w-[1140px] p-10 block m-auto",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "py-20",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-center text-[16px] text-[#e5e2e2] ",
                children: "THE PERFECT BLEND OF"
              }, void 0, false, {
                fileName: "app/routes/index.jsx",
                lineNumber: 89,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                className: "  text-[15px] md:text-3xl mb-10 text-center  text-[#fff]",
                children: "CREATIVE-PROWESS, TECHNOLOGY AND EXTRAORDINARY SERVICE!"
              }, void 0, false, {
                fileName: "app/routes/index.jsx",
                lineNumber: 90,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "text-center mb-10  text-sm text-[#fff]  ",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "leading-7  text-[#d3d3d3]",
                  children: "We are a team of experienced strategists, designers, developers and project managers. With get shit done attitude, we can accomplish any challenge out there Our in-depth understanding of futuristic technology is what brought us together and it\u2019s what keeps us moving forward. Leaving the extra-mile way behind, we happen to offer exceptional services to all our clients, including web development, mobile app development, UX design and more."
                }, void 0, false, {
                  fileName: "app/routes/index.jsx",
                  lineNumber: 92,
                  columnNumber: 7
                }, this)
              }, void 0, false, {
                fileName: "app/routes/index.jsx",
                lineNumber: 91,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "text-center ",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  className: "bg-[#fff] md:mt-10 font-semibold text-center tracking-[1px] py-3 px-6 rounded-full text-xs text-red-600 capitalize",
                  children: "TELL US WHAT YOU NEED AND WE WILL MAKE THE MAGIC HAPPEN!"
                }, void 0, false, {
                  fileName: "app/routes/index.jsx",
                  lineNumber: 96,
                  columnNumber: 6
                }, this)
              }, void 0, false, {
                fileName: "app/routes/index.jsx",
                lineNumber: 95,
                columnNumber: 5
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/index.jsx",
            lineNumber: 88,
            columnNumber: 6
          }, this)
        }, void 0, false, {
          fileName: "app/routes/index.jsx",
          lineNumber: 87,
          columnNumber: 4
        }, this)
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 86,
        columnNumber: 3
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "bg-[#fff]",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
          className: "lg:max-w-[1140px] pt-[100px] block m-auto",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "w-full md:flex lg:flex ",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "lg:pt-20  lg:w-3/6 md:w-3/6 px-4 w-full",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                    className: "text-[#999] text-sm font-bold ",
                    children: "REASONS WHY TOP BRANDS"
                  }, void 0, false, {
                    fileName: "app/routes/index.jsx",
                    lineNumber: 109,
                    columnNumber: 7
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                    className: "text-[#bf1e2e] lg:text-4xl md:text-2xl font-bold mb-5",
                    children: "CHOOSE US!"
                  }, void 0, false, {
                    fileName: "app/routes/index.jsx",
                    lineNumber: 110,
                    columnNumber: 7
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                    className: "py-5",
                    children: brands.map((listdata, index) => {
                      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                        className: "flex p-1",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                            className: "fa m-1",
                            children: "\uF087"
                          }, void 0, false, {
                            fileName: "app/routes/index.jsx",
                            lineNumber: 116,
                            columnNumber: 7
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "ml-1",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                                className: "mb-2 text-base",
                                children: listdata.heading
                              }, void 0, false, {
                                fileName: "app/routes/index.jsx",
                                lineNumber: 118,
                                columnNumber: 7
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                className: "m-auto text-gray-500 text-sm",
                                children: listdata.desc
                              }, void 0, false, {
                                fileName: "app/routes/index.jsx",
                                lineNumber: 119,
                                columnNumber: 7
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/index.jsx",
                            lineNumber: 117,
                            columnNumber: 7
                          }, this)
                        ]
                      }, index, true, {
                        fileName: "app/routes/index.jsx",
                        lineNumber: 115,
                        columnNumber: 7
                      }, this);
                    })
                  }, void 0, false, {
                    fileName: "app/routes/index.jsx",
                    lineNumber: 112,
                    columnNumber: 7
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/index.jsx",
                lineNumber: 108,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "lg:pt-20  pt-5 px-5 lg:w-3/6 md:w-3/6 ",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                  className: "animate-pulse",
                  src: onetwo_default,
                  alt: "logo"
                }, void 0, false, {
                  fileName: "app/routes/index.jsx",
                  lineNumber: 127,
                  columnNumber: 7
                }, this)
              }, void 0, false, {
                fileName: "app/routes/index.jsx",
                lineNumber: 126,
                columnNumber: 6
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/index.jsx",
            lineNumber: 107,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: "app/routes/index.jsx",
          lineNumber: 106,
          columnNumber: 4
        }, this)
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 105,
        columnNumber: 3
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "bg-[#fff]",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
          className: "lg:pb-20 lg:max-w-[1140px] block m-auto",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "w-full md:flex lg:flex ",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "lg:py-20 p-10 lg:w-3/6 md:w-3/6  w-full",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                    className: "text-[#999] text-sm  ",
                    children: "TECHNOLOGIES WE ARE VERY SAVVY"
                  }, void 0, false, {
                    fileName: "app/routes/index.jsx",
                    lineNumber: 139,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                    className: "text-[#bf1e2e] lg:font-weight:600; lg:text-4xl md:text-2xl mb-5 ",
                    children: "WITH OUR SKILLS"
                  }, void 0, false, {
                    fileName: "app/routes/index.jsx",
                    lineNumber: 140,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "py-5",
                    children: datasubject && datasubject.map((data2, ind) => {
                      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Progress_default, {
                        label: data2.subject,
                        visualParts: [
                          {
                            percentage: data2.marks,
                            color: "#bf1e2e"
                          }
                        ]
                      }, ind, false, {
                        fileName: "app/routes/index.jsx",
                        lineNumber: 143,
                        columnNumber: 17
                      }, this);
                    })
                  }, void 0, false, {
                    fileName: "app/routes/index.jsx",
                    lineNumber: 141,
                    columnNumber: 9
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/index.jsx",
                lineNumber: 138,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "lg:pt-36 hidden md:block text-center py-20 lg:full md:w-3/6 ",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                  className: "lg:hover:translate-y-10 transition duration-300 ",
                  src: tech_default,
                  alt: "logo"
                }, void 0, false, {
                  fileName: "app/routes/index.jsx",
                  lineNumber: 159,
                  columnNumber: 11
                }, this)
              }, void 0, false, {
                fileName: "app/routes/index.jsx",
                lineNumber: 158,
                columnNumber: 9
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/index.jsx",
            lineNumber: 137,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: "app/routes/index.jsx",
          lineNumber: 136,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 135,
        columnNumber: 3
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "bg-[#f8f9fa]",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
          className: " lg:max-w-[1140px] block m-auto",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "py-[100px] h-full ",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-center  text-[#999] ",
                children: "OUR"
              }, void 0, false, {
                fileName: "app/routes/index.jsx",
                lineNumber: 168,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                className: "text-2xl lg:text-4xl md:text-4xl mb-10 text-center  text-[#b52332]",
                children: "TESTIMONIALS"
              }, void 0, false, {
                fileName: "app/routes/index.jsx",
                lineNumber: 169,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "container  m-auto my-5",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-col w-full p-5  ",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_carousel.default, {
                    autoplay: true,
                    className: "slider-container  ",
                    children: details.map((items, ind) => {
                      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "grid grid-cols-1  p-5  w-full  bg-[#fff] h-auto  rounded-lg ",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                            className: "text-[#595959] text-sm mb-5  h-[150px] overflow-x-auto ",
                            children: items.title
                          }, void 0, false, {
                            fileName: "app/routes/index.jsx",
                            lineNumber: 180,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "flex w-fit ",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                                className: "mx-4 m-auto rounded-full mr-2",
                                width: "80",
                                height: "80",
                                src: items.image,
                                alt: "Weenggs Technology"
                              }, void 0, false, {
                                fileName: "app/routes/index.jsx",
                                lineNumber: 185,
                                columnNumber: 24
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                className: "text-sm text-[#4169e2] m-auto p-2",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                                    className: "",
                                    children: items.name
                                  }, void 0, false, {
                                    fileName: "app/routes/index.jsx",
                                    lineNumber: 187,
                                    columnNumber: 26
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                                    href: "https://hoaviol.com",
                                    className: "flex-wrap",
                                    children: items.link
                                  }, void 0, false, {
                                    fileName: "app/routes/index.jsx",
                                    lineNumber: 188,
                                    columnNumber: 26
                                  }, this)
                                ]
                              }, void 0, true, {
                                fileName: "app/routes/index.jsx",
                                lineNumber: 186,
                                columnNumber: 26
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/index.jsx",
                            lineNumber: 183,
                            columnNumber: 24
                          }, this)
                        ]
                      }, ind, true, {
                        fileName: "app/routes/index.jsx",
                        lineNumber: 179,
                        columnNumber: 24
                      }, this);
                    })
                  }, void 0, false, {
                    fileName: "app/routes/index.jsx",
                    lineNumber: 175,
                    columnNumber: 16
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/index.jsx",
                  lineNumber: 172,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: "app/routes/index.jsx",
                lineNumber: 170,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/index.jsx",
            lineNumber: 167,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: "app/routes/index.jsx",
          lineNumber: 166,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 165,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "bg-[#fff]",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
          className: "lg:max-w-[1140px] justify-center block m-auto md:my-[100px] ",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "lg:pt-30 pt-30 p-10 h-full ",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-center  text-[#999] ",
                children: "OUR"
              }, void 0, false, {
                fileName: "app/routes/index.jsx",
                lineNumber: 209,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                className: "text-2xl lg:text-4xl md:text-4xl text-center  text-[#b52332]",
                children: "CLIENTS"
              }, void 0, false, {
                fileName: "app/routes/index.jsx",
                lineNumber: 210,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-center text-sm text-[#999] ",
                children: "Some of the many clients we've helped achieve great results"
              }, void 0, false, {
                fileName: "app/routes/index.jsx",
                lineNumber: 211,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "container my-5 m-auto",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-col w-full h-fit",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "slider-container max-w[1140px] ",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_carousel.default, {
                      wrapAround: true,
                      autoplay: true,
                      cellAlign: "center",
                      children: client && client.map((citem, ind) => {
                        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "h-auto   m-auto ",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                            className: " m-auto",
                            src: citem,
                            alt: "img-not-found"
                          }, void 0, false, {
                            fileName: "app/routes/index.jsx",
                            lineNumber: 220,
                            columnNumber: 9
                          }, this)
                        }, ind, false, {
                          fileName: "app/routes/index.jsx",
                          lineNumber: 218,
                          columnNumber: 9
                        }, this);
                      })
                    }, void 0, false, {
                      fileName: "app/routes/index.jsx",
                      lineNumber: 216,
                      columnNumber: 8
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/index.jsx",
                    lineNumber: 214,
                    columnNumber: 7
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/index.jsx",
                  lineNumber: 213,
                  columnNumber: 6
                }, this)
              }, void 0, false, {
                fileName: "app/routes/index.jsx",
                lineNumber: 212,
                columnNumber: 6
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/index.jsx",
            lineNumber: 208,
            columnNumber: 6
          }, this)
        }, void 0, false, {
          fileName: "app/routes/index.jsx",
          lineNumber: 207,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 206,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ImageViewer_default, {}, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 237,
        columnNumber: 2
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/index.jsx",
    lineNumber: 32,
    columnNumber: 3
  }, this);
};
var routes_default = Index;
export {
  routes_default as default
};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=/build/routes/index-TPZGFGXI.js.map
