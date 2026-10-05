// === Module 16001: HappeningNowCustomStatus ===

// Module 16001 (HappeningNowCustomStatus)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ActivityEmojiDefault from "ActivityEmoji" /* 10629 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import PresenceStore from "PresenceStore" /* 4930 */;
import HappeningNowConstants from "HappeningNowConstants" /* 15114 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c2, closure_0, closure_2, dependencyMap, user;

let closure_12;
let closure_14;
let items;
let items2;
let items3;
let items4;
let items5;
let items6;
let map1;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({ View: metroRequire, Image: metroImportDefault } = react_native);
const HAPPENING_NOW_CONTENT_HEIGHT = HappeningNowConstants.HAPPENING_NOW_CONTENT_HEIGHT;
const STATUS_CUTOUT_SMALL = HappeningNowConstants.STATUS_CUTOUT_SMALL;
const StatusTypes = Constants.StatusTypes;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let c15 = 16;
let c16 = 32;
const rect = { left: (HAPPENING_NOW_CONTENT_HEIGHT - 16) / 2, top: -3, transform: items };
items = [{ rotate: "24deg" }];
let items1 = [rect, , , , , ];
const rect1 = { left: HAPPENING_NOW_CONTENT_HEIGHT - 16 + 3, top: (HAPPENING_NOW_CONTENT_HEIGHT - 32 - 16) / 2, transform: items2 };
items2 = [{ rotate: "-12deg" }];
items1[1] = rect1;
const rect2 = { left: HAPPENING_NOW_CONTENT_HEIGHT - 16 + 3, top: (HAPPENING_NOW_CONTENT_HEIGHT - 16 + 32) / 2, transform: items3 };
items3 = [{ rotate: "12deg" }];
items1[2] = rect2;
const rect3 = { left: (HAPPENING_NOW_CONTENT_HEIGHT - 16) / 2, top: HAPPENING_NOW_CONTENT_HEIGHT - 16 + 3, transform: items4 };
items4 = [{ rotate: "-24deg" }];
items1[3] = rect3;
const rect4 = { left: -3, top: (HAPPENING_NOW_CONTENT_HEIGHT - 16 + 32) / 2, transform: items5 };
items5 = [{ rotate: "12deg" }];
items1[4] = rect4;
const rect5 = { left: -3, top: (HAPPENING_NOW_CONTENT_HEIGHT - 32 - 16) / 2, transform: items6 };
items6 = [{ rotate: "-12deg" }];
items1[5] = rect5;
let closure_18 = createStyles.createStyles((arg0) => {
  let num;
  let size1;
  let size2;
  const obj = { customStatusContainer: { flexShrink: 1, flexDirection: "row", alignItems: "center" }, customStatusContextContainer: { flexShrink: 1, flexDirection: "column", marginLeft: 12, gap: 2 }, statusAvatar: { marginBottom: 2 }, largeEmoji: size, smallEmoji: size1, cardContainer: { justifyContent: "center", paddingLeft: num }, emojisContainer: size2 };
  size = { width: v32, height: v32, borderRadius: 2, overflow: "hidden" };
  size1 = { position: "absolute", width: v16, height: v16, borderRadius: 2, opacity: 0.6 };
  num = undefined;
  if (arg0) {
    num = 12;
  }
  size2 = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
  return obj;
});
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let activity;
  let closure_4;
  let closure_5;
  let first;
  let guildId;
  let isMobileOnline;
  let isVROnline;
  let obj8;
  let onPress;
  let panelVariant;
  let status;
  let tmp10;
  let userTitle;
  const tmp2 = dependencyMap;
  let obj = user(576);
  const cResult = obj.c(46);
  user = user.user;
  ({ guildId, activity } = user);
  ({ userTitle, onPress, panelVariant } = user);
  dependencyMap = closure_18(null == activity.emoji);
  let obj2 = react;
  const tmp5 = closure_18(null == activity.emoji);
  [r10028, _asyncToGenerator] = _slicedToArray(react.useState(undefined), 2);
  const tmp6 = _slicedToArray(react.useState(undefined), 2);
  [_slicedToArray, react] = react.useState(undefined);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [PresenceStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    const fn = function p() {
      const status = PresenceStore.getStatus(user.id);
      let tmp3 = null;
      if (status !== StatusTypes.OFFLINE) {
        tmp3 = status;
      }
      const obj2 = { status: tmp3, isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id) };
      return obj2;
    };
    cResult[1] = user.id;
    cResult[2] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  const tmpResult = user(573);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp10);
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  if (cResult[3] === guildId) {
    let tmp12;
    let tmp15;
    let tmp18;
    if (cResult[4] === user.id) {
      tmp12 = cResult[5];
    }
    const tmp14 = activity(5305)(tmp12);
    if (cResult[6] !== tmp14) {
      let obj3 = { displayNameStyles: tmp14 };
      cResult[6] = tmp14;
      cResult[7] = obj3;
      tmp15 = obj3;
    } else {
      tmp15 = cResult[7];
    }
    const tmpResult3 = user(9389);
    const displayNameStylesFont = tmpResult3.useDisplayNameStylesFont(tmp15);
    if (cResult[8] !== activity.emoji) {
      class K {
        constructor() {
          closure_0 = closure_3(async () => {
            let obj2;
            let obj6;
            let v3;
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                let c1;
                let emojiSource;
                let closure_1;
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
                    emojiSource = undefined;
                    closure_1 = undefined;
                    closure_2 = undefined;
                    if (null != c1.emoji) {
                      c2 = 1;
                      v3 = 1;
                      const obj5 = { value: obj6.getEmojiSource(c1.emoji), done: false };
                      obj6 = emojiSource(closure_2_2[15]);
                      return obj5;
                    }
                  }
                } else if (1 === c2) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj7 = { value, done: true };
                    return obj7;
                  } else {
                    emojiSource = value;
                    const obj8 = { emoji: c1.emoji, emojiSource };
                    c2 = 2;
                    v3 = 1;
                    const obj9 = { value: obj2.getEmojiDominantColors(obj8), done: false };
                    obj2 = emojiSource(closure_2_2[16]);
                    return obj9;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  closure_1 = value;
                  if (closure_1.length > 0) {
                    closure_2 = closure_1[0];
                    const _HermesInternal = HermesInternal;
                    v3("rgba(" + closure_2[0] + ", " + closure_2[1] + ", " + closure_2[2] + ", 0.16)");
                  }
                  closure_1_5(emojiSource);
                }
                v3 = 3;
                return { value: "IconComponent", done: null };
              } catch (tmp27) {
                v3 = 3;
                throw tmp27;
              }
            }
          });
          tmp = (function loadEmoji() {
            return closure_0(...arguments);
          })();
          return;
        }
      }
      items1 = [activity.emoji];
      cResult[8] = activity.emoji;
      cResult[9] = K;
      cResult[10] = items1;
      tmp18 = items1;
    } else {
      class K {
        constructor() {
          closure_0 = closure_3(async () => {
            let obj2;
            let obj6;
            let v3;
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                let c1;
                let emojiSource;
                let closure_1;
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
                    emojiSource = undefined;
                    closure_1 = undefined;
                    closure_2 = undefined;
                    if (null != c1.emoji) {
                      c2 = 1;
                      v3 = 1;
                      const obj5 = { value: obj6.getEmojiSource(c1.emoji), done: false };
                      obj6 = emojiSource(closure_2_2[15]);
                      return obj5;
                    }
                  }
                } else if (1 === c2) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj7 = { value, done: true };
                    return obj7;
                  } else {
                    emojiSource = value;
                    const obj8 = { emoji: c1.emoji, emojiSource };
                    c2 = 2;
                    v3 = 1;
                    const obj9 = { value: obj2.getEmojiDominantColors(obj8), done: false };
                    obj2 = emojiSource(closure_2_2[16]);
                    return obj9;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  closure_1 = value;
                  if (closure_1.length > 0) {
                    closure_2 = closure_1[0];
                    const _HermesInternal = HermesInternal;
                    v3("rgba(" + closure_2[0] + ", " + closure_2[1] + ", " + closure_2[2] + ", 0.16)");
                  }
                  closure_1_5(emojiSource);
                }
                v3 = 3;
                return { value: "IconComponent", done: null };
              } catch (tmp27) {
                v3 = 3;
                throw tmp27;
              }
            }
          });
          tmp = (function loadEmoji() {
            return closure_0(...arguments);
          })();
          return;
        }
      }
      tmp18 = cResult[10];
    }
    const effect = obj2.useEffect(K, tmp18);
    if (null != activity.emoji) {
      class K {
        constructor() {
          closure_0 = closure_3(async () => {
            let obj2;
            let obj6;
            let v3;
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                let c1;
                let emojiSource;
                let closure_1;
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
                    emojiSource = undefined;
                    closure_1 = undefined;
                    closure_2 = undefined;
                    if (null != c1.emoji) {
                      c2 = 1;
                      v3 = 1;
                      const obj5 = { value: obj6.getEmojiSource(c1.emoji), done: false };
                      obj6 = emojiSource(closure_2_2[15]);
                      return obj5;
                    }
                  }
                } else if (1 === c2) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj7 = { value, done: true };
                    return obj7;
                  } else {
                    emojiSource = value;
                    const obj8 = { emoji: c1.emoji, emojiSource };
                    c2 = 2;
                    v3 = 1;
                    const obj9 = { value: obj2.getEmojiDominantColors(obj8), done: false };
                    obj2 = emojiSource(closure_2_2[16]);
                    return obj9;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  closure_1 = value;
                  if (closure_1.length > 0) {
                    closure_2 = closure_1[0];
                    const _HermesInternal = HermesInternal;
                    v3("rgba(" + closure_2[0] + ", " + closure_2[1] + ", " + closure_2[2] + ", 0.16)");
                  }
                  closure_1_5(emojiSource);
                }
                v3 = 3;
                return { value: "IconComponent", done: null };
              } catch (tmp27) {
                v3 = 3;
                throw tmp27;
              }
            }
          });
          tmp = (function loadEmoji() {
            return closure_0(...arguments);
          })();
          return;
        }
      }
    }
    const tmpResult4 = user(10613);
    const gameMentionsAsPlainText = tmpResult4.useGameMentionsAsPlainText(activity.state);
    if (cResult[11] !== status) {
      class K {
        constructor() {
          closure_0 = closure_3(async () => {
            let obj2;
            let obj6;
            let v3;
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                let c1;
                let emojiSource;
                let closure_1;
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
                    emojiSource = undefined;
                    closure_1 = undefined;
                    closure_2 = undefined;
                    if (null != c1.emoji) {
                      c2 = 1;
                      v3 = 1;
                      const obj5 = { value: obj6.getEmojiSource(c1.emoji), done: false };
                      obj6 = emojiSource(closure_2_2[15]);
                      return obj5;
                    }
                  }
                } else if (1 === c2) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj7 = { value, done: true };
                    return obj7;
                  } else {
                    emojiSource = value;
                    const obj8 = { emoji: c1.emoji, emojiSource };
                    c2 = 2;
                    v3 = 1;
                    const obj9 = { value: obj2.getEmojiDominantColors(obj8), done: false };
                    obj2 = emojiSource(closure_2_2[16]);
                    return obj9;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  closure_1 = value;
                  if (closure_1.length > 0) {
                    closure_2 = closure_1[0];
                    const _HermesInternal = HermesInternal;
                    v3("rgba(" + closure_2[0] + ", " + closure_2[1] + ", " + closure_2[2] + ", 0.16)");
                  }
                  closure_1_5(emojiSource);
                }
                v3 = 3;
                return { value: "IconComponent", done: null };
              } catch (tmp27) {
                v3 = 3;
                throw tmp27;
              }
            }
          });
          tmp = (function loadEmoji() {
            return closure_0(...arguments);
          })();
          return;
        }
      }
      const statusLabel = obj8.getStatusLabel(status);
      cResult[11] = status;
      cResult[12] = statusLabel;
    } else {
      class K {
        constructor() {
          closure_0 = closure_3(async () => {
            let obj2;
            let obj6;
            let v3;
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                let c1;
                let emojiSource;
                let closure_1;
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
                    emojiSource = undefined;
                    closure_1 = undefined;
                    closure_2 = undefined;
                    if (null != c1.emoji) {
                      c2 = 1;
                      v3 = 1;
                      const obj5 = { value: obj6.getEmojiSource(c1.emoji), done: false };
                      obj6 = emojiSource(closure_2_2[15]);
                      return obj5;
                    }
                  }
                } else if (1 === c2) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj7 = { value, done: true };
                    return obj7;
                  } else {
                    emojiSource = value;
                    const obj8 = { emoji: c1.emoji, emojiSource };
                    c2 = 2;
                    v3 = 1;
                    const obj9 = { value: obj2.getEmojiDominantColors(obj8), done: false };
                    obj2 = emojiSource(closure_2_2[16]);
                    return obj9;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  closure_1 = value;
                  if (closure_1.length > 0) {
                    closure_2 = closure_1[0];
                    const _HermesInternal = HermesInternal;
                    v3("rgba(" + closure_2[0] + ", " + closure_2[1] + ", " + closure_2[2] + ", 0.16)");
                  }
                  closure_1_5(emojiSource);
                }
                v3 = 3;
                return { value: "IconComponent", done: null };
              } catch (tmp27) {
                v3 = 3;
                throw tmp27;
              }
            }
          });
          tmp = (function loadEmoji() {
            return closure_0(...arguments);
          })();
          return;
        }
      }
    }
    if (cResult[13] === gameMentionsAsPlainText) {
      class K {
        constructor() {
          closure_0 = closure_3(async () => {
            let obj2;
            let obj6;
            let v3;
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                let c1;
                let emojiSource;
                let closure_1;
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
                    emojiSource = undefined;
                    closure_1 = undefined;
                    closure_2 = undefined;
                    if (null != c1.emoji) {
                      c2 = 1;
                      v3 = 1;
                      const obj5 = { value: obj6.getEmojiSource(c1.emoji), done: false };
                      obj6 = emojiSource(closure_2_2[15]);
                      return obj5;
                    }
                  }
                } else if (1 === c2) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj7 = { value, done: true };
                    return obj7;
                  } else {
                    emojiSource = value;
                    const obj8 = { emoji: c1.emoji, emojiSource };
                    c2 = 2;
                    v3 = 1;
                    const obj9 = { value: obj2.getEmojiDominantColors(obj8), done: false };
                    obj2 = emojiSource(closure_2_2[16]);
                    return obj9;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  closure_1 = value;
                  if (closure_1.length > 0) {
                    closure_2 = closure_1[0];
                    const _HermesInternal = HermesInternal;
                    v3("rgba(" + closure_2[0] + ", " + closure_2[1] + ", " + closure_2[2] + ", 0.16)");
                  }
                  closure_1_5(emojiSource);
                }
                v3 = 3;
                return { value: "IconComponent", done: null };
              } catch (tmp27) {
                v3 = 3;
                throw tmp27;
              }
            }
          });
          tmp = (function loadEmoji() {
            return closure_0(...arguments);
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
  }
  let obj4 = { userId: user.id, guildId };
  cResult[3] = guildId;
  cResult[4] = user.id;
  cResult[5] = obj4;
  tmp12 = obj4;
}) : ((user) => {
  let activity;
  let c3;
  let closure_5;
  let fullwidth;
  let guildId;
  let isMobileOnline;
  let isVROnline;
  let items3;
  let items4;
  let items6;
  let items7;
  let items8;
  let obj5;
  let onPress;
  let panelVariant;
  let status;
  let str;
  let tmp18Result;
  let tmp3;
  let userTitle;
  user = user.user;
  ({ guildId, activity } = user);
  ({ userTitle, panelVariant } = user);
  ({ fullwidth, onPress } = user);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  c3 = undefined;
  let source;
  react = undefined;
  const tmp = closure_18(null == activity.emoji);
  dependencyMap = tmp;
  let num = 2;
  const tmp2 = source(react.useState(undefined), 2);
  [tmp3, c3] = tmp2;
  const tmp4 = source(react.useState(undefined), 2);
  source = tmp4[0];
  react = tmp4[1];
  let tmp7 = dependencyMap;
  let obj = user(573);
  let items = [PresenceStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const status = PresenceStore.getStatus(user.id);
    let tmp3 = null;
    if (status !== StatusTypes.OFFLINE) {
      tmp3 = status;
    }
    const obj2 = { status: tmp3, isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id) };
    return obj2;
  });
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  let obj2 = { userId: user.id, guildId };
  let tmp10 = activity(5305)(obj2);
  let obj3 = user(9389);
  const displayNameStylesFont = obj3.useDisplayNameStylesFont({ displayNameStyles: tmp10 });
  items1 = [activity.emoji];
  const effect = react.useEffect(() => {
    function loadEmoji() {
      return obj(...arguments);
    }
    let obj = function _loadEmoji2() {
      obj = _asyncToGenerator(async () => {
        let obj2;
        let obj6;
        let v3;
        if (v3 === 2) {
          v3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            let c1;
            let emojiSource;
            let closure_1;
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
                emojiSource = undefined;
                closure_1 = undefined;
                closure_2 = undefined;
                if (null != c1.emoji) {
                  c2 = 1;
                  v3 = 1;
                  const obj5 = { value: obj6.getEmojiSource(c1.emoji), done: false };
                  obj6 = closure_2_0(closure_2_2[15]);
                  return obj5;
                }
              }
            } else if (1 === c2) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                const obj7 = { value, done: true };
                return obj7;
              } else {
                emojiSource = value;
                const obj8 = { emoji: c1.emoji, emojiSource };
                c2 = 2;
                v3 = 1;
                const obj9 = { value: obj2.getEmojiDominantColors(obj8), done: false };
                obj2 = closure_2_0(closure_2_2[16]);
                return obj9;
              }
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = value;
              if (closure_1.length > 0) {
                closure_2 = closure_1[0];
                const _HermesInternal = HermesInternal;
                v3("rgba(" + closure_2[0] + ", " + closure_2[1] + ", " + closure_2[2] + ", 0.16)");
              }
              closure_1_5(emojiSource);
            }
            v3 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp27) {
            v3 = 3;
            throw tmp27;
          }
        }
      });
      return obj(...arguments);
    };
    !loadEmoji();
  }, items1);
  if (null != activity.emoji) {
    num = 1;
  }
  const tmp6Result = user(10613);
  const gameMentionsAsPlainText = tmp6Result.useGameMentionsAsPlainText(activity.state);
  const items2 = [userTitle, , ];
  const tmp6Result3 = user(9260);
  items2[1] = tmp6Result3.getStatusLabel(status);
  items2[2] = gameMentionsAsPlainText;
  const joined = items2.join(", ");
  let obj4 = { onPress, width: str, style: tmp.cardContainer, accessibilityLabel: joined, panelVariant, children: closure_12(closure_6, obj5) };
  str = "stretchy";
  const tmp9Result = activity(15115);
  if (fullwidth) {
    str = "full";
  }
  obj5 = { style: tmp.customStatusContainer, children: tmp18Result };
  if (null != activity.emoji) {
    let tmp15Result3;
    let obj6 = { style: items3, children: items4 };
    items3 = [tmp.emojisContainer, ];
    let obj7 = { backgroundColor: tmp3 };
    items3[1] = obj7;
    const tmp6Result4 = user(1369);
    if (tmp6Result4.isAndroid()) {
      let tmp15Result = null != source;
      if (tmp15Result) {
        let obj8 = { source, style: tmp.largeEmoji };
        tmp15Result = closure_12(closure_7, obj8);
      }
      tmp15Result3 = tmp15Result;
    } else {
      let obj9 = { emoji: activity.emoji, size: v32, style: tmp.largeEmoji, animate: false };
      tmp15Result3 = closure_12(activity(10629), obj9);
    }
    items4 = [
      tmp15Result3,
      items1.map((item, index) => {
          let items;
          let tmp7;
          const obj = PlatformUtils;
          if (obj.isAndroid()) {
            let tmp10 = null != first;
            if (tmp10) {
              const obj2 = { source: tmp8, style: items };
              items = [closure_2.smallEmoji, item];
              tmp10 = closure_12(metroImportDefault, obj2, index);
            }
            tmp7 = tmp10;
          } else {
            const obj3 = { emoji: activity.emoji, size, style: items1, animate: false };
            items1 = [closure_2.smallEmoji, item];
            tmp7 = closure_12(ActivityEmojiDefault, obj3, index);
          }
          return tmp7;
        })
    ];
    const items5 = [closure_13(closure_6, obj6), ];
    const obj10 = { style: tmp.customStatusContextContainer, children: items6 };
    const obj11 = { user, avatarDecoration: user.avatarDecoration, size: user(1188).AvatarSizes.XSMALL, guildId, status, isMobileOnline, isVROnline, style: tmp.statusAvatar, autoStatusCutout: STATUS_CUTOUT_SMALL };
    const Avatar = tmp6(1188).Avatar;
    items6 = [closure_12(Avatar, obj11), , ];
    const obj12 = { noMargin: true, displayNameFont: displayNameStylesFont, children: userTitle };
    items6[1] = closure_12(user(15115).HappeningNowCardHeader, obj12);
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
      tmp15Result4 = closure_12(tmp6(4886).Text, obj13);
    }
    const obj14 = { children: items5 };
    items6[2] = tmp15Result4;
    items5[1] = closure_13(closure_6, obj10);
    tmp18Result = closure_13(closure_14, obj14);
  } else {
    const obj15 = { children: items7 };
    const obj16 = { user, avatarDecoration: user.avatarDecoration, size: user(1188).AvatarSizes.LARGE, guildId, status, isMobileOnline, isVROnline, autoStatusCutout: true };
    const Avatar2 = tmp6(1188).Avatar;
    items7 = [closure_12(Avatar2, obj16), ];
    const obj17 = { style: tmp.customStatusContextContainer, children: items8 };
    const obj18 = { noMargin: true, displayNameFont: displayNameStylesFont, children: userTitle };
    items8 = [closure_12(tmp6(15115).HappeningNowCardHeader, obj18), ];
    const obj19 = { ellipsizeMode: "tail", variant: "text-xs/medium", color: "text-default", lineClamp: num, maxFontSizeMultiplier: 2, children: gameMentionsAsPlainText };
    items8[1] = closure_12(user(4886).Text, obj19);
    items7[1] = closure_13(closure_6, obj17);
    tmp18Result = closure_13(closure_14, obj15);
  }
  return closure_12(tmp9Result, obj4);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCustomStatus.tsx");

export const CustomStatusActivityCard = tmp5;