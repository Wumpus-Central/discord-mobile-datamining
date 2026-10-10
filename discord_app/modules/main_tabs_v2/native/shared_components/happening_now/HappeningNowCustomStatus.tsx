// === Module 16489: HappeningNowCustomStatus ===

// Module 16489 (HappeningNowCustomStatus)
import nativeDefault from "native" /* 587 */;
import FastImageDefault from "FastImage" /* 6156 */;
import ActivityEmojiDefault from "ActivityEmoji" /* 10256 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import PresenceStore from "PresenceStore" /* 5108 */;

const require = fn;
const View = fn(17).View;
const HappeningNowConstants = fn(15566);
const HAPPENING_NOW_CONTENT_HEIGHT = HappeningNowConstants.HAPPENING_NOW_CONTENT_HEIGHT;
const STATUS_CUTOUT_SMALL = HappeningNowConstants.STATUS_CUTOUT_SMALL;
const StatusTypes = fn(1096).StatusTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
let c14 = 16;
let c15 = 32;
const rect = { left: (HAPPENING_NOW_CONTENT_HEIGHT - 16) / 2, top: -3, transform: null };
let items = [{ rotate: "24deg" }];
rect.transform = items;
let items1 = [rect, , , , , ];
const rect1 = { left: HAPPENING_NOW_CONTENT_HEIGHT - 16 + 3, top: (HAPPENING_NOW_CONTENT_HEIGHT - 32 - 16) / 2, transform: null };
let items2 = [{ rotate: "-12deg" }];
rect1.transform = items2;
items1[1] = rect1;
const rect2 = { left: HAPPENING_NOW_CONTENT_HEIGHT - 16 + 3, top: (HAPPENING_NOW_CONTENT_HEIGHT - 16 + 32) / 2, transform: null };
let items3 = [{ rotate: "12deg" }];
rect2.transform = items3;
items1[2] = rect2;
const rect3 = { left: (HAPPENING_NOW_CONTENT_HEIGHT - 16) / 2, top: HAPPENING_NOW_CONTENT_HEIGHT - 16 + 3, transform: null };
let items4 = [{ rotate: "-24deg" }];
rect3.transform = items4;
items1[3] = rect3;
const rect4 = { left: -3, top: (HAPPENING_NOW_CONTENT_HEIGHT - 16 + 32) / 2, transform: null };
let items5 = [{ rotate: "12deg" }];
rect4.transform = items5;
items1[4] = rect4;
const rect5 = { left: -3, top: (HAPPENING_NOW_CONTENT_HEIGHT - 32 - 16) / 2, transform: null };
let items6 = [{ rotate: "-12deg" }];
rect5.transform = items6;
items1[5] = rect5;
const createStyles = fn(5092);
let closure_17 = createStyles.createStyles((arg0) => {
  const obj = { customStatusContainer: { flexShrink: 1, flexDirection: "row", alignItems: "center" }, customStatusContextContainer: { flexShrink: 1, flexDirection: "column", marginLeft: 12, gap: 2 }, statusAvatar: { marginBottom: 2 }, largeEmoji: null, smallEmoji: null, cardContainer: null, emojisContainer: null };
  const size = { width: v32, height: v32, borderRadius: 2, overflow: "hidden" };
  obj.largeEmoji = size;
  const size1 = { position: "absolute", width: v16, height: v16, borderRadius: 2, opacity: 0.6 };
  obj.smallEmoji = size1;
  let num;
  if (arg0) {
    num = 12;
  }
  obj.cardContainer = { justifyContent: "center", paddingLeft: num };
  const size2 = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
  obj.emojisContainer = size2;
  return obj;
});
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCustomStatus.tsx");

