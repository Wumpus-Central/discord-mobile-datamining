// === Module 9738: UserSummaryItem ===

// Module 9738 (UserSummaryItem)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let avatarURL;

let obj2;
let obj3;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "row" }, names: { marginStart: 4, paddingRight: 1 }, namesLegacy: obj2, plusCountContainer: obj3, cutout: { marginRight: -4 } };
obj2 = { marginStart: 4, paddingRight: 1, color: nativeDefault.colors.TEXT_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginStart: 2, alignItems: "center" };
let closure_6 = createStyles(obj);
let obj4 = { direction: native.CutoutDirection.RIGHT };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let arr;
  let avatarSize;
  let channelId;
  let cutout;
  let cutoutStyle;
  let guildId;
  let max;
  let member;
  let namesStyle;
  let namesVariant;
  let renderedUsers;
  let style;
  let tmp7;
  let tmp8;
  let users;
  let withNames;
  let withPlusCount;
  let tmp2 = avatarSize;
  let obj = users(avatarSize[8]);
  const cResult = obj.c(63);
  ({ style, namesStyle, namesVariant, max, users } = arg0);
  ({ renderedUsers, withNames, channelId, guildId } = arg0);
  ({ avatarSize, withPlusCount, cutout, cutoutStyle } = arg0);
  let num = 3;
  if (undefined !== max) {
    num = max;
  }
  if (cResult[0] !== renderedUsers) {
    let items = renderedUsers;
    if (undefined === renderedUsers) {
      items = [];
    }
    cResult[0] = renderedUsers;
    cResult[1] = items;
    arr = items;
  } else {
    arr = cResult[1];
  }
  if (undefined === avatarSize) {
    avatarSize = users(tmp2[6]).AvatarSizes.XXSMALL;
  }
  if (undefined === cutout) {
    cutout = obj4;
  }
  const tmp4 = closure_6();
  const tmp5 = arr.length > 0 ? arr.length : users.length;
  const bound = Math.min(tmp5, num);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = {};
    cResult[2] = obj2;
    tmp7 = obj2;
  } else {
    tmp7 = cResult[2];
  }
  let closure_3 = tmp7;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildMemberStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === guildId) {
    let tmp10;
    if (cResult[5] === users) {
      tmp10 = cResult[6];
    }
    const tmpResult = users(tmp2[9]);
    const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp10);
    if (0 === bound) {
      return null;
    } else {
      let tmp12;
      const diff = bound - 1;
      if (cResult[7] === avatarSize) {
        if (cResult[8] === channelId) {
          if (cResult[9] === cutout) {
            if (cResult[10] === cutoutStyle) {
              if (cResult[11] === guildId) {
                if (cResult[12] === diff) {
                  if (cResult[13] === num) {
                    if (cResult[14] === namesStyle) {
                      if (cResult[15] === namesVariant) {
                        if (cResult[16] === arr) {
                          if (cResult[17] === tmp4) {
                            if (cResult[18] === tmp5) {
                              if (cResult[19] === users) {
                                if (cResult[20] === bound) {
                                  if (cResult[21] === withNames) {
                                    if (cResult[22] === withPlusCount) {
                                      tmp12 = cResult[23];
                                    }
                                    if (cResult[57] === style) {
                                      let tmp65;
                                      if (cResult[58] === tmp4.container) {
                                        tmp65 = cResult[59];
                                      }
                                      if (cResult[60] === tmp12) {
                                        let tmp66;
                                        if (cResult[61] === tmp65) {
                                          tmp66 = cResult[62];
                                        }
                                        return tmp66;
                                      }
                                      const tmp69 = <closure_3 style={tmp65}>{tmp12}</closure_3>;
                                      cResult[60] = tmp12;
                                      cResult[61] = tmp65;
                                      cResult[62] = tmp69;
                                      tmp66 = tmp69;
                                    }
                                    const items2 = [style, tmp4.container];
                                    cResult[57] = style;
                                    cResult[58] = tmp4.container;
                                    cResult[59] = items2;
                                    tmp65 = items2;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      const items3 = [];
      let num5 = 0;
      let num6 = 0;
      if (0 < bound) {
        do {
          if (0 === arr.length) {
            let tmp17 = users[num5];
            let closure_0 = tmp17;
            let id;
            if (tmp17 != null) {
              id = tmp17.id;
            }
            if (id == null) {
              let _HermesInternal = HermesInternal;
              id = "@" + num5;
            }
            let tmp20 = avatarSize;
            obj4 = guildId(avatarSize[10]);
            let fn = obj4.makeSource(null);
            if (null != tmp17) {
              let closure_1 = tmp7[tmp17.id];
              fn = function u(arg0) {
                avatarURL = avatarURL.getAvatarURL(guildId, native.AVATAR_SIZE_MAP[avatarSize], tmp);
                let avatar;
                if (user != null) {
                  avatar = user.avatar;
                }
                let tmp6 = avatarURL;
                if (null != avatar) {
                  const obj = AvatarUtilsDefault;
                  let guildMemberAvatarURL = obj.getGuildMemberAvatarURL(user, tmp);
                  if (guildMemberAvatarURL == null) {
                    guildMemberAvatarURL = avatarURL;
                  }
                  tmp6 = guildMemberAvatarURL;
                }
                const obj2 = AvatarUtilsDefault;
                return obj2.makeSource(tmp6);
              };
            }
            if (num5 < diff) {
              let items4 = [tmp4.cutout, cutoutStyle];
              let arr2 = items3.push(jsx(users(tmp20[6]).CutoutableAvatarImage, { size: avatarSize, source: fn, style: items4, cutout }, id));
            } else {
              let arr3 = items3.push(jsx(users(tmp20[6]).CutoutableAvatarImage, { size: avatarSize, source: fn }, id));
            }
          } else {
            let arr4 = items3.push(arr[num5]);
          }
          num5 = num6 + 1;
          num6 = num5;
        } while (num5 < bound);
      }
      if (cResult[24] === channelId) {
        if (cResult[25] === guildId) {
          if (cResult[26] === users[0]) {
            if (cResult[27] === users.length) {
              let tmp27;
              if (cResult[28] === withNames) {
                tmp27 = cResult[29];
              }
              if (withNames) {
                if (null != users[0]) {
                  const _HermesInternal3 = HermesInternal;
                  const combined = "username-" + tmp27;
                  if (null != namesVariant) {
                    if (cResult[30] === namesStyle) {
                      let tmp41;
                      if (cResult[31] === tmp4.names) {
                        tmp41 = cResult[32];
                      }
                      if (cResult[33] === combined) {
                        if (cResult[34] === tmp27) {
                          if (cResult[35] === namesVariant) {
                            let tmp42;
                            if (cResult[36] === tmp41) {
                              tmp42 = cResult[37];
                            }
                            items3.push(tmp42);
                          }
                        }
                      }
                      const tmp46 = jsx(users(avatarSize[13]).Text, { variant: namesVariant, color: "redesign-channel-name-muted-text", style: tmp41, lineClamp: 1, children: tmp27 }, combined);
                      cResult[33] = combined;
                      cResult[34] = tmp27;
                      cResult[35] = namesVariant;
                      cResult[36] = tmp41;
                      cResult[37] = tmp46;
                      tmp42 = tmp46;
                    }
                    const items5 = [tmp4.names, namesStyle];
                    cResult[30] = namesStyle;
                    cResult[31] = tmp4.names;
                    cResult[32] = items5;
                    tmp41 = items5;
                  } else {
                    if (cResult[38] === namesStyle) {
                      let tmp34;
                      if (cResult[39] === tmp4.namesLegacy) {
                        tmp34 = cResult[40];
                      }
                      if (cResult[41] === combined) {
                        if (cResult[42] === tmp27) {
                          let tmp35;
                          if (cResult[43] === tmp34) {
                            tmp35 = cResult[44];
                          }
                          items3.push(tmp35);
                        }
                      }
                      const tmp39 = jsx(users(avatarSize[6]).LegacyText, { style: tmp34, numberOfLines: 1, children: tmp27 }, combined);
                      cResult[41] = combined;
                      cResult[42] = tmp27;
                      cResult[43] = tmp34;
                      cResult[44] = tmp39;
                      tmp35 = tmp39;
                    }
                    const items6 = [tmp4.namesLegacy, namesStyle];
                    cResult[38] = namesStyle;
                    cResult[39] = tmp4.namesLegacy;
                    cResult[40] = items6;
                    tmp34 = items6;
                  }
                }
              }
              if (tmp5 > num) {
                if (withPlusCount) {
                  items3.pop();
                  const text = `+${tmp5 + 1 - num}`;
                  const tmp52 = users(avatarSize[6]).AVATAR_SIZE_MAP[avatarSize];
                  const _HermesInternal2 = HermesInternal;
                  const combined1 = "plus-" + `+${tmp5 + 1 - num}`;
                  const result = tmp52 / 8;
                  const tmp51 = avatarSize;
                  if (cResult[45] === tmp52) {
                    let tmp55;
                    if (cResult[46] === result) {
                      tmp55 = cResult[47];
                    }
                    if (cResult[48] === tmp4.plusCountContainer) {
                      let tmp56;
                      let tmp57;
                      if (cResult[49] === tmp55) {
                        tmp56 = cResult[50];
                      }
                      if (cResult[51] !== text) {
                        const tmp59 = jsx(users(tmp51[13]).Text, { variant: "text-xs/normal", color: "mobile-text-heading-primary", children: text });
                        cResult[51] = text;
                        cResult[52] = tmp59;
                        tmp57 = tmp59;
                      } else {
                        tmp57 = cResult[52];
                      }
                      if (cResult[53] === tmp56) {
                        if (cResult[54] === tmp57) {
                          let tmp60;
                          if (cResult[55] === combined1) {
                            tmp60 = cResult[56];
                          }
                          items3.push(tmp60);
                        }
                      }
                      const tmp63 = <closure_3 key={combined1} style={tmp56}>{tmp57}</closure_3>;
                      cResult[53] = tmp56;
                      cResult[54] = tmp57;
                      cResult[55] = combined1;
                      cResult[56] = tmp63;
                      tmp60 = tmp63;
                    }
                    const items7 = [tmp4.plusCountContainer, tmp55];
                    cResult[48] = tmp4.plusCountContainer;
                    cResult[49] = tmp55;
                    cResult[50] = items7;
                    tmp56 = items7;
                  }
                  size = { borderRadius: tmp52, width: tmp52, height: tmp52, padding: result };
                  cResult[45] = tmp52;
                  cResult[46] = result;
                  cResult[47] = size;
                  tmp55 = size;
                }
              }
              cResult[7] = avatarSize;
              cResult[8] = channelId;
              cResult[9] = cutout;
              cResult[10] = cutoutStyle;
              cResult[11] = guildId;
              cResult[12] = diff;
              cResult[13] = num;
              cResult[14] = namesStyle;
              cResult[15] = namesVariant;
              cResult[16] = arr;
              cResult[17] = tmp4;
              cResult[18] = tmp5;
              cResult[19] = users;
              cResult[20] = bound;
              cResult[21] = withNames;
              cResult[22] = withPlusCount;
              cResult[23] = items3;
              tmp12 = items3;
            }
          }
        }
      }
      const obj7 = guildId(avatarSize[11]);
      const name = obj7.getName(guildId, channelId, users[0]);
      let formatToPlainStringResult = name;
      const tmp31 = withNames && users.length > 1;
      if (tmp31) {
        const intl = users(tmp29[12]).intl;
        const obj12 = { name, count: users.length - 1 };
        formatToPlainStringResult = intl.formatToPlainString(users(tmp29[12]).t.GhkJ21, obj12);
      }
      cResult[24] = channelId;
      cResult[25] = guildId;
      cResult[26] = users[0];
      cResult[27] = users.length;
      cResult[28] = withNames;
      cResult[29] = formatToPlainStringResult;
      tmp27 = formatToPlainStringResult;
    }
  }
  class V {
    constructor() {
      return users.forEach((id) => {
        const tmp2 = null != guildId && null != id;
        if (tmp2) {
          closure_1_3[id.id] = member.getMember(guildId, id.id);
        }
      });
    }
  }
  cResult[4] = guildId;
  cResult[5] = users;
  cResult[6] = V;
  tmp10 = V;
}) : (function UserSummaryItem(style) {
  let avatarSize;
  let channelId;
  let cutout;
  let guildId;
  let max;
  let member;
  let namesStyle;
  let namesVariant;
  let withNames;
  let withPlusCount;
  ({ namesStyle, namesVariant, max } = style);
  style = style.style;
  if (max === undefined) {
    max = 3;
  }
  const users = style.users;
  let renderedUsers = style.renderedUsers;
  if (renderedUsers === undefined) {
    renderedUsers = [];
  }
  ({ withNames, guildId } = style);
  ({ avatarSize, channelId } = style);
  if (avatarSize === undefined) {
    let tmp2 = avatarSize;
    avatarSize = users(avatarSize[6]).AvatarSizes.XXSMALL;
  }
  ({ cutout, withPlusCount } = style);
  if (cutout === undefined) {
    cutout = obj4;
  }
  const cutoutStyle = style.cutoutStyle;
  const tmp3 = closure_6();
  const tmp4 = renderedUsers.length > 0 ? renderedUsers.length : users.length;
  const bound = Math.min(tmp4, max);
  let obj = {};
  let obj2 = users(avatarSize[9]);
  const items = [GuildMemberStore];
  const stateFromStores = obj2.useStateFromStores(items, () => users.forEach((id) => {
    const tmp2 = null != guildId && null != id;
    if (tmp2) {
      obj[id.id] = member.getMember(guildId, id.id);
    }
  }));
  if (0 === bound) {
    return null;
  } else {
    const items1 = [];
    let num = 0;
    let num2 = 0;
    if (0 < bound) {
      do {
        if (0 === renderedUsers.length) {
          let tmp10 = users[num];
          let closure_0 = tmp10;
          let id;
          if (tmp10 != null) {
            id = tmp10.id;
          }
          if (id == null) {
            let _HermesInternal = HermesInternal;
            id = "@" + num;
          }
          let tmp13 = avatarSize;
          let obj3 = guildId(avatarSize[10]);
          let fn = obj3.makeSource(null);
          if (null != tmp10) {
            let closure_1 = obj[tmp10.id];
            fn = function u() {
              avatarURL = avatarURL.getAvatarURL(guildId, native.AVATAR_SIZE_MAP[avatarSize], flag);
              let avatar;
              if (user != null) {
                avatar = user.avatar;
              }
              let tmp5 = avatarURL;
              if (null != avatar) {
                obj = AvatarUtilsDefault;
                let guildMemberAvatarURL = obj.getGuildMemberAvatarURL(user, flag);
                if (guildMemberAvatarURL == null) {
                  guildMemberAvatarURL = avatarURL;
                }
                tmp5 = guildMemberAvatarURL;
              }
              const obj2 = AvatarUtilsDefault;
              return obj2.makeSource(tmp5);
            };
          }
          if (num < tmp42) {
            let items2 = [tmp3.cutout, cutoutStyle];
            let arr = items1.push(jsx(users(tmp13[6]).CutoutableAvatarImage, { size: avatarSize, source: fn, style: items2, cutout }, id));
          } else {
            let arr2 = items1.push(jsx(users(tmp13[6]).CutoutableAvatarImage, { size: avatarSize, source: fn }, id));
          }
        } else {
          let arr3 = items1.push(renderedUsers[num]);
        }
        num = num2 + 1;
        num2 = num;
      } while (num < bound);
    }
    const obj6 = guildId(avatarSize[11]);
    const name = obj6.getName(guildId, channelId, users[0]);
    let formatToPlainStringResult = name;
    const tmp23 = withNames && users.length > 1;
    if (tmp23) {
      const intl = users(tmp21[12]).intl;
      const obj7 = { name, count: users.length - 1 };
      formatToPlainStringResult = intl.formatToPlainString(users(tmp21[12]).t.GhkJ21, obj7);
    }
    if (withNames) {
      if (null != users[0]) {
        const _HermesInternal3 = HermesInternal;
        const combined = "username-" + formatToPlainStringResult;
        if (null != namesVariant) {
          const items3 = [tmp3.names, namesStyle];
          items1.push(jsx(users(avatarSize[13]).Text, { variant: namesVariant, color: "redesign-channel-name-muted-text", style: items3, lineClamp: 1, children: formatToPlainStringResult }, combined));
        } else {
          const items4 = [tmp3.namesLegacy, namesStyle];
          items1.push(jsx(users(avatarSize[6]).LegacyText, { style: items4, numberOfLines: 1, children: formatToPlainStringResult }, combined));
        }
      }
    }
    if (tmp4 > max) {
      if (withPlusCount) {
        items1.pop();
        const text = `+${tmp4 + 1 - max}`;
        const tmp35 = users(avatarSize[6]).AVATAR_SIZE_MAP[avatarSize];
        const items5 = [tmp3.plusCountContainer, ];
        size = { borderRadius: tmp35, width: tmp35, height: tmp35, padding: tmp35 / 8 };
        items5[1] = size;
        const push = items1.push;
        const _HermesInternal2 = HermesInternal;
        push(<obj key={"plus-" + `+${tmp4 + 1 - max}`} style={items5}>{null}</obj>);
      }
    }
    const items6 = [style, tmp3.container];
    return <obj style={items6}>{items1}</obj>;
  }
});
let size = size_mod;
let result = size.fileFinishedImporting("components_native/common/UserSummaryItem.tsx");

export default tmp4;