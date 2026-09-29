// === Module 15732: ScreenRecordingUtils ===

// Module 15732 (ScreenRecordingUtils)
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5369 */;
import FileManagerUtils from "FileManagerUtils" /* 7815 */;
import bug_reporter_BugReportUtils from "bug_reporter/BugReportUtils" /* 9814 */;
import ScreenRecordingManagerDefault from "ScreenRecordingManager" /* 15733 */;
import StudyConfig from "StudyConfig" /* 15734 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

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
          const obj5 = { first: 1, groupTypes: "Recents", assetType: "Videos", include: ["filename", "fileSize", "playableDuration", "imageSize"] };
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
            closure_129_1(closure_129_2[3]).show({ title: "Error", body: "Microphone permission is required to record audio" });
            flag2 = false;
            const obj2 = closure_129_1(closure_129_2[3]);
          }
        } else {
          closure_129_1(closure_129_2[3]).show({ title: "Error", body: "Photos permission is required to save recordings" });
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
          closure_130_1(closure_130_2[6]).openLazy(closure_130_0(closure_130_2[8])(closure_130_2[7], closure_130_2.paths), "ScreenRecordingActionSheet");
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
          closure_129_1(closure_129_2[3]).show({ title: "Error", body: "Failed to stop screen recording, but not error" });
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
  closure_0 = arg0;
  c18 = 0;
  c19 = 0;
  c16 = 0;
  return (async (arg0, value) => {
    if (c19 === 2) {
      c19 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c19 = 2;
        switch (c18) {
          case 0:
            if (arg0 === 1) {
              c19 = 3;
              throw value;
            } else if (arg0 === 2) {
              c19 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_9 = tmp4;
              closure_10 = tmp8;
              closure_138_0 = closure_0;
              closure_138_1 = value;
              closure_138_2 = undefined;
              closure_138_3 = undefined;
              closure_138_4 = undefined;
              closure_138_5 = undefined;
              closure_138_6 = undefined;
              closure_138_7 = undefined;
              closure_138_8 = undefined;
              closure_138_9 = undefined;
              closure_138_10 = undefined;
              closure_138_11 = undefined;
              closure_138_12 = undefined;
              closure_138_13 = undefined;
              closure_138_14 = undefined;
              closure_138_15 = undefined;
              c16 = 2;
              const currentSurveyId = state.getState().currentSurveyId;
              if (null != currentSurveyId) {
                if ("" !== currentSurveyId) {
                  const surveyConfig = StudyConfig.getSurveyConfig(currentSurveyId);
                  closure_138_2 = surveyConfig;
                  if (null == surveyConfig) {
                    AlertActionCreatorsDefault.show({ title: "Submission Failed", body: "Survey configuration not found" });
                    value6 = undefined;
                    c16 = 0;
                    let arr;
                    if (value != null) {
                      const parts = value.split("/");
                      arr = parts.pop();
                    }
                    closure_138_15 = arr;
                    let tmp211 = null != closure_138_15;
                    if (tmp211) {
                      tmp211 = "" !== closure_138_15;
                    }
                    if (tmp211) {
                      c18 = 5;
                      c19 = 1;
                      const obj6 = { value: FileManagerUtils.removeFile("cache", closure_138_15).catch(() => false), done: false };
                      return obj6;
                    } else {
                      c19 = 3;
                      const obj8 = { value: value6, done: true };
                      return obj8;
                    }
                  } else {
                    c18 = 4;
                    c19 = 1;
                    const obj9 = { value: bug_reporter_BugReportUtils.fetchBugReportConfig(), done: false };
                    return obj9;
                  }
                }
              }
              AlertActionCreatorsDefault.show({ title: "Submission Failed", body: "No survey selected" });
              value5 = undefined;
              c16 = 0;
              let arr2;
              if (value != null) {
                const parts1 = value.split("/");
                arr2 = parts1.pop();
              }
              closure_138_15 = arr2;
              let tmp222 = null != closure_138_15;
              if (tmp222) {
                tmp222 = "" !== closure_138_15;
              }
              if (tmp222) {
                c18 = 3;
                c19 = 1;
                const obj10 = { value: FileManagerUtils.removeFile("cache", closure_138_15).catch(() => false), done: false };
                return obj10;
              } else {
                c19 = 3;
                const obj11 = { value: value5, done: true };
                return obj11;
              }
            }
          break;
          case 1:
            closure_11 = closure_17;
            c16 = 0;
            let arr3;
            if (closure_138_1 != null) {
              const parts2 = str10.split("/");
              arr3 = parts2.pop();
            }
            closure_138_15 = arr3;
            let tmp196 = null != closure_138_15;
            if (tmp196) {
              tmp196 = "" !== closure_138_15;
            }
            if (!tmp196) {
              throw closure_11;
            } else {
              const obj44 = closure_137_0(closure_137_2[11]);
              c18 = 17;
              c19 = 1;
              const obj12 = { value: closure_137_0(closure_137_2[11]).removeFile("cache", closure_138_15).catch(() => false), done: false };
              return obj12;
            }
            str10 = closure_138_1;
          break;
          case 2:
            c16 = 1;
            closure_137_1(closure_137_2[3]).show({ title: "Submission Failed", body: "Something went wrong and there's no way to fix it. Thanks anyway!" });
            c16 = 0;
            let arr4;
            if (closure_138_1 != null) {
              const parts3 = str9.split("/");
              arr4 = parts3.pop();
            }
            closure_138_15 = arr4;
            let tmp182 = null != closure_138_15;
            if (tmp182) {
              tmp182 = "" !== closure_138_15;
            }
            if (tmp182) {
              const obj42 = closure_137_0(closure_137_2[11]);
              c18 = 16;
              c19 = 1;
              const obj14 = { value: closure_137_0(closure_137_2[11]).removeFile("cache", closure_138_15).catch(() => false), done: false };
              return obj14;
            } else {
              c19 = 3;
              return { value: "HermesInternal", done: null };
            }
            const obj41 = closure_137_1(closure_137_2[3]);
            str9 = closure_138_1;
          break;
          case 3:
            if (arg0 === 1) {
              c19 = 3;
              throw value;
            } else if (arg0 === 2) {
              c19 = 3;
              const obj16 = { value, done: true };
              return obj16;
            }
          break;
          case 4:
            if (arg0 === 1) {
              c19 = 3;
              throw value;
            } else {
              value8 = value;
              if (arg0 === 2) {
                c16 = 0;
                let arr5;
                if (closure_138_1 != null) {
                  const parts4 = str8.split("/");
                  arr5 = parts4.pop();
                }
                closure_138_15 = arr5;
                let tmp164 = null != closure_138_15;
                if (tmp164) {
                  tmp164 = "" !== closure_138_15;
                }
                if (tmp164) {
                  const obj38 = closure_137_0(closure_137_2[11]);
                  c18 = 7;
                  c19 = 1;
                  const obj18 = { value: closure_137_0(closure_137_2[11]).removeFile("cache", closure_138_15).catch(() => false), done: false };
                  return obj18;
                } else {
                  c19 = 3;
                  const obj19 = { value: value8, done: true };
                  return obj19;
                }
                str8 = closure_138_1;
              } else {
                const features = value.features;
                closure_138_3 = features.find((name) => {
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
                closure_138_4 = [];
                c18 = 6;
                c19 = 1;
                const obj21 = {
                  value: (function getLatestVideo() {
                                const self = this;
                                const apply = value3.apply;
                                if (typeof apply === "unknown") {
                                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                } else {
                                  applyArgumentsResult = apply(self, arguments);
                                }
                                return applyArgumentsResult;
                              })(),
                  done: false
                };
                return obj21;
              }
            }
          break;
          case 5:
            if (arg0 === 1) {
              c19 = 3;
              throw value;
            } else if (arg0 === 2) {
              c19 = 3;
              const obj22 = { value, done: true };
              return obj22;
            }
          break;
          case 6:
            if (arg0 === 1) {
              c19 = 3;
              throw value;
            } else {
              value4 = value;
              if (arg0 === 2) {
                c16 = 0;
                let arr6;
                if (closure_138_1 != null) {
                  const parts5 = str7.split("/");
                  arr6 = parts5.pop();
                }
                closure_138_15 = arr6;
                let tmp150 = null != closure_138_15;
                if (tmp150) {
                  tmp150 = "" !== closure_138_15;
                }
                if (tmp150) {
                  const obj33 = closure_137_0(closure_137_2[11]);
                  c18 = 8;
                  c19 = 1;
                  const obj24 = { value: closure_137_0(closure_137_2[11]).removeFile("cache", closure_138_15).catch(() => false), done: false };
                  return obj24;
                } else {
                  c19 = 3;
                  const obj25 = { value: value4, done: true };
                  return obj25;
                }
                str7 = closure_138_1;
              } else {
                closure_138_5 = value;
                if (null != closure_138_5) {
                  const id = closure_138_5.node.id;
                  uri = id;
                  if (id == null) {
                    uri = closure_138_5.node.image.uri;
                  }
                  const size = { id: uri, uri: closure_138_5.node.image.uri, originalUri: closure_138_5.node.image.uri, mimeType: closure_138_5.node.image.mimeType, width: closure_138_5.node.image.width, height: closure_138_5.node.image.height, filename: closure_138_5.node.image.filename, playableDuration: closure_138_5.node.image.playableDuration, platform: closure_137_0(closure_137_2[10]).UploadPlatform.REACT_NATIVE };
                  const tmp2722 = new closure_137_1(closure_137_2[10])(size);
                  closure_138_6 = tmp2722;
                  closure_138_4.push(closure_138_6);
                  const tmp272 = closure_137_1(closure_137_2[10]);
                }
                if (null != closure_138_1) {
                  if ("" !== closure_138_1) {
                    const parts6 = closure_138_1.split("/");
                    const arr8 = parts6.pop();
                    closure_3 = arr8;
                    if (arr8 == null) {
                      const _Date = Date;
                      const _HermesInternal = HermesInternal;
                      closure_3 = "audio_" + Date.now() + ".wav";
                    }
                    closure_138_7 = closure_3;
                    const obj26 = { id: null, uri: null, originalUri: null, mimeType: "audio/wav", filename: null, platform: null };
                    const _Date2 = Date;
                    const _HermesInternal2 = HermesInternal;
                    obj26.id = "audio_" + Date.now();
                    const _HermesInternal3 = HermesInternal;
                    obj26.uri = "file://" + closure_138_1;
                    const _HermesInternal4 = HermesInternal;
                    obj26.originalUri = "file://" + closure_138_1;
                    obj26.filename = closure_138_7;
                    obj26.platform = closure_137_0(closure_137_2[10]).UploadPlatform.REACT_NATIVE;
                    const tmp1152 = new closure_137_1(closure_137_2[10])(obj26);
                    closure_138_8 = tmp1152;
                    closure_138_4.push(closure_138_8);
                    const tmp115 = closure_137_1(closure_137_2[10]);
                  }
                }
                if (undefined !== closure_138_0) {
                  if (closure_138_0.length > 0) {
                    closure_138_9 = (function formatTranscription(arr) {
                      const obj = { generated: new Date().toISOString(), totalSegments: arr.length, segments: arr.map((text) => ({ text: text.text, startTime: text.startTime, duration: text.duration })) };
                      return JSON.stringify(obj, null, 2);
                    })(closure_138_0);
                    const _Date3 = Date;
                    const _HermesInternal5 = HermesInternal;
                    closure_138_10 = "transcription_" + Date.now() + ".json";
                    const obj30 = closure_137_0(closure_137_2[11]);
                    c18 = 9;
                    c19 = 1;
                    const obj27 = { value: obj30.writeFile("cache", closure_138_10, closure_138_9, "utf8"), done: false };
                    return obj27;
                  }
                }
                const attachments = closure_137_0(closure_137_2[12]).getAttachments(closure_138_4);
                c18 = 10;
                c19 = 1;
                c16 = 0;
                let arr10;
                if (closure_138_1 != null) {
                  const parts7 = str4.split("/");
                  arr10 = parts7.pop();
                }
                closure_138_15 = arr10;
                let tmp77 = null != closure_138_15;
                if (tmp77) {
                  tmp77 = "" !== closure_138_15;
                }
                if (tmp77) {
                  const obj23 = closure_137_0(closure_137_2[11]);
                  c18 = 11;
                  c19 = 1;
                  const obj28 = { value: closure_137_0(closure_137_2[11]).removeFile("cache", closure_138_15).catch(() => false), done: false };
                  return obj28;
                } else {
                  c19 = 3;
                  const obj31 = { value: value3, done: true };
                  return obj31;
                }
                const obj29 = closure_137_0(closure_137_2[12]);
                str4 = closure_138_1;
              }
            }
          break;
          case 7:
            if (arg0 === 1) {
              c19 = 3;
              throw value;
            } else if (arg0 === 2) {
              c19 = 3;
              const obj32 = { value, done: true };
              return obj32;
            }
          break;
          case 8:
            if (arg0 === 1) {
              c19 = 3;
              throw value;
            } else if (arg0 === 2) {
              c19 = 3;
              const obj34 = { value, done: true };
              return obj34;
            }
          break;
          case 9:
            if (arg0 === 1) {
              c19 = 3;
              throw value;
            } else {
              value3 = value;
              if (arg0 !== 2) {
                closure_138_11 = value;
                if (null != closure_138_11) {
                  if ("" !== closure_138_11) {
                    const obj35 = { id: null, uri: null, originalUri: null, mimeType: "application/json", filename: null, platform: null };
                    const _Date4 = Date;
                    const _HermesInternal6 = HermesInternal;
                    obj35.id = "transcription_" + Date.now();
                    obj35.uri = closure_138_11;
                    obj35.originalUri = closure_138_11;
                    obj35.filename = closure_138_10;
                    obj35.platform = closure_137_0(closure_137_2[10]).UploadPlatform.REACT_NATIVE;
                    const tmp2522 = new closure_137_1(closure_137_2[10])(obj35);
                    closure_138_12 = tmp2522;
                    closure_138_4.push(closure_138_12);
                    const tmp252 = closure_137_1(closure_137_2[10]);
                  }
                }
              }
            }
          break;
          case 10:
            if (arg0 === 1) {
              c19 = 3;
              throw value;
            } else {
              value2 = value;
              if (arg0 === 2) {
                c16 = 0;
                let arr12;
                if (closure_138_1 != null) {
                  const parts8 = str3.split("/");
                  arr12 = parts8.pop();
                }
                closure_138_15 = arr12;
                let tmp64 = null != closure_138_15;
                if (tmp64) {
                  tmp64 = "" !== closure_138_15;
                }
                if (tmp64) {
                  const obj20 = closure_137_0(closure_137_2[11]);
                  c18 = 12;
                  c19 = 1;
                  const obj36 = { value: closure_137_0(closure_137_2[11]).removeFile("cache", closure_138_15).catch(() => false), done: false };
                  return obj36;
                } else {
                  c19 = 3;
                  const obj37 = { value: value2, done: true };
                  return obj37;
                }
                str3 = closure_138_1;
              } else {
                closure_138_13 = value;
                if (null == closure_138_13) {
                  closure_137_1(closure_137_2[3]).show({ title: "Submission Failed", body: "Something went wrong and there's no way to fix it. Thanks anyway!" });
                  value7 = undefined;
                  c16 = 0;
                  let arr26;
                  if (closure_138_1 != null) {
                    const parts9 = str2.split("/");
                    arr26 = parts9.pop();
                  }
                  closure_138_15 = arr26;
                  let tmp51 = null != closure_138_15;
                  if (tmp51) {
                    tmp51 = "" !== closure_138_15;
                  }
                  if (tmp51) {
                    const obj17 = closure_137_0(closure_137_2[11]);
                    c18 = 13;
                    c19 = 1;
                    const obj39 = { value: closure_137_0(closure_137_2[11]).removeFile("cache", closure_138_15).catch(() => false), done: false };
                    return obj39;
                  } else {
                    c19 = 3;
                    const obj40 = { value: value7, done: true };
                    return obj40;
                  }
                  const obj15 = closure_137_1(closure_137_2[3]);
                  str2 = closure_138_1;
                } else {
                  const obj43 = { name: closure_138_2.uploadConfig.reportTitle, description: closure_138_2.uploadConfig.reportDescription, priority: closure_138_2.uploadConfig.priority, feature: null, url: "" };
                  obj45 = closure_138_3;
                  if (closure_138_3 == null) {
                    obj45 = { name: closure_138_2.uploadConfig.featureName, squad: closure_138_2.uploadConfig.squadName, asana_inbox_id: "r" };
                  }
                  obj43.feature = obj45;
                  closure_138_14 = obj43;
                  c18 = 14;
                  c19 = 1;
                  const obj47 = { value: closure_137_0(closure_137_2[9]).submitReport(closure_138_14, { overridePlatformInformation: false }, closure_138_13), done: false };
                  return obj47;
                }
              }
            }
          break;
          case 11:
            if (arg0 === 1) {
              c19 = 3;
              throw value;
            } else if (arg0 === 2) {
              c19 = 3;
              const obj49 = { value, done: true };
              return obj49;
            }
          break;
          case 12:
            if (arg0 === 1) {
              c19 = 3;
              throw value;
            } else if (arg0 === 2) {
              c19 = 3;
              const obj51 = { value, done: true };
              return obj51;
            }
          break;
          case 13:
            if (arg0 === 1) {
              c19 = 3;
              throw value;
            } else if (arg0 === 2) {
              c19 = 3;
              const obj53 = { value, done: true };
              return obj53;
            }
          break;
          case 14:
            if (arg0 === 1) {
              c19 = 3;
              throw value;
            } else if (arg0 === 2) {
              c16 = 0;
              let arr27;
              if (closure_138_1 != null) {
                const parts10 = str.split("/");
                arr27 = parts10.pop();
              }
              closure_138_15 = arr27;
              let tmp24 = null != closure_138_15;
              if (tmp24) {
                tmp24 = "" !== closure_138_15;
              }
              if (tmp24) {
                const obj7 = closure_137_0(closure_137_2[11]);
                c18 = 15;
                c19 = 1;
                const obj55 = { value: closure_137_0(closure_137_2[11]).removeFile("cache", closure_138_15).catch(() => false), done: false };
                return obj55;
              } else {
                c19 = 3;
                const obj56 = { value, done: true };
                return obj56;
              }
              str = closure_138_1;
            } else {
              if (value.ok) {
                const obj57 = { title: closure_138_2.uploadConfig.successTitle, body: closure_138_2.uploadConfig.successMessage };
                closure_137_1(closure_137_2[3]).show(obj57);
                const obj4 = closure_137_1(closure_137_2[3]);
              } else {
                closure_137_1(closure_137_2[3]).show({ title: "Submission Failed", body: "Something went wrong and there's no way to fix it. Thanks anyway!" });
                const obj3 = closure_137_1(closure_137_2[3]);
              }
              c16 = 1;
            }
          break;
          case 15:
            if (arg0 === 1) {
              c19 = 3;
              throw value;
            } else if (arg0 === 2) {
              c19 = 3;
              const obj58 = { value, done: true };
              return obj58;
            }
          break;
          case 16:
            if (arg0 === 1) {
              c19 = 3;
              throw value;
            } else if (arg0 === 2) {
              c19 = 3;
              let obj = { value, done: true };
              return obj;
            }
          break;
          default:
            if (arg0 === 1) {
              c19 = 3;
              throw value;
            } else if (arg0 === 2) {
              c19 = 3;
              const obj59 = { value, done: true };
              return obj59;
            }
        }
      } catch (tmp229) {
        closure_17 = tmp229;
        if (tmp5 === c16) {
          c19 = tmp3;
          throw tmp229;
        } else if (tmp2 === tmp231) {
          c18 = tmp2;
        } else {
          c18 = tmp;
        }
      }
    }
  })();
};
let closure_12 = async function _handleStopAndSend(arg0) {
  if (c4 === 2) {
    c4 = 3;
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          let obj2 = { value, done: true };
          return obj2;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          if (useScreenRecordingStore.getState().isUploading) {
            c4 = 3;
          } else {
            closure_129_1 = nativeEventEmitter.addListener("ScreenRecordingPreviewFinished", (saved) => {
              closure_0 = saved;
              closure_1.remove();
              if (saved.saved) {
                const _setTimeout = setTimeout;
                const timerId = setTimeout(closure_1_3(function*() {
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
                            done: false
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
                let str = "Recording was shared but not saved to Photos, so it cannot be sent.";
                if ("cancelled" === saved.action) {
                  str = "Recording was cancelled and not saved.";
                }
                let obj2 = { title: "Recording Not Sent", body: str };
                closure_1_1(dependencyMap[3]).show(obj2);
                let obj = closure_1_1(dependencyMap[3]);
              }
            });
            let state = useScreenRecordingStore.getState();
            state.setIsUploading(true);
            c3 = 1;
            c4 = 1;
            let obj3 = {
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
              done: false
            };
            return obj3;
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_129_2 = value;
        if (!closure_129_2) {
          closure_129_1.remove();
          let state1 = closure_130_4.getState();
          state1.setIsUploading(false);
        }
      }
      c4 = 3;
      let obj4 = { value, done: true };
      return obj4;
    } catch (tmp16) {
      c4 = tmp;
      throw tmp16;
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
        done: false
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
const useScreenRecordingStore = fn(15731).useScreenRecordingStore;
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