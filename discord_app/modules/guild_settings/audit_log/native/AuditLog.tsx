// === Module 17555: AuditLog ===

// Module 17555 (AuditLog)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import GuildRecordUtils from "GuildRecordUtils" /* 1971 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import PlatformsDefault from "Platforms" /* 5283 */;
import EmojiDefault from "Emoji" /* 7130 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7168 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8179 */;
import AppliedForumTag from "AppliedForumTag" /* 10627 */;
import AuditLogUtilsAll from "AuditLogUtils" /* 17538 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1183 */;
import UserRecord from "UserRecord" /* 1385 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;
import initialize from "initialize" /* 504 */;

require = fn;
function ApplicationHook(applicationId) {
  applicationId = applicationId.applicationId;
  const getOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication(applicationId);
  let children;
  if (getOrFetchApplication != null) {
    children = getOrFetchApplication.name;
  }
  if (children == null) {
    children = applicationId;
  }
  return closure_1_14(Text_Text.Text, { variant: "text-sm/semibold", children });
}
function InlineSegment(children) {
  children = children.children;
  let tmp2 = children;
  if (null != obj6) {
    const obj = { style: tmp, children };
    tmp2 = closure_1_14(View, obj);
  }
  return tmp2;
}
const View = fn(17).View;
const Constants = fn(1074);
({ AuditLogTargetTypes: c10, AuditLogActionTypes: closure_11, AuditLogActions: closure_12, Fonts, AuditLogChangeKeys: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
fn(4560);
let createStyles = { container: { marginHorizontal: 8, marginVertical: 4, borderRadius: 3 }, rowContainer: { flex: 1, flexDirection: "row", alignItems: "center" }, titleContainer: { marginRight: 24, flex: 1 }, title: { marginHorizontal: 8 }, discriminator: null, avatar: null, timestamp: null, arrow: null, rotate90: null, changesContainer: null, changeRow: null, changeNumberText: null, changeItemText: null, colorHook: null, colorsHook: null, changeItemContent: null, changeItemRow: null, changeItemTextLine: null, forumTag: null, imageEmoji: null, textEmoji: null };
createStyles = { fontSize: 12, lineHeight: 30, color: nativeDefault.unsafe_rawColors.PRIMARY_400 };
createStyles.discriminator = createStyles;
createStyles.avatar = { marginLeft: 10, height: 32, width: 32 };
createStyles.timestamp = { fontSize: 12, marginHorizontal: 8, marginTop: 8, color: nativeDefault.unsafe_rawColors.PRIMARY_400 };
let size = { height: 13, width: 8, marginRight: 8, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.arrow = size;
let obj2 = { transform: null };
let items = [{ rotate: "90deg" }];
obj2.transform = items;
createStyles.rotate90 = obj2;
let obj1 = { fontSize: 12, marginHorizontal: 8, marginTop: 8, color: nativeDefault.unsafe_rawColors.PRIMARY_400 };
createStyles.changesContainer = { marginTop: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
createStyles.changeRow = { flexDirection: "row", flex: 1, alignItems: "flex-start" };
createStyles.changeNumberText = { marginRight: 10, fontFamily: Fonts.CODE_BOLD, lineHeight: 24 };
let obj3 = { marginTop: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
createStyles.changeItemText = { color: nativeDefault.unsafe_rawColors.PRIMARY_400, alignItems: "baseline", fontSize: 14 };
const size1 = { height: 10, width: 10, borderRadius: 5, borderColor: nativeDefault.unsafe_rawColors.TRANSPARENT };
createStyles.colorHook = size1;
createStyles.colorsHook = { display: "flex", flexDirection: "row", fontFamily: Fonts.PRIMARY_MEDIUM, justifyContent: "center", alignItems: "center" };
createStyles.changeItemContent = { flex: 1, alignItems: "flex-start" };
createStyles.changeItemRow = { alignItems: "center", flexDirection: "row", flexWrap: "wrap" };
createStyles.changeItemTextLine = { lineHeight: 24 };
let obj5 = { height: "auto", paddingVertical: 0, paddingHorizontal: nativeDefault.space.PX_4, transform: null };
let items1 = [{ translateY: 0.5 }];
obj5.transform = items1;
createStyles.forumTag = obj5;
createStyles.imageEmoji = { height: 14, width: 14 };
createStyles.textEmoji = { fontSize: 14, lineHeight: 16 };
let closure_16 = createStyles.createLegacyClassComponentStyles(createStyles);
const PlatformUtils = fn(1115);
let tmp6;
if (PlatformUtils.isAndroid()) {
  let obj6 = { transform: null };
  let items2 = [{ translateY: 1 }];
  obj6.transform = items2;
  tmp6 = obj6;
}
obj6 = tmp6;
const PureComponent = noop.PureComponent;
class AuditLog extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.onHeaderClick = function onHeaderClick() {
      const props = applyArgumentsResult.props;
      props.onHeaderClick(props.log);
    };
    return applyArgumentsResult;
  }
}
const prototype = AuditLog.prototype;
prototype["renderTitle"] = function renderTitle() {
  const tmp = closure_16(this.context);
  _require = tmp;
  const log = this.props.log;
  const user = log.user;
  const target = log.target;
  let subtarget = log.options;
  let obj = user(target[18]);
  const changeTitle = obj.getChangeTitle(log);
  if (null == changeTitle) {
    return null;
  } else {
    obj = { style: tmp.title, accessibilityRole: "header", variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
    let intl = require("util").intl;
    obj = {
      user,
      target,
      userHook() {
          let obj = user;
          if (null != user) {
            const items = [UserUtilsDefault.getUserTag(obj, { mode: "username" }), ];
            const hasUniqueUsernameResult = obj.hasUniqueUsername();
            let tmp22 = !hasUniqueUsernameResult;
            if (!hasUniqueUsernameResult) {
              obj = { style: closure_0.discriminator, children: `#${obj.discriminator}` };
              tmp22 = closure_2_14(native.LegacyText, obj);
            }
            obj = { variant: "text-md/medium", color: "text-default", children: null };
            items[1] = tmp22;
            obj.children = items;
            return __initData(Text_Text.Text, obj, "user" + obj.id);
          } else if (null != subtarget.integration_type) {
            let obj1 = PlatformsDefault;
            value = obj1.get(tmp27.integration_type);
            let name;
            if (value != null) {
              name = value.name;
            }
            if (name == null) {
              const intl2 = util.intl;
              name = intl2.string(util.t["n+olu7"]);
            }
            obj1 = { variant: "text-md/medium", color: "text-default", children: name };
            return closure_2_14(Text_Text.Text, obj1, "integration" + tmp27.integration_type);
          } else {
            const intl = util.intl;
            return intl.string(util.t["30mdIx"]);
          }
        },
      targetHook(children, arg1) {
          if (log.targetType === constants.USER) {
            if (target instanceof UserRecord) {
              const items = [UserUtilsDefault.getUserTag(tmp3, { mode: "username" }), ];
              let tmp12 = "0" !== tmp3.discriminator;
              if (tmp12) {
                let obj = { style: closure_0.discriminator, children: `#${tmp3.discriminator}` };
                tmp12 = closure_2_14(tmp9(1178).LegacyText, obj);
              }
              obj = { variant: "text-md/medium", color: "text-default", children: null };
              items[1] = tmp12;
              obj.children = items;
              let tmp8Result = __initData(Text_Text.Text, obj, `target${tmp3.id}`);
              tmp9 = require;
            }
            return tmp8Result;
          }
          if (log.targetType === constants.GUILD) {
            if (typeof target === "object") {
              if (obj6.isGuildRecord(tmp5)) {
                const obj1 = { variant: "text-md/medium", color: "text-default", children: tmp5.name };
                tmp8Result = closure_2_14(tmp15(4556).Text, obj1, `target${tmp5.id}`);
              }
              obj6 = GuildRecordUtils;
              tmp15 = require;
            }
          }
          obj = { variant: "text-md/medium", color: "text-default", children };
          tmp8Result = closure_2_14(Text_Text.Text, obj, arg1);
        },
      count: null,
      channel: null,
      channelHook: null,
      subtarget: null
    };
    let str = subtarget.count;
    if (str == null) {
      str = "";
    }
    obj.count = str;
    if (null != subtarget.channel) {
      if (typeof subtarget.channel !== "string") {
        const tmp5Result = tmp5(tmp2[23]);
        let channel = tmp5Result.computeChannelName(subtarget.channel, UserStore, RelationshipStore, true);
      }
      obj.channel = channel;
      obj.channelHook = function channelHook(children, arg1) {
        return closure_1_14(closure_0(target[15]).Text, { variant: "text-md/medium", color: "text-default", children }, arg1);
      };
      subtarget = subtarget.subtarget;
      obj.subtarget = subtarget;
      obj = intl.format(changeTitle, obj);
      obj.children = obj;
      tmp4(require("Text/Text").Text, obj);
    }
    channel = subtarget.channel;
    tmp4 = closure_14;
    tmp5 = _require;
  }
};
prototype["renderRoleUpdate"] = function renderRoleUpdate(newValue) {
  newValue = newValue.newValue;
  let mapped = null;
  if (Array.isArray(newValue)) {
    mapped = newValue.map((children) => closure_1_14(require("Text/Text").Text, { variant: "text-sm/medium", color: "text-muted", children: children.name }, children.id));
  }
  return mapped;
};
prototype["renderPermissionUpdate"] = function renderPermissionUpdate(newValue) {
  const self = this;
  newValue = newValue.newValue;
  let mapped = null;
  if (Array.isArray(newValue)) {
    mapped = newValue.map((item) => {
      const obj = { variant: "text-sm/medium", color: "text-muted", children: AuditLogUtilsAll.getStringForPermission(item, self.props.log) };
      return closure_2_14(Text_Text.Text, obj, item);
    });
  }
  return mapped;
};
prototype["renderChangeDetails"] = function renderChangeDetails(changeStrings) {
  const self = this;
  const tmp = closure_16(this.context);
  let children = tmp;
  const log = this.props.log;
  if (null == log.changes) {
    return null;
  } else {
    c0 = 0;
    const changes = log.changes;
    let obj = {
      style: tmp.changesContainer,
      children: changes.map((key, index) => {
          let obj = children(log[18]);
          if (obj.shouldNotRenderChangeDetail(log, key)) {
            return null;
          } else {
            if (tmp2.action === constants3.CHANNEL_UPDATE) {
              if (key.key === constants4.TYPE) {
                let oldValue = key.oldValue;
                if (oldValue == null) {
                  let obj7 = v0(tmp[24]);
                  obj = { type: key.oldValue };
                  oldValue = obj7.channelTypeString(obj);
                }
                obj = { oldValue, newValue: null };
                let newValue2 = key.newValue;
                if (newValue2 == null) {
                  let obj10 = v0(tmp[24]);
                  let obj1 = { type: key.newValue };
                  newValue2 = obj10.channelTypeString(obj1);
                }
                obj.newValue = newValue2;
                let obj11 = obj;
              }
              const oldValue2 = obj11.oldValue;
              changeItemTextLine = oldValue2;
              let newValue = obj11.newValue;
              let items3 = newValue;
              if (tmp2.action !== tmp3.MEMBER_ROLE_UPDATE) {
                if (tmp2.action === tmp3.INVITE_CREATE) {
                  let tmp18Result;
                  if (items3[key.key] != null) {
                    tmp18Result = tmp18(key);
                  }
                  if (null == tmp18Result) {
                    return null;
                  } else {
                    const intl = v0(tmp[19]).intl;
                    const obj2 = { oldValue: oldValue2, newValue, count: null, subtarget: null, newColorHook: null, newColorsHook: null, oldColorHook: null, oldTagHook: null, newTagHook: null, oldEmojiHook: null, newEmojiHook: null, applicationHook: null, oldApplicationHook: null, newApplicationHook: null };
                    const _Array = Array;
                    let num = 0;
                    if (Array.isArray(newValue)) {
                      num = newValue.length;
                    }
                    obj2.count = num;
                    let str = tmp2.options.subtarget;
                    if (str == null) {
                      str = key.subtarget;
                    }
                    if (str == null) {
                      str = "";
                    }
                    obj2.subtarget = str;
                    obj2.newColorHook = function newColorHook(arg0, arg1) {
                      let obj = { children: null };
                      obj = { style: null };
                      const items = [children.colorHook, ];
                      obj = { backgroundColor: items3 };
                      items[1] = obj;
                      obj.style = items;
                      obj.children = closure_3_14(View, obj);
                      return closure_3_14(InlineSegment, obj, arg1);
                    };
                    obj2.newColorsHook = function newColorsHook(arg0, arg1) {
                      let obj = { children: null };
                      obj = { style: children.colorsHook, children: null };
                      let items = [, , ];
                      ({ primary_color: arr[0], secondary_color: arr[1], tertiary_color: arr[2] } = items3);
                      const found = items.filter(GlobalUtils.isNotNullish);
                      obj.children = found.map((item, index) => {
                        let str = "";
                        if (index > 0) {
                          str = ", ";
                        }
                        let obj = { children: null };
                        obj = { variant: "text-sm/bold", children: null };
                        let tmp3Result = tmp3(tmp4[27]);
                        obj.children = "" + str + tmp3Result.int2hex(item).toUpperCase() + " ";
                        const items = [closure_2_14(changeItemTextLine(log[15]).Text, obj), ];
                        obj = { style: null };
                        const items1 = [colorHook.colorHook, ];
                        const obj1 = { backgroundColor: null };
                        tmp3Result = tmp3(tmp4[27]);
                        obj1.backgroundColor = tmp3Result.int2hex(item);
                        items1[1] = obj1;
                        obj.style = items1;
                        items[1] = closure_2_14(closure_2_5, obj);
                        obj.children = items;
                        return closure_2_15(React.Fragment, obj, index);
                      });
                      obj.children = closure_3_14(View, obj);
                      return closure_3_14(InlineSegment, obj, arg1);
                    };
                    obj2.oldColorHook = function oldColorHook() {
                      return null;
                    };
                    obj2.oldTagHook = function oldTagHook(arg0, arg1) {
                      let obj = { children: null };
                      obj = { tag: changeItemTextLine, containerStyle: children.forumTag, disableEndMargin: true };
                      obj.children = closure_3_14(AppliedForumTag.AppliedForumTagPill, obj);
                      return closure_3_14(InlineSegment, obj, arg1);
                    };
                    obj2.newTagHook = function newTagHook(arg0, arg1) {
                      let obj = { children: null };
                      obj = { tag: items3, containerStyle: children.forumTag, disableEndMargin: true };
                      obj.children = closure_3_14(AppliedForumTag.AppliedForumTagPill, obj);
                      return closure_3_14(InlineSegment, obj, arg1);
                    };
                    obj2.oldEmojiHook = function oldEmojiHook(arg0, arg1) {
                      let emojiURL;
                      if (null != changeItemTextLine) {
                        let obj = { id: tmp, animated: false, size: 24 };
                        emojiURL = obj.getEmojiURL(obj);
                      }
                      obj = { children: closure_3_14(EmojiDefault, { src: emojiURL, name: changeItemTextLine, textEmojiStyle: children.textEmoji, fastImageStyle: children.imageEmoji }) };
                      return closure_3_14(InlineSegment, obj, arg1);
                    };
                    obj2.newEmojiHook = function newEmojiHook(arg0, arg1) {
                      let emojiURL;
                      if (null != items3) {
                        let obj = { id: tmp, animated: false, size: 24 };
                        emojiURL = obj.getEmojiURL(obj);
                      }
                      obj = { children: closure_3_14(EmojiDefault, { src: emojiURL, name: items3, textEmojiStyle: children.textEmoji, fastImageStyle: children.imageEmoji }) };
                      return closure_3_14(InlineSegment, obj, arg1);
                    };
                    obj2.applicationHook = function applicationHook(arg0, arg1) {
                      let applicationId;
                      if (changeItemTextLine != null) {
                        applicationId = changeItemTextLine.application_id;
                      }
                      if (applicationId == null) {
                        let application_id1;
                        if (items3 != null) {
                          application_id1 = items3.application_id;
                        }
                        applicationId = application_id1;
                      }
                      return closure_3_14(ApplicationHook, { applicationId }, arg1);
                    };
                    obj2.oldApplicationHook = function oldApplicationHook(arg0, arg1) {
                      return closure_3_14(ApplicationHook, { applicationId: changeItemTextLine }, arg1);
                    };
                    obj2.newApplicationHook = function newApplicationHook(arg0, arg1) {
                      return closure_3_14(ApplicationHook, { applicationId: items3 }, arg1);
                    };
                    const formatResult = intl.format(tmp18Result, obj2);
                    if (null == formatResult) {
                      return null;
                    } else {
                      const actionType = tmp2.actionType;
                      if (constants2.CREATE === actionType) {
                        let RED_400 = changeStrings(tmp[9]).unsafe_rawColors.GREEN_360;
                      } else if (tmp41.UPDATE === actionType) {
                        RED_400 = changeStrings(tmp[9]).unsafe_rawColors.YELLOW_300;
                      } else if (tmp41.DELETE === actionType) {
                        RED_400 = changeStrings(tmp[9]).unsafe_rawColors.RED_400;
                      }
                      changeItemTextLine = changeItemTextLine + 1;
                      let obj3 = { style: children.changeRow, children: null };
                      let obj4 = { variant: "text-sm/bold", style: null, children: null };
                      let items = [children.changeNumberText, ];
                      let obj5 = { color: RED_400 };
                      items[1] = obj5;
                      obj4.style = items;
                      let str2 = null;
                      if (changeItemTextLine < 10) {
                        str2 = "0";
                      }
                      let items1 = [str2, changeItemTextLine, " \u2014"];
                      obj4.children = items1;
                      const items2 = [closure_1_15(tmp39(tmp[15]).Text, obj4), ];
                      obj6 = { style: children.changeItemContent, children: null };
                      obj7 = { style: null, children: null };
                      ({ changeItemRow: obj17.style, changeItemTextLine } = children);
                      items3 = [];
                      children = [];
                      const Children = self.Children;
                      const item = Children.toArray(formatResult).forEach((type) => {
                        if (self.isValidElement(type)) {
                          if (type.type === InlineSegment) {
                            if (0 !== children.length) {
                              const obj = { variant: "text-sm/normal", style: changeItemTextLine, children };
                              const _HermesInternal = HermesInternal;
                              items3.push(closure_2_14(changeItemTextLine(log[15]).Text, obj, "text-" + items3.length));
                              children = [];
                            }
                            items3.push(type);
                          }
                        }
                        children.push(type);
                      });
                      if (0 !== children.length) {
                        const obj8 = { variant: "text-sm/normal", style: changeItemTextLine, children };
                        let _HermesInternal = HermesInternal;
                        items3.push(tmp30(tmp39(tmp[15]).Text, obj8, "text-" + items3.length));
                        children = [];
                      }
                      obj7.children = items3;
                      const items4 = [closure_1_14(View, obj7), ];
                      let tmp36 = null;
                      if (null != result) {
                        tmp36 = result;
                      }
                      items4[1] = tmp36;
                      obj6.children = items4;
                      items2[1] = closure_1_15(View, obj6);
                      obj3.children = items2;
                      return closure_1_15(View, obj3, index);
                    }
                  }
                }
                if (tmp2.targetType !== constants.ROLE) {
                  if (tmp2.action !== tmp3.CHANNEL_OVERWRITE_CREATE) {
                    result = null;
                  }
                }
                result = self.renderPermissionUpdate(key);
              }
              result = self.renderRoleUpdate(key);
            }
            if (tmp2.action === constants3.MEMBER_UPDATE) {
              if (key.key === constants4.COMMUNICATION_DISABLED_UNTIL) {
                obj5 = changeStrings(tmp[25])(key.newValue);
                const obj9 = { oldValue: key.oldValue, newValue: null };
                if (obj5.isValid()) {
                  newValue = obj5.calendar();
                } else {
                  newValue = key.newValue;
                }
                obj9.newValue = newValue;
                obj11 = obj9;
              }
            }
            if (tmp2.action === constants3.GUILD_UPDATE) {
              if (key.key === constants4.OWNER_ID) {
                obj10 = { oldValue: null, newValue: null };
                obj3 = changeStrings(tmp[20]);
                obj10.oldValue = obj3.getUserTag(key.oldValue, { mode: "username" });
                obj4 = changeStrings(tmp[20]);
                obj10.newValue = obj4.getUserTag(key.newValue, { mode: "username" });
                obj11 = obj10;
              }
            }
            obj11 = { oldValue: null, newValue: null };
            ({ oldValue: obj2.oldValue, newValue: obj2.newValue } = key);
          }
        })
    };
    return closure_14(View, obj);
  }
};
prototype["renderChangeSummary"] = function renderChangeSummary() {
  const self = this;
  let renderChangeDetailsResult = null;
  if (this.props.expanded) {
    renderChangeDetailsResult = self.renderChangeDetails(AuditLogUtilsAll.getChangeStrings(tmp));
  }
  return renderChangeDetailsResult;
};
prototype["render"] = function render() {
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
    obj = { style: tmp.timestamp, children: calendarResult };
    let tmp8 = closure_14(native.LegacyText, obj);
    let tmp9 = require;
    let tmp10 = require;
  } else {
    obj = { style: tmp.timestamp, children: null };
    const items = [calendarResult, "\u2014", calendarResult1];
    obj.children = items;
    tmp8 = closure_15(native.LegacyText, obj);
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
  const obj1 = { accessible: false, style: null, variant: null, border: null, onPress: null, children: null };
  const items1 = [tmp.container, containerStyle];
  obj1.style = items1;
  let str2 = "secondary";
  if (expanded) {
    str2 = "primary";
  }
  obj1.variant = str2;
  let str3 = "none";
  if (expanded) {
    str3 = "strong";
  }
  obj1.border = str3;
  obj1.onPress = onHeaderClick;
  const obj2 = { style: tmp.rowContainer, children: null };
  const items2 = [closure_14(user(17547), { action: log.action }), , , ];
  const obj4 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, onPress: null, children: null };
  const intl = tmp10(1114).intl;
  obj4.accessibilityLabel = intl.string(tmp10(1114).t.iXAna6);
  let username;
  if (user != null) {
    username = user.username;
  }
  obj4.accessibilityHint = username;
  obj4.onPress = function onPress() {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    if (null != user) {
      obj = { userId: tmp4.id, channelId: id.id };
      showUserProfileActionSheetDefault(obj);
    }
  };
  const obj5 = { style: tmp.avatar, source: null, size: null };
  if (log.action !== constants2.AUTO_MODERATION_BLOCK_MESSAGE) {
    if (log.action !== tmp21.AUTO_MODERATION_FLAG_TO_CHANNEL) {
      if (log.action !== tmp21.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) {
        if (log.action !== tmp21.AUTO_MODERATION_QUARANTINE_USER) {
          if (null != log.options.integration_type) {
            value = tmp18(5283).get(log.options.integration_type);
            if (null != value) {
              tmp9(4411);
              const icon = value.icon;
              const tmp9Result = tmp9(1396);
              let source = tmp9Result.makeSource(tmp9Result.isThemeDark(theme) ? icon.darkPNG : icon.lightPNG);
              const tmp25 = tmp9Result.isThemeDark(theme) ? icon.darkPNG : icon.lightPNG;
            }
            const tmp18Result = tmp18(5283);
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
        obj5.source = source;
        obj5.size = tmp10(1178).AvatarSizes.SMALL;
        obj4.children = tmp17(tmp20, obj5);
        items2[1] = tmp17(tmp10(5123).PressableOpacity, obj4);
        obj6 = { accessibilityRole: "button", accessibilityState: null, onPress: null, style: null, disabled: null, children: null };
        const obj7 = { expanded, disabled: !checkChangesToRenderResult };
        obj6.accessibilityState = obj7;
        obj6.onPress = onHeaderClick;
        obj6.style = tmp.titleContainer;
        obj6.disabled = !checkChangesToRenderResult;
        const items3 = [self.renderTitle(), tmp8];
        obj6.children = items3;
        items2[2] = tmp15(tmp10(5123).PressableOpacity, obj6);
        let tmp17Result = null;
        if (checkChangesToRenderResult) {
          const obj8 = { style: null, size: null, source: null };
          const items4 = [tmp.arrow, rotate90];
          obj8.style = items4;
          obj8.size = tmp10(1178).Icon.Sizes.CUSTOM;
          obj8.source = tmp18(14602);
          tmp17Result = tmp17(tmp10(1178).Icon, obj8);
        }
        items2[3] = tmp17Result;
        obj2.children = items2;
        const items5 = [tmp15(tmp16, obj2), ];
        let renderChangeSummaryResult = null;
        if (expanded) {
          renderChangeSummaryResult = self.renderChangeSummary();
        }
        items5[1] = renderChangeSummaryResult;
        obj1.children = items5;
        return tmp15(tmp10(5607).Card, obj1);
      }
    }
  }
  const obj3 = { action: log.action };
  tmp16 = View;
  const tmp9Result1 = tmp9(1399);
  const tmp9Result2 = tmp9(1396);
  source = tmp9Result1.ensureAvatarSource(tmp9Result2.makeSource(tmp9(1399).getAutomodAvatarURL()));
};
AuditLog.contextType = fn(4271).ThemeContext;
let items3 = [ThemeStore];
let obj4 = { color: nativeDefault.unsafe_rawColors.PRIMARY_400, alignItems: "baseline", fontSize: 14 };
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/audit_log/native/AuditLog.tsx");

export default initialize.connectStores(items3, () => ({ theme: ThemeStore.theme }))(AuditLog);