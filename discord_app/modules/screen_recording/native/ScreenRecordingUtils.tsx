// discord_app/modules/screen_recording/native/ScreenRecordingUtils.tsx
import AlertActionCreatorsDefault from "../../../actions/AlertActionCreators.tsx";
import bug_reporter_BugReportUtils from "../../bug_reporter/BugReportUtils.tsx";
import ScreenRecordingManagerDefault from "ScreenRecordingManager.ios.tsx";
import StudyConfig from "StudyConfig.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_7 = async function _getLatestVideo() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          closure_128_0 = undefined;
          c3 = 1;
          const obj5 = {
            first: 1,
            groupTypes: "Recents",
            assetType: "Videos",
            include: ["filename", "fileSize", "playableDuration", "imageSize"],
          };
          c4 = 2;
          c5 = 1;
          const obj6 = { value: photos.getPhotos(obj5), done: false };
          return obj6;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_128_1 = closure_2;
        const obj7 = { title: "Error", body: null };
        const _HermesInternal = HermesInternal;
        obj7.body = "Failed to get latest video from photo gallery, error: " + closure_128_1;
        closure_129_1(closure_129_2[3]).show(obj7);
        c5 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        closure_128_0 = value;
        let first = null;
        if (closure_128_0) {
          first = null;
          if (closure_128_0.edges) {
            first = null;
            if (closure_128_0.edges.length > 0) {
              first = closure_128_0.edges[0];
            }
          }
        }
        c3 = 0;
        c5 = 3;
        const obj = { value: first, done: true };
        return obj;
      }
    } catch (tmp25) {
      closure_2 = tmp25;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp25;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_8 = async function _checkAndRequestPermissions() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          closure_128_0 = undefined;
          c3 = 1;
          c4 = 2;
          c5 = 1;
          const obj7 = { value: ScreenRecordingManagerDefault.requestPermissions(), done: false };
          return obj7;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_128_1 = closure_2;
        const obj8 = { title: "Error", body: null };
        const _HermesInternal = HermesInternal;
        obj8.body = "Failed to check permissions, error: " + closure_128_1;
        closure_129_1(closure_129_2[3]).show(obj8);
        c5 = 3;
        return { value: false, done: true };
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj9 = { value, done: true };
        return obj9;
      } else {
        closure_128_0 = value;
        if (closure_128_0.photosGranted) {
          let flag2 = closure_128_0.microphoneGranted;
          if (!flag2) {
            closure_129_1(closure_129_2[3]).show({
              title: "Error",
              body: "Microphone permission is required to record audio",
            });
            flag2 = false;
            const obj2 = closure_129_1(closure_129_2[3]);
          }
        } else {
          closure_129_1(closure_129_2[3]).show({
            title: "Error",
            body: "Photos permission is required to save recordings",
          });
          const obj = closure_129_1(closure_129_2[3]);
        }
        c3 = 0;
        c5 = 3;
      }
    } catch (tmp29) {
      closure_2 = tmp29;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp29;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_9 = async function _startRecordingProcess(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          c4 = 1;
          c5 = 2;
          c6 = 1;
          const obj5 = { value: ScreenRecordingManagerDefault.startRecording(), done: false };
          return obj5;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_3 = closure_3;
        const obj7 = { title: "Error", body: null };
        const _HermesInternal = HermesInternal;
        obj7.body = "Failed to start screen recording, error: " + closure_129_3;
        closure_130_1(closure_130_2[3]).show(obj7);
        const state = closure_130_4.getState();
        state.stopRecording();
        c6 = 3;
        const obj8 = { value: { success: false }, done: true };
        return obj8;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj9 = { value, done: true };
        return obj9;
      } else {
        closure_129_1 = value;
        if (closure_129_1.success) {
          let surveyConfig = null;
          if (undefined !== closure_129_0) {
            surveyConfig = closure_130_0(closure_130_2[5]).getSurveyConfig(closure_129_0);
            const obj3 = closure_130_0(closure_130_2[5]);
          }
          closure_129_2 = surveyConfig;
          const state1 = closure_130_4.getState();
          state1.startRecording(closure_129_1.microphoneEnabled, closure_129_0, closure_129_2);
          const state2 = closure_130_4.getState();
          state2.resetActionSheet();
          closure_130_1(closure_130_2[6]).openLazy(
            closure_130_0(closure_130_2[8])(closure_130_2[7], closure_130_2.paths),
            "ScreenRecordingActionSheet",
          );
          const obj11 = { success: true, microphoneEnabled: closure_129_1.microphoneEnabled };
          c4 = 0;
          c6 = 3;
          const obj12 = { value: obj11, done: true };
          return obj12;
        } else {
          closure_130_1(closure_130_2[3]).show({ title: "Error", body: "Failed to start screen recording" });
          c4 = 0;
          c6 = 3;
          const obj13 = { value: { success: false }, done: true };
          return obj13;
        }
      }
    } catch (tmp49) {
      closure_3 = tmp49;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp49;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_10 = async function _stopRecordingProcess() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          c3 = 1;
          c4 = 2;
          c5 = 1;
          const obj5 = { value: ScreenRecordingManagerDefault.stopRecording(), done: false };
          return obj5;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_128_0 = closure_2;
        const obj6 = { title: "Error", body: null };
        const _HermesInternal = HermesInternal;
        obj6.body = "Failed to stop screen recording, error: " + closure_128_0;
        closure_129_1(closure_129_2[3]).show(obj6);
        const state = closure_129_4.getState();
        state.stopRecording();
        c5 = 3;
        return { value: false, done: true };
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        let flag = value.success;
        if (!flag) {
          closure_129_1(closure_129_2[3]).show({
            title: "Error",
            body: "Failed to stop screen recording, but not error",
          });
          flag = false;
          const obj = closure_129_1(closure_129_2[3]);
        }
        c3 = 0;
        c5 = 3;
        const obj9 = { value: flag, done: true };
        return obj9;
      }
    } catch (tmp24) {
      closure_2 = tmp24;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp24;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_11 = async function _submitBugReportWithScreenRecording(arg0) {
  if (c10 === 2) {
    c10 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c10 = 2;
      if (0 === c9) {
        if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c10 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_6 = tmp3;
          closure_5 = tmp5;
          closure_133_0 = closure_0;
          closure_133_1 = closure_1;
          closure_133_2 = undefined;
          closure_133_3 = undefined;
          closure_133_4 = undefined;
          closure_133_5 = undefined;
          closure_133_6 = undefined;
          closure_133_7 = undefined;
          closure_133_8 = undefined;
          closure_133_9 = undefined;
          closure_133_10 = undefined;
          closure_133_11 = undefined;
          closure_133_12 = undefined;
          closure_133_13 = undefined;
          closure_133_14 = undefined;
          c8 = 1;
          const currentSurveyId = state.getState().currentSurveyId;
          if (null != currentSurveyId) {
            if ("" !== currentSurveyId) {
              const surveyConfig = StudyConfig.getSurveyConfig(currentSurveyId);
              closure_133_2 = surveyConfig;
              if (null == surveyConfig) {
                AlertActionCreatorsDefault.show({ title: "Submission Failed", body: "Survey configuration not found" });
                c8 = 0;
                c10 = 3;
                const obj5 = { value: undefined, done: true };
                return obj5;
              } else {
                c9 = 2;
                c10 = 1;
                const obj7 = { value: bug_reporter_BugReportUtils.fetchBugReportConfig(), done: false };
                return obj7;
              }
            }
          }
          AlertActionCreatorsDefault.show({ title: "Submission Failed", body: "No survey selected" });
          c8 = 0;
          c10 = 3;
          const obj9 = { value: undefined, done: true };
          return obj9;
        }
      } else {
        if (1 === tmp8) {
          c8 = 0;
          closure_134_1(closure_134_2[3]).show({
            title: "Submission Failed",
            body: "Something went wrong and there's no way to fix it. Thanks anyway!",
          });
          c10 = 3;
          const obj20 = closure_134_1(closure_134_2[3]);
        } else if (2 === tmp8) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            const features = value.features;
            closure_133_3 = features.find((name) => {
              let hasItem;
              if (name.name != null) {
                const formatted = str.toLowerCase();
                hasItem = formatted.includes(uri.uploadConfig.featureName.toLowerCase());
              }
              if (!hasItem) {
                let hasItem1;
                if (name.squad != null) {
                  const formatted1 = str3.toLowerCase();
                  hasItem1 = formatted1.includes(uri.uploadConfig.squadName.toLowerCase());
                }
                hasItem = hasItem1;
              }
              return hasItem;
            });
            closure_133_4 = [];
            c9 = 3;
            c10 = 1;
            const obj11 = {
              value: (function getLatestVideo() {
                const self = this;
                const apply = closure_1_7.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(),
              done: false,
            };
            return obj11;
          }
        } else {
          if (3 === tmp8) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 0;
              c10 = 3;
              const obj12 = { value, done: true };
              return obj12;
            } else {
              closure_133_5 = value;
              if (null != closure_133_5) {
                const id = closure_133_5.node.id;
                let uri = id;
                if (id == null) {
                  uri = closure_133_5.node.image.uri;
                }
                const size = {
                  id: uri,
                  uri: closure_133_5.node.image.uri,
                  originalUri: closure_133_5.node.image.uri,
                  mimeType: closure_133_5.node.image.mimeType,
                  width: closure_133_5.node.image.width,
                  height: closure_133_5.node.image.height,
                  filename: closure_133_5.node.image.filename,
                  playableDuration: closure_133_5.node.image.playableDuration,
                  platform: closure_134_0(closure_134_2[10]).UploadPlatform.REACT_NATIVE,
                };
                const tmp1512 = new closure_134_1(closure_134_2[10])(size);
                closure_133_6 = tmp1512;
                closure_133_4.push(closure_133_6);
                const tmp151 = closure_134_1(closure_134_2[10]);
              }
              if (null != closure_133_1) {
                if ("" !== closure_133_1) {
                  const parts = closure_133_1.split("/");
                  const arr2 = parts.pop();
                  closure_3 = arr2;
                  if (arr2 == null) {
                    const _Date = Date;
                    const _HermesInternal = HermesInternal;
                    closure_3 = "audio_" + Date.now() + ".wav";
                  }
                  closure_133_7 = closure_3;
                  const obj13 = {
                    id: null,
                    uri: null,
                    originalUri: null,
                    mimeType: "audio/wav",
                    filename: null,
                    platform: null,
                  };
                  const _Date2 = Date;
                  const _HermesInternal2 = HermesInternal;
                  obj13.id = "audio_" + Date.now();
                  const _HermesInternal3 = HermesInternal;
                  obj13.uri = "file://" + closure_133_1;
                  const _HermesInternal4 = HermesInternal;
                  obj13.originalUri = "file://" + closure_133_1;
                  obj13.filename = closure_133_7;
                  obj13.platform = closure_134_0(closure_134_2[10]).UploadPlatform.REACT_NATIVE;
                  const tmp632 = new closure_134_1(closure_134_2[10])(obj13);
                  closure_133_8 = tmp632;
                  closure_133_4.push(closure_133_8);
                  const tmp63 = closure_134_1(closure_134_2[10]);
                }
              }
              if (undefined !== closure_133_0) {
                if (closure_133_0.length > 0) {
                  closure_133_9 = (function formatTranscription(arr) {
                    const obj = {
                      generated: new Date().toISOString(),
                      totalSegments: arr.length,
                      segments: arr.map((text) => ({
                        text: text.text,
                        startTime: text.startTime,
                        duration: text.duration,
                      })),
                    };
                    return JSON.stringify(obj, null, 2);
                  })(closure_133_0);
                  const _Date3 = Date;
                  const _HermesInternal5 = HermesInternal;
                  closure_133_10 = "transcription_" + Date.now() + ".json";
                  const obj15 = closure_134_0(closure_134_2[11]);
                  c9 = 4;
                  c10 = 1;
                  const obj16 = { value: obj15.writeFile("cache", closure_133_10, closure_133_9, "utf8"), done: false };
                  return obj16;
                }
              }
              const attachments = closure_134_0(closure_134_2[12]).getAttachments(closure_133_4);
              c9 = 5;
              c10 = 1;
              const obj14 = closure_134_0(closure_134_2[12]);
            }
          } else if (4 === tmp8) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_133_11 = value;
              if (null != closure_133_11) {
                if ("" !== closure_133_11) {
                  const obj17 = {
                    id: null,
                    uri: null,
                    originalUri: null,
                    mimeType: "application/json",
                    filename: null,
                    platform: null,
                  };
                  const _Date4 = Date;
                  const _HermesInternal6 = HermesInternal;
                  obj17.id = "transcription_" + Date.now();
                  obj17.uri = closure_133_11;
                  obj17.originalUri = closure_133_11;
                  obj17.filename = closure_133_10;
                  obj17.platform = closure_134_0(closure_134_2[10]).UploadPlatform.REACT_NATIVE;
                  const tmp1312 = new closure_134_1(closure_134_2[10])(obj17);
                  closure_133_12 = tmp1312;
                  closure_133_4.push(closure_133_12);
                  const tmp131 = closure_134_1(closure_134_2[10]);
                }
              }
            }
          } else if (5 === tmp8) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 0;
              c10 = 3;
              const obj18 = { value, done: true };
              return obj18;
            } else {
              closure_133_13 = value;
              if (null == closure_133_13) {
                closure_134_1(closure_134_2[3]).show({
                  title: "Submission Failed",
                  body: "Something went wrong and there's no way to fix it. Thanks anyway!",
                });
                c8 = 0;
                c10 = 3;
                const obj19 = { value: undefined, done: true };
                return obj19;
              } else {
                const obj22 = {
                  name: closure_133_2.uploadConfig.reportTitle,
                  description: closure_133_2.uploadConfig.reportDescription,
                  priority: closure_133_2.uploadConfig.priority,
                  feature: null,
                  url: "",
                };
                let obj24 = closure_133_3;
                if (closure_133_3 == null) {
                  obj24 = {
                    name: closure_133_2.uploadConfig.featureName,
                    squad: closure_133_2.uploadConfig.squadName,
                    asana_inbox_id: "Array",
                  };
                }
                obj22.feature = obj24;
                closure_133_14 = obj22;
                c9 = 6;
                c10 = 1;
                const obj26 = {
                  value: closure_134_0(closure_134_2[9]).submitReport(
                    closure_133_14,
                    { overridePlatformInformation: false },
                    closure_133_13,
                  ),
                  done: false,
                };
                return obj26;
              }
            }
          } else if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 !== 2) {
            if (value.ok) {
              const obj27 = {
                title: closure_133_2.uploadConfig.successTitle,
                body: closure_133_2.uploadConfig.successMessage,
              };
              closure_134_1(closure_134_2[3]).show(obj27);
              const obj2 = closure_134_1(closure_134_2[3]);
            } else {
              closure_134_1(closure_134_2[3]).show({
                title: "Submission Failed",
                body: "Something went wrong and there's no way to fix it. Thanks anyway!",
              });
              let obj = closure_134_1(closure_134_2[3]);
            }
            c8 = 0;
          }
          c8 = 0;
          c10 = 3;
          const obj28 = { value, done: true };
          return obj28;
        }
        c8 = 0;
        c10 = 3;
        const obj29 = { value, done: true };
        return obj29;
      }
    } catch (tmp108) {
      closure_7 = tmp108;
      if (tmp4 === c8) {
        c10 = tmp2;
        throw tmp108;
      } else {
        c9 = tmp;
      }
    }
  }
};
let closure_12 = async function _handleStopAndSend(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = nativeEventEmitter.addListener("ScreenRecordingPreviewFinished", (saved) => {
            closure_0 = saved;
            closure_1.remove();
            if (saved.saved) {
              const _setTimeout = setTimeout;
              const timerId = setTimeout(
                closure_1_3(function* () {
                  if (c2 === 2) {
                    c2 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp3 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj = { value, done: true };
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
                          throw value;
                        } else if (arg0 === 2) {
                          c2 = 3;
                          const obj2 = { value, done: true };
                          return obj2;
                        } else {
                          if (tmp4 != null) {
                            tmp9();
                          }
                          c1 = 1;
                          c2 = 1;
                          const obj3 = {
                            value: (function submitBugReportWithScreenRecording() {
                              const self = this;
                              const apply = closure_1_11.apply;
                              if (typeof apply === "unknown") {
                                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                              } else {
                                applyArgumentsResult = apply(self, arguments);
                              }
                              return applyArgumentsResult;
                            })(tmp4.timestampedTranscription, tmp4.audioFilePath),
                            done: false,
                          };
                          return obj3;
                        }
                      } else if (arg0 === 1) {
                        c2 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c2 = 3;
                        const obj4 = { value, done: true };
                        return obj4;
                      } else {
                        state = closure_2_4.getState();
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
                }),
                1000,
              );
            } else {
              let str = "Recording was shared but not saved to Photos, so it cannot be sent.";
              if ("cancelled" === saved.action) {
                str = "Recording was cancelled and not saved.";
              }
              let obj2 = { title: "Recording Not Sent", body: str };
              closure_1(dependencyMap[3]).show(obj2);
              let obj = closure_1(dependencyMap[3]);
            }
          });
          state = state.getState();
          state.setIsUploading(true);
          c2 = 1;
          c1 = 1;
          let obj4 = {
            value: (function stopRecordingProcess() {
              const self = this;
              const apply = closure_1_10.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(),
            done: false,
          };
          return obj4;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        let obj = { value, done: true };
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
};
let closure_13 = async function _handleRecordingPhase(arg0) {
  closure_1 = tmp2;
  closure_129_0 = closure_0;
  await (function checkAndRequestPermissions() {
    const self = this;
    const apply = closure_1_8.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })();
  if (1 === tmp5) {
    if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else {
      closure_129_1 = value;
      if (closure_129_1) {
        const windowDimensions = closure_130_0(closure_130_2[13]).getWindowDimensions();
        const width = windowDimensions.width;
        const height = windowDimensions.height;
        closure_130_0(closure_130_2[13]);
        const size = { width, height, bitrate: 50000, frameRate: 15 };
        c3 = 2;
        c4 = 1;
        return { value: closure_130_1(closure_130_2[4]).setRecordingQuality(size), done: false };
      } else {
        c4 = 3;
      }
    }
  } else if (2 === tmp5) {
    if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else {
      c3 = 3;
      c4 = 1;
      return {
        value: (function startRecordingProcess() {
          const self = this;
          const apply = closure_1_9.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })(closure_129_0),
        done: false,
      };
    }
  } else if (arg0 === 1) {
    c4 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_129_5 = value;
    const success = closure_129_5.success;
  }
  return value;
};
get_ActivityIndicator = fn(17);
({ NativeModules, NativeEventEmitter } = get_ActivityIndicator);
const useScreenRecordingStore = fn(16084).useScreenRecordingStore;
const DCDPhotos = NativeModules.DCDPhotos;
const nativeEventEmitter = new NativeEventEmitter(NativeModules.DCDScreenRecordingManager);
let size = fn(2);
const result = size.fileFinishedImporting("modules/screen_recording/native/ScreenRecordingUtils.tsx");

export const handleStopAndSend = function handleStopAndSend() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const handleRecordingPhase = function handleRecordingPhase() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
