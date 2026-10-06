// _runtime/01081_FeedbackWidget.js
import _possibleConstructorReturnDefault from "metro/00093__possibleConstructorReturn.js";
import _mod693 from "metro/00693__.js";
import _mod1072 from "metro/01072__.js";
import PULL_DOWN_CLOSE_THRESHOLD from "01073_PULL_DOWN_CLOSE_THRESHOLD.js";
import defaultConfiguration from "01077_defaultConfiguration.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";
import react from "00019_react.js";
import react_native from "00017_react-native.js";

let attachment, c2, dismiss;

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
_possibleConstructorReturnDefault;
({
  Appearance: metroImportDefault,
  Image: metroImportAll,
  Keyboard: c9,
  Text: c10,
  TextInput: unpackModuleId,
  TouchableOpacity: closure_12,
  TouchableWithoutFeedback: map1,
  View: closure_14,
} = react_native);
let closure_16 =
  (this && this.__awaiter) ||
  ((arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let _Promise = arg2;
    const Promise = arg2;
    let closure_3 = arg3;
    if (!arg2) {
      let tmp = globalThis;
      _Promise = Promise;
    }
    const _Promise1 = new _Promise(function (fn, arg1) {
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
          fn(done.value);
        } else {
          let tmp1 = done.value;
          const value = tmp1;
          if (!(tmp1 instanceof Promise)) {
            const self = this;
            const self2 = this;
            tmp1 = new tmp((fn) => {
              fn(value);
            });
          }
          tmp1.then(fulfilled, iter);
        }
      }
      let items = closure_1;
      const tmp = iter;
      const apply = iter.apply;
      const tmp2 = closure_0;
      if (!closure_1) {
        items = [];
      }
      iter = apply(tmp2, items);
      const iter2 = iter.next();
      let value = iter2.value;
      if (iter2.done) {
        const tmp5 = fn(value);
      } else {
        let tmp32 = value;
        if (!(value instanceof fulfilled)) {
          let self = this;
          let self2 = this;
          tmp32 = new tmp3((fn) => {
            fn(value);
          });
        }
        tmp32.then(fulfilled, rejected);
      }
    });
    return _Promise1;
  });
