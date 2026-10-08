// === Module 10952: UserSummaryItem ===

// Module 10952 (UserSummaryItem)
import nativeDefault from "native" /* 587 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = { container: { flexDirection: "row" }, names: { marginStart: 4, paddingRight: 1 }, namesLegacy: { marginStart: 4, paddingRight: 1, color: nativeDefault.colors.TEXT_SUBTLE }, plusCountContainer: null, cutout: null };
let obj3 = { marginStart: 4, paddingRight: 1, color: nativeDefault.colors.TEXT_SUBTLE };
obj2.plusCountContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginStart: 2, alignItems: "center" };
obj2.cutout = { marginRight: -4 };
let closure_6 = createStyles.createStyles(obj2);
let obj5 = { direction: fn(1200).CutoutDirection.RIGHT };
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginStart: 2, alignItems: "center" };
let size = fn(2);
let result = size.fileFinishedImporting("components_native/common/UserSummaryItem.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserSummaryItem(arg0) {
  const cResult = require("c").c(63);
  ({ style, namesStyle, namesVariant, max, users } = arg0);
  _require = users;
  ({ renderedUsers, withNames, channelId, guildId } = arg0);
  importDefault = guildId;
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
    let arr = items;
  } else {
    arr = cResult[1];
  }
  if (undefined === avatarSize) {
    avatarSize = tmp(tmp2[6]).AvatarSizes.XXSMALL;
  }
  if (undefined === cutout) {
    cutout = obj5;
  }
  const tmp4 = closure_6();
  const tmp5 = arr.length > 0 ? arr.length : users.length;
  const bound = Math.min(tmp5, num);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = {};
    cResult[2] = obj2;
    let tmp7 = obj2;
  } else {
    tmp7 = cResult[2];
  }
  closure_3 = tmp7;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildMemberStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === guildId) {
    if (cResult[5] === users) {
      let tmp10 = cResult[6];
    }
    const stateFromStores = tmp(tmp2[9]).useStateFromStores(tmp8, tmp10);
    if (0 === bound) {
      return null;
    } else {
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
                                      let tmp12 = cResult[23];
                                    }
                                    if (cResult[57] === style) {
                                      if (cResult[58] === tmp4.container) {
                                        let tmp65 = cResult[59];
                                      }
                                      if (cResult[60] === tmp12) {
                                        if (cResult[61] === tmp65) {
                                          let tmp66 = cResult[62];
                                        }
                                        return tmp66;
                                      }
                                      const obj3 = { style: tmp65, children: tmp12 };
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
            _require = tmp17;
            let id;
            if (tmp17 != null) {
              id = tmp17.id;
            }
            if (id == null) {
              let _HermesInternal = HermesInternal;
              id = "@" + num5;
            }
            let tmp20 = avatarSize;
            let obj4 = require("AvatarUtils");
            let fn = obj4.makeSource(null);
            if (null != tmp17) {
              importDefault = tmp7[tmp17.id];
              fn = function u(arg0) {
                const avatarURL = closure_0.getAvatarURL(importDefault, closure_0(avatarSize[6]).AVATAR_SIZE_MAP[dependencyMap], tmp);
                let avatar;
                if (closure_1 != null) {
                  avatar = closure_1.avatar;
                }
                let tmp6 = avatarURL;
                if (null != avatar) {
                  let guildMemberAvatarURL = closure_1(avatarSize[10]).getGuildMemberAvatarURL(closure_1, tmp);
                  if (guildMemberAvatarURL == null) {
                    guildMemberAvatarURL = avatarURL;
                  }
                  tmp6 = guildMemberAvatarURL;
                  const obj = closure_1(avatarSize[10]);
                }
                return closure_1(avatarSize[10]).makeSource(tmp6);
              };
            }
            if (num5 < diff) {
              obj5 = { size: avatarSize, source: fn, style: null, cutout: null };
              let items4 = [tmp4.cutout, cutoutStyle];
              obj5.style = items4;
              obj5.cutout = cutout;
              let arr2 = items3.push(jsx(require("native").CutoutableAvatarImage, { size: avatarSize, source: fn, style: null, cutout: null }, id));
            } else {
              let obj6 = { size: avatarSize, source: fn };
              let arr3 = items3.push(jsx(require("native").CutoutableAvatarImage, { size: avatarSize, source: fn }, id));
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
              if (cResult[28] === withNames) {
                let tmp27 = cResult[29];
              }
              if (withNames) {
                if (null != users[0]) {
                  const _HermesInternal3 = HermesInternal;
                  const combined = "username-" + tmp27;
                  if (null != namesVariant) {
                    if (cResult[30] === namesStyle) {
                      if (cResult[31] === tmp4.names) {
                        let tmp41 = cResult[32];
                      }
                      if (cResult[33] === combined) {
                        if (cResult[34] === tmp27) {
                          if (cResult[35] === namesVariant) {
                            if (cResult[36] === tmp41) {
                              let tmp42 = cResult[37];
                            }
                            items3.push(tmp42);
                          }
                        }
                      }
                      const obj8 = { variant: namesVariant, color: "redesign-channel-name-muted-text", style: tmp41, lineClamp: 1, children: tmp27 };
                      const tmp46 = jsx(require("Text/Text").Text, { variant: namesVariant, color: "redesign-channel-name-muted-text", style: tmp41, lineClamp: 1, children: tmp27 }, combined);
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
                      if (cResult[39] === tmp4.namesLegacy) {
                        let tmp34 = cResult[40];
                      }
                      if (cResult[41] === combined) {
                        if (cResult[42] === tmp27) {
                          if (cResult[43] === tmp34) {
                            let tmp35 = cResult[44];
                          }
                          items3.push(tmp35);
                        }
                      }
                      const obj9 = { style: tmp34, numberOfLines: 1, children: tmp27 };
                      const tmp39 = jsx(require("native").LegacyText, { style: tmp34, numberOfLines: 1, children: tmp27 }, combined);
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
                  const tmp52 = require("native").AVATAR_SIZE_MAP[avatarSize];
                  const _HermesInternal2 = HermesInternal;
                  const combined1 = "plus-" + `+${tmp5 + 1 - num}`;
                  const result = tmp52 / 8;
                  if (cResult[45] === tmp52) {
                    if (cResult[46] === result) {
                      let tmp55 = cResult[47];
                    }
                    if (cResult[48] === tmp4.plusCountContainer) {
                      if (cResult[49] === tmp55) {
                        let tmp56 = cResult[50];
                      }
                      if (cResult[51] !== text) {
                        const obj10 = { variant: "text-xs/normal", color: "mobile-text-heading-primary", children: text };
                        const tmp59 = jsx(tmp50(tmp51[13]).Text, { variant: "text-xs/normal", color: "mobile-text-heading-primary", children: text });
                        cResult[51] = text;
                        cResult[52] = tmp59;
                        let tmp57 = tmp59;
                      } else {
                        tmp57 = cResult[52];
                      }
                      if (cResult[53] === tmp56) {
                        if (cResult[54] === tmp57) {
                          if (cResult[55] === combined1) {
                            let tmp60 = cResult[56];
                          }
                          items3.push(tmp60);
                        }
                      }
                      const obj11 = { style: tmp56, children: tmp57 };
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
                  const size = { borderRadius: tmp52, width: tmp52, height: tmp52, padding: result };
                  cResult[45] = tmp52;
                  cResult[46] = result;
                  cResult[47] = size;
                  tmp55 = size;
                  tmp50 = _require;
                  tmp51 = avatarSize;
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
      const name = require("NicknameUtils").getName(guildId, channelId, users[0]);
      let tmp31 = withNames;
      if (withNames) {
        tmp31 = users.length > 1;
      }
      let formatToPlainStringResult = name;
      if (tmp31) {
        const intl = require("util").intl;
        const obj12 = { name, count: users.length - 1 };
        formatToPlainStringResult = intl.formatToPlainString(require("util").t.GhkJ21, obj12);
      }
      cResult[24] = channelId;
      cResult[25] = guildId;
      cResult[26] = users[0];
      cResult[27] = users.length;
      cResult[28] = withNames;
      cResult[29] = formatToPlainStringResult;
      tmp27 = formatToPlainStringResult;
      const obj7 = require("NicknameUtils");
    }
    const tmpResult = tmp(tmp2[9]);
  }
  class V {
    constructor() {
      return closure_0.forEach((id) => {
        let tmp2 = null != closure_1_1;
        if (tmp2) {
          tmp2 = null != id;
        }
        if (tmp2) {
          closure_1_3[id.id] = member.getMember(closure_1_1, id.id);
        }
      });
    }
  }
  cResult[4] = guildId;
  cResult[5] = users;
  cResult[6] = V;
  tmp10 = V;
  let obj = require("c");
}) : (function UserSummaryItem(users) {
  ({ namesStyle, namesVariant, max } = users);
  if (max === undefined) {
    max = 3;
  }
  users = users.users;
  _require = users;
  let renderedUsers = users.renderedUsers;
  if (renderedUsers === undefined) {
    renderedUsers = [];
  }
  ({ withNames, guildId } = users);
  importDefault = guildId;
  ({ avatarSize, channelId } = users);
  if (avatarSize === undefined) {
    avatarSize = require("native").AvatarSizes.XXSMALL;
  }
  ({ cutout, withPlusCount } = users);
  if (cutout === undefined) {
    cutout = obj5;
  }
  const tmp4 = closure_6();
  let tmp5 = renderedUsers.length > 0 ? renderedUsers.length : users.length;
  const bound = Math.min(tmp5, max);
  let obj = {};
  const items = [GuildMemberStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => closure_0.forEach((id) => {
    let tmp2 = null != closure_1_1;
    if (tmp2) {
      tmp2 = null != id;
    }
    if (tmp2) {
      obj[id.id] = member.getMember(closure_1_1, id.id);
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
          let tmp11 = users[num];
          _require = tmp11;
          let id;
          if (tmp11 != null) {
            id = tmp11.id;
          }
          if (id == null) {
            let _HermesInternal = HermesInternal;
            id = "@" + num;
          }
          let tmp14 = avatarSize;
          let obj3 = require("AvatarUtils");
          let fn = obj3.makeSource(null);
          if (null != tmp11) {
            importDefault = obj[tmp11.id];
            fn = function u() {
              if (flag === undefined) {
                flag = false;
              }
              const avatarURL = closure_0.getAvatarURL(importDefault, closure_0(avatarSize[6]).AVATAR_SIZE_MAP[dependencyMap], flag);
              let avatar;
              if (closure_1 != null) {
                avatar = closure_1.avatar;
              }
              let tmp5 = avatarURL;
              if (null != avatar) {
                let guildMemberAvatarURL = closure_1(avatarSize[10]).getGuildMemberAvatarURL(closure_1, flag);
                if (guildMemberAvatarURL == null) {
                  guildMemberAvatarURL = avatarURL;
                }
                tmp5 = guildMemberAvatarURL;
                obj = closure_1(avatarSize[10]);
              }
              return closure_1(avatarSize[10]).makeSource(tmp5);
            };
          }
          if (num < tmp43) {
            let obj4 = { size: avatarSize, source: fn, style: null, cutout: null };
            let items2 = [tmp4.cutout, tmp3];
            obj4.style = items2;
            obj4.cutout = cutout;
            let arr = items1.push(jsx(require("native").CutoutableAvatarImage, { size: avatarSize, source: fn, style: null, cutout: null }, id));
          } else {
            obj5 = { size: avatarSize, source: fn };
            let arr2 = items1.push(jsx(require("native").CutoutableAvatarImage, { size: avatarSize, source: fn }, id));
          }
        } else {
          let arr3 = items1.push(renderedUsers[num]);
        }
        num = num2 + 1;
        num2 = num;
      } while (num < bound);
    }
    const name = require("NicknameUtils").getName(guildId, channelId, users[0]);
    let tmp24 = withNames;
    if (withNames) {
      tmp24 = users.length > 1;
    }
    let formatToPlainStringResult = name;
    if (tmp24) {
      const intl = require("util").intl;
      const obj7 = { name, count: users.length - 1 };
      formatToPlainStringResult = intl.formatToPlainString(require("util").t.GhkJ21, obj7);
    }
    if (withNames) {
      if (null != users[0]) {
        const _HermesInternal3 = HermesInternal;
        const combined = "username-" + formatToPlainStringResult;
        if (null != namesVariant) {
          const obj8 = { variant: namesVariant, color: "redesign-channel-name-muted-text", style: null, lineClamp: 1, children: null };
          const items3 = [tmp4.names, namesStyle];
          obj8.style = items3;
          obj8.children = formatToPlainStringResult;
          items1.push(jsx(require("Text/Text").Text, { variant: namesVariant, color: "redesign-channel-name-muted-text", style: null, lineClamp: 1, children: null }, combined));
        } else {
          const obj9 = { style: null, numberOfLines: 1, children: null };
          const items4 = [tmp4.namesLegacy, namesStyle];
          obj9.style = items4;
          obj9.children = formatToPlainStringResult;
          items1.push(jsx(require("native").LegacyText, { style: null, numberOfLines: 1, children: null }, combined));
        }
      }
    }
    if (tmp5 > max) {
      if (withPlusCount) {
        items1.pop();
        const text = `+${tmp5 + 1 - max}`;
        const tmp36 = require("native").AVATAR_SIZE_MAP[avatarSize];
        const obj10 = { style: null, children: null };
        const items5 = [tmp4.plusCountContainer, ];
        const size = { borderRadius: tmp36, width: tmp36, height: tmp36, padding: tmp36 / 8 };
        items5[1] = size;
        obj10.style = items5;
        const obj11 = { variant: "text-xs/normal", color: "mobile-text-heading-primary", children: text };
        obj10.children = jsx(require("Text/Text").Text, { variant: "text-xs/normal", color: "mobile-text-heading-primary", children: text });
        const _HermesInternal2 = HermesInternal;
        items1.push(<obj key={"plus-" + `+${tmp5 + 1 - max}`} style={null}>{null}</obj>);
      }
    }
    const obj12 = { style: null, children: null };
    const items6 = [users.style, tmp4.container];
    obj12.style = items6;
    obj12.children = items1;
    return <obj style={null}>{null}</obj>;
  }
  const obj2 = require("initialize");
});