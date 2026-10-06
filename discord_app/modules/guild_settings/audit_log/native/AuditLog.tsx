// === Module 17773: AuditLog ===

// Module 17773 (AuditLog)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2066 */;
import native2 from "native" /* 4595 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import PlatformsDefault from "Platforms" /* 5449 */;
import EmojiDefault from "Emoji" /* 6632 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 6670 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7861 */;
import AppliedForumTag from "AppliedForumTag" /* 10369 */;
import AuditLogUtilsAll from "AuditLogUtils" /* 17761 */;
import react from "react" /* 19 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import UserRecord from "UserRecord" /* 1391 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import get_initialized from "get initialized" /* 504 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let Fonts;
let c10;
let closure_12;
let closure_14;
let closure_15;
let items;
let items1;
let items2;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let size;
let size1;
let unpackModuleId;
const View = react_native.View;
({ AuditLogTargetTypes: c10, AuditLogActionTypes: unpackModuleId, AuditLogActions: closure_12, Fonts, AuditLogChangeKeys: map1 } = Constants);
let Fragment = Fragment_mod;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let obj = { container: { marginHorizontal: 8, marginVertical: 4, borderRadius: 3 }, rowContainer: { flex: 1, flexDirection: "row", alignItems: "center" }, titleContainer: { marginRight: 24, flex: 1 }, title: { marginHorizontal: 8 }, discriminator: obj2, avatar: { marginLeft: 10, height: 32, width: 32 }, timestamp: obj3, arrow: size, rotate90: obj4, changesContainer: obj5, changeRow: { flexDirection: "row", flex: 1, alignItems: "flex-start" }, changeNumberText: { marginRight: 10, fontFamily: Fonts.CODE_BOLD, lineHeight: 24 }, changeItemText: obj6, colorHook: size1, colorsHook: { display: "flex", flexDirection: "row", fontFamily: Fonts.PRIMARY_MEDIUM, justifyContent: "center", alignItems: "center" }, changeItemContent: { flex: 1, alignItems: "flex-start" }, changeItemRow: { alignItems: "center", flexDirection: "row", flexWrap: "wrap" }, changeItemTextLine: { lineHeight: 24 }, forumTag: obj7, imageEmoji: { height: 14, width: 14 }, textEmoji: { fontSize: 14, lineHeight: 16 } };
obj2 = { fontSize: 12, lineHeight: 30, color: nativeDefault.unsafe_rawColors.PRIMARY_400 };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { fontSize: 12, marginHorizontal: 8, marginTop: 8, color: nativeDefault.unsafe_rawColors.PRIMARY_400 };
size = { height: 13, width: 8, marginRight: 8, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj4 = { transform: items };
items = [{ rotate: "90deg" }];
obj5 = { marginTop: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj6 = { color: nativeDefault.unsafe_rawColors.PRIMARY_400, alignItems: "baseline", fontSize: 14 };
size1 = { height: 10, width: 10, borderRadius: 5, borderColor: nativeDefault.unsafe_rawColors.TRANSPARENT };
obj7 = { height: "auto", paddingVertical: 0, paddingHorizontal: nativeDefault.space.PX_4, transform: items1 };
items1 = [{ translateY: 0.5 }];
const authStore3 = createLegacyClassComponentStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((applicationId) => {
  let tmp6;
  const obj = react2;
  const cResult = obj.c(2);
  applicationId = applicationId.applicationId;
  const obj2 = useGetOrFetchApplications;
  const getOrFetchApplication = obj2.useGetOrFetchApplication(applicationId);
  let name;
  if (getOrFetchApplication != null) {
    name = getOrFetchApplication.name;
  }
  if (name == null) {
    name = applicationId;
  }
  if (cResult[0] !== name) {
    const obj3 = { variant: "text-sm/semibold", children: name };
    const tmp8 = authStore2(Text_Text.Text, obj3);
    cResult[0] = name;
    cResult[1] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : ((applicationId) => {
  applicationId = applicationId.applicationId;
  const obj = useGetOrFetchApplications;
  const getOrFetchApplication = obj.useGetOrFetchApplication(applicationId);
  let children;
  const Text = Text_Text.Text;
  if (getOrFetchApplication != null) {
    children = getOrFetchApplication.name;
  }
  if (children == null) {
    children = applicationId;
  }
  return authStore2(Text, { variant: "text-sm/semibold", children });
});
let tmp7;
if (PlatformUtils.isAndroid()) {
  let obj8 = { transform: items2 };
  items2 = [{ translateY: 1 }];
  tmp7 = obj8;
}
obj8 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const obj = react2;
  const cResult = obj.c(2);
  children = children.children;
  let tmp3 = children;
  if (null != obj8) {
    let tmp4;
    if (cResult[0] !== children) {
      const obj2 = { style: tmp2, children };
      const tmp7 = authStore2(View, obj2);
      cResult[0] = children;
      cResult[1] = tmp7;
      tmp4 = tmp7;
    } else {
      tmp4 = cResult[1];
    }
    tmp3 = tmp4;
  }
  return tmp3;
}) : ((children) => {
  children = children.children;
  let tmp2 = children;
  if (null != obj8) {
    const obj = { style: tmp, children };
    tmp2 = authStore2(View, obj);
  }
  return tmp2;
});
const PureComponent = react.PureComponent;
class AuditLog extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.onHeaderClick = function onHeaderClick() {
      const props = applyArgumentsResult.props;
      props.onHeaderClick(props.log);
    };
    return applyArgumentsResult;
  }
  renderTitle() {
    let closure_0;
    let str;
    const tmp = closure_16(this.context);
    _require = tmp;
    const log = this.props.log;
    const user = log.user;
    const target = log.target;
    const options = log.options;
    let obj = user(target[20]);
    const changeTitle = obj.getChangeTitle(log);
    let tmp5Result = null;
    if (null != changeTitle) {
      let obj2 = { style: tmp.title, accessibilityRole: "header", variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
      let Text = require("Text/Text").Text;
      let intl = require("intl").intl;
      let obj3 = {
        user,
        target,
        userHook() {
            if (null != user) {
              const Text = Text_Text.Text;
              const items = [, ];
              const obj4 = UserUtilsDefault;
              items[0] = obj4.getUserTag(user, { mode: "username" });
              let tmp22 = !user.hasUniqueUsername();
              user.hasUniqueUsername();
              if (tmp22) {
                const obj3 = { style: closure_0.discriminator, children: `#${obj.discriminator}` };
                tmp22 = authStore2(native.LegacyText, obj3);
              }
              const obj5 = { variant: "text-md/medium", color: "text-default", children: items };
              items[1] = tmp22;
              return closure_15(Text, obj5, "user" + user.id);
            } else if (null != options.integration_type) {
              const obj2 = PlatformsDefault;
              const value = obj2.get(options.integration_type);
              let name;
              if (value != null) {
                name = value.name;
              }
              if (name == null) {
                const intl2 = intl3.intl;
                name = intl2.string(intl3.t["n+olu7"]);
              }
              const obj6 = { variant: "text-md/medium", color: "text-default", children: name };
              return authStore2(Text_Text.Text, obj6, "integration" + options.integration_type);
            } else {
              const intl = intl3.intl;
              return intl.string(intl3.t["30mdIx"]);
            }
          },
        targetHook(children, arg1) {
            let tmp8Result;
            if (log.targetType === constants.USER) {
              if (target instanceof UserRecord) {
                const Text = Text_Text.Text;
                const items = [, ];
                const obj3 = UserUtilsDefault;
                items[0] = obj3.getUserTag(target, { mode: "username" });
                let tmp12 = "0" !== target.discriminator;
                if (tmp12) {
                  const obj2 = { style: closure_0.discriminator, children: `#${tmp3.discriminator}` };
                  tmp12 = authStore2(native.LegacyText, obj2);
                }
                const obj4 = { variant: "text-md/medium", color: "text-default", children: items };
                items[1] = tmp12;
                tmp8Result = closure_15(Text, obj4, `target${tmp3.id}`);
              }
              return tmp8Result;
            }
            if (log.targetType === constants.GUILD) {
              if (typeof target === "object") {
                const obj6 = GuildRecordUtils;
                if (obj6.isGuildRecord(target)) {
                  const obj5 = { variant: "text-md/medium", color: "text-default", children: target.name };
                  tmp8Result = authStore2(Text_Text.Text, obj5, `target${tmp5.id}`);
                }
              }
            }
            const obj = { variant: "text-md/medium", color: "text-default", children };
            tmp8Result = authStore2(Text_Text.Text, obj, arg1);
          },
        count: str,
        channel: null,
        channelHook: null,
        subtarget: null
      };
      str = options.count;
      const format = intl.format;
      const tmp6 = _require;
      if (str == null) {
        str = "";
      }
      if (null != options.channel) {
        let channel;
        if (typeof options.channel !== "string") {
          const tmp6Result = tmp6(target[25]);
          channel = tmp6Result.computeChannelName(options.channel, UserStore, RelationshipStore, true);
        }
        obj3.channel = channel;
        obj3.channelHook = function channelHook(children, arg1) {
          const obj = { variant: "text-md/medium", color: "text-default", children };
          return closure_1_14(closure_0(target[17]).Text, obj, arg1);
        };
        obj3.subtarget = options.subtarget;
        obj2.children = format(changeTitle, obj3);
        tmp5Result = closure_14(Text, obj2);
      }
      channel = options.channel;
    }
    return tmp5Result;
  }
  renderRoleUpdate(newValue) {
    newValue = newValue.newValue;
    let mapped = null;
    if (Array.isArray(newValue)) {
      mapped = newValue.map((children) => {
        const obj = { variant: "text-sm/medium", color: "text-muted", children: children.name };
        return closure_1_14(require("Text/Text").Text, obj, children.id);
      });
    }
    return mapped;
  }
  renderPermissionUpdate(newValue) {
    const self = this;
    newValue = newValue.newValue;
    let mapped = null;
    if (Array.isArray(newValue)) {
      mapped = newValue.map((item) => {
        let obj2;
        const obj = { variant: "text-sm/medium", color: "text-muted", children: obj2.getStringForPermission(item, self.props.log) };
        const Text = Text_Text.Text;
        obj2 = AuditLogUtilsAll;
        return authStore2(Text, obj, item);
      });
    }
    return mapped;
  }
  renderChangeDetails(changeStrings) {
    let constants3;
    let constants4;
    let v0;
    const self = this;
    const tmp = closure_16(this.context);
    let children = tmp;
    const log = this.props.log;
    if (null == log.changes) {
      return null;
    } else {
      let num = 0;
      let c0 = 0;
      const changes = log.changes;
      let obj = {
        style: tmp.changesContainer,
        children: changes.map((key, index) => {
            let changeItemTextLine;
            let items;
            let items1;
            let items2;
            let items3;
            let items4;
            let newValue;
            let newValue2;
            let num;
            let obj4;
            let obj5;
            let result;
            let str;
            let obj = children(log[20]);
            if (obj.shouldNotRenderChangeDetail(log, key)) {
              return null;
            } else {
              let obj33;
              if (log.action === constants3.CHANNEL_UPDATE) {
                if (key.key === constants4.TYPE) {
                  let oldValue = key.oldValue;
                  if (oldValue == null) {
                    let obj3 = { type: key.oldValue };
                    obj8 = v0(log[26]);
                    oldValue = obj8.channelTypeString(obj3);
                  }
                  const obj7 = { oldValue, newValue: newValue2 };
                  newValue2 = key.newValue;
                  if (newValue2 == null) {
                    const obj9 = { type: key.newValue };
                    const obj11 = v0(log[26]);
                    newValue2 = obj11.channelTypeString(obj9);
                  }
                  obj33 = obj7;
                }
                const oldValue2 = obj33.oldValue;
                let application_id = oldValue2;
                const newValue1 = obj33.newValue;
                if (log.action !== constants3.MEMBER_ROLE_UPDATE) {
                  if (log.action === constants3.INVITE_CREATE) {
                    let tmp18Result;
                    if (newValue1[key.key] != null) {
                      tmp18Result = tmp18(key);
                    }
                    if (null == tmp18Result) {
                      return null;
                    } else {
                      const intl = v0(log[21]).intl;
                      const _Array = Array;
                      const format = intl.format;
                      const obj10 = {
                        oldValue: oldValue2,
                        newValue: newValue1,
                        count: num,
                        subtarget: str,
                        newColorHook(arg0, arg1) {
                                    let items;
                                    let obj2;
                                    const obj = { children: authStore2(View, obj2) };
                                    obj2 = { style: items };
                                    items = [children.colorHook, ];
                                    const obj3 = { backgroundColor: newValue1 };
                                    items[1] = obj3;
                                    return authStore2(closure_19, obj, arg1);
                                  },
                        newColorsHook(arg0, arg1) {
                                    let found;
                                    let obj2;
                                    let obj = { children: authStore2(View, obj2) };
                                    obj2 = {
                                      style: colorHook.colorsHook,
                                      children: found.map((item, index) => {
                                        let items;
                                        let items1;
                                        let str2;
                                        let tmp3Result2;
                                        const Fragment = React.Fragment;
                                        let str = "";
                                        const Text = application_id(log[17]).Text;
                                        if (index > 0) {
                                          str = ", ";
                                        }
                                        const obj = { children: items };
                                        const obj2 = { variant: "text-sm/bold", children: "" + str + str2.toUpperCase() + " " };
                                        const tmp3Result = application_id(log[29]);
                                        str2 = tmp3Result.int2hex(item);
                                        items = [closure_2_14(Text, obj2), ];
                                        const obj3 = { style: items1 };
                                        items1 = [colorHook.colorHook, ];
                                        const obj4 = { backgroundColor: tmp3Result2.int2hex(item) };
                                        items1[1] = obj4;
                                        tmp3Result2 = application_id(log[29]);
                                        items[1] = closure_2_14(closure_2_5, obj3);
                                        return closure_2_15(Fragment, obj, index);
                                      })
                                    };
                                    let items = [, , ];
                                    ({ primary_color: arr[0], secondary_color: arr[1], tertiary_color: arr[2] } = newValue1);
                                    found = items.filter(GlobalUtils.isNotNullish);
                                    return authStore2(closure_19, obj, arg1);
                                  },
                        oldColorHook() {
                                    return null;
                                  },
                        oldTagHook(arg0, arg1) {
                                    let obj2;
                                    const obj = { children: authStore2(AppliedForumTag.AppliedForumTagPill, obj2) };
                                    obj2 = { tag: application_id, containerStyle: children.forumTag, disableEndMargin: true };
                                    return authStore2(closure_19, obj, arg1);
                                  },
                        newTagHook(arg0, arg1) {
                                    let obj2;
                                    const obj = { children: authStore2(AppliedForumTag.AppliedForumTagPill, obj2) };
                                    obj2 = { tag: newValue1, containerStyle: children.forumTag, disableEndMargin: true };
                                    return authStore2(closure_19, obj, arg1);
                                  },
                        oldEmojiHook(arg0, arg1) {
                                    let obj4;
                                    let emojiURL;
                                    if (null != application_id) {
                                      const obj2 = { id: application_id, animated: false, size: 24 };
                                      const obj = AvatarUtilsDefault;
                                      emojiURL = obj.getEmojiURL(obj2);
                                    }
                                    const obj3 = { children: authStore2(EmojiDefault, obj4) };
                                    obj4 = { src: emojiURL, name: application_id, textEmojiStyle: children.textEmoji, fastImageStyle: children.imageEmoji };
                                    return authStore2(closure_19, obj3, arg1);
                                  },
                        newEmojiHook(arg0, arg1) {
                                    let obj4;
                                    let emojiURL;
                                    if (null != newValue1) {
                                      const obj2 = { id: newValue1, animated: false, size: 24 };
                                      const obj = AvatarUtilsDefault;
                                      emojiURL = obj.getEmojiURL(obj2);
                                    }
                                    const obj3 = { children: authStore2(EmojiDefault, obj4) };
                                    obj4 = { src: emojiURL, name: newValue1, textEmojiStyle: children.textEmoji, fastImageStyle: children.imageEmoji };
                                    return authStore2(closure_19, obj3, arg1);
                                  },
                        applicationHook(arg0, arg1) {
                                    let applicationId;
                                    if (application_id != null) {
                                      applicationId = application_id.application_id;
                                    }
                                    if (applicationId == null) {
                                      let application_id1;
                                      if (newValue1 != null) {
                                        application_id1 = newValue1.application_id;
                                      }
                                      applicationId = application_id1;
                                    }
                                    return authStore2(closure_17, { applicationId }, arg1);
                                  },
                        oldApplicationHook(arg0, arg1) {
                                    const obj = { applicationId: application_id };
                                    return authStore2(closure_17, obj, arg1);
                                  },
                        newApplicationHook(arg0, arg1) {
                                    const obj = { applicationId: newValue1 };
                                    return authStore2(closure_17, obj, arg1);
                                  }
                      };
                      num = 0;
                      if (Array.isArray(newValue1)) {
                        num = newValue1.length;
                      }
                      str = log.options.subtarget;
                      if (str == null) {
                        str = key.subtarget;
                      }
                      if (str == null) {
                        str = "";
                      }
                      const formatResult = format(tmp18Result, obj10);
                      if (null == formatResult) {
                        return null;
                      } else {
                        let RED_400;
                        const actionType = log.actionType;
                        if (constants2.CREATE === actionType) {
                          RED_400 = changeStrings(log[9]).unsafe_rawColors.GREEN_360;
                        } else if (constants2.UPDATE === actionType) {
                          RED_400 = changeStrings(log[9]).unsafe_rawColors.YELLOW_300;
                        } else if (constants2.DELETE === actionType) {
                          RED_400 = changeStrings(log[9]).unsafe_rawColors.RED_400;
                        }
                        application_id = application_id + 1;
                        const obj13 = { variant: "text-sm/bold", style: items, children: items1 };
                        items = [children.changeNumberText, ];
                        const obj12 = { style: children.changeRow, children: items2 };
                        const obj14 = { color: RED_400 };
                        items[1] = obj14;
                        let str2 = null;
                        let Text = v0(log[17]).Text;
                        const tmp29 = application_id;
                        if (application_id < 10) {
                          str2 = "0";
                        }
                        items1 = [str2, tmp29, " \u2014"];
                        items2 = [closure_1_15(Text, obj13), ];
                        const obj15 = { style: children.changeItemContent, children: items4 };
                        const obj16 = { style: null, children: items3 };
                        ({ changeItemRow: obj17.style, changeItemTextLine } = children);
                        items3 = [];
                        children = [];
                        const Children = self.Children;
                        const toArrayResult = Children.toArray(formatResult);
                        const item = toArrayResult.forEach((type) => {
                          if (React.isValidElement(type)) {
                            if (type.type === closure_2_19) {
                              if (0 !== children.length) {
                                const push = items3.push;
                                const _HermesInternal = HermesInternal;
                                const obj = { variant: "text-sm/normal", style: changeItemTextLine, children };
                                push(closure_2_14(changeItemTextLine(log[17]).Text, obj, "text-" + items3.length));
                                children = [];
                              }
                              items3.push(type);
                            }
                          }
                          children.push(type);
                        });
                        if (0 !== children.length) {
                          let push = items3.push;
                          let _HermesInternal = HermesInternal;
                          const obj18 = { variant: "text-sm/normal", style: changeItemTextLine, children };
                          const arr = push(closure_1_14(v0(log[17]).Text, obj18, "text-" + items3.length));
                          children = [];
                        }
                        items4 = [closure_1_14(View, obj16), ];
                        let tmp36 = null;
                        if (null != result) {
                          tmp36 = result;
                        }
                        items4[1] = tmp36;
                        items2[1] = closure_1_15(View, obj15);
                        return closure_1_15(View, obj12, index);
                      }
                    }
                  }
                  if (log.targetType !== constants.ROLE) {
                    if (log.action !== constants3.CHANNEL_OVERWRITE_CREATE) {
                      result = null;
                    }
                  }
                  result = self.renderPermissionUpdate(key);
                }
                result = self.renderRoleUpdate(key);
              }
              if (log.action === constants3.MEMBER_UPDATE) {
                if (key.key === constants4.COMMUNICATION_DISABLED_UNTIL) {
                  const obj6 = changeStrings(log[27])(key.newValue);
                  const obj19 = { oldValue: key.oldValue, newValue };
                  if (obj6.isValid()) {
                    newValue = obj6.calendar();
                  } else {
                    newValue = key.newValue;
                  }
                  obj33 = obj19;
                }
              }
              if (log.action === constants3.GUILD_UPDATE) {
                if (key.key === constants4.OWNER_ID) {
                  const obj32 = { oldValue: obj4.getUserTag(key.oldValue, { mode: "username" }), newValue: obj5.getUserTag(key.newValue, { mode: "username" }) };
                  obj4 = changeStrings(log[22]);
                  obj33 = obj32;
                  obj5 = changeStrings(log[22]);
                }
              }
              obj33 = { oldValue: null, newValue: null };
              ({ oldValue: obj2.oldValue, newValue: obj2.newValue } = key);
            }
          })
      };
      return closure_14(View, obj);
    }
  }
  renderChangeSummary() {
    const self = this;
    let renderChangeDetailsResult = null;
    if (this.props.expanded) {
      const renderChangeDetails = self.renderChangeDetails;
      const obj = AuditLogUtilsAll;
      renderChangeDetailsResult = renderChangeDetails(obj.getChangeStrings(tmp));
    }
    return renderChangeDetailsResult;
  }
  render() {
    let containerStyle;
    let expanded;
    let guildId;
    let id;
    let intl;
    let items;
    let items1;
    let items3;
    let items4;
    let log;
    let obj10;
    let require;
    let str2;
    let str3;
    let theme;
    let tmp10;
    let tmp8;
    let tmp9;
    let username;
    const self = this;
    const tmp = closure_16(this.context);
    const props = this.props;
    ({ log, expanded, guildId, channel: require } = props);
    const user = log.user;
    ({ containerStyle, theme } = props);
    let obj = AuditLogUtilsAll;
    const checkChangesToRenderResult = obj.checkChangesToRender(log);
    const timestampStart = log.timestampStart;
    const calendarResult = timestampStart.calendar();
    const timestampEnd = log.timestampEnd;
    const calendarResult1 = timestampEnd.calendar();
    if (calendarResult === calendarResult1) {
      let obj2 = { style: tmp.timestamp, children: calendarResult };
      tmp8 = closure_14(native.LegacyText, obj2);
      tmp9 = require;
      tmp10 = require;
    } else {
      const obj3 = { style: tmp.timestamp, children: items };
      items = [calendarResult, "\u2014", calendarResult1];
      tmp8 = closure_15(native.LegacyText, obj3);
      tmp9 = require;
      tmp10 = require;
    }
    let onHeaderClick;
    if (checkChangesToRenderResult) {
      onHeaderClick = self.onHeaderClick;
    }
    let rotate90 = null;
    if (expanded) {
      rotate90 = tmp.rotate90;
    }
    const obj4 = { accessible: false, style: items1, variant: str2, border: str3, onPress: onHeaderClick, children: null };
    items1 = [tmp.container, containerStyle];
    str2 = "secondary";
    const Card = tmp10(6002).Card;
    if (expanded) {
      str2 = "primary";
    }
    str3 = "none";
    if (expanded) {
      str3 = "strong";
    }
    const obj5 = { style: tmp.rowContainer, children: null };
    const items2 = [, , , ];
    const obj6 = { action: log.action };
    items2[0] = closure_14(user(17765), obj6);
    const obj7 = {
      accessibilityRole: "button",
      accessibilityLabel: intl.string(tmp10(1126).t.iXAna6),
      accessibilityHint: username,
      onPress() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        if (null != user) {
          const obj2 = { userId: tmp4.id, channelId: require.id };
          showUserProfileActionSheetDefault(obj2);
        }
      },
      children: null
    };
    const PressableOpacity = tmp10(5916).PressableOpacity;
    intl = tmp10(1126).intl;
    username = undefined;
    if (user != null) {
      username = user.username;
    }
    obj8 = { style: tmp.avatar, source: null, size: null };
    if (log.action !== constants2.AUTO_MODERATION_BLOCK_MESSAGE) {
      if (log.action !== constants2.AUTO_MODERATION_FLAG_TO_CHANNEL) {
        if (log.action !== constants2.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) {
          let source;
          if (log.action !== constants2.AUTO_MODERATION_QUARANTINE_USER) {
            if (null != log.options.integration_type) {
              const tmp18Result = user(5449);
              const value = tmp18Result.get(log.options.integration_type);
              if (null != value) {
                const icon = value.icon;
                const tmp9Result = tmp9(4735);
                const tmp25 = tmp9Result.isThemeDark(theme) ? icon.darkPNG : icon.lightPNG;
                const tmp9Result5 = tmp9(1402);
                source = tmp9Result5.makeSource(tmp25);
              }
            }
            if (null != guildId) {
              const user2 = log.user;
              let avatarSource;
              if (user2 != null) {
                avatarSource = user2.getAvatarSource(guildId, false);
              }
              source = avatarSource;
            }
          }
          obj8.source = source;
          obj8.size = tmp10(1188).AvatarSizes.SMALL;
          obj7.children = closure_14(tmp20, obj8);
          items2[1] = closure_14(PressableOpacity, obj7);
          const obj9 = { accessibilityRole: "button", accessibilityState: obj10, onPress: onHeaderClick, style: tmp.titleContainer, disabled: !checkChangesToRenderResult, children: items3 };
          obj10 = { expanded, disabled: !checkChangesToRenderResult };
          const PressableOpacity2 = tmp10(5916).PressableOpacity;
          items3 = [self.renderTitle(), tmp8];
          items2[2] = closure_15(PressableOpacity2, obj9);
          let tmp17Result = null;
          if (checkChangesToRenderResult) {
            const obj11 = { style: items4, size: tmp10(1188).Icon.Sizes.CUSTOM, source: user(14444) };
            items4 = [tmp.arrow, rotate90];
            const Icon = tmp10(1188).Icon;
            tmp17Result = closure_14(Icon, obj11);
          }
          items2[3] = tmp17Result;
          obj5.children = items2;
          const items5 = [closure_15(View, obj5), ];
          let renderChangeSummaryResult = null;
          if (expanded) {
            renderChangeSummaryResult = self.renderChangeSummary();
          }
          items5[1] = renderChangeSummaryResult;
          obj4.children = items5;
          return closure_15(Card, obj4);
        }
      }
    }
    const ensureAvatarSource = tmp9(1405).ensureAvatarSource;
    tmp9(1405);
    const makeSource = tmp9(1402).makeSource;
    tmp9(1402);
    const tmp9Result8 = tmp9(1405);
    source = ensureAvatarSource(makeSource(tmp9Result8.getAutomodAvatarURL()));
  }
}
const prototype = AuditLog.prototype;
AuditLog.contextType = native2.ThemeContext;
let items3 = [ThemeStore];
let tmp8 = get_initialized.connectStores(items3, () => ({ theme: ThemeStore.theme }))(AuditLog);
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_settings/audit_log/native/AuditLog.tsx");

export default tmp8;