export const CustomStatusActivityCard = ReactCompilerGating.isReactCompilerEnabled() ? (function CustomStatusActivityCard(user) {
  const cResult = user(576).c(46);
  user = user.user;
  ({ guildId, activity } = user);
  ({ userTitle, onPress, panelVariant } = user);
  let tmp4 = undefined !== panelVariant;
  if (tmp4) {
    tmp4 = panelVariant;
  }
  let obj = user(576);
  dependencyMap = closure_17(null == activity.emoji);
  let obj2 = noop;
  const tmp5 = closure_17(null == activity.emoji);
  [r10028, asyncGeneratorStep] = noop.useState(undefined);
  [_slicedToArray, noop] = noop.useState(undefined);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [PresenceStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    const fn = function v() {
      const status = PresenceStore.getStatus(user.id);
      let tmp3 = null;
      if (status !== StatusTypes.OFFLINE) {
        tmp3 = status;
      }
      return { status: tmp3, isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id) };
    };
    cResult[1] = user.id;
    cResult[2] = fn;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  const tmp6 = _slicedToArray(noop.useState(undefined), 2);
  const stateFromStoresObject = user(573).useStateFromStoresObject(first, tmp10);
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  if (cResult[3] === guildId) {
    if (cResult[4] === user.id) {
      let tmp12 = cResult[5];
    }
    const tmp14 = activity(5628)(tmp12);
    if (cResult[6] !== tmp14) {
      let obj3 = { displayNameStyles: tmp14 };
      cResult[6] = tmp14;
      cResult[7] = obj3;
      let tmp15 = obj3;
    } else {
      tmp15 = cResult[7];
    }
    const displayNameStylesFont = tmp(8853).useDisplayNameStylesFont(tmp15);
    if (cResult[8] !== activity.emoji) {
      class J {
        constructor() {
          closure_0 = closure_3(async () => {
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: "+51" };
              }
            } else {
              try {
                v3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    c1 = 0;
                    closure_0 = tmp4;
                    closure_128_0 = undefined;
                    closure_128_1 = undefined;
                    closure_128_2 = undefined;
                    if (null != c1.emoji) {
                      c2 = 1;
                      v3 = 1;
                      const obj5 = { value: closure_0(16490).getEmojiSource(c1.emoji), done: false };
                      return obj5;
                    } else {
                      v3 = 3;
                    }
                  }
                } else if (1 === tmp4) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj7 = { value, done: true };
                    return obj7;
                  } else {
                    closure_128_0 = value;
                    const obj8 = { emoji: c1.emoji, emojiSource: closure_128_0 };
                    c2 = 2;
                    v3 = 1;
                    const obj9 = { value: closure_0(16491).getEmojiDominantColors(obj8), done: false };
                    return obj9;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  closure_128_1 = value;
                  if (closure_128_1.length > 0) {
                    closure_128_2 = closure_128_1[0];
                    const _HermesInternal = HermesInternal;
                    v3("rgba(" + closure_128_2[0] + ", " + closure_128_2[1] + ", " + closure_128_2[2] + ", 0.16)");
                  }
                  closure_1_5(closure_128_0);
                }
                v3 = 3;
                const obj = { value, done: true };
                return obj;
              } catch (tmp28) {
                v3 = tmp;
                throw tmp28;
              }
            }
          });
          tmp = (function loadEmoji() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
          return;
        }
      }
      items1 = [activity.emoji];
      cResult[8] = activity.emoji;
      cResult[9] = J;
      cResult[10] = items1;
      let tmp18 = items1;
    } else {
      class J {
        constructor() {
          closure_0 = closure_3(async () => {
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: "+51" };
              }
            } else {
              try {
                v3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    c1 = 0;
                    closure_0 = tmp4;
                    closure_128_0 = undefined;
                    closure_128_1 = undefined;
                    closure_128_2 = undefined;
                    if (null != c1.emoji) {
                      c2 = 1;
                      v3 = 1;
                      const obj5 = { value: closure_0(16490).getEmojiSource(c1.emoji), done: false };
                      return obj5;
                    } else {
                      v3 = 3;
                    }
                  }
                } else if (1 === tmp4) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj7 = { value, done: true };
                    return obj7;
                  } else {
                    closure_128_0 = value;
                    const obj8 = { emoji: c1.emoji, emojiSource: closure_128_0 };
                    c2 = 2;
                    v3 = 1;
                    const obj9 = { value: closure_0(16491).getEmojiDominantColors(obj8), done: false };
                    return obj9;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  closure_128_1 = value;
                  if (closure_128_1.length > 0) {
                    closure_128_2 = closure_128_1[0];
                    const _HermesInternal = HermesInternal;
                    v3("rgba(" + closure_128_2[0] + ", " + closure_128_2[1] + ", " + closure_128_2[2] + ", 0.16)");
                  }
                  closure_1_5(closure_128_0);
                }
                v3 = 3;
                const obj = { value, done: true };
                return obj;
              } catch (tmp28) {
                v3 = tmp;
                throw tmp28;
              }
            }
          });
          tmp = (function loadEmoji() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
          return;
        }
      }
      tmp18 = cResult[10];
    }
    const effect = obj2.useEffect(J, tmp18);
    if (null != activity.emoji) {
      class J {
        constructor() {
          closure_0 = closure_3(async () => {
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: "+51" };
              }
            } else {
              try {
                v3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    c1 = 0;
                    closure_0 = tmp4;
                    closure_128_0 = undefined;
                    closure_128_1 = undefined;
                    closure_128_2 = undefined;
                    if (null != c1.emoji) {
                      c2 = 1;
                      v3 = 1;
                      const obj5 = { value: closure_0(16490).getEmojiSource(c1.emoji), done: false };
                      return obj5;
                    } else {
                      v3 = 3;
                    }
                  }
                } else if (1 === tmp4) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj7 = { value, done: true };
                    return obj7;
                  } else {
                    closure_128_0 = value;
                    const obj8 = { emoji: c1.emoji, emojiSource: closure_128_0 };
                    c2 = 2;
                    v3 = 1;
                    const obj9 = { value: closure_0(16491).getEmojiDominantColors(obj8), done: false };
                    return obj9;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  closure_128_1 = value;
                  if (closure_128_1.length > 0) {
                    closure_128_2 = closure_128_1[0];
                    const _HermesInternal = HermesInternal;
                    v3("rgba(" + closure_128_2[0] + ", " + closure_128_2[1] + ", " + closure_128_2[2] + ", 0.16)");
                  }
                  closure_1_5(closure_128_0);
                }
                v3 = 3;
                const obj = { value, done: true };
                return obj;
              } catch (tmp28) {
                v3 = tmp;
                throw tmp28;
              }
            }
          });
          tmp = (function loadEmoji() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
          return;
        }
      }
    }
    const tmpResult3 = tmp(8853);
    const gameMentionsAsPlainText = tmp(10238).useGameMentionsAsPlainText(activity.state);
    if (cResult[11] !== status) {
      class J {
        constructor() {
          closure_0 = closure_3(async () => {
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: "+51" };
              }
            } else {
              try {
                v3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    c1 = 0;
                    closure_0 = tmp4;
                    closure_128_0 = undefined;
                    closure_128_1 = undefined;
                    closure_128_2 = undefined;
                    if (null != c1.emoji) {
                      c2 = 1;
                      v3 = 1;
                      const obj5 = { value: closure_0(16490).getEmojiSource(c1.emoji), done: false };
                      return obj5;
                    } else {
                      v3 = 3;
                    }
                  }
                } else if (1 === tmp4) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj7 = { value, done: true };
                    return obj7;
                  } else {
                    closure_128_0 = value;
                    const obj8 = { emoji: c1.emoji, emojiSource: closure_128_0 };
                    c2 = 2;
                    v3 = 1;
                    const obj9 = { value: closure_0(16491).getEmojiDominantColors(obj8), done: false };
                    return obj9;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  closure_128_1 = value;
                  if (closure_128_1.length > 0) {
                    closure_128_2 = closure_128_1[0];
                    const _HermesInternal = HermesInternal;
                    v3("rgba(" + closure_128_2[0] + ", " + closure_128_2[1] + ", " + closure_128_2[2] + ", 0.16)");
                  }
                  closure_1_5(closure_128_0);
                }
                v3 = 3;
                const obj = { value, done: true };
                return obj;
              } catch (tmp28) {
                v3 = tmp;
                throw tmp28;
              }
            }
          });
          tmp = (function loadEmoji() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
          return;
        }
      }
      const statusLabel = obj8.getStatusLabel(status);
      cResult[11] = status;
      cResult[12] = statusLabel;
    } else {
      class J {
        constructor() {
          closure_0 = closure_3(async () => {
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: "+51" };
              }
            } else {
              try {
                v3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    c1 = 0;
                    closure_0 = tmp4;
                    closure_128_0 = undefined;
                    closure_128_1 = undefined;
                    closure_128_2 = undefined;
                    if (null != c1.emoji) {
                      c2 = 1;
                      v3 = 1;
                      const obj5 = { value: closure_0(16490).getEmojiSource(c1.emoji), done: false };
                      return obj5;
                    } else {
                      v3 = 3;
                    }
                  }
                } else if (1 === tmp4) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj7 = { value, done: true };
                    return obj7;
                  } else {
                    closure_128_0 = value;
                    const obj8 = { emoji: c1.emoji, emojiSource: closure_128_0 };
                    c2 = 2;
                    v3 = 1;
                    const obj9 = { value: closure_0(16491).getEmojiDominantColors(obj8), done: false };
                    return obj9;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  closure_128_1 = value;
                  if (closure_128_1.length > 0) {
                    closure_128_2 = closure_128_1[0];
                    const _HermesInternal = HermesInternal;
                    v3("rgba(" + closure_128_2[0] + ", " + closure_128_2[1] + ", " + closure_128_2[2] + ", 0.16)");
                  }
                  closure_1_5(closure_128_0);
                }
                v3 = 3;
                const obj = { value, done: true };
                return obj;
              } catch (tmp28) {
                v3 = tmp;
                throw tmp28;
              }
            }
          });
          tmp = (function loadEmoji() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
          return;
        }
      }
    }
    if (cResult[13] === gameMentionsAsPlainText) {
      class J {
        constructor() {
          closure_0 = closure_3(async () => {
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: "+51" };
              }
            } else {
              try {
                v3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    c1 = 0;
                    closure_0 = tmp4;
                    closure_128_0 = undefined;
                    closure_128_1 = undefined;
                    closure_128_2 = undefined;
                    if (null != c1.emoji) {
                      c2 = 1;
                      v3 = 1;
                      const obj5 = { value: closure_0(16490).getEmojiSource(c1.emoji), done: false };
                      return obj5;
                    } else {
                      v3 = 3;
                    }
                  }
                } else if (1 === tmp4) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj7 = { value, done: true };
                    return obj7;
                  } else {
                    closure_128_0 = value;
                    const obj8 = { emoji: c1.emoji, emojiSource: closure_128_0 };
                    c2 = 2;
                    v3 = 1;
                    const obj9 = { value: closure_0(16491).getEmojiDominantColors(obj8), done: false };
                    return obj9;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  closure_128_1 = value;
                  if (closure_128_1.length > 0) {
                    closure_128_2 = closure_128_1[0];
                    const _HermesInternal = HermesInternal;
                    v3("rgba(" + closure_128_2[0] + ", " + closure_128_2[1] + ", " + closure_128_2[2] + ", 0.16)");
                  }
                  closure_1_5(closure_128_0);
                }
                v3 = 3;
                const obj = { value, done: true };
                return obj;
              } catch (tmp28) {
                v3 = tmp;
                throw tmp28;
              }
            }
          });
          tmp = (function loadEmoji() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
          return;
        }
      }
    }
    const items2 = [userTitle, tmp21, gameMentionsAsPlainText];
    cResult[13] = gameMentionsAsPlainText;
    cResult[14] = tmp21;
    cResult[15] = userTitle;
    cResult[16] = items2;
    const tmpResult4 = tmp(10238);
  }
  let obj4 = { userId: user.id, guildId };
  cResult[3] = guildId;
  cResult[4] = user.id;
  cResult[5] = obj4;
  tmp12 = obj4;
  const tmpResult = user(573);
}) : (function CustomStatusActivityCard(user) {
  user = user.user;
  ({ guildId, activity } = user);
  ({ userTitle, panelVariant } = user);
  ({ fullwidth, onPress } = user);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  c3 = undefined;
  let source;
  noop = undefined;
  const tmp = closure_17(null == activity.emoji);
  dependencyMap = tmp;
  let num = 2;
  [tmp3, c3] = source(noop.useState(undefined), 2);
  const tmp4 = source(noop.useState(undefined), 2);
  source = tmp4[0];
  noop = tmp4[1];
  const tmp2 = source(noop.useState(undefined), 2);
  let items = [PresenceStore];
  const stateFromStoresObject = user(573).useStateFromStoresObject(items, () => {
    const status = PresenceStore.getStatus(user.id);
    let tmp3 = null;
    if (status !== StatusTypes.OFFLINE) {
      tmp3 = status;
    }
    return { status: tmp3, isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id) };
  });
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  let obj = user(573);
  let obj2 = { userId: user.id, guildId };
  let tmp10 = activity(5628)({ userId: user.id, guildId });
  const displayNameStylesFont = user(8853).useDisplayNameStylesFont({ displayNameStyles: tmp10 });
  items1 = [activity.emoji];
  const effect = noop.useEffect(() => {
    closure_0 = async function _loadEmoji2() {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              c1 = 0;
              closure_0 = tmp4;
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              closure_128_2 = undefined;
              if (null != c1.emoji) {
                c2 = 1;
                v3 = 1;
                const obj5 = { value: user(16490).getEmojiSource(c1.emoji), done: false };
                return obj5;
              } else {
                v3 = 3;
              }
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_128_0 = value;
              const obj8 = { emoji: c1.emoji, emojiSource: closure_128_0 };
              c2 = 2;
              v3 = 1;
              const obj9 = { value: user(16491).getEmojiDominantColors(obj8), done: false };
              return obj9;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_128_1 = value;
            if (closure_128_1.length > 0) {
              closure_128_2 = closure_128_1[0];
              const _HermesInternal = HermesInternal;
              v3("rgba(" + closure_128_2[0] + ", " + closure_128_2[1] + ", " + closure_128_2[2] + ", 0.16)");
            }
            closure_1_5(closure_128_0);
          }
          v3 = 3;
          const obj = { value, done: true };
          return obj;
        } catch (tmp28) {
          v3 = tmp;
          throw tmp28;
        }
      }
    };
    !(function loadEmoji() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  }, items1);
  if (null != activity.emoji) {
    num = 1;
  }
  let obj3 = user(8853);
  const gameMentionsAsPlainText = user(10238).useGameMentionsAsPlainText(activity.state);
  const items2 = [userTitle, , ];
  const tmp6Result = user(10238);
  items2[1] = user(8650).getStatusLabel(status);
  items2[2] = gameMentionsAsPlainText;
  const joined = items2.join(", ");
  let obj4 = { onPress, width: null, style: null, accessibilityLabel: null, panelVariant: null, children: null };
  let str = "stretchy";
  const tmp6Result3 = user(8650);
  if (fullwidth) {
    str = "full";
  }
  obj4.width = str;
  obj4.style = tmp.cardContainer;
  obj4.accessibilityLabel = joined;
  obj4.panelVariant = panelVariant;
  let obj5 = { style: tmp.customStatusContainer, children: null };
  if (null != activity.emoji) {
    const obj6 = { style: null, children: null };
    const items3 = [tmp.emojisContainer, ];
    let obj7 = { backgroundColor: tmp3 };
    items3[1] = obj7;
    obj6.style = items3;
    if (tmp6Result4.isAndroid()) {
      let tmp15Result = null != source;
      if (tmp15Result) {
        let obj8 = { source, style: tmp.largeEmoji };
        tmp15Result = closure_11(activity(6156), obj8);
      }
      let tmp15Result3 = tmp15Result;
    } else {
      let obj9 = { emoji: activity.emoji, size: v32, style: tmp.largeEmoji, animate: false };
      tmp15Result3 = closure_11(activity(10256), obj9);
    }
    const items4 = [
      tmp15Result3,
      items1.map((item, index) => {
          if (obj.isAndroid()) {
            let tmp10 = null != first;
            if (tmp10) {
              const obj2 = { source: tmp8, style: null };
              const items = [closure_2.smallEmoji, item];
              obj2.style = items;
              tmp10 = closure_2_11(FastImageDefault, obj2, index);
            }
            let tmp7 = tmp10;
          } else {
            const obj3 = { emoji: activity.emoji, size, style: null, animate: false };
            items1 = [closure_2.smallEmoji, item];
            obj3.style = items1;
            tmp7 = closure_2_11(ActivityEmojiDefault, obj3, index);
          }
          return tmp7;
        })
    ];
    obj6.children = items4;
    const items5 = [closure_12(View, obj6), ];
    const obj10 = { style: tmp.customStatusContextContainer, children: null };
    const obj11 = { user, avatarDecoration: user.avatarDecoration, size: tmp6(1200).AvatarSizes.XSMALL, guildId, status, isMobileOnline, isVROnline, style: tmp.statusAvatar, autoStatusCutout: STATUS_CUTOUT_SMALL };
    const items6 = [closure_11(tmp6(1200).Avatar, obj11), , ];
    const obj12 = { noMargin: true, displayNameFont: displayNameStylesFont, children: userTitle };
    items6[1] = closure_11(tmp6(15567).HappeningNowCardHeader, obj12);
    const state = activity.state;
    let num2;
    if (state != null) {
      num2 = state.length;
    }
    if (num2 == null) {
      num2 = 0;
    }
    let tmp15Result4 = num2 > 0;
    if (tmp15Result4) {
      const obj13 = { ellipsizeMode: "tail", variant: "text-xs/medium", color: "text-default", lineClamp: num, maxFontSizeMultiplier: 2, children: gameMentionsAsPlainText };
      tmp15Result4 = closure_11(tmp6(5088).Text, obj13);
    }
    const obj14 = { children: null };
    items6[2] = tmp15Result4;
    obj10.children = items6;
    items5[1] = closure_12(View, obj10);
    obj14.children = items5;
    let tmp18Result = closure_12(closure_13, obj14);
    tmp6Result4 = tmp6(1382);
  } else {
    const obj15 = { children: null };
    const obj16 = { user, avatarDecoration: user.avatarDecoration, size: tmp6(1200).AvatarSizes.LARGE, guildId, status, isMobileOnline, isVROnline, autoStatusCutout: true };
    const items7 = [closure_11(tmp6(1200).Avatar, obj16), ];
    const obj17 = { style: tmp.customStatusContextContainer, children: null };
    const obj18 = { noMargin: true, displayNameFont: displayNameStylesFont, children: userTitle };
    const items8 = [closure_11(tmp6(15567).HappeningNowCardHeader, obj18), ];
    const obj19 = { ellipsizeMode: "tail", variant: "text-xs/medium", color: "text-default", lineClamp: num, maxFontSizeMultiplier: 2, children: gameMentionsAsPlainText };
    items8[1] = closure_11(tmp6(5088).Text, obj19);
    obj17.children = items8;
    items7[1] = closure_12(View, obj17);
    obj15.children = items7;
    tmp18Result = closure_12(closure_13, obj15);
  }
  obj5.children = tmp18Result;
  obj4.children = closure_11(View, obj5);
  return closure_11(activity(15567), obj4);
});