class FeedbackWidget {
  constructor(dependencyMap) {
    let constructResult;
    let state;
    let self = this;
    const tmp = state;
    _classCallCheck(this, state);
    let items = [dependencyMap];
    let obj = _getPrototypeOf(state);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp4Result = closure_1_4(self, constructResult);
    state = tmp4Result;
    tmp4Result._didSubmitForm = false;
    tmp4Result.handleFeedbackSubmit = function () {
      let description;
      let email;
      let name;
      let obj7;
      let onSubmitError;
      let onSubmitSuccess;
      let trimmed;
      let trimmed1;
      let trimmed2;
      ({ name, email, description } = state.state);
      const props = state.props;
      const onFormSubmitted = props.onFormSubmitted;
      const props2 = state.props;
      ({ onSubmitSuccess, onSubmitError } = props);
      if (null != name) {
        trimmed = name.trim();
      }
      if (null != email) {
        trimmed1 = email.trim();
      }
      if (null != description) {
        trimmed2 = description.trim();
      }
      if (!state.props.isNameRequired) {
        if (!state.props.isEmailRequired) {
          if (trimmed2) {
            if (state.props.shouldValidateEmail) {
              if (state.props.isEmailRequired) {
                const obj3 = _mod1072;
                if (!obj3.isValidEmail(trimmed1)) {
                  const obj4 = _mod1072;
                  obj4.feedbackAlertDialog(props2.errorTitle, props2.emailError);
                }
              }
            }
            if (state.state.filename) {
              if (state.state.attachment) {
                const items = [{ filename: state.state.filename, data: state.state.attachment }];
                const obj5 = { filename: state.state.filename, data: state.state.attachment };
              }
            }
            const obj6 = { message: trimmed2, name: trimmed, email: trimmed1, associatedEventId: obj7.lastEventId() };
            obj7 = _mod693;
            try {
              if (!onFormSubmitted) {
                state.setState({ isVisible: false });
              }
              let tmp16;
              const captureFeedback = _mod693.captureFeedback;
              _mod693;
              if (tmp9) {
                tmp16 = { attachments: tmp9 };
                const obj8 = { attachments: tmp9 };
              }
              captureFeedback(obj6, tmp16);
              const obj9 = { name: trimmed, email: trimmed1, message: trimmed2, attachments: tmp9 };
              onSubmitSuccess(obj9);
              const obj10 = _mod1072;
              obj10.feedbackAlertDialog(props2.successMessageText, "");
              onFormSubmitted();
              state._didSubmitForm = true;
            } catch (tmp23) {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error = new Error("Feedback form submission failed: " + tmp23);
              onSubmitError(error);
              const obj11 = _mod1072;
              obj11.feedbackAlertDialog(props2.errorTitle, props2.genericError);
              const debug = _mod693.debug;
              const _HermesInternal2 = HermesInternal;
              debug.error("Feedback form submission failed: " + tmp23);
            }
          }
        }
      }
      const obj2 = _mod1072;
      obj2.feedbackAlertDialog(props2.errorTitle, props2.formError);
    };
    tmp4Result.onScreenshotButtonPress = () =>
      closure_16(state, undefined, undefined, function () {
        const self = this;
        let c4 = 0;
        let c5 = 0;
        return (function* (arg0) {
          let attachmentUri;
          let filename;
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let first1;
              let first2;
              let first;
              let first3;
              let closure_7;
              let fileName;
              let uri;
              let base64;
              let uri1;
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  return { value, done: true };
                } else {
                  state = self;
                  c2 = 0;
                  closure_1 = tmp;
                  let closure_13 = self;
                  first1 = undefined;
                  first2 = undefined;
                  first = undefined;
                  first3 = undefined;
                  let imagePicker;
                  closure_7 = undefined;
                  fileName = undefined;
                  uri = undefined;
                  base64 = undefined;
                  attachment = undefined;
                  let fileName1;
                  uri1 = undefined;
                  if (self._hasScreenshot()) {
                    self.setState({
                      filename: "duration",
                      attachment: "toCharArray$esjava$1",
                      attachmentUri: "toCharArray$esjava$1",
                    });
                  } else {
                    imagePicker = self.props.imagePicker;
                    if (imagePicker) {
                      let fn;
                      if (imagePicker.launchImageLibraryAsync) {
                        fn = () => {
                          let obj2;
                          const launchImageLibraryAsync = imagePicker.launchImageLibraryAsync;
                          let callResult;
                          if (null !== launchImageLibraryAsync) {
                            if (undefined !== launchImageLibraryAsync) {
                              const call = launchImageLibraryAsync.call;
                              const obj = { mediaTypes: ["images"], base64: obj2.isWeb() };
                              obj2 = attachmentUri(closure_2_2[9]);
                              callResult = call(tmp, obj);
                            }
                          }
                          return callResult;
                        };
                      } else {
                        fn = null;
                        if (imagePicker.launchImageLibrary) {
                          fn = () => {
                            let obj2;
                            const launchImageLibrary = imagePicker.launchImageLibrary;
                            let callResult;
                            if (null !== launchImageLibrary) {
                              if (undefined !== launchImageLibrary) {
                                const call = launchImageLibrary.call;
                                const obj = { mediaType: "photo", includeBase64: obj2.isWeb() };
                                obj2 = attachmentUri(closure_2_2[9]);
                                callResult = call(tmp, obj);
                              }
                            }
                            return callResult;
                          };
                        }
                      }
                      if (fn) {
                        c4 = 1;
                        c5 = 1;
                        const obj5 = { value: fn(), done: false };
                        return obj5;
                      } else {
                        const debug2 = closure_2_0(closure_2_2[8]).debug;
                        debug2.warn(
                          "No compatible image picker library found. Please provide a valid image picker library.",
                        );
                        c5 = 3;
                        return { value: undefined, done: true };
                      }
                    } else {
                      const _Object = Object;
                      const _Object2 = Object;
                      Object.assign(
                        Object.assign({}, closure_2_0(closure_2_2[11]).defaultConfiguration),
                        self.props,
                      ).onAddScreenshot((attachmentUri) => {
                        let obj = uri1(first1[10]);
                        const dataFromUri = obj.getDataFromUri(attachmentUri);
                        const nextPromise = dataFromUri.then((attachment) => {
                          if (null != attachment) {
                            const obj = { filename: "feedback_screenshot", attachment, attachmentUri };
                            closure_13.setState(obj);
                          } else {
                            const result = closure_13._showImageRetrievalDevelopmentNote();
                            const debug = attachmentUri(closure_3_2[8]).debug;
                            debug.error("Failed to read image data from uri:", attachmentUri);
                          }
                        });
                        nextPromise.catch((error) => {
                          const result = closure_13._showImageRetrievalDevelopmentNote();
                          const debug = attachmentUri(closure_3_2[8]).debug;
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
                return { value, done: true };
              } else {
                closure_7 = value;
                let assets;
                if (null != closure_7) {
                  assets = closure_7.assets;
                }
                if (assets) {
                  if (closure_7.assets.length > 0) {
                    first = closure_7.assets[0];
                    const obj9 = closure_2_0(closure_2_2[9]);
                    if (obj9.isWeb()) {
                      fileName = undefined;
                      if (null !== first) {
                        if (undefined !== first) {
                          fileName = first.fileName;
                        }
                      }
                      first1 = closure_7.assets[0];
                      uri = undefined;
                      if (null !== first1) {
                        if (undefined !== first1) {
                          uri = first1.uri;
                        }
                      }
                      first2 = closure_7.assets[0];
                      base64 = undefined;
                      if (null !== first2) {
                        if (undefined !== first2) {
                          base64 = first2.base64;
                        }
                      }
                      let base64ToUint8ArrayResult;
                      if (base64) {
                        let obj2 = closure_2_0(closure_2_2[7]);
                        base64ToUint8ArrayResult = obj2.base64ToUint8Array(base64);
                      }
                      attachment = base64ToUint8ArrayResult;
                      const tmp54 = attachment;
                      if (tmp54) {
                        const obj8 = { filename: fileName, attachment, attachmentUri: uri };
                        state.setState(obj8);
                      } else {
                        let debug = closure_2_0(closure_2_2[8]).debug;
                        debug.error("Failed to read image data on the web");
                      }
                    } else {
                      fileName1 = undefined;
                      if (null !== first) {
                        if (undefined !== first) {
                          fileName1 = first.fileName;
                        }
                      }
                      first3 = closure_7.assets[0];
                      uri1 = undefined;
                      if (null !== first3) {
                        if (undefined !== first3) {
                          uri1 = first3.uri;
                        }
                      }
                      const tmp22 = uri1;
                      if (tmp22) {
                        let obj = closure_2_0(closure_2_2[10]);
                        let dataFromUri = obj.getDataFromUri(uri1);
                        let nextPromise = dataFromUri.then((attachment) => {
                          if (null != attachment) {
                            const obj = { filename, attachment, attachmentUri };
                            closure_1_13.setState(obj);
                          } else {
                            const result = closure_1_13._showImageRetrievalDevelopmentNote();
                            const debug = self(c2[8]).debug;
                            debug.error("Failed to read image data from uri:", attachmentUri);
                          }
                        });
                        nextPromise.catch((error) => {
                          const result = closure_1_13._showImageRetrievalDevelopmentNote();
                          const debug = self(c2[8]).debug;
                          debug.error("Failed to read image data from uri:", attachmentUri, "error: ", error);
                        });
                      }
                    }
                  }
                }
              }
              c5 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp72) {
              c5 = 3;
              throw tmp72;
            }
          }
        })();
      });
    tmp4Result._setCapturedScreenshot = (data) => {
      if (null != data.data) {
        const debug2 = FeedbackWidget(dependencyMap[8]).debug;
        debug2.log("Setting captured screenshot:", data.filename);
        const NATIVE = FeedbackWidget(dependencyMap[10]).NATIVE;
        const encodeToBase64Result = NATIVE.encodeToBase64(data.data);
        const nextPromise = encodeToBase64Result.then((result) => {
          if (null != result) {
            const _HermesInternal = HermesInternal;
            const obj = {
              filename: null,
              attachment: null,
              attachmentUri: "data:" + data.contentType + ";base64," + result,
            };
            ({ filename: obj.filename, data: obj.attachment } = data);
            data.setState(obj);
          } else {
            const debug = _mod693.debug;
            debug.error("Failed to read image data from:", data.filename);
          }
        });
        nextPromise.catch((error) => {
          const debug = _mod693.debug;
          debug.error("Failed to read image data from:", data.filename, "error: ", error);
        });
      } else {
        let debug = FeedbackWidget(dependencyMap[8]).debug;
        debug.error("Failed to read image data from:", data.filename);
      }
    };
    tmp4Result._saveFormState = () => {
      FeedbackWidget._savedState = Object.assign({}, state.state);
    };
    tmp4Result._clearFormState = () => {
      state._savedState = {
        name: "",
        email: "",
        description: "",
        filename: "unicodeVersion",
        attachment: "PX_8",
        attachmentUri: "jsx",
      };
    };
    tmp4Result._hasScreenshot = () =>
      undefined !== state.state.filename &&
      undefined !== state.state.attachment &&
      undefined !== state.state.attachmentUri;
    tmp4Result._getUser = () => {
      const obj = state(closure_1_2[8]);
      const currentScope = obj.getCurrentScope();
      const user = currentScope.getUser();
      if (user) {
        return user;
      } else {
        const tmpResult = state(closure_1_2[8]);
        const isolationScope = tmpResult.getIsolationScope();
        let user1 = isolationScope.getUser();
        if (!user1) {
          const tmpResult2 = state(closure_1_2[8]);
          const globalScope = tmpResult2.getGlobalScope();
          user1 = globalScope.getUser();
        }
        return user1;
      }
    };
    tmp4Result._showImageRetrievalDevelopmentNote = () => {
      const obj = state(closure_1_2[9]);
      if (obj.isExpoGo()) {
        const tmpResult = state(closure_1_2[7]);
        tmpResult.feedbackAlertDialog(
          "Development note",
          "The feedback widget cannot retrieve image data in Expo Go. Please build your app to test this functionality.",
        );
      }
    };
    let props = tmp4Result.props;
    let useSentryUser;
    if (null !== props) {
      if (undefined !== props) {
        useSentryUser = props.useSentryUser;
      }
    }
    let str;
    if (null !== useSentryUser) {
      if (undefined !== useSentryUser) {
        str = useSentryUser.email;
      }
    }
    if (!str) {
      const _getUserResult = tmp4Result._getUser();
      let email;
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
    let props2 = tmp4Result.props;
    let useSentryUser1;
    if (null !== props2) {
      if (undefined !== props2) {
        useSentryUser1 = props2.useSentryUser;
      }
    }
    let str2;
    if (null !== useSentryUser1) {
      if (undefined !== useSentryUser1) {
        str2 = useSentryUser1.name;
      }
    }
    if (!str2) {
      const _getUserResult1 = tmp4Result._getUser();
      let name;
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
    let obj2 = {
      isVisible: true,
      name: tmp._savedState.name || str2,
      email: tmp._savedState.email || str,
      description: tmp._savedState.description || "",
      filename: tmp._savedState.filename || undefined,
      attachment: tmp._savedState.attachment || undefined,
      attachmentUri: tmp._savedState.attachmentUri || undefined,
    };
    const tmp13 = tmp._savedState.name || str2;
    tmp4Result.state = obj2;
    let obj4 = FeedbackWidget(dependencyMap[12]);
    let result = obj4.lazyLoadFeedbackIntegration();
    return tmp4Result;
  }
}
_inherits(FeedbackWidget, react.Component);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const self = this;
    this._themeListener = metroImportDefault.addChangeListener(() => {
      self.forceUpdate();
    });
  },
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
    },
  },
  {
    key: "render",
    value: function render() {
      let createElement2;
      let createElement3;
      let createElement5;
      let createElement6;
      let createElement7;
      let createElement8;
      let description;
      let email;
      let name;
      let obj8;
      let onCancel;
      let props;
      let props3;
      const self = this;
      const tmp = onCancel;
      let obj = onCancel(props3[13]);
      const state = this.state;
      const onFormClose = this.props.onFormClose;
      ({ props, props: props3 } = this);
      const theme = obj.getTheme();
      ({ name, email, description } = state);
      const props2 = this.props;
      const merged = Object.assign(Object.assign({}, onFormClose(props3[14])(theme)), this.props.styles);
      onCancel = function onCancel() {
        if (onFormClose) {
          tmp();
        } else {
          self.setState({ isVisible: false });
        }
      };
      if (this.state.isVisible) {
        let tmpResult = tmp(props3[15]);
        const capturedScreenshot = tmpResult.getCapturedScreenshot();
        if ("ErrorCapturingScreenshot" === capturedScreenshot) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(
            () =>
              closure_16(self, undefined, undefined, function* () {
                let v3;
                if (v3 === 2) {
                  v3 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp2 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "IconComponent", done: null };
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
                      const obj = v3(closure_1_2[7]);
                      obj.feedbackAlertDialog(props3.errorTitle, props3.captureScreenshotError);
                      v3 = 3;
                      return { value: "IconComponent", done: null };
                    }
                  } catch (tmp7) {
                    v3 = 3;
                    throw tmp7;
                  }
                }
              }),
            100,
          );
        } else if (capturedScreenshot) {
          const result = self._setCapturedScreenshot(capturedScreenshot);
        }
        const createElement = react.createElement;
        dismiss = undefined;
        const tmpResult3 = tmp(props3[9]);
        if (tmpResult3.notWeb()) {
          dismiss = dismiss.dismiss;
        }
        const obj4 = { style: merged.container };
        const obj5 = { style: merged.titleContainer };
        ({ createElement: createElement2, createElement: createElement3 } = react);
        const element = (
          <closure_10 style={merged.title} testID="sentry-feedback-form-title">
            {props3.formTitle}
          </closure_10>
        );
        let showBranding = props.showBranding;
        if (showBranding) {
          const obj7 = { source: obj8, style: merged.sentryLogo, testID: "sentry-logo" };
          const createElement4 = react.createElement;
          obj8 = { uri: tmp(props3[16]).sentryLogo };
          showBranding = createElement4(closure_8, obj7);
        }
        const element3 = createElement3(closure_14, obj5, element, showBranding);
        let showName = props.showName;
        if (showName) {
          const Fragment = react.Fragment;
          const nameLabel = props3.nameLabel;
          let isNameRequired = props.isNameRequired;
          const obj9 = { style: merged.label };
          ({ createElement: createElement5, createElement: createElement6 } = react);
          if (isNameRequired) {
            const _HermesInternal = HermesInternal;
            isNameRequired = " " + props3.isRequiredLabel;
          }
          const element6 = createElement6(closure_10, obj9, nameLabel, isNameRequired);
          showName = createElement5(
            Fragment,
            null,
            element6,
            <closure_11
              style={merged.input}
              testID="sentry-feedback-name-input"
              placeholder={props3.namePlaceholder}
              value={name}
              onChangeText={function onChangeText(name) {
                const obj = { name };
                return self.setState(obj);
              }}
            />,
          );
        }
        let showEmail = props.showEmail;
        if (showEmail) {
          const Fragment2 = react.Fragment;
          const emailLabel = props3.emailLabel;
          let isEmailRequired = props.isEmailRequired;
          const obj11 = { style: merged.label };
          ({ createElement: createElement7, createElement: createElement8 } = react);
          if (isEmailRequired) {
            const _HermesInternal2 = HermesInternal;
            isEmailRequired = " " + props3.isRequiredLabel;
          }
          const element8 = createElement8(closure_10, obj11, emailLabel, isEmailRequired);
          showEmail = createElement7(
            Fragment2,
            null,
            element8,
            <closure_11
              style={merged.input}
              testID="sentry-feedback-email-input"
              placeholder={props3.emailPlaceholder}
              keyboardType="email-address"
              value={email}
              onChangeText={function onChangeText(email) {
                const obj = { email };
                return self.setState(obj);
              }}
            />,
          );
        }
        const _HermesInternal3 = HermesInternal;
        const element1 = (
          <closure_10 style={merged.label}>
            {props3.messageLabel}
            {" " + props3.isRequiredLabel}
          </closure_10>
        );
        const items = [,];
        ({ input: arr[0], textArea: arr[1] } = merged);
        const element2 = (
          <closure_11
            style={items}
            testID="sentry-feedback-message-input"
            placeholder={props3.messagePlaceholder}
            value={description}
            onChangeText={function onChangeText(description) {
              const obj = { description };
              return self.setState(obj);
            }}
            multiline
          />
        );
        let element9 = props.enableScreenshot || props2.imagePicker || self._hasScreenshot();
        if (element9) {
          let attachmentUri = self.state.attachmentUri;
          const createElement9 = react.createElement;
          const obj15 = { style: merged.screenshotContainer };
          if (attachmentUri) {
            attachmentUri = <closure_8 source={{ uri: self.state.attachmentUri }} style={merged.screenshotThumbnail} />;
            const obj17 = { uri: self.state.attachmentUri };
          }
          element9 = createElement9(
            closure_14,
            obj15,
            attachmentUri,
            <closure_12 style={merged.screenshotButton} onPress={self.onScreenshotButtonPress}>
              <closure_10 style={merged.screenshotText}>
                {self._hasScreenshot() ? props3.removeScreenshotButtonLabel : props3.addScreenshotButtonLabel}
              </closure_10>
            </closure_12>,
          );
        }
        const tmpResult4 = tmp(props3[9]);
        const element4 = tmpResult4.notWeb() && props.enableTakeScreenshot && !self.state.attachmentUri && (
          <closure_12
            style={merged.takeScreenshotButton}
            onPress={function onPress() {
              const obj = PULL_DOWN_CLOSE_THRESHOLD;
              obj.hideFeedbackButton();
              if (typeof onCancel === "function") {
                if (onFormClose) {
                  onFormClose();
                } else {
                  self.setState({ isVisible: false });
                }
                const tmpResult = PULL_DOWN_CLOSE_THRESHOLD;
                tmpResult.showScreenshotButton();
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }}
          >
            <closure_10 style={merged.takeScreenshotText} testID="sentry-feedback-take-screenshot-button">
              {props3.captureScreenshotButtonLabel}
            </closure_10>
          </closure_12>
        );
        const element5 = (
          <closure_12 style={merged.submitButton} onPress={self.handleFeedbackSubmit}>
            <closure_10 style={merged.submitText} testID="sentry-feedback-submit-button">
              {props3.submitButtonLabel}
            </closure_10>
          </closure_12>
        );
        return (
          <closure_13 onPress={dismiss} accessible={false} accessibilityElementsHidden={false}>
            {createElement2(
              closure_14,
              obj4,
              element3,
              showName,
              showEmail,
              element1,
              element2,
              element9,
              element4,
              element5,
              <closure_12 style={merged.cancelButton} onPress={onCancel}>
                <closure_10 style={merged.cancelText}>{props3.cancelButtonLabel}</closure_10>
              </closure_12>,
            )}
          </closure_13>
        );
      } else {
        return null;
      }
    },
  },
];
const entry1 = {
  key: "reset",
  value: function reset() {
    FeedbackWidget._savedState = {
      name: "",
      email: "",
      description: "",
      filename: "unicodeVersion",
      attachment: "PX_8",
      attachmentUri: "jsx",
    };
  },
};
const items1 = [entry1];
const importDefaultResultResult = _createClass(FeedbackWidget, items, items1);
importDefaultResultResult.defaultProps = defaultConfiguration.defaultConfiguration;
importDefaultResultResult._savedState = {
  name: "",
  email: "",
  description: "",
  filename: "unicodeVersion",
  attachment: "PX_8",
  attachmentUri: "jsx",
};
const FeedbackWidget_export = importDefaultResultResult;

export { FeedbackWidget_export as FeedbackWidget };
