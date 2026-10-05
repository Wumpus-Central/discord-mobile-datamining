// discord_app/modules/channel_permissions/native/components/ChannelAccessInfo.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import GlobalUtils from "../../../../utils/GlobalUtils.tsx";
import GuildRecord from "../../../../records/GuildRecord.tsx";
import ChannelPermissionsUtils from "../../ChannelPermissionsUtils.tsx";
import channel_permissions_ChannelPermissionsUtils from "../ChannelPermissionsUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";
import Fragment_mod from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let assertNeverResult, dependencyMap, guild, obj1, obj12, obj13, obj14, tmp19, tmp2, tmp20, tmp21, tmp22, tmp23, tmp24;

let c10;
let c9;
let metroImportAll;
let obj2;
const View = react_native.View;
const isGuildOwner = GuildRecord.isGuildOwner;
let Fragment = Fragment_mod;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let c11 = 100;
let obj = {
  section: obj2,
  sectionContent: { alignItems: "center", flexDirection: "row", flexGrow: 1 },
  avatar: { marginRight: 8 },
  labelDetail: { marginRight: 12 },
  sectionIcon: { marginRight: 6 },
};
obj2 = {
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
  color: nativeDefault.colors.TEXT_DEFAULT,
  flexDirection: "row",
  marginBottom: 8,
  marginTop: 8,
  padding: 16,
};
let closure_12 = createStyles.createStyles(obj);
const constants = { MEMBERS: 0, [0]: "MEMBERS", ROLES: 1, [1]: "ROLES" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let closure_2;
      let first;
      let intl2;
      let items1;
      let items2;
      let items4;
      let items5;
      let tmp7;
      let obj = guild(576);
      const cResult = obj.c(45);
      guild = guild.guild;
      const channel = guild.channel;
      let tmp4 = closure_12();
      dependencyMap = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(1126).intl;
        const stringResult = intl.string(guild(1126).t.li1wKf);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildRoleStore];
        cResult[1] = items;
        tmp7 = items;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === channel) {
        let tmp9;
        let tmp10;
        let tmp18;
        let str;
        let tmp17;
        let tmp16;
        let tmp15;
        let tmp14;
        let tmp13;
        let tmp12;
        let tmp11;
        if (cResult[3] === guild) {
          tmp9 = cResult[4];
          tmp10 = cResult[5];
        }
        const tmpResult = guild(504);
        const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp7, tmp9, tmp10);
        if (cResult[6] === channel) {
          if (cResult[7] === guild) {
            if (cResult[8] === stateFromStoresArray.length) {
              if (cResult[9] === tmp4.avatar) {
                if (cResult[10] === tmp4.labelDetail) {
                  if (cResult[11] === tmp4.section) {
                    if (cResult[12] === tmp4.sectionContent) {
                      if (cResult[13] === tmp4.sectionIcon) {
                        tmp11 = cResult[14];
                        tmp12 = cResult[15];
                        tmp13 = cResult[16];
                        tmp14 = cResult[17];
                        tmp15 = cResult[18];
                        tmp16 = cResult[19];
                        tmp17 = cResult[20];
                        str = cResult[21];
                        tmp18 = cResult[22];
                      }
                      if (cResult[30] === tmp11) {
                        if (cResult[31] === tmp15) {
                          let tmp42;
                          let tmp45;
                          if (cResult[32] === tmp16) {
                            tmp42 = cResult[33];
                          }
                          const _Symbol2 = Symbol;
                          if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                            let obj2 = { source: channel(9602), size: guild(1188).Icon.Sizes.SMALL };
                            const Icon = tmp(1188).Icon;
                            const tmp48 = closure_8(Icon, obj2);
                            cResult[34] = tmp48;
                            tmp45 = tmp48;
                          } else {
                            tmp45 = cResult[34];
                          }
                          if (cResult[35] === tmp12) {
                            if (cResult[36] === tmp13) {
                              if (cResult[37] === tmp42) {
                                if (cResult[38] === tmp17) {
                                  if (cResult[39] === str) {
                                    let tmp49;
                                    if (cResult[40] === tmp18) {
                                      tmp49 = cResult[41];
                                    }
                                    if (cResult[42] === tmp14) {
                                      let tmp52;
                                      if (cResult[43] === tmp49) {
                                        tmp52 = cResult[44];
                                      }
                                      return tmp52;
                                    }
                                    let obj3 = { children: items1 };
                                    items1 = [tmp14, tmp49];
                                    const tmp55 = closure_9(closure_10, obj3);
                                    cResult[42] = tmp14;
                                    cResult[43] = tmp49;
                                    cResult[44] = tmp55;
                                    tmp52 = tmp55;
                                  }
                                }
                              }
                            }
                          }
                          let obj4 = {
                            accessibilityLabel: tmp17,
                            accessibilityRole: str,
                            onPress: tmp18,
                            style: tmp13,
                            children: items2,
                          };
                          items2 = [tmp42, tmp45];
                          const tmp51 = closure_9(tmp12, obj4);
                          cResult[35] = tmp12;
                          cResult[36] = tmp13;
                          cResult[37] = tmp42;
                          class K {
                            constructor() {
                              obj = closure_0(closure_2[13]);
                              result = obj.openChannelMembersActionSheet(channel.id, channel.guild_id);
                              return;
                            }
                          }
                          cResult[39] = str;
                          cResult[40] = tmp18;
                          cResult[41] = tmp51;
                          tmp49 = tmp51;
                        }
                      }
                      let obj5 = { style: tmp15, children: tmp16 };
                      const tmp44 = closure_8(tmp11, obj5);
                      cResult[30] = tmp11;
                      cResult[31] = tmp15;
                      cResult[32] = tmp16;
                      cResult[33] = tmp44;
                      tmp42 = tmp44;
                    }
                  }
                }
              }
            }
          }
        }
        let id;
        const getMemberIds = GuildMemberStore.getMemberIds;
        if (guild != null) {
          id = guild.id;
        }
        const memberIds = getMemberIds(id);
        const tmpResult2 = guild(9215);
        const tmp25 = channel;
        const existingMembers = tmpResult2.getExistingMembers(memberIds, channel, guild, channel.accessPermissions);
        let first1 = null;
        const tmp27 =
          0 === stateFromStoresArray.length && 1 === existingMembers.length && isGuildOwner(guild, existingMembers[0]);
        if (tmp27) {
          first1 = existingMembers[0];
        }
        if (cResult[23] === channel.guild_id) {
          let tmp30;
          if (cResult[24] === channel.id) {
            tmp30 = cResult[25];
          }
          if (cResult[26] === tmp4.labelDetail) {
            let tmp31;
            let tmp33;
            let obj11;
            if (cResult[27] === tmp4.sectionIcon) {
              tmp31 = cResult[28];
            }
            const _Symbol = Symbol;
            class Q {
              constructor(arg0, arg1, arg2, arg3) {
                if (0 === arg1) {
                  tmp23 = null;
                  return null;
                } else {
                  tmp24 = guild;
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
                    tmp2 = tmp14;
                    tmp4 = tmp13;
                    tmp5 = formatToPlainStringResult;
                  } else if (tmp25.ROLES === guild) {
                    if (arg1 > c11) {
                      tmp10 = closure_0;
                      tmp11 = closure_2;
                      intl2 = closure_0(closure_2[10]).intl;
                      obj10 = { count: null };
                      obj10.count = tmp6;
                      formatToPlainStringResult1 = intl2.formatToPlainString(
                        closure_0(closure_2[10]).t["+OYnFQ"],
                        obj10,
                      );
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
                  tmp18 = arg3;
                  tmp19 = jsxs;
                  tmp20 = closure_3;
                  obj12 = { children: null };
                  tmp21 = jsx;
                  obj13 = { size: "sm", style: null };
                  tmp22 = closure_2;
                  obj13.style = closure_2.sectionIcon;
                  Fragment = closure_3.Fragment;
                  items = [,];
                  items[0] = jsx(arg3, obj13);
                  obj14 = { style: null, variant: "text-sm/medium", children: null };
                  obj14.style = closure_2.labelDetail;
                  obj14.children = tmp5;
                  items[1] = jsx(tmp4(tmp2[15]).Text, obj14);
                  obj12.children = items;
                  return jsxs(Fragment, obj12);
                }
              }
            }
            if (tmp32 === Symbol.for("react.memo_cache_sentinel")) {
              let obj6 = { variant: "eyebrow", children: null };
              class Q {
                constructor(arg0, arg1, arg2, arg3) {
                  if (0 === arg1) {
                    tmp23 = null;
                    return null;
                  } else {
                    tmp24 = guild;
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
                      tmp2 = tmp14;
                      tmp4 = tmp13;
                      tmp5 = formatToPlainStringResult;
                    } else if (tmp25.ROLES === guild) {
                      if (arg1 > c11) {
                        tmp10 = closure_0;
                        tmp11 = closure_2;
                        intl2 = closure_0(closure_2[10]).intl;
                        obj10 = { count: null };
                        obj10.count = tmp6;
                        formatToPlainStringResult1 = intl2.formatToPlainString(
                          closure_0(closure_2[10]).t["+OYnFQ"],
                          obj10,
                        );
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
                    tmp18 = arg3;
                    tmp19 = jsxs;
                    tmp20 = closure_3;
                    obj12 = { children: null };
                    tmp21 = jsx;
                    obj13 = { size: "sm", style: null };
                    tmp22 = closure_2;
                    obj13.style = closure_2.sectionIcon;
                    Fragment = closure_3.Fragment;
                    items = [,];
                    items[0] = jsx(arg3, obj13);
                    obj14 = { style: null, variant: "text-sm/medium", children: null };
                    obj14.style = closure_2.labelDetail;
                    obj14.children = tmp5;
                    items[1] = jsx(tmp4(tmp2[15]).Text, obj14);
                    obj12.children = items;
                    return jsxs(Fragment, obj12);
                  }
                }
              }
              const tmp35 = closure_8(guild(4886).Text, obj6);
              cResult[29] = tmp35;
              tmp33 = tmp35;
            } else {
              tmp33 = cResult[29];
            }
            const PressableOpacity = tmp(5909).PressableOpacity;
            const section = tmp4.section;
            const sectionContent = tmp4.sectionContent;
            if (null != first1) {
              let obj7 = { children: null };
              class Q {
                constructor(arg0, arg1, arg2, arg3) {
                  if (0 === arg1) {
                    tmp23 = null;
                    return null;
                  } else {
                    tmp24 = guild;
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
                      tmp2 = tmp14;
                      tmp4 = tmp13;
                      tmp5 = formatToPlainStringResult;
                    } else if (tmp25.ROLES === guild) {
                      if (arg1 > c11) {
                        tmp10 = closure_0;
                        tmp11 = closure_2;
                        intl2 = closure_0(closure_2[10]).intl;
                        obj10 = { count: null };
                        obj10.count = tmp6;
                        formatToPlainStringResult1 = intl2.formatToPlainString(
                          closure_0(closure_2[10]).t["+OYnFQ"],
                          obj10,
                        );
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
                    tmp18 = arg3;
                    tmp19 = jsxs;
                    tmp20 = closure_3;
                    obj12 = { children: null };
                    tmp21 = jsx;
                    obj13 = { size: "sm", style: null };
                    tmp22 = closure_2;
                    obj13.style = closure_2.sectionIcon;
                    Fragment = closure_3.Fragment;
                    items = [,];
                    items[0] = jsx(arg3, obj13);
                    obj14 = { style: null, variant: "text-sm/medium", children: null };
                    obj14.style = closure_2.labelDetail;
                    obj14.children = tmp5;
                    items[1] = jsx(tmp4(tmp2[15]).Text, obj14);
                    obj12.children = items;
                    return jsxs(Fragment, obj12);
                  }
                }
              }
              tmp40[0] = tmp4.avatar;
              tmp40[1] = first1;
              tmp40[2] = guild.id;
              const Avatar = tmp(1188).Avatar;
              tmp40[3] = guild(1188).AvatarSizes.XSMALL;
              const items3 = [closure_8(Avatar, tmp40)];
              let obj8 = { children: items4 };
              const obj9 = { variant: "text-sm/semibold", children: first1.tag };
              items4 = [closure_8(guild(4886).Text, obj9)];
              const obj10 = { variant: "text-xs/medium", children: intl2.string(guild(1126).t.rt0ERW) };
              const Text = tmp(4886).Text;
              intl2 = tmp(1126).intl;
              items4[1] = closure_8(Text, obj10);
              items3[1] = closure_9(View, obj8);
              class K {
                constructor() {
                  obj = closure_0(closure_2[13]);
                  result = obj.openChannelMembersActionSheet(channel.id, channel.guild_id);
                  return;
                }
              }
              obj11 = obj7;
            } else {
              obj11 = { children: items5 };
              class Q {
                constructor(arg0, arg1, arg2, arg3) {
                  if (0 === arg1) {
                    tmp23 = null;
                    return null;
                  } else {
                    tmp24 = guild;
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
                      tmp2 = tmp14;
                      tmp4 = tmp13;
                      tmp5 = formatToPlainStringResult;
                    } else if (tmp25.ROLES === guild) {
                      if (arg1 > c11) {
                        tmp10 = closure_0;
                        tmp11 = closure_2;
                        intl2 = closure_0(closure_2[10]).intl;
                        obj10 = { count: null };
                        obj10.count = tmp6;
                        formatToPlainStringResult1 = intl2.formatToPlainString(
                          closure_0(closure_2[10]).t["+OYnFQ"],
                          obj10,
                        );
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
                    tmp18 = arg3;
                    tmp19 = jsxs;
                    tmp20 = closure_3;
                    obj12 = { children: null };
                    tmp21 = jsx;
                    obj13 = { size: "sm", style: null };
                    tmp22 = closure_2;
                    obj13.style = closure_2.sectionIcon;
                    Fragment = closure_3.Fragment;
                    items = [,];
                    items[0] = jsx(arg3, obj13);
                    obj14 = { style: null, variant: "text-sm/medium", children: null };
                    obj14.style = closure_2.labelDetail;
                    obj14.children = tmp5;
                    items[1] = jsx(tmp4(tmp2[15]).Text, obj14);
                    obj12.children = items;
                    return jsxs(Fragment, obj12);
                  }
                }
              }
              items5 = [,];
              const length = existingMembers.length;
              const tmp59 = channel(12126);
              items5[0] = tmp31(tmp57, length, tmp59, guild(5873).GroupIcon);
              const ROLES = constants.ROLES;
              const length2 = stateFromStoresArray.length;
              const tmp61 = channel(9234);
              items5[1] = tmp31(ROLES, length2, tmp61, guild(9232).ShieldUserIcon);
            }
            const tmp37Result = closure_9(closure_10, obj11);
            cResult[6] = channel;
            cResult[7] = guild;
            cResult[8] = stateFromStoresArray.length;
            cResult[9] = tmp4.avatar;
            cResult[10] = tmp4.labelDetail;
            class K {
              constructor() {
                obj = closure_0(closure_2[13]);
                result = obj.openChannelMembersActionSheet(channel.id, channel.guild_id);
                return;
              }
            }
            cResult[12] = tmp4.sectionContent;
            cResult[13] = tmp4.sectionIcon;
            cResult[14] = View;
            cResult[15] = PressableOpacity;
            cResult[16] = section;
            cResult[17] = tmp33;
            cResult[18] = sectionContent;
            cResult[19] = tmp37Result;
            cResult[20] = first;
            cResult[21] = "button";
            cResult[22] = tmp30;
            tmp18 = tmp30;
            str = "button";
            tmp17 = first;
            tmp16 = tmp37Result;
            tmp15 = sectionContent;
            tmp14 = tmp33;
            tmp13 = section;
            tmp12 = PressableOpacity;
            tmp11 = View;
          }
          class Q {
            constructor(arg0, arg1, arg2, arg3) {
              if (0 === arg1) {
                tmp23 = null;
                return null;
              } else {
                tmp24 = guild;
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
                  tmp2 = tmp14;
                  tmp4 = tmp13;
                  tmp5 = formatToPlainStringResult;
                } else if (tmp25.ROLES === guild) {
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
                tmp18 = arg3;
                tmp19 = jsxs;
                tmp20 = closure_3;
                obj12 = { children: null };
                tmp21 = jsx;
                obj13 = { size: "sm", style: null };
                tmp22 = closure_2;
                obj13.style = closure_2.sectionIcon;
                Fragment = closure_3.Fragment;
                items = [,];
                items[0] = jsx(arg3, obj13);
                obj14 = { style: null, variant: "text-sm/medium", children: null };
                obj14.style = closure_2.labelDetail;
                obj14.children = tmp5;
                items[1] = jsx(tmp4(tmp2[15]).Text, obj14);
                obj12.children = items;
                return jsxs(Fragment, obj12);
              }
            }
          }
          cResult[26] = tmp4.labelDetail;
          cResult[27] = tmp4.sectionIcon;
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
      tmp10 = items6;
      tmp9 = T;
    }
  : (guild) => {
      let closure_2;
      let intl2;
      let items3;
      let items4;
      let items5;
      let items6;
      let obj9;
      guild = guild.guild;
      const channel = guild.channel;
      const tmp = closure_12();
      dependencyMap = tmp;
      let intl = guild(1126).intl;
      const stringResult = intl.string(guild(1126).t.li1wKf);
      let obj = guild(504);
      let items = [GuildRoleStore];
      const items1 = [guild, channel];
      const stateFromStoresArray = obj.useStateFromStoresArray(
        items,
        () => {
          const obj = ChannelPermissionsUtils;
          return obj.getExistingRoles(
            guild,
            GuildRoleStore.getSortedRoles(guild.id),
            channel,
            channel.accessPermissions,
          );
        },
        items1,
      );
      let id;
      const getMemberIds = GuildMemberStore.getMemberIds;
      if (guild != null) {
        id = guild.id;
      }
      const memberIds = getMemberIds(id);
      const tmp2Result = guild(9215);
      const existingMembers = tmp2Result.getExistingMembers(memberIds, channel, guild, channel.accessPermissions);
      const tmp8 =
        0 === stateFromStoresArray.length && 1 === existingMembers.length && isGuildOwner(guild, existingMembers[0]);
      let first = null;
      if (tmp8) {
        first = existingMembers[0];
      }
      const items2 = [closure_8(tmp2(4886).Text, { variant: "eyebrow", children: stringResult })];
      let obj2 = {
        accessibilityLabel: stringResult,
        accessibilityRole: "button",
        onPress() {
          const obj = channel_permissions_ChannelPermissionsUtils;
          const result = obj.openChannelMembersActionSheet(channel.id, channel.guild_id);
        },
        style: tmp.section,
        children: items6,
      };
      let obj3 = { style: tmp.sectionContent, children: closure_9(closure_10, obj9) };
      const PressableOpacity = tmp2(5909).PressableOpacity;
      if (null != first) {
        let obj4 = { children: items3 };
        let obj5 = { style: tmp.avatar, user: first, guildId: guild.id, size: tmp2(1188).AvatarSizes.XSMALL };
        const Avatar = tmp2(1188).Avatar;
        items3 = [closure_8(Avatar, obj5)];
        let obj6 = { children: items4 };
        let obj7 = { variant: "text-sm/semibold", children: first.tag };
        items4 = [closure_8(tmp2(4886).Text, obj7)];
        let obj8 = { variant: "text-xs/medium", children: intl2.string(tmp2(1126).t.rt0ERW) };
        const Text = tmp2(4886).Text;
        intl2 = tmp2(1126).intl;
        items4[1] = closure_8(Text, obj8);
        items3[1] = closure_9(View, obj6);
        obj9 = obj4;
      } else {
        function renderCounts(MEMBERS, length, arg2, GroupIcon) {
          let items;
          if (0 === length) {
            return null;
          } else {
            let tmp4;
            let tmp5;
            if (constants.MEMBERS === MEMBERS) {
              let formatToPlainStringResult;
              let tmp13;
              if (length > c11) {
                const intl4 = intl5.intl;
                const obj2 = { count: tmp12 };
                formatToPlainStringResult = intl4.formatToPlainString(intl5.t.PR5l07, obj2);
                tmp13 = require;
              } else {
                tmp13 = require;
                const intl3 = intl5.intl;
                const obj3 = { count: length };
                formatToPlainStringResult = intl3.formatToPlainString(intl5.t.bu5sya, obj3);
              }
              tmp4 = tmp13;
              tmp5 = formatToPlainStringResult;
            } else if (tmp25.ROLES === MEMBERS) {
              let formatToPlainStringResult1;
              let tmp7;
              if (length > c11) {
                const intl2 = intl5.intl;
                const obj4 = { count: tmp6 };
                formatToPlainStringResult1 = intl2.formatToPlainString(intl5.t["+OYnFQ"], obj4);
                tmp7 = require;
              } else {
                tmp7 = require;
                const intl = intl5.intl;
                const obj5 = { count: length };
                formatToPlainStringResult1 = intl.formatToPlainString(intl5.t.T2BEtm, obj5);
              }
              tmp4 = tmp7;
              tmp5 = formatToPlainStringResult1;
            } else {
              const obj = GlobalUtils;
              obj.assertNever(MEMBERS);
              tmp4 = require;
            }
            const Fragment = react.Fragment;
            const obj6 = { children: items };
            const obj7 = { size: "sm", style: closure_2.sectionIcon };
            items = [metroImportAll(GroupIcon, obj7)];
            const obj8 = { style: closure_2.labelDetail, variant: "text-sm/medium", children: tmp5 };
            items[1] = metroImportAll(tmp4(4886).Text, obj8);
            return React4(Fragment, obj6);
          }
        }
        obj9 = { children: items5 };
        const MEMBERS = constants.MEMBERS;
        const length = existingMembers.length;
        channel(12126);
        items5 = [renderCounts(MEMBERS, length, 0, tmp2(5873).GroupIcon)];
        const ROLES = constants.ROLES;
        const length2 = stateFromStoresArray.length;
        channel(9234);
        items5[1] = renderCounts(ROLES, length2, 0, guild(9232).ShieldUserIcon);
      }
      const obj10 = { children: items2 };
      items6 = [closure_8(View, obj3)];
      const obj11 = { source: channel(9602), size: guild(1188).Icon.Sizes.SMALL };
      const Icon = tmp2(1188).Icon;
      items6[1] = closure_8(Icon, obj11);
      items2[1] = closure_9(PressableOpacity, obj2);
      return closure_9(closure_10, obj10);
    };
let result = size.fileFinishedImporting("modules/channel_permissions/native/components/ChannelAccessInfo.tsx");

export default tmp3;
