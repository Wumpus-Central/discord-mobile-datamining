// === Module 12127: ChannelAccessInfo ===

// Module 12127 (ChannelAccessInfo)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import ChannelPermissionsUtils from "ChannelPermissionsUtils" /* 9215 */;
import channel_permissions_ChannelPermissionsUtils from "channel_permissions/ChannelPermissionsUtils" /* 11230 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;

require = fn;
const View = fn(17).View;
const isGuildOwner = fn(2070).isGuildOwner;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
let c11 = 100;
const createStyles = fn(4890);
let obj2 = { section: { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, color: nativeDefault.colors.TEXT_DEFAULT, flexDirection: "row", marginBottom: 8, marginTop: 8, padding: 16 }, sectionContent: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, avatar: { marginRight: 8 }, labelDetail: { marginRight: 12 }, sectionIcon: { marginRight: 6 } };
let closure_12 = createStyles.createStyles(obj2);
const constants = { MEMBERS: 0, [0]: "MEMBERS", ROLES: 1, [1]: "ROLES" };
const ReactCompilerGating = fn(558);
let obj3 = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, color: nativeDefault.colors.TEXT_DEFAULT, flexDirection: "row", marginBottom: 8, marginTop: 8, padding: 16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_permissions/native/components/ChannelAccessInfo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(str[9]).c(45);
  guild = guild.guild;
  const channel = guild.channel;
  str = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = tmp(tmp2[10]).intl;
    const stringResult = intl.string(tmp(tmp2[10]).t.li1wKf);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildRoleStore];
    cResult[1] = items;
    let tmp6 = items;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === channel) {
    if (cResult[3] === guild) {
      let tmp8 = cResult[4];
      let tmp9 = cResult[5];
    }
    let stateFromStoresArray = tmp(tmp2[12]).useStateFromStoresArray(tmp6, tmp8, tmp9);
    if (cResult[6] === channel) {
      if (cResult[7] === guild) {
        if (cResult[8] === stateFromStoresArray.length) {
          if (cResult[9] === str.avatar) {
            if (cResult[10] === str.labelDetail) {
              if (cResult[11] === str.section) {
                if (cResult[12] === str.sectionContent) {
                  if (cResult[13] === str.sectionIcon) {
                    if (cResult[30] === cResult[14]) {
                      if (cResult[31] === tmp14) {
                        const _Symbol2 = Symbol;
                        if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                          let obj2 = { source: channel(tmp2[22]), size: tmp(tmp2[17]).Icon.Sizes.SMALL };
                          const tmp56 = closure_8(tmp(tmp2[17]).Icon, obj2);
                          cResult[34] = tmp56;
                          let tmp53 = tmp56;
                        } else {
                          tmp53 = cResult[34];
                        }
                        if (cResult[35] === tmp11) {
                          if (cResult[36] === tmp12) {
                            if (cResult[37] === tmp50) {
                              if (cResult[38] === tmp16) {
                                if (cResult[39] === tmp17) {
                                  if (cResult[40] === tmp18) {
                                    let tmp57 = cResult[41];
                                  }
                                  if (cResult[42] === tmp13) {
                                    if (cResult[43] === tmp57) {
                                      let tmp60 = cResult[44];
                                    }
                                    return tmp60;
                                  }
                                  let obj3 = { children: null };
                                  const items1 = [tmp13, tmp57];
                                  obj3.children = items1;
                                  const tmp63 = closure_9(closure_10, obj3);
                                  cResult[42] = tmp13;
                                  cResult[43] = tmp57;
                                  cResult[44] = tmp63;
                                  tmp60 = tmp63;
                                }
                              }
                            }
                          }
                        }
                        let obj4 = { accessibilityLabel: tmp16, accessibilityRole: tmp17, onPress: tmp18, style: tmp12, children: null };
                        const items2 = [tmp50, tmp53];
                        obj4.children = items2;
                        const tmp59 = closure_9(tmp11, obj4);
                        cResult[35] = tmp11;
                        cResult[36] = tmp12;
                        cResult[37] = tmp50;
                        class K {
                          constructor() {
                            obj = closure_0(closure_2[13]);
                            result = obj.openChannelMembersActionSheet(channel.id, channel.guild_id);
                            return;
                          }
                        }
                        cResult[39] = tmp17;
                        cResult[40] = tmp18;
                        cResult[41] = tmp59;
                        tmp57 = tmp59;
                      }
                    }
                    let obj5 = { style: cResult[18], children: cResult[19] };
                    cResult[30] = cResult[14];
                    cResult[31] = cResult[18];
                    cResult[32] = cResult[19];
                    cResult[33] = closure_8(cResult[14], obj5);
                    class K {
                      constructor() {
                        obj = closure_0(closure_2[13]);
                        result = obj.openChannelMembersActionSheet(channel.id, channel.guild_id);
                        return;
                      }
                    }
                    const tmp52 = closure_8(cResult[14], obj5);
                  }
                }
              }
            }
          }
        }
      }
    }
    let id;
    if (guild != null) {
      id = guild.id;
    }
    const memberIds = GuildMemberStore.getMemberIds(id);
    const tmpResult2 = tmp(tmp2[11]);
    const existingMembers = tmpResult2.getExistingMembers(memberIds, channel, guild, channel.accessPermissions);
    let tmp27 = 0 === stateFromStoresArray.length;
    if (tmp27) {
      tmp27 = 1 === existingMembers.length;
    }
    if (tmp27) {
      tmp27 = isGuildOwner(guild, existingMembers[0]);
    }
    let first1 = null;
    if (tmp27) {
      first1 = existingMembers[0];
    }
    if (cResult[23] === channel.guild_id) {
      if (cResult[24] === channel.id) {
        let tmp30 = cResult[25];
      }
      if (cResult[26] === str.labelDetail) {
        if (cResult[27] === str.sectionIcon) {
          let tmp31 = cResult[28];
        }
        const _Symbol = Symbol;
        class Q {
          constructor(arg0, arg1, arg2, arg3) {
            if (0 === arg1) {
              tmp26 = null;
              return null;
            } else {
              tmp27 = guild;
              if (closure_13.MEMBERS === guild) {
                if (arg1 > c11) {
                  tmp16 = closure_0;
                  tmp17 = closure_2;
                  intl4 = closure_0(closure_2[10]).intl;
                  obj1 = { count: null };
                  obj1.count = tmp12;
                  formatToPlainStringResult = intl4.formatToPlainString(closure_0(closure_2[10]).t.PR5l07, obj1);
                  tmp14 = closure_2;
                  tmp13 = closure_0;
                } else {
                  tmp13 = closure_0;
                  tmp14 = closure_2;
                  intl3 = closure_0(closure_2[10]).intl;
                  obj9 = { count: null };
                  obj9.count = arg1;
                  formatToPlainStringResult = intl3.formatToPlainString(closure_0(closure_2[10]).t.bu5sya, obj9);
                }
                tmp18 = tmp14;
                tmp19 = tmp13;
                tmp20 = formatToPlainStringResult;
              } else {
                if (tmp28.ROLES === guild) {
                  if (arg1 > c11) {
                    tmp10 = closure_0;
                    tmp11 = closure_2;
                    intl2 = closure_0(closure_2[10]).intl;
                    obj10 = { count: null };
                    obj10.count = tmp6;
                    formatToPlainStringResult1 = intl2.formatToPlainString(closure_0(closure_2[10]).t["+OYnFQ"], obj10);
                    tmp8 = closure_2;
                    tmp7 = closure_0;
                  } else {
                    tmp7 = closure_0;
                    tmp8 = closure_2;
                    intl = closure_0(closure_2[10]).intl;
                    obj11 = { count: null };
                    obj11.count = arg1;
                    formatToPlainStringResult1 = intl.formatToPlainString(closure_0(closure_2[10]).t.T2BEtm, obj11);
                  }
                  tmp2 = tmp8;
                  tmp4 = tmp7;
                  tmp5 = formatToPlainStringResult1;
                } else {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj = closure_0(closure_2[14]);
                  assertNeverResult = obj.assertNever(guild);
                  tmp4 = closure_0;
                }
                tmp21 = arg3;
                tmp22 = jsxs;
                tmp23 = closure_3;
                obj12 = { children: null };
                tmp24 = jsx;
                obj13 = { size: "sm", style: null };
                tmp25 = closure_2;
                obj13.style = closure_2.sectionIcon;
                items = [, ];
                items[0] = jsx(arg3, obj13);
                obj14 = { style: null, variant: "text-sm/medium", children: null };
                obj14.style = closure_2.labelDetail;
                obj14.children = tmp5;
                items[1] = jsx(tmp4(tmp2[15]).Text, obj14);
                obj12.children = items;
                return jsxs(closure_3.Fragment, obj12);
              }
            }
            return;
          }
        }
        if (tmp32 === Symbol.for("react.memo_cache_sentinel")) {
          class Q {
            constructor(arg0, arg1, arg2, arg3) {
              if (0 === arg1) {
                tmp26 = null;
                return null;
              } else {
                tmp27 = guild;
                if (closure_13.MEMBERS === guild) {
                  if (arg1 > c11) {
                    tmp16 = closure_0;
                    tmp17 = closure_2;
                    intl4 = closure_0(closure_2[10]).intl;
                    obj1 = { count: null };
                    obj1.count = tmp12;
                    formatToPlainStringResult = intl4.formatToPlainString(closure_0(closure_2[10]).t.PR5l07, obj1);
                    tmp14 = closure_2;
                    tmp13 = closure_0;
                  } else {
                    tmp13 = closure_0;
                    tmp14 = closure_2;
                    intl3 = closure_0(closure_2[10]).intl;
                    obj9 = { count: null };
                    obj9.count = arg1;
                    formatToPlainStringResult = intl3.formatToPlainString(closure_0(closure_2[10]).t.bu5sya, obj9);
                  }
                  tmp18 = tmp14;
                  tmp19 = tmp13;
                  tmp20 = formatToPlainStringResult;
                } else {
                  if (tmp28.ROLES === guild) {
                    if (arg1 > c11) {
                      tmp10 = closure_0;
                      tmp11 = closure_2;
                      intl2 = closure_0(closure_2[10]).intl;
                      obj10 = { count: null };
                      obj10.count = tmp6;
                      formatToPlainStringResult1 = intl2.formatToPlainString(closure_0(closure_2[10]).t["+OYnFQ"], obj10);
                      tmp8 = closure_2;
                      tmp7 = closure_0;
                    } else {
                      tmp7 = closure_0;
                      tmp8 = closure_2;
                      intl = closure_0(closure_2[10]).intl;
                      obj11 = { count: null };
                      obj11.count = arg1;
                      formatToPlainStringResult1 = intl.formatToPlainString(closure_0(closure_2[10]).t.T2BEtm, obj11);
                    }
                    tmp2 = tmp8;
                    tmp4 = tmp7;
                    tmp5 = formatToPlainStringResult1;
                  } else {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj = closure_0(closure_2[14]);
                    assertNeverResult = obj.assertNever(guild);
                    tmp4 = closure_0;
                  }
                  tmp21 = arg3;
                  tmp22 = jsxs;
                  tmp23 = closure_3;
                  obj12 = { children: null };
                  tmp24 = jsx;
                  obj13 = { size: "sm", style: null };
                  tmp25 = closure_2;
                  obj13.style = closure_2.sectionIcon;
                  items = [, ];
                  items[0] = jsx(arg3, obj13);
                  obj14 = { style: null, variant: "text-sm/medium", children: null };
                  obj14.style = closure_2.labelDetail;
                  obj14.children = tmp5;
                  items[1] = jsx(tmp4(tmp2[15]).Text, obj14);
                  obj12.children = items;
                  return jsxs(closure_3.Fragment, obj12);
                }
              }
              return;
            }
          }
          const tmp35 = closure_8(tmp(tmp2[15]).Text, { variant: "eyebrow", children: null });
          cResult[29] = tmp35;
          let tmp33 = tmp35;
          let obj6 = { variant: "eyebrow", children: null };
        } else {
          tmp33 = cResult[29];
        }
        const PressableOpacity = tmp(tmp2[16]).PressableOpacity;
        const section = str.section;
        const sectionContent = str.sectionContent;
        if (null != first1) {
          class Q {
            constructor(arg0, arg1, arg2, arg3) {
              if (0 === arg1) {
                tmp26 = null;
                return null;
              } else {
                tmp27 = guild;
                if (closure_13.MEMBERS === guild) {
                  if (arg1 > c11) {
                    tmp16 = closure_0;
                    tmp17 = closure_2;
                    intl4 = closure_0(closure_2[10]).intl;
                    obj1 = { count: null };
                    obj1.count = tmp12;
                    formatToPlainStringResult = intl4.formatToPlainString(closure_0(closure_2[10]).t.PR5l07, obj1);
                    tmp14 = closure_2;
                    tmp13 = closure_0;
                  } else {
                    tmp13 = closure_0;
                    tmp14 = closure_2;
                    intl3 = closure_0(closure_2[10]).intl;
                    obj9 = { count: null };
                    obj9.count = arg1;
                    formatToPlainStringResult = intl3.formatToPlainString(closure_0(closure_2[10]).t.bu5sya, obj9);
                  }
                  tmp18 = tmp14;
                  tmp19 = tmp13;
                  tmp20 = formatToPlainStringResult;
                } else {
                  if (tmp28.ROLES === guild) {
                    if (arg1 > c11) {
                      tmp10 = closure_0;
                      tmp11 = closure_2;
                      intl2 = closure_0(closure_2[10]).intl;
                      obj10 = { count: null };
                      obj10.count = tmp6;
                      formatToPlainStringResult1 = intl2.formatToPlainString(closure_0(closure_2[10]).t["+OYnFQ"], obj10);
                      tmp8 = closure_2;
                      tmp7 = closure_0;
                    } else {
                      tmp7 = closure_0;
                      tmp8 = closure_2;
                      intl = closure_0(closure_2[10]).intl;
                      obj11 = { count: null };
                      obj11.count = arg1;
                      formatToPlainStringResult1 = intl.formatToPlainString(closure_0(closure_2[10]).t.T2BEtm, obj11);
                    }
                    tmp2 = tmp8;
                    tmp4 = tmp7;
                    tmp5 = formatToPlainStringResult1;
                  } else {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj = closure_0(closure_2[14]);
                    assertNeverResult = obj.assertNever(guild);
                    tmp4 = closure_0;
                  }
                  tmp21 = arg3;
                  tmp22 = jsxs;
                  tmp23 = closure_3;
                  obj12 = { children: null };
                  tmp24 = jsx;
                  obj13 = { size: "sm", style: null };
                  tmp25 = closure_2;
                  obj13.style = closure_2.sectionIcon;
                  items = [, ];
                  items[0] = jsx(arg3, obj13);
                  obj14 = { style: null, variant: "text-sm/medium", children: null };
                  obj14.style = closure_2.labelDetail;
                  obj14.children = tmp5;
                  items[1] = jsx(tmp4(tmp2[15]).Text, obj14);
                  obj12.children = items;
                  return jsxs(closure_3.Fragment, obj12);
                }
              }
              return;
            }
          }
          tmp40[0] = str.avatar;
          tmp40[1] = first1;
          tmp40[2] = guild.id;
          tmp40[3] = tmp(tmp2[17]).AvatarSizes.XSMALL;
          const items3 = [closure_8(tmp(tmp2[17]).Avatar, tmp40), ];
          let obj8 = { children: null };
          const obj9 = { variant: "text-sm/semibold", children: first1.tag };
          const items4 = [closure_8(tmp(tmp2[15]).Text, obj9), ];
          first1 = tmp(tmp2[15]).Text;
          const obj10 = { variant: "text-xs/medium", children: null };
          let intl2 = tmp(tmp2[10]).intl;
          obj10.children = intl2.string(tmp(tmp2[10]).t.rt0ERW);
          items4[1] = closure_8(first1, obj10);
          obj8.children = items4;
          items3[1] = closure_9(View, obj8);
          class K {
            constructor() {
              obj = closure_0(closure_2[13]);
              result = obj.openChannelMembersActionSheet(channel.id, channel.guild_id);
              return;
            }
          }
          let obj11 = { children: null };
          let obj7 = { children: null };
        } else {
          obj11 = { children: null };
          class Q {
            constructor(arg0, arg1, arg2, arg3) {
              if (0 === arg1) {
                tmp26 = null;
                return null;
              } else {
                tmp27 = guild;
                if (closure_13.MEMBERS === guild) {
                  if (arg1 > c11) {
                    tmp16 = closure_0;
                    tmp17 = closure_2;
                    intl4 = closure_0(closure_2[10]).intl;
                    obj1 = { count: null };
                    obj1.count = tmp12;
                    formatToPlainStringResult = intl4.formatToPlainString(closure_0(closure_2[10]).t.PR5l07, obj1);
                    tmp14 = closure_2;
                    tmp13 = closure_0;
                  } else {
                    tmp13 = closure_0;
                    tmp14 = closure_2;
                    intl3 = closure_0(closure_2[10]).intl;
                    obj9 = { count: null };
                    obj9.count = arg1;
                    formatToPlainStringResult = intl3.formatToPlainString(closure_0(closure_2[10]).t.bu5sya, obj9);
                  }
                  tmp18 = tmp14;
                  tmp19 = tmp13;
                  tmp20 = formatToPlainStringResult;
                } else {
                  if (tmp28.ROLES === guild) {
                    if (arg1 > c11) {
                      tmp10 = closure_0;
                      tmp11 = closure_2;
                      intl2 = closure_0(closure_2[10]).intl;
                      obj10 = { count: null };
                      obj10.count = tmp6;
                      formatToPlainStringResult1 = intl2.formatToPlainString(closure_0(closure_2[10]).t["+OYnFQ"], obj10);
                      tmp8 = closure_2;
                      tmp7 = closure_0;
                    } else {
                      tmp7 = closure_0;
                      tmp8 = closure_2;
                      intl = closure_0(closure_2[10]).intl;
                      obj11 = { count: null };
                      obj11.count = arg1;
                      formatToPlainStringResult1 = intl.formatToPlainString(closure_0(closure_2[10]).t.T2BEtm, obj11);
                    }
                    tmp2 = tmp8;
                    tmp4 = tmp7;
                    tmp5 = formatToPlainStringResult1;
                  } else {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj = closure_0(closure_2[14]);
                    assertNeverResult = obj.assertNever(guild);
                    tmp4 = closure_0;
                  }
                  tmp21 = arg3;
                  tmp22 = jsxs;
                  tmp23 = closure_3;
                  obj12 = { children: null };
                  tmp24 = jsx;
                  obj13 = { size: "sm", style: null };
                  tmp25 = closure_2;
                  obj13.style = closure_2.sectionIcon;
                  items = [, ];
                  items[0] = jsx(arg3, obj13);
                  obj14 = { style: null, variant: "text-sm/medium", children: null };
                  obj14.style = closure_2.labelDetail;
                  obj14.children = tmp5;
                  items[1] = jsx(tmp4(tmp2[15]).Text, obj14);
                  obj12.children = items;
                  return jsxs(closure_3.Fragment, obj12);
                }
              }
              return;
            }
          }
          const items5 = [tmp31(tmp65, existingMembers.length, channel(tmp2[18]), tmp(tmp2[19]).GroupIcon), ];
          const ROLES = constants.ROLES;
          const tmp67 = channel(tmp2[18]);
          items5[1] = tmp31(ROLES, stateFromStoresArray.length, channel(tmp2[20]), tmp(tmp2[21]).ShieldUserIcon);
          obj11.children = items5;
          const tmp69 = channel(tmp2[20]);
        }
        const tmp37Result = closure_9(closure_10, obj11);
        cResult[6] = channel;
        cResult[7] = guild;
        cResult[8] = stateFromStoresArray.length;
        cResult[9] = str.avatar;
        cResult[10] = str.labelDetail;
        class K {
          constructor() {
            obj = closure_0(closure_2[13]);
            result = obj.openChannelMembersActionSheet(channel.id, channel.guild_id);
            return;
          }
        }
        stateFromStoresArray = str.sectionContent;
        cResult[12] = stateFromStoresArray;
        cResult[13] = str.sectionIcon;
        cResult[14] = View;
        cResult[15] = PressableOpacity;
        cResult[16] = section;
        cResult[17] = tmp33;
        cResult[18] = sectionContent;
        cResult[19] = tmp37Result;
        cResult[20] = first;
        str = "button";
        cResult[21] = "button";
        cResult[22] = tmp30;
      }
      class Q {
        constructor(arg0, arg1, arg2, arg3) {
          if (0 === arg1) {
            tmp26 = null;
            return null;
          } else {
            tmp27 = guild;
            if (closure_13.MEMBERS === guild) {
              if (arg1 > c11) {
                tmp16 = closure_0;
                tmp17 = closure_2;
                intl4 = closure_0(closure_2[10]).intl;
                obj1 = { count: null };
                obj1.count = tmp12;
                formatToPlainStringResult = intl4.formatToPlainString(closure_0(closure_2[10]).t.PR5l07, obj1);
                tmp14 = closure_2;
                tmp13 = closure_0;
              } else {
                tmp13 = closure_0;
                tmp14 = closure_2;
                intl3 = closure_0(closure_2[10]).intl;
                obj9 = { count: null };
                obj9.count = arg1;
                formatToPlainStringResult = intl3.formatToPlainString(closure_0(closure_2[10]).t.bu5sya, obj9);
              }
              tmp18 = tmp14;
              tmp19 = tmp13;
              tmp20 = formatToPlainStringResult;
            } else {
              if (tmp28.ROLES === guild) {
                if (arg1 > c11) {
                  tmp10 = closure_0;
                  tmp11 = closure_2;
                  intl2 = closure_0(closure_2[10]).intl;
                  obj10 = { count: null };
                  obj10.count = tmp6;
                  formatToPlainStringResult1 = intl2.formatToPlainString(closure_0(closure_2[10]).t["+OYnFQ"], obj10);
                  tmp8 = closure_2;
                  tmp7 = closure_0;
                } else {
                  tmp7 = closure_0;
                  tmp8 = closure_2;
                  intl = closure_0(closure_2[10]).intl;
                  obj11 = { count: null };
                  obj11.count = arg1;
                  formatToPlainStringResult1 = intl.formatToPlainString(closure_0(closure_2[10]).t.T2BEtm, obj11);
                }
                tmp2 = tmp8;
                tmp4 = tmp7;
                tmp5 = formatToPlainStringResult1;
              } else {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[14]);
                assertNeverResult = obj.assertNever(guild);
                tmp4 = closure_0;
              }
              tmp21 = arg3;
              tmp22 = jsxs;
              tmp23 = closure_3;
              obj12 = { children: null };
              tmp24 = jsx;
              obj13 = { size: "sm", style: null };
              tmp25 = closure_2;
              obj13.style = closure_2.sectionIcon;
              items = [, ];
              items[0] = jsx(arg3, obj13);
              obj14 = { style: null, variant: "text-sm/medium", children: null };
              obj14.style = closure_2.labelDetail;
              obj14.children = tmp5;
              items[1] = jsx(tmp4(tmp2[15]).Text, obj14);
              obj12.children = items;
              return jsxs(closure_3.Fragment, obj12);
            }
          }
          return;
        }
      }
      cResult[26] = str.labelDetail;
      cResult[27] = str.sectionIcon;
      cResult[28] = Q;
      tmp31 = Q;
    }
    class K {
      constructor() {
        obj = closure_0(closure_2[13]);
        result = obj.openChannelMembersActionSheet(channel.id, channel.guild_id);
        return;
      }
    }
    cResult[23] = channel.guild_id;
    cResult[24] = channel.id;
    cResult[25] = K;
    tmp30 = K;
    const tmpResult = tmp(tmp2[12]);
  }
  class T {
    constructor() {
      obj = closure_0(closure_2[11]);
      return obj.getExistingRoles(guild, closure_7.getSortedRoles(guild.id), channel, channel.accessPermissions);
    }
  }
  const items6 = [guild, channel];
  cResult[2] = channel;
  cResult[3] = guild;
  cResult[4] = T;
  cResult[5] = items6;
  tmp9 = items6;
  tmp8 = T;
  let obj = guild(str[9]);
}) : ((guild) => {
  guild = guild.guild;
  const channel = guild.channel;
  const tmp = closure_12();
  dependencyMap = tmp;
  let intl = guild(1126).intl;
  const stringResult = intl.string(guild(1126).t.li1wKf);
  let items = [GuildRoleStore];
  const items1 = [guild, channel];
  const stateFromStoresArray = guild(504).useStateFromStoresArray(items, () => ChannelPermissionsUtils.getExistingRoles(guild, GuildRoleStore.getSortedRoles(guild.id), channel, channel.accessPermissions), items1);
  let id;
  if (guild != null) {
    id = guild.id;
  }
  const memberIds = GuildMemberStore.getMemberIds(id);
  let obj = guild(504);
  const existingMembers = guild(9215).getExistingMembers(memberIds, channel, guild, channel.accessPermissions);
  let tmp8 = 0 === stateFromStoresArray.length;
  if (tmp8) {
    tmp8 = 1 === existingMembers.length;
  }
  if (tmp8) {
    tmp8 = isGuildOwner(guild, existingMembers[0]);
  }
  let first = null;
  if (tmp8) {
    first = existingMembers[0];
  }
  const items2 = [closure_8(guild(4886).Text, { variant: "eyebrow", children: stringResult }), ];
  let obj2 = {
    accessibilityLabel: stringResult,
    accessibilityRole: "button",
    onPress() {
      const result = channel_permissions_ChannelPermissionsUtils.openChannelMembersActionSheet(channel.id, channel.guild_id);
    },
    style: tmp.section,
    children: null
  };
  let obj3 = { style: tmp.sectionContent, children: null };
  if (null != first) {
    let obj4 = { children: null };
    let obj5 = { style: tmp.avatar, user: first, guildId: guild.id, size: tmp2(1188).AvatarSizes.XSMALL };
    const items3 = [closure_8(tmp2(1188).Avatar, obj5), ];
    let obj6 = { children: null };
    let obj7 = { variant: "text-sm/semibold", children: first.tag };
    const items4 = [closure_8(tmp2(4886).Text, obj7), ];
    let obj8 = { variant: "text-xs/medium", children: null };
    let intl2 = tmp2(1126).intl;
    obj8.children = intl2.string(tmp2(1126).t.rt0ERW);
    items4[1] = closure_8(tmp2(4886).Text, obj8);
    obj6.children = items4;
    items3[1] = closure_9(View, obj6);
    obj4.children = items3;
    let obj9 = obj4;
  } else {
    function renderCounts(MEMBERS, length, arg2, GroupIcon) {
      if (0 === length) {
        return null;
      } else if (constants.MEMBERS === MEMBERS) {
        if (length > c11) {
          const intl4 = util.intl;
          const obj2 = { count: tmp12 };
          let formatToPlainStringResult = intl4.formatToPlainString(util.t.PR5l07, obj2);
        } else {
          const intl3 = util.intl;
          const obj3 = { count: length };
          formatToPlainStringResult = intl3.formatToPlainString(util.t.bu5sya, obj3);
        }
      } else {
        if (tmp28.ROLES === MEMBERS) {
          if (length > c11) {
            const intl2 = util.intl;
            const obj4 = { count: tmp6 };
            let formatToPlainStringResult1 = intl2.formatToPlainString(util.t["+OYnFQ"], obj4);
            let tmp7 = require;
          } else {
            tmp7 = require;
            const intl = util.intl;
            const obj5 = { count: length };
            formatToPlainStringResult1 = intl.formatToPlainString(util.t.T2BEtm, obj5);
          }
          let tmp4 = tmp7;
          const tmp5 = formatToPlainStringResult1;
        } else {
          GlobalUtils.assertNever(MEMBERS);
          tmp4 = require;
        }
        const obj6 = { children: null };
        const obj7 = { size: "sm", style: closure_2.sectionIcon };
        const items = [closure_2_8(GroupIcon, obj7), ];
        const obj8 = { style: closure_2.labelDetail, variant: "text-sm/medium", children: tmp5 };
        items[1] = closure_2_8(tmp4(4886).Text, obj8);
        obj6.children = items;
        return options(noop.Fragment, obj6);
      }
    }
    obj9 = { children: null };
    const MEMBERS = constants.MEMBERS;
    channel(12126);
    const items5 = [renderCounts(MEMBERS, existingMembers.length, 0, tmp2(5873).GroupIcon), ];
    const ROLES = constants.ROLES;
    channel(9234);
    items5[1] = renderCounts(ROLES, stateFromStoresArray.length, 0, tmp2(9232).ShieldUserIcon);
    obj9.children = items5;
  }
  const obj10 = { children: null };
  obj3.children = closure_9(closure_10, obj9);
  const items6 = [closure_8(View, obj3), ];
  const tmp2Result = guild(9215);
  items6[1] = closure_8(guild(1188).Icon, { source: channel(9602), size: guild(1188).Icon.Sizes.SMALL });
  obj2.children = items6;
  items2[1] = closure_9(guild(5909).PressableOpacity, obj2);
  obj10.children = items2;
  return closure_9(closure_10, obj10);
});