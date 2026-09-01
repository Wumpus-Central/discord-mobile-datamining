// _runtime/12424__shouldDropEvent.js
import createStackParser from "12338_createStackParser.js";
import setupIntegration from "12391_setupIntegration.js";

function _shouldDropEvent(message, message2) {
  let tmp = message2;
  if (tmp) {
    message = message.message;
    message2 = message2.message;
    if (message) {
      if (!message) {
        if (message) {
          let flag = false;
          if (message === message2) {
            flag = false;
            if (_isSameFingerprint(message, message2)) {
              const framesFromEvent = createStackParser.getFramesFromEvent(message);
              const obj = createStackParser;
              const framesFromEvent1 = createStackParser.getFramesFromEvent(message2);
              if (framesFromEvent) {
                if (!framesFromEvent) {
                  if (framesFromEvent) {
                    let flag2 = false;
                    if (framesFromEvent1.length === framesFromEvent.length) {
                      let num = 0;
                      flag2 = true;
                      if (0 < framesFromEvent1.length) {
                        flag2 = false;
                        while (framesFromEvent1[num].filename === framesFromEvent[num].filename) {
                          flag2 = false;
                          if (tmp5.lineno !== tmp6.lineno) {
                            break;
                          } else {
                            flag2 = false;
                            if (tmp5.colno !== tmp6.colno) {
                              break;
                            } else {
                              flag2 = false;
                              if (tmp5.function !== tmp6.function) {
                                break;
                              } else {
                                let sum = num + 1;
                                num = sum;
                                flag2 = true;
                                if (sum >= framesFromEvent1.length) {
                                  break;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  } else {
                    flag2 = false;
                  }
                } else {
                  flag2 = false;
                }
              } else {
                flag2 = true;
              }
              flag = false;
              if (flag2) {
                flag = true;
              }
              const obj2 = createStackParser;
            }
          }
        } else {
          flag = false;
        }
      } else {
        flag = false;
      }
    } else {
      flag = false;
    }
    let tmp9 = flag;
    if (!tmp9) {
      let flag3 = false;
      if (message2.exception && message2.exception.values && message2.exception.values[0]) {
        flag3 = false;
        if (iter2) {
          flag3 = false;
          if (iter.type === iter2.type) {
            flag3 = false;
            if (iter.value === iter2.value) {
              flag3 = false;
              if (_isSameFingerprint(message, message2)) {
                const framesFromEvent2 = createStackParser.getFramesFromEvent(message);
                const obj3 = createStackParser;
                const framesFromEvent3 = createStackParser.getFramesFromEvent(message2);
                if (framesFromEvent2) {
                  if (!framesFromEvent2) {
                    if (framesFromEvent2) {
                      let flag4 = false;
                      if (framesFromEvent3.length === framesFromEvent2.length) {
                        let num2 = 0;
                        flag4 = true;
                        if (0 < framesFromEvent3.length) {
                          flag4 = false;
                          while (framesFromEvent3[num2].filename === framesFromEvent2[num2].filename) {
                            flag4 = false;
                            if (tmp12.lineno !== tmp13.lineno) {
                              break;
                            } else {
                              flag4 = false;
                              if (tmp12.colno !== tmp13.colno) {
                                break;
                              } else {
                                flag4 = false;
                                if (tmp12.function !== tmp13.function) {
                                  break;
                                } else {
                                  let sum1 = num2 + 1;
                                  num2 = sum1;
                                  flag4 = true;
                                  if (sum1 >= framesFromEvent3.length) {
                                    break;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    } else {
                      flag4 = false;
                    }
                  } else {
                    flag4 = false;
                  }
                } else {
                  flag4 = true;
                }
                flag3 = false;
                if (flag4) {
                  flag3 = true;
                }
                const obj4 = createStackParser;
              }
            }
          }
        }
      }
      tmp9 = flag3;
    }
    tmp = tmp9;
  }
  return tmp;
}
function _isSameFingerprint(fingerprint, fingerprint2) {
  fingerprint = fingerprint.fingerprint;
  fingerprint2 = fingerprint2.fingerprint;
  if (!fingerprint) {
    if (!fingerprint2) {
      return true;
    }
  }
  if (!fingerprint) {
    try {
      const joined = fingerprint.join("");
      return joined === fingerprint2.join("");
    } catch (err) {
      return false;
    }
  }
  return false;
}

export { _shouldDropEvent };
export const dedupeIntegration = setupIntegration.defineIntegration(() => ({
  name: "Dedupe",
  processEvent(type) {
    if (type.type) {
      return type;
    } else {
      try {
        if (closure_1_2(type, closure_0)) {
          if (closure_1_0(closure_1_1[0]).DEBUG_BUILD) {
            const logger = closure_1_0(closure_1_1[1]).logger;
            logger.warn("Event dropped due to being a duplicate of previously captured event.");
          }
          return null;
        } else {
          closure_0 = type;
          return type;
        }
      } catch (err) {}
    }
  },
}));
