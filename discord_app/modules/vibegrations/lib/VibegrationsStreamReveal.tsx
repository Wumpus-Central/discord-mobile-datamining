// === Module 17101: VibegrationsStreamReveal ===

// Module 17101 (VibegrationsStreamReveal)
import size from "module_2" /* 2 */;

function splitsCharacter(target, sum) {
  let tmp = sum;
  if (sum > 0) {
    if (tmp < target.length) {
      const charCodeAtResult = target.charCodeAt(tmp - 1);
      const charCodeAtResult1 = target.charCodeAt(tmp);
      if (charCodeAtResult >= 55296) {
        if (charCodeAtResult <= 56319) {
          if (charCodeAtResult1 >= 56320) {
            if (charCodeAtResult1 <= 57343) {
              return true;
            }
          }
        }
      }
      sum = undefined;
      if (tmp > 0) {
        const charCodeAtResult2 = target.charCodeAt(tmp - 1);
        sum = charCodeAtResult2;
        if (charCodeAtResult2 >= 56320) {
          sum = charCodeAtResult2;
          if (charCodeAtResult2 <= 57343) {
            sum = charCodeAtResult2;
            if (tmp >= 2) {
              const charCodeAtResult3 = target.charCodeAt(tmp - 2);
              sum = charCodeAtResult2;
              if (charCodeAtResult3 >= 55296) {
                sum = charCodeAtResult2;
                if (charCodeAtResult3 <= 56319) {
                  sum = 1024 * (charCodeAtResult3 - 55296) + (charCodeAtResult2 - 56320) + 65536;
                }
              }
            }
          }
        }
      }
      const codePointAtResult = target.codePointAt(tmp);
      if (null != codePointAtResult) {
        let tmp8 = 8205 === codePointAtResult;
        if (!tmp8) {
          let tmp7 = codePointAtResult >= 65024;
          if (tmp7) {
            tmp7 = codePointAtResult <= 65039;
          }
          tmp8 = tmp7;
        }
        if (!tmp8) {
          let tmp9 = codePointAtResult >= 127995;
          if (tmp9) {
            tmp9 = codePointAtResult <= 127999;
          }
          tmp8 = tmp9;
        }
        if (!tmp8) {
          let tmp10 = codePointAtResult >= 768;
          if (tmp10) {
            tmp10 = codePointAtResult <= 879;
          }
          tmp8 = tmp10;
        }
        if (!tmp8) {
          let tmp11 = codePointAtResult >= 8400;
          if (tmp11) {
            tmp11 = codePointAtResult <= 8447;
          }
          tmp8 = tmp11;
        }
        if (!tmp8) {
          let tmp12 = codePointAtResult >= 65056;
          if (tmp12) {
            tmp12 = codePointAtResult <= 65071;
          }
          tmp8 = tmp12;
        }
        if (!tmp8) {
          let tmp13 = codePointAtResult >= 917536;
          if (tmp13) {
            tmp13 = codePointAtResult <= 917631;
          }
          tmp8 = tmp13;
        }
        if (tmp8) {
          return true;
        }
      }
      if (8205 === sum) {
        return true;
      } else {
        let tmp14 = null != sum;
        if (tmp14) {
          tmp14 = sum >= 127462;
        }
        if (tmp14) {
          tmp14 = sum <= 127487;
        }
        if (tmp14) {
          let tmp15 = null != codePointAtResult;
          if (tmp15) {
            tmp15 = codePointAtResult >= 127462;
          }
          if (tmp15) {
            tmp15 = codePointAtResult <= 127487;
          }
          if (tmp15) {
            let sum1;
            if (tmp > 0) {
              const charCodeAtResult4 = target.charCodeAt(tmp - 1);
              sum1 = charCodeAtResult4;
              if (charCodeAtResult4 >= 56320) {
                sum1 = charCodeAtResult4;
                if (charCodeAtResult4 <= 57343) {
                  sum1 = charCodeAtResult4;
                  if (tmp >= 2) {
                    const charCodeAtResult5 = target.charCodeAt(tmp - 2);
                    sum1 = charCodeAtResult4;
                    if (charCodeAtResult5 >= 55296) {
                      sum1 = charCodeAtResult4;
                      if (charCodeAtResult5 <= 56319) {
                        sum1 = 1024 * (charCodeAtResult5 - 55296) + (charCodeAtResult4 - 56320) + 65536;
                      }
                    }
                  }
                }
              }
            }
            let tmp19 = null != sum1;
            if (tmp19) {
              tmp19 = sum1 >= 127462;
            }
            if (tmp19) {
              tmp19 = sum1 <= 127487;
            }
            let num44 = 0;
            let num45 = 0;
            if (tmp19) {
              const sum2 = num44 + 1;
              const diff = tmp - 2;
              num45 = sum2;
              while (sum2 < 32) {
                let sum3;
                if (diff > 0) {
                  let charCodeAtResult6 = target.charCodeAt(diff - 1);
                  sum3 = charCodeAtResult6;
                  if (charCodeAtResult6 >= 56320) {
                    sum3 = charCodeAtResult6;
                    if (charCodeAtResult6 <= 57343) {
                      sum3 = charCodeAtResult6;
                      if (2 <= diff) {
                        let charCodeAtResult7 = target.charCodeAt(diff - 2);
                        sum3 = charCodeAtResult6;
                        if (charCodeAtResult7 >= 55296) {
                          sum3 = charCodeAtResult6;
                          if (charCodeAtResult7 <= 56319) {
                            sum3 = 1024 * (charCodeAtResult7 - 55296) + (charCodeAtResult6 - 56320) + 65536;
                          }
                        }
                      }
                    }
                  }
                }
                let tmp25 = null != sum3 && sum3 >= 127462 && sum3 <= 127487;
                tmp = diff;
                num44 = sum2;
                num45 = sum2;
                if (!tmp25) {
                  break;
                }
              }
            }
            return num45 % 2 === 1;
          }
        }
        return false;
      }
    }
  }
  return false;
}
const set = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsStreamReveal.tsx");

