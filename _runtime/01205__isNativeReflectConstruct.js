// _runtime/01205__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import importAllResult from "noop";
import get_ActivityIndicator from "_isNativeReflectConstruct";

let c10;
let c9;
let closure_12;
let closure_14;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
let FeedbackWidget = arg1;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
({ Appearance: error, Image: metroImportAll, Keyboard: c9, Text: c10, TextInput: unpackModuleId, TouchableOpacity: closure_12, TouchableWithoutFeedback: map1, View: closure_14 } = get_ActivityIndicator);
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let _Promise = arg2;
    let _classCallCheck = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      function fulfilled(arg0) {
        try {
          step(iter.next(arg0));
        } catch (tmp5) {
          callback2(tmp5);
        }
      }
      function rejected(arg0) {
        try {
          step(iter.throw(arg0));
        } catch (tmp5) {
          callback2(tmp5);
        }
      }
      let iter = rejected;
      function step(done) {
        if (done.done) {
          callback(done.value);
        } else {
          let tmp = done.value;
          callback = tmp;
          if (!(tmp instanceof fulfilled)) {
            tmp = new tmp((arg0) => {
              arg0(closure_0);
            });
          }
          tmp.then(fulfilled, iter);
        }
      }
      let items = closure_1;
      if (!closure_1) {
        items = [];
      }
      iter = iter.apply(closure_0, items);
      const iter2 = iter.next();
      const value = iter2.value;
      if (iter2.done) {
        arg0(value);
      } else {
        closure_0 = value;
        let tmp3 = value;
        if (!(value instanceof fulfilled)) {
          tmp3 = new tmp3((arg0) => {
            arg0(closure_0);
          });
        }
        tmp3.then(fulfilled, rejected);
      }
    });
    return _Promise;
  };
}
class FeedbackWidget {
  constructor(arg0) {
    self = this;
    tmp = apply;
    tmp2 = _isNativeReflectConstruct(this, apply);
    items = [];
    items[0] = global;
    tmp3 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(apply);
    tmp4 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp6 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp3(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp4Result = tmp4(self, constructResult);
    apply = tmp4Result;
    tmp4Result._didSubmitForm = false;
    tmp4Result.handleFeedbackSubmit = () => {
      let description;
      let email;
      let name;
      let onFormSubmitted;
      let onSubmitError;
      let obj = tmp4Result;
      ({ name, email, description } = tmp4Result.state);
      const props = tmp4Result.props;
      ({ onSubmitError, onFormSubmitted } = props);
      const props2 = tmp4Result.props;
      if (null != name) {
        const trimmed = name.trim();
      }
      if (null != email) {
        const trimmed1 = email.trim();
      }
      if (null != description) {
        const trimmed2 = description.trim();
      }
      if (!obj.props.isNameRequired) {
        if (!obj.props.isEmailRequired) {
          if (trimmed2) {
            if (obj.props.shouldValidateEmail) {
              if (obj.props.isEmailRequired) {
                let obj2 = FeedbackWidget(1196);
                if (!obj2.isValidEmail(trimmed1)) {
                  FeedbackWidget(1196).feedbackAlertDialog(props2.errorTitle, props2.emailError);
                  const obj4 = FeedbackWidget(1196);
                }
              }
            }
            if (obj.state.filename) {
              if (obj.state.attachment) {
                obj = { filename: null, data: null };
                obj[0] = obj.state.filename;
                obj[1] = obj.state.attachment;
                const items = [obj];
              }
            }
            obj = { message: null, name: null, email: null, associatedEventId: null };
            obj[0] = trimmed2;
            obj[1] = trimmed;
            obj[2] = trimmed1;
            obj[3] = FeedbackWidget(817).lastEventId();
            try {
              if (!onFormSubmitted) {
                obj.setState({ isVisible: false });
              }
              let tmp19;
              if (tmp13) {
                let obj1 = { attachments: null };
                obj1[0] = tmp13;
                tmp19 = obj1;
              }
              FeedbackWidget(817).captureFeedback(obj, tmp19);
              obj2 = { name: null, email: null, message: null, attachments: null };
              obj2[0] = trimmed;
              obj2[1] = trimmed1;
              obj2[2] = trimmed2;
              obj2[3] = tmp13;
              tmp4Result = tmp4(obj2);
              const obj8 = FeedbackWidget(817);
              FeedbackWidget(1196).feedbackAlertDialog(props2.successMessageText, "");
              onFormSubmitted();
              obj._didSubmitForm = true;
              const obj11 = FeedbackWidget(1196);
            } catch (tmp26) {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const error = new Error("Feedback form submission failed: " + tmp26);
              tmp3(error);
              FeedbackWidget(1196).feedbackAlertDialog(tmp2.errorTitle, tmp2.genericError);
              const debug = FeedbackWidget(817).debug;
              const _HermesInternal2 = HermesInternal;
              debug.error("Feedback form submission failed: " + tmp26);
              const obj12 = FeedbackWidget(1196);
            }
            const obj7 = FeedbackWidget(817);
          }
        }
      }
      obj1 = FeedbackWidget(1196);
      obj1.feedbackAlertDialog(props2.errorTitle, props2.formError);
    };
    tmp4Result.onScreenshotButtonPress = () => fn(closure_0, undefined, undefined, function() {
      const self = this;
      let c4 = 0;
      let c5 = 0;
      return (function*() {
        if (uri === 2) {
          uri = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            uri = 2;
            let num2 = 0;
            if (0 === fileName2) {
              if (arg0 === 1) {
                uri = 3;
                throw arg1;
              } else if (arg0 === 2) {
                uri = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let debug = uri;
                let state = uri;
                let first1 = num2;
                let fileName = tmp2;
                let closure_13 = uri;
                fileName = undefined;
                first1 = undefined;
                state = undefined;
                fileName2 = undefined;
                uri = undefined;
                num2 = undefined;
                let closure_7;
                let fileName1;
                let c9;
                let base64;
                let c11;
                fileName = undefined;
                uri = undefined;
                if (uri._hasScreenshot()) {
                  debug.setState({ filename: "Array", attachment: "HermesInternal", attachmentUri: "r" });
                } else {
                  num2 = debug.props.imagePicker;
                  if (num2) {
                    if (num2.launchImageLibraryAsync) {
                      let fn = () => {
                        const launchImageLibraryAsync = num2.launchImageLibraryAsync;
                        if (null !== launchImageLibraryAsync) {
                          if (undefined !== launchImageLibraryAsync) {
                            const call = launchImageLibraryAsync.call;
                            const obj = { mediaTypes: null, base64: null };
                            obj[0] = ["images"];
                            obj[1] = uri(first1[9]).isWeb();
                            typeof call === "unknown" ? launchImageLibraryAsync(obj) : call(num2, obj);
                            const obj2 = uri(first1[9]);
                          }
                        }
                      };
                    } else {
                      fn = null;
                      if (num2.launchImageLibrary) {
                        fn = () => {
                          const launchImageLibrary = num2.launchImageLibrary;
                          if (null !== launchImageLibrary) {
                            if (undefined !== launchImageLibrary) {
                              const call = launchImageLibrary.call;
                              const obj = { mediaType: "photo", includeBase64: null };
                              obj[1] = uri(first1[9]).isWeb();
                              typeof call === "unknown" ? launchImageLibrary(obj) : call(num2, obj);
                              const obj2 = uri(first1[9]);
                            }
                          }
                        };
                      }
                    }
                    if (fn) {
                      fileName2 = 1;
                      uri = 1;
                      let obj1 = { value: null, done: false };
                      obj1[0] = fn();
                      return obj1;
                    } else {
                      const debug2 = outer2_0(outer2_2[8]).debug;
                      debug2.warn("No compatible image picker library found. Please provide a valid image picker library.");
                      uri = 3;
                      let obj2 = { value: null, done: true };
                      obj2[0] = undefined;
                      return obj2;
                    }
                  } else {
                    const _Object = Object;
                    const _Object2 = Object;
                    Object.assign(Object.assign({}, outer2_0(outer2_2[11]).defaultConfiguration), debug.props).onAddScreenshot((arg0) => {
                      let closure_0 = arg0;
                      const dataFromUri = uri(first1[10]).getDataFromUri(arg0);
                      let obj = uri(first1[10]);
                      dataFromUri.then((arg0) => {
                        if (null != arg0) {
                          const obj = { filename: "feedback_screenshot", attachment: null, attachmentUri: null };
                          obj[1] = arg0;
                          obj[2] = closure_0;
                          outer1_13.setState(obj);
                        } else {
                          const result = outer1_13._showImageRetrievalDevelopmentNote();
                          const debug = uri(first1[8]).debug;
                          debug.error("Failed to read image data from uri:", closure_0);
                        }
                      }).catch((arg0) => {
                        const result = outer1_13._showImageRetrievalDevelopmentNote();
                        const debug = uri(first1[8]).debug;
                        debug.error("Failed to read image data from uri:", closure_0, "error: ", arg0);
                      });
                    });
                  }
                }
              }
            } else if (arg0 === 1) {
              uri = 3;
              throw arg1;
            } else if (arg0 === 2) {
              uri = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              closure_7 = arg1;
              let tmp54 = null;
              let assets;
              if (null != closure_7) {
                assets = closure_7.assets;
              }
              if (assets) {
                if (closure_7.assets.length > num2) {
                  num2 = outer2_7.assets[0];
                  if (!obj9.isWeb()) {
                    const outer2_4 = num2;
                    fileName = undefined;
                    if (tmp54 !== num2) {
                      if (debug !== fileName2) {
                        fileName = fileName2.fileName;
                      }
                    }
                    const first = closure_7.assets[0];
                    uri = first;
                    uri = undefined;
                    if (tmp54 !== first) {
                      if (debug !== uri) {
                        uri = uri.uri;
                      }
                    }
                    if (uri) {
                      obj = outer2_0(outer2_2[10]);
                      let dataFromUri = obj.getDataFromUri(uri);
                      dataFromUri.then((arg0) => {
                        if (null != arg0) {
                          const obj = { filename: null, attachment: null, attachmentUri: null };
                          obj[0] = fileName;
                          obj[1] = arg0;
                          obj[2] = uri;
                          closure_13.setState(obj);
                        } else {
                          const result = closure_13._showImageRetrievalDevelopmentNote();
                          const debug = uri(first1[8]).debug;
                          debug.error("Failed to read image data from uri:", uri);
                        }
                      }).catch((arg0) => {
                        const result = closure_13._showImageRetrievalDevelopmentNote();
                        const debug = uri(first1[8]).debug;
                        debug.error("Failed to read image data from uri:", uri, "error: ", arg0);
                      });
                      const nextPromise = dataFromUri.then((arg0) => {
                        if (null != arg0) {
                          const obj = { filename: null, attachment: null, attachmentUri: null };
                          obj[0] = fileName;
                          obj[1] = arg0;
                          obj[2] = uri;
                          closure_13.setState(obj);
                        } else {
                          const result = closure_13._showImageRetrievalDevelopmentNote();
                          const debug = uri(first1[8]).debug;
                          debug.error("Failed to read image data from uri:", uri);
                        }
                      });
                    }
                  }
                  obj9 = outer2_0(outer2_2[9]);
                }
                const outer2_1 = num2;
                fileName1 = undefined;
                if (tmp54 !== num2) {
                  if (debug !== fileName) {
                    fileName1 = fileName.fileName;
                  }
                }
                first1 = closure_7.assets[0];
                let uri1;
                if (tmp54 !== first1) {
                  if (debug !== outer2_2) {
                    uri1 = outer2_2.uri;
                  }
                }
                const outer2_9 = uri1;
                const first2 = outer2_7.assets[0];
                const outer2_3 = first2;
                base64 = undefined;
                if (tmp54 !== first2) {
                  if (debug !== state) {
                    base64 = state.base64;
                  }
                }
                let base64ToUint8ArrayResult;
                if (base64) {
                  obj1 = outer2_0(outer2_2[7]);
                  base64ToUint8ArrayResult = obj1.base64ToUint8Array(base64);
                }
                tmp54 = fileName;
                const outer2_11 = base64ToUint8ArrayResult;
                if (outer2_11) {
                  debug = state;
                  const obj4 = { filename: null, attachment: null, attachmentUri: null };
                  obj4[0] = outer2_8;
                  obj4[1] = outer2_11;
                  tmp54 = outer2_9;
                  obj4[2] = outer2_9;
                  state.setState(obj4);
                } else {
                  debug = outer2_0(outer2_2[8]).debug;
                  debug.error("Failed to read image data on the web");
                }
              }
            }
            uri = 3;
          } catch (tmp71) {
            uri = tmp;
            throw tmp71;
          }
        }
      })();
    });
    tmp4Result._setCapturedScreenshot = (data) => {
      let closure_0 = data;
      if (null != data.data) {
        const debug2 = FeedbackWidget(817).debug;
        debug2.log("Setting captured screenshot:", data.filename);
        const NATIVE = FeedbackWidget(1001).NATIVE;
        const encodeToBase64Result = NATIVE.encodeToBase64(data.data);
        NATIVE.encodeToBase64(data.data).then((arg0) => {
          if (null != arg0) {
            const _HermesInternal = HermesInternal;
            const obj = { filename: null, attachment: null, attachmentUri: null };
            ({ filename: obj[0], data: obj[1] } = data);
            obj[2] = "data:" + data.contentType + ";base64," + arg0;
            data.setState(obj);
          } else {
            const debug = FeedbackWidget(817).debug;
            debug.error("Failed to read image data from:", data.filename);
          }
        }).catch((arg0) => {
          const debug = FeedbackWidget(817).debug;
          debug.error("Failed to read image data from:", data.filename, "error: ", arg0);
        });
        const nextPromise = NATIVE.encodeToBase64(data.data).then((arg0) => {
          if (null != arg0) {
            const _HermesInternal = HermesInternal;
            const obj = { filename: null, attachment: null, attachmentUri: null };
            ({ filename: obj[0], data: obj[1] } = data);
            obj[2] = "data:" + data.contentType + ";base64," + arg0;
            data.setState(obj);
          } else {
            const debug = FeedbackWidget(817).debug;
            debug.error("Failed to read image data from:", data.filename);
          }
        });
      } else {
        let debug = FeedbackWidget(817).debug;
        debug.error("Failed to read image data from:", data.filename);
      }
    };
    tmp4Result._saveFormState = () => {
      tmp4Result._savedState = Object.assign({}, tmp4Result.state);
    };
    tmp4Result._clearFormState = () => {
      closure_0._savedState = { name: "", email: "", description: "", filename: "Boolean", attachment: "disabled", attachmentUri: "isArray" };
    };
    tmp4Result._hasScreenshot = () => undefined !== tmp4Result.state.filename && undefined !== tmp4Result.state.attachment && undefined !== tmp4Result.state.attachmentUri;
    tmp4Result._getUser = () => {
      const currentScope = tmp4Result(817).getCurrentScope();
      const user = currentScope.getUser();
      if (user) {
        return user;
      } else {
        let tmpResult = tmp(817);
        const isolationScope = tmpResult.getIsolationScope();
        let user1 = isolationScope.getUser();
        if (!user1) {
          tmpResult = tmp(817);
          const globalScope = tmpResult.getGlobalScope();
          user1 = globalScope.getUser();
        }
        return user1;
      }
      const obj = tmp4Result(817);
    };
    tmp4Result._showImageRetrievalDevelopmentNote = () => {
      if (obj.isExpoGo()) {
        tmp4Result(1196).feedbackAlertDialog("Development note", "The feedback widget cannot retrieve image data in Expo Go. Please build your app to test this functionality.");
        const tmpResult = tmp4Result(1196);
      }
    };
    props = tmp4Result.props;
    useSentryUser = undefined;
    if (null !== props) {
      if (undefined !== props) {
        useSentryUser = props.useSentryUser;
      }
    }
    str = undefined;
    if (null !== useSentryUser) {
      if (undefined !== useSentryUser) {
        str = useSentryUser.email;
      }
    }
    if (!str) {
      _getUserResult = tmp4Result._getUser();
      email = undefined;
      if (null !== _getUserResult) {
        if (undefined !== _getUserResult) {
          email = _getUserResult.email;
        }
      }
      str = email;
    }
    if (!str) {
      str = "";
    }
    props2 = tmp4Result.props;
    useSentryUser1 = undefined;
    if (null !== props2) {
      if (undefined !== props2) {
        useSentryUser1 = props2.useSentryUser;
      }
    }
    str2 = undefined;
    if (null !== useSentryUser1) {
      if (undefined !== useSentryUser1) {
        str2 = useSentryUser1.name;
      }
    }
    if (!str2) {
      _getUserResult1 = tmp4Result._getUser();
      name = undefined;
      if (null !== _getUserResult1) {
        if (undefined !== _getUserResult1) {
          name = _getUserResult1.name;
        }
      }
      str2 = name;
    }
    if (!str2) {
      str2 = "";
    }
    tmp13 = tmp._savedState.name || str2;
    tmp14 = tmp._savedState.email || str;
    tmp15 = tmp._savedState.description || "";
    tmp16 = tmp._savedState.filename || undefined;
    tmp17 = tmp._savedState.attachment || undefined;
    tmp18 = tmp._savedState.attachmentUri || undefined;
    tmp4Result.state = { isVisible: true, name: tmp13, email: tmp14, description: tmp15, filename: tmp16, attachment: tmp17, attachmentUri: tmp18 };
    obj3 = require("lazyLoadFeedbackIntegration");
    result = obj3.lazyLoadFeedbackIntegration();
    return tmp4Result;
  }
}
require("_inherits")(FeedbackWidget, importAllResult.Component);
let obj = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const self = this;
    this._themeListener = closure_7.addChangeListener(() => {
      self.forceUpdate();
    });
  }
};
let items = [
  obj,
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const self = this;
      if (this._didSubmitForm) {
        self._clearFormState();
        self._didSubmitForm = false;
      } else {
        self._saveFormState();
      }
      if (self._themeListener) {
        const _themeListener = self._themeListener;
        _themeListener.remove();
      }
    }
  },
  {
    key: "render",
    value: function render() {
      let createElement;
      let createElement2;
      let createElement3;
      let createElement4;
      let createElement5;
      let createElement6;
      let description;
      let email;
      let name;
      let props;
      let props2;
      let self = this;
      self = this;
      let obj = onCancel(props2[13]);
      const onFormClose = this.props.onFormClose;
      ({ props, props: props2 } = this);
      const theme = obj.getTheme();
      ({ name, email, description } = this.state);
      const merged = Object.assign(Object.assign({}, onFormClose(props2[14])(theme)), this.props.styles);
      onCancel = function onCancel(arg0) {
        if (onFormClose) {
          tmp();
        } else {
          self.setState({ isVisible: false });
        }
      };
      if (this.state.isVisible) {
        let tmpResult = tmp(tmp2[15]);
        const capturedScreenshot = tmpResult.getCapturedScreenshot();
        if ("ErrorCapturingScreenshot" === capturedScreenshot) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => outer1_16(self, undefined, undefined, function*() {
            if (v0 === 2) {
              v0 = 3;
              HermesBuiltin.throwTypeError();
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw arg1;
              } else if (arg0 === 2) {
                let obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            } else {
              try {
                v0 = 2;
                if (arg0 === 1) {
                  v0 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  v0 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  obj = v0(outer1_2[7]);
                  obj.feedbackAlertDialog(outer1_2.errorTitle, outer1_2.captureScreenshotError);
                  v0 = 3;
                  return { value: "HermesInternal", done: "HermesInternal" };
                }
              } catch (tmp8) {
                v0 = tmp;
                throw tmp8;
              }
            }
          }), 100);
        } else if (capturedScreenshot) {
          const result = self._setCapturedScreenshot(capturedScreenshot);
        }
        let obj2 = importAllResult;
        tmpResult = tmp(tmp2[9]);
        let dismiss;
        if (tmpResult.notWeb()) {
          dismiss = dismiss.dismiss;
        }
        obj = { onPress: null, accessible: false, accessibilityElementsHidden: false };
        obj[0] = dismiss;
        obj = { style: null };
        obj[0] = merged.container;
        const obj1 = { style: null };
        obj1[0] = merged.titleContainer;
        obj2 = { style: null, testID: "sentry-feedback-form-title" };
        obj2[0] = merged.title;
        ({ createElement, createElement: createElement2 } = obj2);
        const element = <closure_10 style={null} testID="sentry-feedback-form-title">{props2.formTitle}</closure_10>;
        let showBranding = props.showBranding;
        if (showBranding) {
          const obj3 = { source: null, style: null, testID: "sentry-logo" };
          const obj4 = { uri: null };
          obj4[0] = tmp(tmp2[16]).sentryLogo;
          obj3[0] = obj4;
          obj3[1] = merged.sentryLogo;
          showBranding = <closure_8 source={null} style={null} testID="sentry-logo" />;
        }
        const element2 = createElement2(tmp12, obj1, element, showBranding);
        let showName = props.showName;
        if (showName) {
          const Fragment = obj2.Fragment;
          const obj5 = { style: null };
          obj5[0] = merged.label;
          const nameLabel = props2.nameLabel;
          let isNameRequired = props.isNameRequired;
          ({ createElement: createElement3, createElement: createElement4 } = obj2);
          if (isNameRequired) {
            const _HermesInternal = HermesInternal;
            isNameRequired = " " + props2.isRequiredLabel;
          }
          const obj6 = { style: null, testID: "sentry-feedback-name-input", placeholder: null, value: null, onChangeText: null };
          obj6[0] = merged.input;
          obj6[2] = props2.namePlaceholder;
          obj6[3] = name;
          obj6[4] = function onChangeText(name) {
            return self.setState({ name });
          };
          const element4 = createElement4(tmp13, obj5, nameLabel, isNameRequired);
          showName = createElement3(Fragment, null, element4, <closure_11 style={null} testID="sentry-feedback-name-input" placeholder={null} value={null} onChangeText={null} />);
        }
        let showEmail = props.showEmail;
        if (showEmail) {
          const Fragment2 = obj2.Fragment;
          const obj7 = { style: null };
          obj7[0] = merged.label;
          const emailLabel = props2.emailLabel;
          let isEmailRequired = props.isEmailRequired;
          ({ createElement: createElement5, createElement: createElement6 } = obj2);
          if (isEmailRequired) {
            const _HermesInternal2 = HermesInternal;
            isEmailRequired = " " + props2.isRequiredLabel;
          }
          const obj8 = { style: null, testID: "sentry-feedback-email-input", placeholder: null, keyboardType: "email-address", value: null, onChangeText: null };
          obj8[0] = merged.input;
          obj8[2] = props2.emailPlaceholder;
          obj8[4] = email;
          obj8[5] = function onChangeText(email) {
            return self.setState({ email });
          };
          const element6 = createElement6(tmp13, obj7, emailLabel, isEmailRequired);
          showEmail = createElement5(Fragment2, null, element6, <closure_11 style={null} testID="sentry-feedback-email-input" placeholder={null} keyboardType="email-address" value={null} onChangeText={null} />);
        }
        const obj9 = { style: null };
        obj9[0] = merged.label;
        const _HermesInternal3 = HermesInternal;
        const element1 = <tmp13 style={null}>{props2.messageLabel}{" " + props2.isRequiredLabel}</tmp13>;
        const obj10 = { style: null, testID: "sentry-feedback-message-input", placeholder: null, value: null, onChangeText: null, multiline: true };
        const items = [, ];
        ({ input: arr[0], textArea: arr[1] } = merged);
        obj10[0] = items;
        obj10[2] = props2.messagePlaceholder;
        obj10[3] = description;
        obj10[4] = function onChangeText(description) {
          return self.setState({ description });
        };
        const element3 = <closure_11 style={null} testID="sentry-feedback-message-input" placeholder={null} value={null} onChangeText={null} multiline />;
        const tmp48 = props.enableScreenshot || this.props.imagePicker || self._hasScreenshot();
        if (!tmp48) {
          let element5 = tmp(tmp2[9]).notWeb() && props.enableTakeScreenshot && !self.state.attachmentUri;
          if (element5) {
            const obj11 = { style: null, onPress: null };
            obj11[0] = merged.takeScreenshotButton;
            obj11[1] = function onPress() {
              onCancel(props2[17]).hideFeedbackButton();
              if (typeof onCancel !== "function") {
                HermesBuiltin.throwTypeError();
              }
              if (onFormClose) {
                onFormClose();
              } else {
                self.setState({ isVisible: false });
              }
              const obj = onCancel(props2[17]);
              const tmp = onCancel;
              const tmp2 = props2;
              onCancel(props2[17]).showScreenshotButton();
            };
            const obj12 = { style: null, testID: "sentry-feedback-take-screenshot-button" };
            obj12[0] = merged.takeScreenshotText;
            element5 = <closure_12 style={null} onPress={null}><tmp13 style={null} testID="sentry-feedback-take-screenshot-button">{props2.captureScreenshotButtonLabel}</tmp13></closure_12>;
          }
          const obj13 = { style: null, onPress: null };
          obj13[0] = merged.submitButton;
          obj13[1] = self.handleFeedbackSubmit;
          const obj14 = { style: null, testID: "sentry-feedback-submit-button" };
          obj14[0] = merged.submitText;
          const obj15 = { style: null, onPress: null };
          obj15[0] = merged.cancelButton;
          obj15[1] = onCancel;
          const obj16 = { style: null };
          obj16[0] = merged.cancelText;
          const element7 = <closure_12 style={null} onPress={null}><tmp13 style={null} testID="sentry-feedback-submit-button">{props2.submitButtonLabel}</tmp13></closure_12>;
          return <tmp9 {......obj}><tmp12 {......obj}>{element2}{showName}{showEmail}{element1}{element3}{tmp48}{element5}{element7}<closure_12 style={null} onPress={null}><tmp13 style={null}>{props2.cancelButtonLabel}</tmp13></closure_12></tmp12></tmp9>;
        } else {
          const obj17 = { style: null };
          obj17[0] = merged.screenshotContainer;
          let attachmentUri = self.state.attachmentUri;
          if (attachmentUri) {
            const obj18 = { source: null, style: null };
            const obj19 = { uri: null };
            obj19[0] = self.state.attachmentUri;
            obj18[0] = obj19;
            obj18[1] = merged.screenshotThumbnail;
            attachmentUri = <closure_8 source={null} style={null} />;
          }
          const obj20 = { style: null, onPress: null };
          obj20[0] = merged.screenshotButton;
          obj20[1] = self.onScreenshotButtonPress;
          const obj21 = { style: null };
          obj21[0] = merged.screenshotText;
          const element8 = <tmp12 style={null}>{attachmentUri}<closure_12 style={null} onPress={null}><tmp13 style={null}>{self._hasScreenshot() ? props2.removeScreenshotButtonLabel : props2.addScreenshotButtonLabel}</tmp13></closure_12></tmp12>;
          const tmp50 = closure_12;
        }
        const tmp9 = closure_13;
      } else {
        return null;
      }
    }
  }
];
obj = {
  key: "reset",
  value: function reset() {
    FeedbackWidget._savedState = { name: "", email: "", description: "", filename: "Boolean", attachment: "disabled", attachmentUri: "isArray" };
  }
};
const items1 = [obj];
const importDefaultResultResult = importDefaultResult(FeedbackWidget, items, items1);
importDefaultResultResult.defaultProps = require("module_1201").defaultConfiguration;
importDefaultResultResult._savedState = { name: "", email: "", description: "", filename: "Boolean", attachment: "disabled", attachmentUri: "isArray" };

export const FeedbackWidget = importDefaultResultResult;