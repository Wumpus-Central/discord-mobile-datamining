// discord_app/modules/guild_settings/audit_log/native/AuditLog.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import GlobalUtils from "../../../../utils/GlobalUtils.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import GuildRecordUtils from "../../../../utils/GuildRecordUtils.tsx";
import UserUtilsDefault from "../../../../utils/UserUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import PlatformsDefault from "../../../../lib/Platforms.tsx";
import EmojiDefault from "../../../emojis/native/Emoji.tsx";
import useGetOrFetchApplications from "../../../applications/useGetOrFetchApplications.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import AppliedForumTag from "../../../forums/native/AppliedForumTag.tsx";
import AuditLogUtilsAll from "../AuditLogUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../../user_settings/ThemeStore.tsx";
import UserRecord from "../../../../records/UserRecord.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";

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
  if (null != obj9) {
    const obj = { style: tmp, children };
    tmp2 = closure_1_14(View, obj);
  }
  return tmp2;
}
const View = fn(17).View;
const Constants = fn(1074);
({
  AuditLogTargetTypes: c10,
  AuditLogActionTypes: closure_11,
  AuditLogActions: closure_12,
  Fonts,
  AuditLogChangeKeys: map1,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  container: { marginHorizontal: 8, marginVertical: 4, borderRadius: 3 },
  rowContainer: { flex: 1, flexDirection: "row", alignItems: "center" },
  titleContainer: { marginRight: 24, flex: 1 },
  title: { marginHorizontal: 8 },
  discriminator: { fontSize: 12, lineHeight: 30, color: nativeDefault.unsafe_rawColors.PRIMARY_400 },
  avatar: { marginLeft: 10, height: 32, width: 32 },
  timestamp: null,
  arrow: null,
  rotate90: null,
  changesContainer: null,
  changeRow: null,
  changeNumberText: null,
  changeItemText: null,
  colorHook: null,
  colorsHook: null,
  changeItemContent: null,
  changeItemRow: null,
  changeItemTextLine: null,
  forumTag: null,
  imageEmoji: null,
  textEmoji: null,
};
let obj3 = { fontSize: 12, lineHeight: 30, color: nativeDefault.unsafe_rawColors.PRIMARY_400 };
obj2.timestamp = { fontSize: 12, marginHorizontal: 8, marginTop: 8, color: nativeDefault.unsafe_rawColors.PRIMARY_400 };
let size = { height: 13, width: 8, marginRight: 8, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.arrow = size;
let obj5 = { transform: null };
let items = [{ rotate: "90deg" }];
obj5.transform = items;
obj2.rotate90 = obj5;
let obj4 = { fontSize: 12, marginHorizontal: 8, marginTop: 8, color: nativeDefault.unsafe_rawColors.PRIMARY_400 };
obj2.changesContainer = {
  marginTop: nativeDefault.space.PX_4,
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
obj2.changeRow = { flexDirection: "row", flex: 1, alignItems: "flex-start" };
obj2.changeNumberText = { marginRight: 10, fontFamily: Fonts.CODE_BOLD, lineHeight: 24 };
let obj6 = {
  marginTop: nativeDefault.space.PX_4,
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
obj2.changeItemText = { color: nativeDefault.unsafe_rawColors.PRIMARY_400, alignItems: "baseline", fontSize: 14 };
const size1 = { height: 10, width: 10, borderRadius: 5, borderColor: nativeDefault.unsafe_rawColors.TRANSPARENT };
obj2.colorHook = size1;
obj2.colorsHook = {
  display: "flex",
  flexDirection: "row",
  fontFamily: Fonts.PRIMARY_MEDIUM,
  justifyContent: "center",
  alignItems: "center",
};
obj2.changeItemContent = { flex: 1, alignItems: "flex-start" };
obj2.changeItemRow = { alignItems: "center", flexDirection: "row", flexWrap: "wrap" };
obj2.changeItemTextLine = { lineHeight: 24 };
let obj8 = { height: "auto", paddingVertical: 0, paddingHorizontal: nativeDefault.space.PX_4, transform: null };
let items1 = [{ translateY: 0.5 }];
obj8.transform = items1;
obj2.forumTag = obj8;
obj2.imageEmoji = { height: 14, width: 14 };
obj2.textEmoji = { fontSize: 14, lineHeight: 16 };
let closure_16 = createStyles.createLegacyClassComponentStyles(obj2);
const PlatformUtils = fn(1364);
let tmp6;
if (PlatformUtils.isAndroid()) {
  let obj9 = { transform: null };
  let items2 = [{ translateY: 1 }];
  obj9.transform = items2;
  tmp6 = obj9;
}
obj9 = tmp6;
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
  const changeTitle = user(target[18]).getChangeTitle(log);
  if (null == changeTitle) {
    return null;
  } else {
    let obj2 = {
      style: tmp.title,
      accessibilityRole: "header",
      variant: "text-md/medium",
      color: "mobile-text-heading-primary",
      children: null,
    };
    let intl = require("util").intl;
    let obj3 = {
      user,
      target,
      userHook() {
        if (null != user) {
          const items = [UserUtilsDefault.getUserTag(user, { mode: "username" })];
          const hasUniqueUsernameResult = user.hasUniqueUsername();
          let tmp22 = !hasUniqueUsernameResult;
          if (!hasUniqueUsernameResult) {
            const obj3 = { style: closure_0.discriminator, children: `#${obj.discriminator}` };
            tmp22 = closure_2_14(native.LegacyText, obj3);
          }
          const obj5 = { variant: "text-md/medium", color: "text-default", children: null };
          items[1] = tmp22;
          obj5.children = items;
          return __initData(Text_Text.Text, obj5, "user" + user.id);
        } else if (null != subtarget.integration_type) {
          value = PlatformsDefault.get(subtarget.integration_type);
          let name;
          if (value != null) {
            name = value.name;
          }
          if (name == null) {
            const intl2 = util.intl;
            name = intl2.string(util.t["n+olu7"]);
          }
          const obj6 = { variant: "text-md/medium", color: "text-default", children: name };
          return closure_2_14(Text_Text.Text, obj6, "integration" + subtarget.integration_type);
        } else {
          const intl = util.intl;
          return intl.string(util.t["30mdIx"]);
        }
      },
      targetHook(children, arg1) {
        if (log.targetType === constants.USER) {
          if (target instanceof UserRecord) {
            const items = [UserUtilsDefault.getUserTag(target, { mode: "username" })];
            let tmp12 = "0" !== target.discriminator;
            if (tmp12) {
              const obj2 = { style: closure_0.discriminator, children: `#${tmp3.discriminator}` };
              tmp12 = closure_2_14(native.LegacyText, obj2);
            }
            const obj4 = { variant: "text-md/medium", color: "text-default", children: null };
            items[1] = tmp12;
            obj4.children = items;
            let tmp8Result = __initData(Text_Text.Text, obj4, `target${tmp3.id}`);
          }
          return tmp8Result;
        }
        if (log.targetType === constants.GUILD) {
          if (typeof target === "object") {
            if (obj6.isGuildRecord(target)) {
              const obj5 = { variant: "text-md/medium", color: "text-default", children: target.name };
              tmp8Result = closure_2_14(Text_Text.Text, obj5, `target${tmp5.id}`);
            }
            obj6 = GuildRecordUtils;
          }
        }
        tmp8Result = closure_2_14(Text_Text.Text, { variant: "text-md/medium", color: "text-default", children }, arg1);
        const obj = { variant: "text-md/medium", color: "text-default", children };
      },
      count: null,
      channel: null,
      channelHook: null,
      subtarget: null,
    };
    let str = subtarget.count;
    if (str == null) {
      str = "";
    }
    obj3.count = str;
    if (null != subtarget.channel) {
      if (typeof subtarget.channel !== "string") {
        const tmp5Result = tmp5(tmp2[23]);
        let channel = tmp5Result.computeChannelName(subtarget.channel, UserStore, RelationshipStore, true);
      }
      obj3.channel = channel;
      obj3.channelHook = function channelHook(children, arg1) {
        return closure_1_14(
          closure_0(target[15]).Text,
          { variant: "text-md/medium", color: "text-default", children },
          arg1,
        );
      };
      subtarget = subtarget.subtarget;
      obj3.subtarget = subtarget;
      obj3 = intl.format(changeTitle, obj3);
      obj2.children = obj3;
      closure_14(require("Text/Text").Text, obj2);
    }
    channel = subtarget.channel;
    tmp5 = _require;
  }
  let obj = user(target[18]);
};
prototype["renderRoleUpdate"] = function renderRoleUpdate(newValue) {
  newValue = newValue.newValue;
  let mapped = null;
  if (Array.isArray(newValue)) {
    mapped = newValue.map((children) =>
      closure_1_14(
        require("Text/Text").Text,
        { variant: "text-sm/medium", color: "text-muted", children: children.name },
        children.id,
      ),
    );
  }
  return mapped;
};
prototype["renderPermissionUpdate"] = function renderPermissionUpdate(newValue) {
  const self = this;
  newValue = newValue.newValue;
  let mapped = null;
  if (Array.isArray(newValue)) {
    mapped = newValue.map((item) => {
      const obj = {
        variant: "text-sm/medium",
        color: "text-muted",
        children: AuditLogUtilsAll.getStringForPermission(item, self.props.log),
      };
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
        if (obj.shouldNotRenderChangeDetail(log, key)) {
          return null;
        } else {
          if (log.action === constants3.CHANNEL_UPDATE) {
            if (key.key === constants4.TYPE) {
              let oldValue = key.oldValue;
              if (oldValue == null) {
                let obj3 = { type: key.oldValue };
                oldValue = v0(log[24]).channelTypeString(obj3);
                const obj8 = v0(log[24]);
              }
              const obj7 = { oldValue, newValue: null };
              let newValue2 = key.newValue;
              if (newValue2 == null) {
                obj9 = { type: key.newValue };
                newValue2 = v0(log[24]).channelTypeString(obj9);
                const obj11 = v0(log[24]);
              }
              obj7.newValue = newValue2;
              let obj33 = obj7;
            }
            const oldValue2 = obj33.oldValue;
            changeItemTextLine = oldValue2;
            const newValue1 = obj33.newValue;
            let items3 = newValue1;
            if (log.action !== constants3.MEMBER_ROLE_UPDATE) {
              if (log.action === constants3.INVITE_CREATE) {
                let tmp18Result;
                if (items3[key.key] != null) {
                  tmp18Result = tmp18(key);
                }
                if (null == tmp18Result) {
                  return null;
                } else {
                  const intl = v0(log[19]).intl;
                  const obj10 = {
                    oldValue: oldValue2,
                    newValue: newValue1,
                    count: null,
                    subtarget: null,
                    newColorHook: null,
                    newColorsHook: null,
                    oldColorHook: null,
                    oldTagHook: null,
                    newTagHook: null,
                    oldEmojiHook: null,
                    newEmojiHook: null,
                    applicationHook: null,
                    oldApplicationHook: null,
                    newApplicationHook: null,
                  };
                  const _Array = Array;
                  let num = 0;
                  if (Array.isArray(newValue1)) {
                    num = newValue1.length;
                  }
                  obj10.count = num;
                  let str = log.options.subtarget;
                  if (str == null) {
                    str = key.subtarget;
                  }
                  if (str == null) {
                    str = "";
                  }
                  obj10.subtarget = str;
                  obj10.newColorHook = function newColorHook(arg0, arg1) {
                    const obj = { children: null };
                    const obj2 = { style: null };
                    const items = [children.colorHook, { backgroundColor: items3 }];
                    obj2.style = items;
                    obj.children = closure_3_14(View, obj2);
                    return closure_3_14(InlineSegment, obj, arg1);
                  };
                  obj10.newColorsHook = function newColorsHook(arg0, arg1) {
                    let obj = { children: null };
                    let obj2 = { style: children.colorsHook, children: null };
                    let items = [, ,];
                    ({ primary_color: arr[0], secondary_color: arr[1], tertiary_color: arr[2] } = items3);
                    const found = items.filter(GlobalUtils.isNotNullish);
                    obj2.children = found.map((item, index) => {
                      let str = "";
                      if (index > 0) {
                        str = ", ";
                      }
                      const obj = { children: null };
                      const obj2 = { variant: "text-sm/bold", children: null };
                      const tmp3Result = changeItemTextLine(log[27]);
                      obj2.children = "" + str + changeItemTextLine(log[27]).int2hex(item).toUpperCase() + " ";
                      const items = [closure_2_14(changeItemTextLine(log[15]).Text, obj2)];
                      const obj3 = { style: null };
                      const items1 = [colorHook.colorHook];
                      const obj4 = { backgroundColor: null };
                      const str2 = changeItemTextLine(log[27]).int2hex(item);
                      obj4.backgroundColor = changeItemTextLine(log[27]).int2hex(item);
                      items1[1] = obj4;
                      obj3.style = items1;
                      items[1] = closure_2_14(closure_2_5, obj3);
                      obj.children = items;
                      return closure_2_15(React.Fragment, obj, index);
                    });
                    obj.children = closure_3_14(View, obj2);
                    return closure_3_14(InlineSegment, obj, arg1);
                  };
                  obj10.oldColorHook = function oldColorHook() {
                    return null;
                  };
                  obj10.oldTagHook = function oldTagHook(arg0, arg1) {
                    const obj = {
                      children: closure_3_14(AppliedForumTag.AppliedForumTagPill, {
                        tag: changeItemTextLine,
                        containerStyle: children.forumTag,
                        disableEndMargin: true,
                      }),
                    };
                    return closure_3_14(InlineSegment, obj, arg1);
                  };
                  obj10.newTagHook = function newTagHook(arg0, arg1) {
                    const obj = {
                      children: closure_3_14(AppliedForumTag.AppliedForumTagPill, {
                        tag: items3,
                        containerStyle: children.forumTag,
                        disableEndMargin: true,
                      }),
                    };
                    return closure_3_14(InlineSegment, obj, arg1);
                  };
                  obj10.oldEmojiHook = function oldEmojiHook(arg0, arg1) {
                    let emojiURL;
                    if (null != changeItemTextLine) {
                      const obj2 = { id: changeItemTextLine, animated: false, size: 24 };
                      emojiURL = AvatarUtilsDefault.getEmojiURL(obj2);
                    }
                    const obj3 = {
                      children: closure_3_14(EmojiDefault, {
                        src: emojiURL,
                        name: changeItemTextLine,
                        textEmojiStyle: children.textEmoji,
                        fastImageStyle: children.imageEmoji,
                      }),
                    };
                    return closure_3_14(InlineSegment, obj3, arg1);
                  };
                  obj10.newEmojiHook = function newEmojiHook(arg0, arg1) {
                    let emojiURL;
                    if (null != items3) {
                      const obj2 = { id: items3, animated: false, size: 24 };
                      emojiURL = AvatarUtilsDefault.getEmojiURL(obj2);
                    }
                    const obj3 = {
                      children: closure_3_14(EmojiDefault, {
                        src: emojiURL,
                        name: items3,
                        textEmojiStyle: children.textEmoji,
                        fastImageStyle: children.imageEmoji,
                      }),
                    };
                    return closure_3_14(InlineSegment, obj3, arg1);
                  };
                  obj10.applicationHook = function applicationHook(arg0, arg1) {
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
                  obj10.oldApplicationHook = function oldApplicationHook(arg0, arg1) {
                    return closure_3_14(ApplicationHook, { applicationId: changeItemTextLine }, arg1);
                  };
                  obj10.newApplicationHook = function newApplicationHook(arg0, arg1) {
                    return closure_3_14(ApplicationHook, { applicationId: items3 }, arg1);
                  };
                  const formatResult = intl.format(tmp18Result, obj10);
                  if (null == formatResult) {
                    return null;
                  } else {
                    const actionType = log.actionType;
                    if (constants2.CREATE === actionType) {
                      let RED_400 = changeStrings(log[9]).unsafe_rawColors.GREEN_360;
                    } else if (constants2.UPDATE === actionType) {
                      RED_400 = changeStrings(log[9]).unsafe_rawColors.YELLOW_300;
                    } else if (constants2.DELETE === actionType) {
                      RED_400 = changeStrings(log[9]).unsafe_rawColors.RED_400;
                    }
                    changeItemTextLine = changeItemTextLine + 1;
                    const obj12 = { style: children.changeRow, children: null };
                    const obj13 = { variant: "text-sm/bold", style: null, children: null };
                    let items = [children.changeNumberText];
                    const obj14 = { color: RED_400 };
                    items[1] = obj14;
                    obj13.style = items;
                    let str2 = null;
                    if (changeItemTextLine < 10) {
                      str2 = "0";
                    }
                    let items1 = [str2, changeItemTextLine, " \u2014"];
                    obj13.children = items1;
                    const items2 = [closure_1_15(v0(log[15]).Text, obj13)];
                    const obj15 = { style: children.changeItemContent, children: null };
                    const obj16 = { style: null, children: null };
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
                      const obj18 = { variant: "text-sm/normal", style: changeItemTextLine, children };
                      let _HermesInternal = HermesInternal;
                      items3.push(closure_1_14(v0(log[15]).Text, obj18, "text-" + items3.length));
                      children = [];
                    }
                    obj16.children = items3;
                    const items4 = [closure_1_14(View, obj16)];
                    let tmp36 = null;
                    if (null != result) {
                      tmp36 = result;
                    }
                    items4[1] = tmp36;
                    obj15.children = items4;
                    items2[1] = closure_1_15(View, obj15);
                    obj12.children = items2;
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
              const obj6 = changeStrings(log[25])(key.newValue);
              const obj19 = { oldValue: key.oldValue, newValue: null };
              if (obj6.isValid()) {
                let newValue = obj6.calendar();
              } else {
                newValue = key.newValue;
              }
              obj19.newValue = newValue;
              obj33 = obj19;
            }
          }
          if (log.action === constants3.GUILD_UPDATE) {
            if (key.key === constants4.OWNER_ID) {
              const obj32 = {
                oldValue: changeStrings(log[20]).getUserTag(key.oldValue, { mode: "username" }),
                newValue: null,
              };
              let obj4 = changeStrings(log[20]);
              obj32.newValue = changeStrings(log[20]).getUserTag(key.newValue, { mode: "username" });
              obj33 = obj32;
              const obj5 = changeStrings(log[20]);
            }
          }
          obj33 = { oldValue: null, newValue: null };
          ({ oldValue: obj2.oldValue, newValue: obj2.newValue } = key);
        }
        obj = children(log[18]);
      }),
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
  const checkChangesToRenderResult = AuditLogUtilsAll.checkChangesToRender(log);
  const timestampStart = log.timestampStart;
  const calendarResult = timestampStart.calendar();
  const timestampEnd = log.timestampEnd;
  const calendarResult1 = timestampEnd.calendar();
  if (calendarResult === calendarResult1) {
    let obj2 = { style: tmp.timestamp, children: calendarResult };
    let tmp8 = closure_14(native.LegacyText, obj2);
    let tmp9 = require;
    let tmp10 = require;
  } else {
    const obj3 = { style: tmp.timestamp, children: null };
    const items = [calendarResult, "\u2014", calendarResult1];
    obj3.children = items;
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
  const obj4 = { accessible: false, style: null, variant: null, border: null, onPress: null, children: null };
  const items1 = [tmp.container, containerStyle];
  obj4.style = items1;
  let str2 = "secondary";
  if (expanded) {
    str2 = "primary";
  }
  obj4.variant = str2;
  let str3 = "none";
  if (expanded) {
    str3 = "strong";
  }
  obj4.border = str3;
  obj4.onPress = onHeaderClick;
  const obj5 = { style: tmp.rowContainer, children: null };
  const items2 = [closure_14(user(17982), { action: log.action }), , ,];
  const obj7 = {
    accessibilityRole: "button",
    accessibilityLabel: null,
    accessibilityHint: null,
    onPress: null,
    children: null,
  };
  const intl = tmp10(1115).intl;
  obj7.accessibilityLabel = intl.string(tmp10(1115).t.iXAna6);
  let username;
  if (user != null) {
    username = user.username;
  }
  obj7.accessibilityHint = username;
  obj7.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (null != user) {
      const obj2 = { userId: tmp4.id, channelId: id.id };
      showUserProfileActionSheetDefault(obj2);
    }
  };
  const obj8 = { style: tmp.avatar, source: null, size: null };
  if (log.action !== constants2.AUTO_MODERATION_BLOCK_MESSAGE) {
    if (log.action !== constants2.AUTO_MODERATION_FLAG_TO_CHANNEL) {
      if (log.action !== constants2.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) {
        if (log.action !== constants2.AUTO_MODERATION_QUARANTINE_USER) {
          if (null != log.options.integration_type) {
            value = tmp18(5500).get(log.options.integration_type);
            if (null != value) {
              const icon = value.icon;
              const tmp9Result = tmp9(4607);
              const tmp25 = tmp9(4607).isThemeDark(theme) ? icon.darkPNG : icon.lightPNG;
              let source = tmp9(1397).makeSource(tmp25);
              const tmp9Result5 = tmp9(1397);
            }
            const tmp18Result = tmp18(5500);
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
        obj8.size = tmp10(1177).AvatarSizes.SMALL;
        obj7.children = closure_14(tmp20, obj8);
        items2[1] = closure_14(tmp10(5339).PressableOpacity, obj7);
        obj9 = {
          accessibilityRole: "button",
          accessibilityState: null,
          onPress: null,
          style: null,
          disabled: null,
          children: null,
        };
        const obj10 = { expanded, disabled: !checkChangesToRenderResult };
        obj9.accessibilityState = obj10;
        obj9.onPress = onHeaderClick;
        obj9.style = tmp.titleContainer;
        obj9.disabled = !checkChangesToRenderResult;
        const items3 = [self.renderTitle(), tmp8];
        obj9.children = items3;
        items2[2] = closure_15(tmp10(5339).PressableOpacity, obj9);
        let tmp17Result = null;
        if (checkChangesToRenderResult) {
          const obj11 = { style: null, size: null, source: null };
          const items4 = [tmp.arrow, rotate90];
          obj11.style = items4;
          obj11.size = tmp10(1177).Icon.Sizes.CUSTOM;
          obj11.source = tmp18(14878);
          tmp17Result = closure_14(tmp10(1177).Icon, obj11);
        }
        items2[3] = tmp17Result;
        obj5.children = items2;
        const items5 = [closure_15(View, obj5)];
        let renderChangeSummaryResult = null;
        if (expanded) {
          renderChangeSummaryResult = self.renderChangeSummary();
        }
        items5[1] = renderChangeSummaryResult;
        obj4.children = items5;
        return closure_15(tmp10(5824).Card, obj4);
      }
    }
  }
  const obj6 = { action: log.action };
  const tmp9Result6 = tmp9(1400);
  const tmp9Result7 = tmp9(1397);
  source = tmp9Result6.ensureAvatarSource(tmp9Result7.makeSource(tmp9(1400).getAutomodAvatarURL()));
  const tmp9Result8 = tmp9(1400);
};
AuditLog.contextType = fn(4466).ThemeContext;
let items3 = [ThemeStore];
let obj7 = { color: nativeDefault.unsafe_rawColors.PRIMARY_400, alignItems: "baseline", fontSize: 14 };
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/audit_log/native/AuditLog.tsx");

export default initialize.connectStores(items3, () => ({ theme: ThemeStore.theme }))(AuditLog);