export const REVEAL_MIN_CHARS_PER_SECOND = 160;
export const REVEAL_CATCHUP_MS = 280;
export const REVEAL_MAX_CHARS_PER_FRAME = 120;
export const REVEAL_SNAP_CHARS = 900;
export const REVEAL_FRAME_MS = 32;
export const wholeCharacterBoundary = function wholeCharacterBoundary(target, sum) {
  let tmp = sum;
  if (sum < target.length) {
    tmp = sum;
    if (sum - sum < 32) {
      let tmp3 = sum;
      tmp = sum;
      if (splitsCharacter(target, sum)) {
        sum = tmp3 + 1;
        tmp = sum;
        while (sum < target.length) {
          tmp = sum;
          if (sum - sum >= 32) {
            break;
          } else {
            tmp3 = sum;
            tmp = sum;
            if (!splitsCharacter(target, sum)) {
              break;
            }
          }
        }
      }
    }
  }
  return tmp;
};
export const safeRevealBoundary = function safeRevealBoundary(str, arg1, arg2) {
  if (arg2 >= str.length) {
    return arg2;
  } else {
    let tmp = arg2;
    if (arg2 > arg1 + 1) {
      tmp = arg2;
      if (arg2 - arg2 < 12) {
        let tmp3 = arg2;
        tmp = arg2;
        if (set.has(str.charAt(arg2 - 1))) {
          const diff = tmp3 - 1;
          tmp = diff;
          while (diff > arg1 + 1) {
            tmp = diff;
            if (arg2 - diff >= 12) {
              break;
            } else {
              tmp3 = diff;
              tmp = diff;
              if (!set.has(str.charAt(diff - 1))) {
                break;
              }
            }
          }
        }
      }
    }
    if (set.has(str.charAt(tmp - 1))) {
      tmp = arg2;
    }
    return tmp;
  }
};
export const reconcileRevealedLength = function reconcileRevealedLength(target, source, length) {
  const bound = Math.min(Math.max(length, 0), target.length);
  if (0 === bound) {
    return 0;
  } else {
    if (source.length >= bound) {
      if (source.startsWith(target.slice(0, bound))) {
        return bound;
      }
    }
    const _Math = Math;
    const bound1 = Math.min(bound, source.length);
    let num = 0;
    if (0 < bound1) {
      let num3 = 0;
      num = 0;
      if (charCodeAtResult === source.charCodeAt(0)) {
        const sum = num3 + 1;
        num = sum;
        while (sum < bound1) {
          let charCodeAtResult1 = target.charCodeAt(sum);
          num3 = sum;
          num = sum;
          if (charCodeAtResult1 !== source.charCodeAt(sum)) {
            break;
          }
        }
      }
      charCodeAtResult = target.charCodeAt(0);
    }
    let tmp6 = num;
    if (0 < num) {
      let tmp8 = num;
      tmp6 = num;
      if (splitsCharacter(source, num)) {
        const diff = tmp8 - 1;
        tmp6 = diff;
        while (0 < diff) {
          tmp8 = diff;
          tmp6 = diff;
          if (!splitsCharacter(source, diff)) {
            break;
          }
        }
      }
    }
    return tmp6;
  }
};
export const nextRevealLength = function nextRevealLength(target) {
  target = target.target;
  const bound = Math.min(Math.max(target.revealed, 0), target.length);
  const diff = target.length - bound;
  if (diff <= 0) {
    return bound;
  } else if (diff > 900) {
    return target.length;
  } else {
    const _Math = Math;
    const _Math2 = Math;
    const _Math3 = Math;
    const _Math4 = Math;
    const _Math5 = Math;
    const bound1 = Math.max(0.16, diff / 280);
    const _Math6 = Math;
    const bound2 = Math.min(target.length, bound + Math.min(120, Math.max(1, Math.round(bound1 * Math.max(target.elapsedMs, 0)))));
    let tmp9 = bound2;
    if (bound2 < target.length) {
      let tmp3 = bound2;
      if (bound2 > bound + 1) {
        tmp3 = bound2;
        if (bound2 - bound2 < 12) {
          let tmp5 = bound2;
          tmp3 = bound2;
          if (set.has(target.charAt(bound2 - 1))) {
            const diff1 = tmp5 - 1;
            tmp3 = diff1;
            while (diff1 > bound + 1) {
              tmp3 = diff1;
              if (bound2 - diff1 >= 12) {
                break;
              } else {
                tmp5 = diff1;
                tmp3 = diff1;
                if (!set.has(target.charAt(diff1 - 1))) {
                  break;
                }
              }
            }
          }
        }
      }
      if (set.has(target.charAt(tmp3 - 1))) {
        tmp3 = bound2;
      }
      tmp9 = tmp3;
    }
    let tmp10 = tmp9;
    if (tmp9 < target.length) {
      tmp10 = tmp9;
      if (tmp9 - tmp9 < 32) {
        let tmp12 = tmp9;
        tmp10 = tmp9;
        if (splitsCharacter(target, tmp9)) {
          const sum = tmp12 + 1;
          tmp10 = sum;
          while (sum < target.length) {
            tmp10 = sum;
            if (sum - tmp9 >= 32) {
              break;
            } else {
              tmp12 = sum;
              tmp10 = sum;
              if (!splitsCharacter(target, sum)) {
                break;
              }
            }
          }
        }
      }
    }
    return tmp10;
  }
};