// _runtime/metro/01070__.js
import _possibleConstructorReturnDefault from "00093__possibleConstructorReturn.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

let FeedbackWidget = fn;
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
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
_possibleConstructorReturnDefault;
get_ActivityIndicator = fn(17);
({ Appearance: closure_7, Image: closure_8, Keyboard: closure_9, Text: c10, TextInput: closure_11, TouchableOpacity: closure_12, TouchableWithoutFeedback: map1, View: closure_14 } = get_ActivityIndicator);
fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    let _Promise = arg2;
    closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((fn, arg1) => {
      closure_0 = fn;
      closure_1 = arg1;
      function fulfilled(result) {
        try {
          step(iter.next(result));
        } catch (tmp5) {
          closure_1(tmp5);
        }
      }
      function rejected(arg0) {
        try {
          step(iter.throw(arg0));
        } catch (tmp5) {
          closure_1(tmp5);
        }
      }
      let iter = rejected;
      function step(done) {
        if (done.done) {
          closure_0(done.value);
        } else {
          let tmp = done.value;
          closure_0 = tmp;
          if (!(tmp instanceof Promise)) {
            tmp = new tmp((fn) => {
              fn(value);
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
      value = iter2.value;
      if (iter2.done) {
        fn(value);
      } else {
        closure_0 = value;
        let tmp3 = value;
        if (!(value instanceof fulfilled)) {
          tmp3 = new tmp3((fn) => {
            fn(value);
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
    tmp = closure_0;
    tmp2 = closure_3(this, closure_0);
    items = [];
    items[0] = global;
    tmp3 = closure_5;
    obj = closure_5(closure_0);
    tmp4 = closure_4;
    if (_isNativeReflectConstruct()) {
      tmp6 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp3(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp4Result = tmp4(self, constructResult);
    closure_0 = tmp4Result;
    tmp4Result._didSubmitForm = false;
    tmp4Result.handleFeedbackSubmit = () => {
      let obj = closure_0;
      ({ name, email, description } = closure_0.state);
      const props = closure_0.props;
      ({ onSubmitError, onFormSubmitted } = props);
      const props2 = closure_0.props;
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
                let obj2 = closure_0(1061);
                if (!obj2.isValidEmail(trimmed1)) {
                  closure_0(1061).feedbackAlertDialog(props2.errorTitle, props2.emailError);
                  const obj4 = closure_0(1061);
                }
              }
            }
            if (obj.state.filename) {
              if (obj.state.attachment) {
                obj = { filename: null, data: null };
                obj.filename = obj.state.filename;
                obj.data = obj.state.attachment;
                const items = [obj];
              }
            }
            obj = { message: trimmed2, name: trimmed, email: trimmed1, associatedEventId: closure_0(682).lastEventId() };
            try {
              if (!onFormSubmitted) {
                obj.setState({ isVisible: false });
              }
              let tmp19;
              if (tmp13) {
                let obj1 = { attachments: tmp13 };
                tmp19 = obj1;
              }
              closure_0(682).captureFeedback(obj, tmp19);
              obj2 = { name: trimmed, email: trimmed1, message: trimmed2, attachments: tmp13 };
              tmp4(obj2);
              const obj8 = closure_0(682);
              closure_0(1061).feedbackAlertDialog(props2.successMessageText, "");
              onFormSubmitted();
              obj._didSubmitForm = true;
              const obj11 = closure_0(1061);
            } catch (tmp26) {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const error = new Error("Feedback form submission failed: " + tmp26);
              tmp3(error);
              closure_0(1061).feedbackAlertDialog(tmp2.errorTitle, tmp2.genericError);
              const debug = closure_0(682).debug;
              const _HermesInternal2 = HermesInternal;
              debug.error("Feedback form submission failed: " + tmp26);
              const obj12 = closure_0(1061);
            }
            const obj7 = closure_0(682);
          }
        }
      }
      obj1 = closure_0(1061);
      obj1.feedbackAlertDialog(props2.errorTitle, props2.formError);
    };
    tmp4Result.onScreenshotButtonPress = () => value(closure_0, undefined, undefined, function() {
      const self = this;
      c4 = 0;
      c5 = 0;
      return (function*(arg0) {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj = { value, done: true };
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c5 = 2;
            num2 = 0;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                let debug = self;
                state = self;
                closure_1 = tmp2;
                closure_129_13 = self;
                closure_129_1 = undefined;
                closure_129_2 = undefined;
                closure_129_3 = undefined;
                closure_129_4 = undefined;
                closure_129_5 = undefined;
                closure_129_6 = undefined;
                closure_129_7 = undefined;
                closure_129_8 = undefined;
                closure_129_9 = undefined;
                closure_129_10 = undefined;
                closure_129_11 = undefined;
                closure_129_12 = undefined;
                closure_129_0 = undefined;
                if (self._hasScreenshot()) {
                  debug.setState({ filename: "Array", attachment: "call", attachmentUri: "o" });
                } else {
                  num2 = debug.props.imagePicker;
                  closure_129_6 = num2;
                  if (num2) {
                    if (num2.launchImageLibraryAsync) {
                      fn = () => {
                        const launchImageLibraryAsync = closure_1_6.launchImageLibraryAsync;
                        if (null !== launchImageLibraryAsync) {
                          if (undefined !== launchImageLibraryAsync) {
                            const call = launchImageLibraryAsync.call;
                            const obj = { mediaTypes: ["images"], base64: self(num2[9]).isWeb() };
                            typeof call === "unknown" ? launchImageLibraryAsync(obj) : call(closure_1_6, obj);
                            const obj2 = self(num2[9]);
                          }
                        }
                      };
                    } else {
                      fn = null;
                      if (num2.launchImageLibrary) {
                        fn = () => {
                          const launchImageLibrary = closure_1_6.launchImageLibrary;
                          if (null !== launchImageLibrary) {
                            if (undefined !== launchImageLibrary) {
                              const call = launchImageLibrary.call;
                              const obj = { mediaType: "photo", includeBase64: self(num2[9]).isWeb() };
                              typeof call === "unknown" ? launchImageLibrary(obj) : call(closure_1_6, obj);
                              const obj2 = self(num2[9]);
                            }
                          }
                        };
                      }
                    }
                    if (fn) {
                      c4 = 1;
                      c5 = 1;
                      let obj1 = { value: fn(), done: false };
                      return obj1;
                    } else {
                      const debug2 = closure_2_0(682).debug;
                      debug2.warn("No compatible image picker library found. Please provide a valid image picker library.");
                      c5 = 3;
                      let obj2 = { value: undefined, done: true };
                      return obj2;
                    }
                  } else {
                    const _Object = Object;
                    const _Object2 = Object;
                    Object.assign(Object.assign({}, closure_2_0(1066).defaultConfiguration), debug.props).onAddScreenshot((attachmentUri) => {
                      const dataFromUri = attachmentUri(num2[10]).getDataFromUri(attachmentUri);
                      let obj = attachmentUri(num2[10]);
                      dataFromUri.then((attachment) => {
                        if (null != attachment) {
                          const obj = { filename: "feedback_screenshot", attachment, attachmentUri };
                          closure_2_13.setState(obj);
                        } else {
                          const result = closure_2_13._showImageRetrievalDevelopmentNote();
                          const debug = self(num2[8]).debug;
                          debug.error("Failed to read image data from uri:", attachmentUri);
                        }
                      }).catch((error) => {
                        const result = closure_2_13._showImageRetrievalDevelopmentNote();
                        const debug = self(num2[8]).debug;
                        debug.error("Failed to read image data from uri:", closure_0, "error: ", error);
                      });
                    });
                  }
                }
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_129_7 = value;
              let tmp54 = null;
              let assets;
              if (null != closure_129_7) {
                assets = closure_129_7.assets;
              }
              if (assets) {
                if (closure_129_7.assets.length > num2) {
                  num2 = closure_129_7.assets[0];
                  if (!obj9.isWeb()) {
                    closure_129_4 = num2;
                    let fileName;
                    if (tmp54 !== num2) {
                      if (debug !== closure_129_4) {
                        fileName = closure_129_4.fileName;
                      }
                    }
                    closure_129_12 = fileName;
                    const first = closure_129_7.assets[0];
                    closure_129_5 = first;
                    let uri;
                    if (tmp54 !== first) {
                      if (debug !== closure_129_5) {
                        uri = closure_129_5.uri;
                      }
                    }
                    closure_129_0 = uri;
                    if (closure_129_0) {
                      obj = closure_2_0(866);
                      let dataFromUri = obj.getDataFromUri(closure_129_0);
                      dataFromUri.then((attachment) => {
                        if (null != attachment) {
                          const obj = { filename, attachment, attachmentUri };
                          closure_1_13.setState(obj);
                        } else {
                          const result = closure_1_13._showImageRetrievalDevelopmentNote();
                          const debug = self(num2[8]).debug;
                          debug.error("Failed to read image data from uri:", attachmentUri);
                        }
                      }).catch((error) => {
                        const result = closure_1_13._showImageRetrievalDevelopmentNote();
                        const debug = self(num2[8]).debug;
                        debug.error("Failed to read image data from uri:", attachmentUri, "error: ", error);
                      });
                      const nextPromise = dataFromUri.then((attachment) => {
                        if (null != attachment) {
                          const obj = { filename, attachment, attachmentUri };
                          closure_1_13.setState(obj);
                        } else {
                          const result = closure_1_13._showImageRetrievalDevelopmentNote();
                          const debug = self(num2[8]).debug;
                          debug.error("Failed to read image data from uri:", attachmentUri);
                        }
                      });
                    }
                  }
                  obj9 = closure_2_0(867);
                }
                closure_129_1 = num2;
                let fileName1;
                if (tmp54 !== num2) {
                  if (debug !== closure_129_1) {
                    fileName1 = closure_129_1.fileName;
                  }
                }
                closure_129_8 = fileName1;
                const first1 = closure_129_7.assets[0];
                closure_129_2 = first1;
                let uri1;
                if (tmp54 !== first1) {
                  if (debug !== closure_129_2) {
                    uri1 = closure_129_2.uri;
                  }
                }
                closure_129_9 = uri1;
                const first2 = closure_129_7.assets[0];
                closure_129_3 = first2;
                let base64;
                if (tmp54 !== first2) {
                  if (debug !== closure_129_3) {
                    base64 = closure_129_3.base64;
                  }
                }
                closure_129_10 = base64;
                let base64ToUint8ArrayResult;
                if (closure_129_10) {
                  obj1 = closure_2_0(1061);
                  base64ToUint8ArrayResult = obj1.base64ToUint8Array(closure_129_10);
                }
                tmp54 = closure_1;
                closure_129_11 = base64ToUint8ArrayResult;
                if (closure_129_11) {
                  debug = state;
                  const obj4 = { filename: closure_129_8, attachment: closure_129_11, attachmentUri: null };
                  tmp54 = closure_129_9;
                  obj4.attachmentUri = closure_129_9;
                  state.setState(obj4);
                } else {
                  debug = closure_2_0(682).debug;
                  debug.error("Failed to read image data on the web");
                }
              }
            }
            c5 = 3;
          } catch (tmp71) {
            c5 = tmp;
            throw tmp71;
          }
        }
      })();
    });
    tmp4Result._setCapturedScreenshot = (data) => {
      if (null != data.data) {
        const debug2 = FeedbackWidget(682).debug;
        debug2.log("Setting captured screenshot:", data.filename);
        const NATIVE = FeedbackWidget(866).NATIVE;
        const encodeToBase64Result = NATIVE.encodeToBase64(data.data);
        NATIVE.encodeToBase64(data.data).then((result) => {
          if (null != result) {
            const _HermesInternal = HermesInternal;
            const obj = { filename: null, attachment: null, attachmentUri: null };
            ({ filename: obj.filename, data: obj.attachment } = data);
            obj.attachmentUri = "data:" + data.contentType + ";base64," + result;
            data.setState(obj);
          } else {
            const debug = data(682).debug;
            debug.error("Failed to read image data from:", data.filename);
          }
        }).catch((error) => {
          const debug = data(682).debug;
          debug.error("Failed to read image data from:", data.filename, "error: ", error);
        });
        const nextPromise = NATIVE.encodeToBase64(data.data).then((result) => {
          if (null != result) {
            const _HermesInternal = HermesInternal;
            const obj = { filename: null, attachment: null, attachmentUri: null };
            ({ filename: obj.filename, data: obj.attachment } = data);
            obj.attachmentUri = "data:" + data.contentType + ";base64," + result;
            data.setState(obj);
          } else {
            const debug = data(682).debug;
            debug.error("Failed to read image data from:", data.filename);
          }
        });
      } else {
        let debug = FeedbackWidget(682).debug;
        debug.error("Failed to read image data from:", data.filename);
      }
    };
    tmp4Result._saveFormState = () => {
      FeedbackWidget._savedState = Object.assign({}, closure_0.state);
    };
    tmp4Result._clearFormState = () => {
      closure_0._savedState = { name: "", email: "", description: "", filename: "ip", attachment: "isArray", attachmentUri: "isArray" };
    };
    tmp4Result._hasScreenshot = () => undefined !== closure_0.state.filename && undefined !== closure_0.state.attachment && undefined !== closure_0.state.attachmentUri;
    tmp4Result._getUser = () => {
      const currentScope = closure_0(682).getCurrentScope();
      const user = currentScope.getUser();
      if (user) {
        return user;
      } else {
        let tmpResult = closure_0(682);
        const isolationScope = tmpResult.getIsolationScope();
        let user1 = isolationScope.getUser();
        if (!user1) {
          tmpResult = closure_0(682);
          const globalScope = tmpResult.getGlobalScope();
          user1 = globalScope.getUser();
        }
        return user1;
      }
      const obj = closure_0(682);
    };
    tmp4Result._showImageRetrievalDevelopmentNote = () => {
      if (obj.isExpoGo()) {
        closure_0(1061).feedbackAlertDialog("Development note", "The feedback widget cannot retrieve image data in Expo Go. Please build your app to test this functionality.");
        const tmpResult = closure_0(1061);
      }
      obj = closure_0(867);
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
    obj = { isVisible: true, name: tmp13, email: tmp._savedState.email || str, description: tmp._savedState.description || "", filename: tmp._savedState.filename || undefined, attachment: tmp._savedState.attachment || undefined, attachmentUri: tmp._savedState.attachmentUri || undefined };
    tmp4Result.state = obj;
    obj4 = FeedbackWidget(closure_2[12]);
    result = obj4.lazyLoadFeedbackIntegration();
    return tmp4Result;
  }
}
_inherits(FeedbackWidget, noop.Component);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const self = this;
    this._themeListener = React5.addChangeListener(() => {
      self.forceUpdate();
    });
  }
};
let items = [
  entry,
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
      const self = this;
      let obj = onCancel(props2[13]);
      const onFormClose = this.props.onFormClose;
      ({ props, props: props2 } = this);
      const theme = obj.getTheme();
      ({ name, email, description } = this.state);
      const merged = Object.assign(Object.assign({}, onFormClose(props2[14])(theme)), this.props.styles);
      onCancel = function onCancel() {
        if (onFormClose) {
          tmp();
        } else {
          self.setState({ isVisible: false });
        }
      };
      if (this.state.isVisible) {
        let tmpResult = tmp(props2[15]);
        const capturedScreenshot = tmpResult.getCapturedScreenshot();
        if ("ErrorCapturingScreenshot" === capturedScreenshot) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => fn(self, undefined, undefined, function*() {
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                let obj = { value, done: true };
                return obj;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                v3 = 2;
                if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  obj = v3(closure_1_2[7]);
                  obj.feedbackAlertDialog(props2.errorTitle, props2.captureScreenshotError);
                  v3 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp8) {
                v3 = tmp;
                throw tmp8;
              }
            }
          }), 100);
        } else if (capturedScreenshot) {
          const result = self._setCapturedScreenshot(capturedScreenshot);
        }
        let obj2 = noop;
        tmpResult = tmp(props2[9]);
        dismiss = undefined;
        if (tmpResult.notWeb()) {
          dismiss = dismiss.dismiss;
        }
        obj = { onPress: dismiss, accessible: false, accessibilityElementsHidden: false };
        obj = { style: merged.container };
        const obj1 = { style: merged.titleContainer };
        obj2 = { style: merged.title, testID: "sentry-feedback-form-title" };
        ({ createElement, createElement: createElement2 } = obj2);
        const element = <closure_10 style={merged.title} testID="sentry-feedback-form-title">{props2.formTitle}</closure_10>;
        let showBranding = props.showBranding;
        if (showBranding) {
          const obj3 = { source: null, style: null, testID: "sentry-logo" };
          const obj4 = { uri: tmp(props2[16]).sentryLogo };
          obj3.source = obj4;
          obj3.style = merged.sentryLogo;
          showBranding = <closure_8 source={null} style={null} testID="sentry-logo" />;
        }
        const element2 = createElement2(closure_14, obj1, element, showBranding);
        let showName = props.showName;
        if (showName) {
          const Fragment = obj2.Fragment;
          const obj5 = { style: merged.label };
          const nameLabel = props2.nameLabel;
          let isNameRequired = props.isNameRequired;
          ({ createElement: createElement3, createElement: createElement4 } = obj2);
          if (isNameRequired) {
            const _HermesInternal = HermesInternal;
            isNameRequired = " " + props2.isRequiredLabel;
          }
          const obj6 = {
            style: merged.input,
            testID: "sentry-feedback-name-input",
            placeholder: props2.namePlaceholder,
            value: name,
            onChangeText(name) {
                  return self.setState({ name });
                }
          };
          const element4 = createElement4(closure_10, obj5, nameLabel, isNameRequired);
          showName = createElement3(Fragment, null, element4, <closure_11 style={merged.input} testID="sentry-feedback-name-input" placeholder={props2.namePlaceholder} value={name} onChangeText={function onChangeText(name) {
            return self.setState({ name });
          }} />);
        }
        let showEmail = props.showEmail;
        if (showEmail) {
          const Fragment2 = obj2.Fragment;
          const obj7 = { style: merged.label };
          const emailLabel = props2.emailLabel;
          let isEmailRequired = props.isEmailRequired;
          ({ createElement: createElement5, createElement: createElement6 } = obj2);
          if (isEmailRequired) {
            const _HermesInternal2 = HermesInternal;
            isEmailRequired = " " + props2.isRequiredLabel;
          }
          const obj8 = {
            style: merged.input,
            testID: "sentry-feedback-email-input",
            placeholder: props2.emailPlaceholder,
            keyboardType: "email-address",
            value: email,
            onChangeText(email) {
                  return self.setState({ email });
                }
          };
          const element6 = createElement6(closure_10, obj7, emailLabel, isEmailRequired);
          showEmail = createElement5(Fragment2, null, element6, <closure_11 style={merged.input} testID="sentry-feedback-email-input" placeholder={props2.emailPlaceholder} keyboardType="email-address" value={email} onChangeText={function onChangeText(email) {
            return self.setState({ email });
          }} />);
        }
        const obj9 = { style: merged.label };
        const _HermesInternal3 = HermesInternal;
        const element1 = <closure_10 style={merged.label}>{props2.messageLabel}{" " + props2.isRequiredLabel}</closure_10>;
        const obj10 = { style: null, testID: "sentry-feedback-message-input", placeholder: null, value: null, onChangeText: null, multiline: true };
        const items = [, ];
        ({ input: arr[0], textArea: arr[1] } = merged);
        obj10.style = items;
        obj10.placeholder = props2.messagePlaceholder;
        obj10.value = description;
        obj10.onChangeText = function onChangeText(description) {
          return self.setState({ description });
        };
        const element3 = <closure_11 style={null} testID="sentry-feedback-message-input" placeholder={null} value={null} onChangeText={null} multiline />;
        const tmp48 = props.enableScreenshot || this.props.imagePicker || self._hasScreenshot();
        if (!tmp48) {
          let element5 = tmp(props2[9]).notWeb() && props.enableTakeScreenshot && !self.state.attachmentUri;
          if (element5) {
            const obj11 = {
              style: merged.takeScreenshotButton,
              onPress() {
                      FeedbackWidget(1062).hideFeedbackButton();
                      if (typeof onCancel === "function") {
                        if (onFormClose) {
                          onFormClose();
                        } else {
                          self.setState({ isVisible: false });
                        }
                        FeedbackWidget(1062).showScreenshotButton();
                        const tmpResult = FeedbackWidget(1062);
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                      const obj = FeedbackWidget(1062);
                    }
            };
            const obj12 = { style: merged.takeScreenshotText, testID: "sentry-feedback-take-screenshot-button" };
            element5 = <closure_12 style={merged.takeScreenshotButton} onPress={function onPress() {
              FeedbackWidget(1062).hideFeedbackButton();
              if (typeof onCancel === "function") {
                if (onFormClose) {
                  onFormClose();
                } else {
                  self.setState({ isVisible: false });
                }
                FeedbackWidget(1062).showScreenshotButton();
                const tmpResult = FeedbackWidget(1062);
              } else {
                throw new TypeError("Trying to call a non-function");
              }
              const obj = FeedbackWidget(1062);
            }}><closure_10 style={merged.takeScreenshotText} testID="sentry-feedback-take-screenshot-button">{props2.captureScreenshotButtonLabel}</closure_10></closure_12>;
          }
          const obj13 = { style: merged.submitButton, onPress: self.handleFeedbackSubmit };
          const obj14 = { style: merged.submitText, testID: "sentry-feedback-submit-button" };
          const obj15 = { style: merged.cancelButton, onPress: onCancel };
          const obj16 = { style: merged.cancelText };
          const element7 = <closure_12 style={merged.submitButton} onPress={self.handleFeedbackSubmit}><closure_10 style={merged.submitText} testID="sentry-feedback-submit-button">{props2.submitButtonLabel}</closure_10></closure_12>;
          return <closure_13 {......obj}><closure_14 {......obj}>{element2}{showName}{showEmail}{element1}{element3}{tmp48}{element5}{element7}<closure_12 style={merged.cancelButton} onPress={onCancel}><closure_10 style={merged.cancelText}>{props2.cancelButtonLabel}</closure_10></closure_12></closure_14></closure_13>;
        } else {
          const obj17 = { style: merged.screenshotContainer };
          let attachmentUri = self.state.attachmentUri;
          if (attachmentUri) {
            const obj18 = { source: null, style: null };
            const obj19 = { uri: self.state.attachmentUri };
            obj18.source = obj19;
            obj18.style = merged.screenshotThumbnail;
            attachmentUri = <closure_8 source={null} style={null} />;
          }
          const obj20 = { style: merged.screenshotButton, onPress: self.onScreenshotButtonPress };
          const obj21 = { style: merged.screenshotText };
          const element8 = <closure_14 style={merged.screenshotContainer}>{attachmentUri}<closure_12 style={merged.screenshotButton} onPress={self.onScreenshotButtonPress}><closure_10 style={merged.screenshotText}>{self._hasScreenshot() ? props2.removeScreenshotButtonLabel : props2.addScreenshotButtonLabel}</closure_10></closure_12></closure_14>;
        }
      } else {
        return null;
      }
    }
  }
];
const entry1 = {
  key: "reset",
  value: function reset() {
    FeedbackWidget._savedState = { name: "", email: "", description: "", filename: "ip", attachment: "isArray", attachmentUri: "isArray" };
  }
};
const items1 = [entry1];
const importDefaultResultResult = _createClass(FeedbackWidget, items, items1);
importDefaultResultResult.defaultProps = fn(1066).defaultConfiguration;
importDefaultResultResult._savedState = { name: "", email: "", description: "", filename: "ip", attachment: "isArray", attachmentUri: "isArray" };

export const FeedbackWidget = importDefaultResultResult;