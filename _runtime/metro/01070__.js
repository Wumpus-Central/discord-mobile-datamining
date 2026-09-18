// === Module 1070: ? ===

// Module 1070
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const FeedbackWidget = fn;
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
    return new _Promise((fn, arg1) => {
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
          let tmp1 = done.value;
          closure_0 = tmp1;
          if (!(tmp1 instanceof Promise)) {
            tmp1 = new tmp((fn) => {
              fn(value);
            });
          }
          tmp1.then(fulfilled, iter);
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
        let tmp32 = value;
        if (!(value instanceof fulfilled)) {
          tmp32 = new tmp3((fn) => {
            fn(value);
          });
        }
        tmp32.then(fulfilled, rejected);
      }
    });
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
      ({ name, email, description } = state.state);
      const props = state.props;
      ({ onSubmitError, onFormSubmitted } = props);
      const props2 = state.props;
      if (null != name) {
        const trimmed = name.trim();
      }
      if (null != email) {
        const trimmed1 = email.trim();
      }
      if (null != description) {
        const trimmed2 = description.trim();
      }
      if (!state.props.isNameRequired) {
        if (!state.props.isEmailRequired) {
          if (trimmed2) {
            if (state.props.shouldValidateEmail) {
              if (state.props.isEmailRequired) {
                if (!obj3.isValidEmail(trimmed1)) {
                  state(1061).feedbackAlertDialog(props2.errorTitle, props2.emailError);
                  const obj4 = state(1061);
                }
                obj3 = state(1061);
              }
            }
            if (state.state.filename) {
              if (state.state.attachment) {
                const obj5 = { filename: state.state.filename, data: state.state.attachment };
                const items = [obj5];
              }
            }
            const obj6 = { message: trimmed2, name: trimmed, email: trimmed1, associatedEventId: state(682).lastEventId() };
            try {
              if (!onFormSubmitted) {
                state.setState({ isVisible: false });
              }
              let tmp19;
              if (tmp13) {
                const obj9 = { attachments: tmp13 };
                tmp19 = obj9;
              }
              state(682).captureFeedback(obj6, tmp19);
              const obj10 = { name: trimmed, email: trimmed1, message: trimmed2, attachments: tmp13 };
              tmp4(obj10);
              const obj8 = state(682);
              state(1061).feedbackAlertDialog(props2.successMessageText, "");
              onFormSubmitted();
              state._didSubmitForm = true;
              const obj11 = state(1061);
            } catch (tmp26) {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const error = new Error("Feedback form submission failed: " + tmp26);
              tmp3(error);
              state(1061).feedbackAlertDialog(tmp2.errorTitle, tmp2.genericError);
              const debug = state(682).debug;
              const _HermesInternal2 = HermesInternal;
              debug.error("Feedback form submission failed: " + tmp26);
              const obj12 = state(1061);
            }
            const obj7 = state(682);
          }
        }
      }
      state(1061).feedbackAlertDialog(props2.errorTitle, props2.formError);
      const obj2 = state(1061);
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
            const obj3 = { value, done: true };
            return obj3;
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
                const obj4 = { value, done: true };
                return obj4;
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
                  debug.setState({ filename: "isArray", attachment: "accessible", attachmentUri: "ty" });
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
                      const obj5 = { value: fn(), done: false };
                      return obj5;
                    } else {
                      const debug2 = closure_2_0(682).debug;
                      debug2.warn("No compatible image picker library found. Please provide a valid image picker library.");
                      c5 = 3;
                      const obj6 = { value: undefined, done: true };
                      return obj6;
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
              const obj7 = { value, done: true };
              return obj7;
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
                      let dataFromUri = closure_2_0(866).getDataFromUri(closure_129_0);
                      let obj = closure_2_0(866);
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
                  base64ToUint8ArrayResult = closure_2_0(1061).base64ToUint8Array(closure_129_10);
                  let obj2 = closure_2_0(1061);
                }
                tmp54 = closure_1;
                closure_129_11 = base64ToUint8ArrayResult;
                if (closure_129_11) {
                  debug = state;
                  const obj8 = { filename: closure_129_8, attachment: closure_129_11, attachmentUri: null };
                  tmp54 = closure_129_9;
                  obj8.attachmentUri = closure_129_9;
                  state.setState(obj8);
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
      FeedbackWidget._savedState = Object.assign({}, state.state);
    };
    tmp4Result._clearFormState = () => {
      closure_0._savedState = { name: "", email: "", description: "", filename: "ip", attachment: "isArray", attachmentUri: "isArray" };
    };
    tmp4Result._hasScreenshot = () => undefined !== state.state.filename && undefined !== state.state.attachment && undefined !== state.state.attachmentUri;
    tmp4Result._getUser = () => {
      const currentScope = state(682).getCurrentScope();
      const user = currentScope.getUser();
      if (user) {
        return user;
      } else {
        const isolationScope = state(682).getIsolationScope();
        let user1 = isolationScope.getUser();
        if (!user1) {
          const globalScope = state(682).getGlobalScope();
          user1 = globalScope.getUser();
          const tmpResult2 = state(682);
        }
        return user1;
      }
      const obj = state(682);
    };
    tmp4Result._showImageRetrievalDevelopmentNote = () => {
      if (obj.isExpoGo()) {
        state(1061).feedbackAlertDialog("Development note", "The feedback widget cannot retrieve image data in Expo Go. Please build your app to test this functionality.");
        const tmpResult = state(1061);
      }
      obj = state(867);
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
    obj1 = { isVisible: true, name: tmp13, email: tmp._savedState.email || str, description: tmp._savedState.description || "", filename: tmp._savedState.filename || undefined, attachment: tmp._savedState.attachment || undefined, attachmentUri: tmp._savedState.attachmentUri || undefined };
    tmp4Result.state = obj1;
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
      const onFormClose = this.props.onFormClose;
      ({ props, props: props2 } = this);
      const theme = onCancel(props2[13]).getTheme();
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
        const capturedScreenshot = tmp(props2[15]).getCapturedScreenshot();
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
                const obj2 = { value, done: true };
                return obj2;
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
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  v3(closure_1_2[7]).feedbackAlertDialog(props2.errorTitle, props2.captureScreenshotError);
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
        let tmpResult = tmp(props2[15]);
        dismiss = undefined;
        if (tmpResult3.notWeb()) {
          dismiss = dismiss.dismiss;
        }
        let obj2 = { onPress: dismiss, accessible: false, accessibilityElementsHidden: false };
        const obj4 = { style: merged.container };
        const obj5 = { style: merged.titleContainer };
        const obj6 = { style: merged.title, testID: "sentry-feedback-form-title" };
        ({ createElement, createElement: createElement2 } = noop);
        const element = <closure_10 style={merged.title} testID="sentry-feedback-form-title">{props2.formTitle}</closure_10>;
        let showBranding = props.showBranding;
        if (showBranding) {
          const obj7 = { source: null, style: null, testID: "sentry-logo" };
          const obj8 = { uri: tmp(props2[16]).sentryLogo };
          obj7.source = obj8;
          obj7.style = merged.sentryLogo;
          showBranding = <closure_8 source={null} style={null} testID="sentry-logo" />;
        }
        const element2 = createElement2(closure_14, obj5, element, showBranding);
        let showName = props.showName;
        if (showName) {
          const Fragment = noop.Fragment;
          const obj9 = { style: merged.label };
          const nameLabel = props2.nameLabel;
          let isNameRequired = props.isNameRequired;
          ({ createElement: createElement3, createElement: createElement4 } = noop);
          if (isNameRequired) {
            const _HermesInternal = HermesInternal;
            isNameRequired = " " + props2.isRequiredLabel;
          }
          const obj10 = {
            style: merged.input,
            testID: "sentry-feedback-name-input",
            placeholder: props2.namePlaceholder,
            value: name,
            onChangeText(name) {
                  return self.setState({ name });
                }
          };
          const element4 = createElement4(closure_10, obj9, nameLabel, isNameRequired);
          showName = createElement3(Fragment, null, element4, <closure_11 style={merged.input} testID="sentry-feedback-name-input" placeholder={props2.namePlaceholder} value={name} onChangeText={function onChangeText(name) {
            return self.setState({ name });
          }} />);
        }
        let showEmail = props.showEmail;
        if (showEmail) {
          const Fragment2 = noop.Fragment;
          const obj11 = { style: merged.label };
          const emailLabel = props2.emailLabel;
          let isEmailRequired = props.isEmailRequired;
          ({ createElement: createElement5, createElement: createElement6 } = noop);
          if (isEmailRequired) {
            const _HermesInternal2 = HermesInternal;
            isEmailRequired = " " + props2.isRequiredLabel;
          }
          const obj12 = {
            style: merged.input,
            testID: "sentry-feedback-email-input",
            placeholder: props2.emailPlaceholder,
            keyboardType: "email-address",
            value: email,
            onChangeText(email) {
                  return self.setState({ email });
                }
          };
          const element6 = createElement6(closure_10, obj11, emailLabel, isEmailRequired);
          showEmail = createElement5(Fragment2, null, element6, <closure_11 style={merged.input} testID="sentry-feedback-email-input" placeholder={props2.emailPlaceholder} keyboardType="email-address" value={email} onChangeText={function onChangeText(email) {
            return self.setState({ email });
          }} />);
        }
        const obj13 = { style: merged.label };
        const _HermesInternal3 = HermesInternal;
        const element1 = <closure_10 style={merged.label}>{props2.messageLabel}{" " + props2.isRequiredLabel}</closure_10>;
        const obj14 = { style: null, testID: "sentry-feedback-message-input", placeholder: null, value: null, onChangeText: null, multiline: true };
        const items = [, ];
        ({ input: arr[0], textArea: arr[1] } = merged);
        obj14.style = items;
        obj14.placeholder = props2.messagePlaceholder;
        obj14.value = description;
        obj14.onChangeText = function onChangeText(description) {
          return self.setState({ description });
        };
        const element3 = <closure_11 style={null} testID="sentry-feedback-message-input" placeholder={null} value={null} onChangeText={null} multiline />;
        const tmp48 = props.enableScreenshot || this.props.imagePicker || self._hasScreenshot();
        if (!tmp48) {
          let element5 = tmp(props2[9]).notWeb() && props.enableTakeScreenshot && !self.state.attachmentUri;
          if (element5) {
            const obj15 = {
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
            const obj16 = { style: merged.takeScreenshotText, testID: "sentry-feedback-take-screenshot-button" };
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
          const obj17 = { style: merged.submitButton, onPress: self.handleFeedbackSubmit };
          const obj18 = { style: merged.submitText, testID: "sentry-feedback-submit-button" };
          const obj19 = { style: merged.cancelButton, onPress: onCancel };
          const obj20 = { style: merged.cancelText };
          const element7 = <closure_12 style={merged.submitButton} onPress={self.handleFeedbackSubmit}><closure_10 style={merged.submitText} testID="sentry-feedback-submit-button">{props2.submitButtonLabel}</closure_10></closure_12>;
          return <closure_13 {......obj2}><closure_14 {......obj4}>{element2}{showName}{showEmail}{element1}{element3}{tmp48}{element5}{element7}<closure_12 style={merged.cancelButton} onPress={onCancel}><closure_10 style={merged.cancelText}>{props2.cancelButtonLabel}</closure_10></closure_12></closure_14></closure_13>;
        } else {
          const obj21 = { style: merged.screenshotContainer };
          let attachmentUri = self.state.attachmentUri;
          if (attachmentUri) {
            const obj22 = { source: null, style: null };
            const obj23 = { uri: self.state.attachmentUri };
            obj22.source = obj23;
            obj22.style = merged.screenshotThumbnail;
            attachmentUri = <closure_8 source={null} style={null} />;
          }
          const obj24 = { style: merged.screenshotButton, onPress: self.onScreenshotButtonPress };
          const obj25 = { style: merged.screenshotText };
          const element8 = <closure_14 style={merged.screenshotContainer}>{attachmentUri}<closure_12 style={merged.screenshotButton} onPress={self.onScreenshotButtonPress}><closure_10 style={merged.screenshotText}>{self._hasScreenshot() ? props2.removeScreenshotButtonLabel : props2.addScreenshotButtonLabel}</closure_10></closure_12></closure_14>;
        }
        tmpResult3 = tmp(props2[9]);
      } else {
        return null;
      }
      let obj = onCancel(props2[13]);
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