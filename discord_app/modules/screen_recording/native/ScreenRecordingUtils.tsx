// discord_app/modules/screen_recording/native/ScreenRecordingUtils.tsx
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { useScreenRecordingStore } from "ScreenRecordingStore.tsx";

const require = arg1;
function _getLatestVideo() {
  const self = this;
  const tmp = callback(function*() {
    if (photos === 2) {
      photos = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        photos = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            photos = 3;
            throw arg1;
          } else if (arg0 === 2) {
            photos = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let callback = tmp3;
            closure_0 = tmp7;
            closure_0 = undefined;
            c3 = 1;
            obj1 = { first: 1, groupTypes: "Recents", assetType: "Videos", include: null };
            obj1[3] = ["filename", "fileSize", "playableDuration", "imageSize"];
            c4 = 2;
            photos = 1;
            let obj2 = { value: null, done: false };
            obj2[0] = photos.getPhotos(obj1);
            return obj2;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          callback = table;
          obj2 = callback(table[3]);
          const obj3 = { title: "Error", body: null };
          const _HermesInternal = HermesInternal;
          obj3[1] = "Failed to get latest video from photo gallery, error: " + callback;
          obj2.show(obj3);
          photos = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          photos = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          photos = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } else {
          closure_0 = arg1;
          let first = null;
          if (closure_0) {
            first = null;
            if (closure_0.edges) {
              first = null;
              if (closure_0.edges.length > 0) {
                first = closure_0.edges[0];
              }
            }
          }
          c3 = 0;
          photos = 3;
          obj = { value: null, done: true };
          obj[0] = first;
          return obj;
        }
      } catch (tmp25) {
        table = tmp25;
        if (tmp4 === c3) {
          photos = tmp2;
          throw tmp25;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _checkAndRequestPermissions() {
  const self = this;
  const tmp = callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let callback = tmp3;
            closure_0 = tmp7;
            closure_0 = undefined;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_1(closure_1_2[4]).requestPermissions();
            return obj1;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          callback = dependencyMap;
          let obj3 = callback(4858);
          const obj2 = { title: "Error", body: null };
          const _HermesInternal = HermesInternal;
          obj2[1] = "Failed to check permissions, error: " + callback;
          obj3.show(obj2);
          c5 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          closure_0 = arg1;
          if (closure_0.photosGranted) {
            let flag2 = closure_0.microphoneGranted;
            if (!flag2) {
              obj1 = callback(4858);
              obj1.show({ title: "Error", body: "Microphone permission is required to record audio" });
              flag2 = false;
            }
          } else {
            obj = callback(4858);
            obj.show({ title: "Error", body: "Photos permission is required to save recordings" });
          }
          c3 = 0;
          c5 = 3;
        }
      } catch (tmp29) {
        dependencyMap = tmp29;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp29;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  closure_8 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _startRecordingProcess() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let surveyConfig = tmp3;
              let lib = tmp7;
              lib = undefined;
              surveyConfig = undefined;
              let store = 1;
              c5 = 2;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_1(closure_1_2[4]).startRecording();
              return obj1;
            }
          } else if (1 === tmp7) {
            store = 0;
            let obj2 = { title: "Error", body: null };
            const _HermesInternal = HermesInternal;
            obj2[1] = "Failed to start screen recording, error: " + closure_3;
            lib(surveyConfig[3]).show(obj2);
            const state = store.getState();
            state.stopRecording();
            c6 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = { success: false };
            return obj3;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            store = 0;
            c6 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            lib = arg1;
            if (lib.success) {
              surveyConfig = null;
              if (undefined !== callback) {
                obj2 = callback(surveyConfig[5]);
                surveyConfig = obj2.getSurveyConfig(callback);
              }
              const state1 = store.getState();
              state1.startRecording(lib.microphoneEnabled, callback, surveyConfig);
              const state2 = store.getState();
              state2.resetActionSheet();
              let obj5 = lib(surveyConfig[6]);
              obj5.openLazy(callback(surveyConfig[8])(surveyConfig[7], surveyConfig.paths), "ScreenRecordingActionSheet");
              obj5 = { success: true, microphoneEnabled: null };
              obj5[1] = lib.microphoneEnabled;
              store = 0;
              c6 = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = obj5;
              return obj6;
            } else {
              obj = lib(surveyConfig[3]);
              obj.show({ title: "Error", body: "Failed to start screen recording" });
              store = 0;
              c6 = 3;
              const obj7 = { value: null, done: true };
              obj7[0] = { success: false };
              return obj7;
            }
          }
        } catch (tmp49) {
          closure_3 = tmp49;
          if (tmp4 === store) {
            c6 = tmp2;
            throw tmp49;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _stopRecordingProcess() {
  const self = this;
  const tmp = callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === state) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp3;
            closure_0 = tmp7;
            c3 = 1;
            state = 2;
            c5 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_1(closure_1_2[4]).stopRecording();
            return obj1;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_0 = dependencyMap;
          let obj3 = callback(4858);
          const obj2 = { title: "Error", body: null };
          const _HermesInternal = HermesInternal;
          obj2[1] = "Failed to stop screen recording, error: " + closure_0;
          obj3.show(obj2);
          state = state.getState();
          state.stopRecording();
          c5 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          let flag = arg1.success;
          if (!flag) {
            obj = callback(4858);
            obj.show({ title: "Error", body: "Failed to stop screen recording, but not error" });
            flag = false;
          }
          c3 = 0;
          c5 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = flag;
          return obj4;
        }
      } catch (tmp24) {
        dependencyMap = tmp24;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp24;
        } else {
          state = tmp;
        }
      }
    }
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _submitBugReportWithScreenRecording() {
  let self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c9 = 0;
    c10 = 0;
    c8 = 0;
    return (function*(arg0, features) {
      if (c10 === 2) {
        c10 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = features;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp6;
        throwTypeErrorResult = null;
        throwTypeErrorResult = globalThis;
        if (tmp7 === 3) {
          if (arg0 === 1) {
            throw features;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = features;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c10 = 2;
            if (0 === c9) {
              if (arg0 === 1) {
                c10 = 3;
                throw features;
              } else if (arg0 === 2) {
                c10 = 3;
                obj = { value: null, done: true };
                obj[0] = features;
                return obj;
              } else {
                c6 = tmp3;
                closure_5 = tmp5;
                throwTypeErrorResult = lib;
                throwTypeErrorResult = lib2;
                let uri;
                closure_3 = undefined;
                let obj14;
                closure_5 = undefined;
                c6 = undefined;
                closure_7 = undefined;
                c8 = undefined;
                c9 = undefined;
                c10 = undefined;
                closure_11 = undefined;
                c12 = undefined;
                closure_13 = undefined;
                let obj13;
                c8 = 1;
                throwTypeErrorResult = closure_1_4;
                const currentSurveyId = closure_1_4.getState().currentSurveyId;
                if (null != currentSurveyId) {
                  if ("" !== currentSurveyId) {
                    throwTypeErrorResult = lib;
                    throwTypeErrorResult = closure_1_2;
                    throwTypeErrorResult = lib(closure_1_2[5]).getSurveyConfig(currentSurveyId);
                    uri = throwTypeErrorResult;
                    if (null == throwTypeErrorResult) {
                      throwTypeErrorResult = lib2;
                      throwTypeErrorResult = closure_1_2;
                      throwTypeErrorResult = lib2(closure_1_2[3]).show({ title: "Submission Failed", body: "Survey configuration not found" });
                      c8 = 0;
                      c10 = 3;
                      obj1 = { value: null, done: true };
                      obj1[0] = undefined;
                      return obj1;
                    } else {
                      throwTypeErrorResult = lib;
                      throwTypeErrorResult = closure_1_2;
                      c9 = 2;
                      c10 = 1;
                      const obj2 = { value: null, done: false };
                      obj2[0] = lib(closure_1_2[9]).fetchBugReportConfig();
                      return obj2;
                    }
                    const obj31 = lib(closure_1_2[5]);
                  }
                }
                throwTypeErrorResult = lib2;
                throwTypeErrorResult = closure_1_2;
                throwTypeErrorResult = lib2(closure_1_2[3]).show({ title: "Submission Failed", body: "No survey selected" });
                c8 = 0;
                c10 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = undefined;
                return obj3;
              }
            } else {
              if (1 === tmp8) {
                c8 = 0;
                lib2(closure_1_2[3]).show({ title: "Submission Failed", body: "Something went wrong and there's no way to fix it. Thanks anyway!" });
                c10 = 3;
                const obj20 = lib2(closure_1_2[3]);
              } else if (2 === tmp8) {
                if (arg0 === 1) {
                  c10 = 3;
                  throw features;
                } else if (arg0 === 2) {
                  c8 = 0;
                  c10 = 3;
                  const obj4 = { value: null, done: true };
                  obj4[0] = features;
                  return obj4;
                } else {
                  features = features.features;
                  closure_3 = features.find((name) => {
                    let hasItem;
                    if (name.name != null) {
                      const formatted = str.toLowerCase();
                      hasItem = formatted.includes(uri.uploadConfig.featureName.toLowerCase());
                      const str2 = uri.uploadConfig.featureName;
                    }
                    if (!hasItem) {
                      let hasItem1;
                      if (name.squad != null) {
                        const formatted1 = str3.toLowerCase();
                        hasItem1 = formatted1.includes(uri.uploadConfig.squadName.toLowerCase());
                        const str4 = uri.uploadConfig.squadName;
                      }
                      hasItem = hasItem1;
                    }
                    return hasItem;
                  });
                  obj14 = [];
                  c9 = 3;
                  c10 = 1;
                  let obj5 = { value: null, done: false };
                  obj5[0] = (function getLatestVideo() {
                    const self = this;
                    const apply = closure_7.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  })();
                  return obj5;
                }
              } else {
                if (3 === tmp8) {
                  if (arg0 === 1) {
                    c10 = 3;
                    throw features;
                  } else if (arg0 === 2) {
                    c8 = 0;
                    c10 = 3;
                    const obj6 = { value: null, done: true };
                    obj6[0] = features;
                    return obj6;
                  } else {
                    throwTypeErrorResult = closure_5;
                    closure_5 = features;
                    throwTypeErrorResult = closure_5;
                    if (null != closure_5) {
                      throwTypeErrorResult = closure_5;
                      throwTypeErrorResult = c6;
                      throwTypeErrorResult = lib2;
                      throwTypeErrorResult = uri;
                      throwTypeErrorResult = closure_5;
                      const id = closure_5.node.id;
                      uri = id;
                      throwTypeErrorResult = lib2(uri[10]);
                      if (id == null) {
                        uri = closure_5.node.image.uri;
                      }
                      let obj7 = { id: null, uri: null, originalUri: null, mimeType: null, width: null, height: null, filename: null, playableDuration: null, platform: null };
                      obj7[0] = uri;
                      obj7[1] = closure_5.node.image.uri;
                      obj7[2] = closure_5.node.image.uri;
                      obj7[3] = closure_5.node.image.mimeType;
                      obj7[4] = closure_5.node.image.width;
                      obj7[5] = closure_5.node.image.height;
                      obj7[6] = closure_5.node.image.filename;
                      obj7[7] = closure_5.node.image.playableDuration;
                      obj7[8] = lib(uri[10]).UploadPlatform.REACT_NATIVE;
                      throwTypeErrorResult = new throwTypeErrorResult(obj7);
                      c6 = throwTypeErrorResult;
                      obj14.push(c6);
                    }
                    if (null != lib2) {
                      throwTypeErrorResult = closure_5;
                      throwTypeErrorResult = lib2;
                      if ("" !== lib2) {
                        throwTypeErrorResult = lib2;
                        const parts = lib2.split("/");
                        throwTypeErrorResult = parts.pop();
                        closure_3 = throwTypeErrorResult;
                        if (throwTypeErrorResult == null) {
                          const _Date = Date;
                          const _HermesInternal = HermesInternal;
                          closure_3 = "audio_" + Date.now() + ".wav";
                        }
                        closure_7 = closure_3;
                        const obj8 = { id: null, uri: null, originalUri: null, mimeType: "audio/wav", filename: null, platform: null };
                        const _Date2 = Date;
                        let tmp63 = lib2(uri[10]);
                        const _HermesInternal2 = HermesInternal;
                        obj8[0] = "audio_" + Date.now();
                        const _HermesInternal3 = HermesInternal;
                        obj8[1] = "file://" + lib2;
                        const _HermesInternal4 = HermesInternal;
                        obj8[2] = "file://" + lib2;
                        obj8[4] = closure_7;
                        obj8[5] = lib(uri[10]).UploadPlatform.REACT_NATIVE;
                        tmp63 = new tmp63(obj8);
                        c8 = tmp63;
                        obj14.push(c8);
                      }
                    }
                    if (undefined !== lib) {
                      if (lib.length > 0) {
                        c9 = (function formatTranscription(closure_0) {
                          const obj = { generated: new Date().toISOString(), totalSegments: closure_0.length, segments: closure_0.map((text) => ({ text: text.text, startTime: text.startTime, duration: text.duration })) };
                          return JSON.stringify(obj, null, 2);
                        })(lib);
                        const _Date3 = Date;
                        const _HermesInternal5 = HermesInternal;
                        c10 = "transcription_" + Date.now() + ".json";
                        obj14 = lib(uri[11]);
                        c9 = 4;
                        c10 = 1;
                        const obj9 = { value: null, done: false };
                        obj9[0] = obj14.writeFile("cache", c10, c9, "utf8");
                        return obj9;
                      }
                    }
                    obj13 = lib(uri[12]);
                    const attachments = obj13.getAttachments(obj14);
                    c9 = 5;
                    c10 = 1;
                  }
                } else if (4 === tmp8) {
                  if (arg0 === 1) {
                    c10 = 3;
                    throw features;
                  } else if (arg0 !== 2) {
                    throwTypeErrorResult = closure_5;
                    closure_11 = features;
                    throwTypeErrorResult = closure_11;
                    if (null != closure_11) {
                      throwTypeErrorResult = closure_5;
                      throwTypeErrorResult = closure_11;
                      if ("" !== closure_11) {
                        throwTypeErrorResult = c6;
                        throwTypeErrorResult = lib2;
                        throwTypeErrorResult = uri;
                        const obj10 = { id: null, uri: null, originalUri: null, mimeType: "application/json", filename: null, platform: null };
                        const _Date4 = Date;
                        throwTypeErrorResult = lib2(uri[10]);
                        const _HermesInternal6 = HermesInternal;
                        obj10[0] = "transcription_" + Date.now();
                        throwTypeErrorResult = closure_11;
                        obj10[1] = closure_11;
                        throwTypeErrorResult = closure_11;
                        obj10[2] = closure_11;
                        throwTypeErrorResult = c10;
                        obj10[4] = c10;
                        throwTypeErrorResult = lib;
                        throwTypeErrorResult = uri;
                        obj10[5] = lib(uri[10]).UploadPlatform.REACT_NATIVE;
                        throwTypeErrorResult = new.target;
                        throwTypeErrorResult = new.target;
                        throwTypeErrorResult = obj10;
                        throwTypeErrorResult = new throwTypeErrorResult(obj10);
                        c12 = throwTypeErrorResult;
                        throwTypeErrorResult = obj14;
                        throwTypeErrorResult = c12;
                        throwTypeErrorResult = obj14.push(c12);
                      }
                    }
                  }
                } else if (5 === tmp8) {
                  if (arg0 === 1) {
                    c10 = 3;
                    throw features;
                  } else if (arg0 === 2) {
                    c8 = 0;
                    c10 = 3;
                    const obj11 = { value: null, done: true };
                    obj11[0] = features;
                    return obj11;
                  } else {
                    throwTypeErrorResult = closure_5;
                    closure_13 = features;
                    throwTypeErrorResult = closure_13;
                    if (null == closure_13) {
                      obj7 = lib2(uri[3]);
                      obj7.show({ title: "Submission Failed", body: "Something went wrong and there's no way to fix it. Thanks anyway!" });
                      c8 = 0;
                      c10 = 3;
                      const obj12 = { value: null, done: true };
                      obj12[0] = undefined;
                      return obj12;
                    } else {
                      throwTypeErrorResult = closure_5;
                      obj13 = { name: null, description: null, priority: null, feature: null, url: "" };
                      throwTypeErrorResult = uri;
                      obj13[0] = uri.uploadConfig.reportTitle;
                      throwTypeErrorResult = uri;
                      obj13[1] = uri.uploadConfig.reportDescription;
                      throwTypeErrorResult = uri;
                      obj13[2] = uri.uploadConfig.priority;
                      throwTypeErrorResult = closure_3;
                      obj14 = closure_3;
                      if (closure_3 == null) {
                        obj14 = { name: null, squad: null, asana_inbox_id: "accessible" };
                        obj14[0] = uri.uploadConfig.featureName;
                        obj14[1] = uri.uploadConfig.squadName;
                      }
                      obj13[3] = obj14;
                      obj5 = lib(uri[9]);
                      c9 = 6;
                      c10 = 1;
                      const obj15 = { value: null, done: false };
                      obj15[0] = obj5.submitReport(obj13, { overridePlatformInformation: false }, closure_13);
                      return obj15;
                    }
                  }
                } else if (arg0 === 1) {
                  c10 = 3;
                  throw features;
                } else if (arg0 !== 2) {
                  if (features.ok) {
                    obj1 = lib2(uri[3]);
                    const obj16 = { title: null, body: null };
                    obj16[0] = uri.uploadConfig.successTitle;
                    obj16[1] = uri.uploadConfig.successMessage;
                    obj1.show(obj16);
                  } else {
                    obj = lib2(uri[3]);
                    obj.show({ title: "Submission Failed", body: "Something went wrong and there's no way to fix it. Thanks anyway!" });
                  }
                  c8 = 0;
                }
                c8 = 0;
                c10 = 3;
                const obj17 = { value: null, done: true };
                obj17[0] = features;
                return obj17;
              }
              c8 = 0;
              c10 = 3;
              const obj18 = { value: null, done: true };
              obj18[0] = features;
              return obj18;
            }
          } catch (throwTypeErrorResult) {
            closure_7 = throwTypeErrorResult;
            throwTypeErrorResult = c8;
            if (tmp4 === c8) {
              throwTypeErrorResult = tmp2;
              c10 = tmp2;
              throw throwTypeErrorResult;
            } else {
              c9 = throwTypeErrorResult;
            }
          }
        }
      }
    })();
  });
  closure_11 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleStopAndSend() {
  let self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function*(arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c1 = closure_1_6.addListener("ScreenRecordingPreviewFinished", (saved) => {
                closure_0 = saved;
                v3.remove();
                if (saved.saved) {
                  const _setTimeout = setTimeout;
                  const timerId = setTimeout(closure_1_3(function*() {
                    if (c2 === 2) {
                      c2 = 3;
                      HermesBuiltin.throwTypeError();
                    } else if (tmp3 === 3) {
                      if (arg0 === 1) {
                        throw arg1;
                      } else if (arg0 === 2) {
                        let obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        return { value: "HermesInternal", done: null };
                      }
                    } else {
                      try {
                        c2 = 2;
                        if (0 === c1) {
                          if (arg0 === 1) {
                            c2 = 3;
                            throw arg1;
                          } else if (arg0 === 2) {
                            c2 = 3;
                            obj = { value: null, done: true };
                            obj[0] = arg1;
                            return obj;
                          } else {
                            closure_0 = tmp4;
                            if (closure_1_0 != null) {
                              tmp9();
                            }
                            c1 = 1;
                            c2 = 1;
                            obj1 = { value: null, done: false };
                            obj1[0] = (function submitBugReportWithScreenRecording() { ... })(closure_1_0.timestampedTranscription, closure_1_0.audioFilePath);
                            return obj1;
                          }
                        } else if (arg0 === 1) {
                          c2 = 3;
                          throw arg1;
                        } else if (arg0 === 2) {
                          c2 = 3;
                          const obj2 = { value: null, done: true };
                          obj2[0] = arg1;
                          return obj2;
                        } else {
                          const state = closure_2_4.getState();
                          state.setIsUploading(false);
                          const state1 = closure_2_4.getState();
                          state1.stopRecording();
                          c2 = 3;
                          return { value: "HermesInternal", done: null };
                        }
                      } catch (tmp13) {
                        c2 = tmp;
                        throw tmp13;
                      }
                    }
                  }), 1000);
                } else {
                  let obj = v3(table[3]);
                  let str = "Recording was shared but not saved to Photos, so it cannot be sent.";
                  if ("cancelled" === saved.action) {
                    str = "Recording was cancelled and not saved.";
                  }
                  obj = { title: "Recording Not Sent", body: null };
                  obj[1] = str;
                  obj.show(obj);
                }
              });
              let state = closure_1_4.getState();
              state.setIsUploading(true);
              c2 = 1;
              c1 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = (function stopRecordingProcess() {
                const self = this;
                const apply = closure_10.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })();
              return obj1;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c1 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp9) {
          c1 = tmp;
          throw tmp9;
        }
      }
    })();
  });
  closure_12 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleRecordingPhase() {
  let self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      let callback2 = tmp2;
      yield (function checkAndRequestPermissions() {
        const self = this;
        const apply = closure_8.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
      if (1 === tmp5) {
        if (arg0 === 1) {
          let height = 3;
          throw arg1;
        } else if (arg0 === 2) {
          height = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          callback2 = arg1;
          if (callback2) {
            let obj3 = callback(styles[13]);
            styles = obj3.getWindowDimensions();
            let width = styles.width;
            height = styles.height;
            let obj4 = callback2(styles[4]);
            obj3 = { width: null, height: null, bitrate: 50000, frameRate: 15 };
            obj3[0] = width;
            obj3[1] = height;
            width = 2;
            height = 1;
            obj4 = { value: null, done: false };
            obj4[0] = obj4.setRecordingQuality(obj3);
            return obj4;
          } else {
            height = 3;
          }
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          height = 3;
          throw arg1;
        } else if (arg0 === 2) {
          height = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = arg1;
          return obj5;
        } else {
          width = 3;
          height = 1;
          const obj6 = { value: null, done: false };
          obj6[0] = (function startRecordingProcess(closure_0) {
            const self = this;
            const apply = closure_9.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(callback);
          return obj6;
        }
      } else if (arg0 === 1) {
        height = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        let success = arg1;
        success = success.success;
      }
      return arg1;
    })();
  });
  closure_13 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ NativeModules, NativeEventEmitter } = get_ActivityIndicator);
const DCDPhotos = NativeModules.DCDPhotos;
const nativeEventEmitter = new NativeEventEmitter(NativeModules.DCDScreenRecordingManager);
const result = require("set").fileFinishedImporting("modules/screen_recording/native/ScreenRecordingUtils.tsx");

export const handleStopAndSend = function handleStopAndSend() {
  const self = this;
  const apply = _handleStopAndSend.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const handleRecordingPhase = function handleRecordingPhase() {
  const self = this;
  const apply = _handleRecordingPhase.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};