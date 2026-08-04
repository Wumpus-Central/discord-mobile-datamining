import importAllResult from "nameFromUser";
import { View } from "getPermissionChanges";
import importDefaultResult from "handleThemeChange";
import createdAt from "createdAt";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import jsxProd from "fromGuildPropertiesWithAdditionalFields";
import createCacheKey from "createCacheKey";
import importDefaultResult1 from "initialize";

let Fonts;
let c10;
let closure_12;
let closure_14;
let closure_15;
let map1;
let unpackModuleId;
let require = arg1;
function ApplicationHook(applicationId) {
  let obj = require(5616) /* useGetOrFetchApplications */;
  const getOrFetchApplication = obj.useGetOrFetchApplication(applicationId.applicationId);
  let tmp4 = null;
  if (null != getOrFetchApplication) {
    obj = { variant: "text-md/normal", color: "text-default", children: null };
    obj[2] = getOrFetchApplication.name;
    tmp4 = callback(require(4281) /* Text */.Text, obj);
  }
  return tmp4;
}
let c4 = importAllResult;
({ AuditLogTargetTypes: c10, AuditLogActionTypes: unpackModuleId, AuditLogActions: closure_12, Fonts, AuditLogChangeKeys: map1 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
createCacheKey = { container: { marginHorizontal: 8, marginVertical: 4, borderRadius: 3 }, rowContainer: { flex: 1, flexDirection: "row", alignItems: "center" }, titleContainer: { marginRight: 24, flex: 1 }, title: { marginHorizontal: 8 }, discriminator: null, avatar: null, timestamp: null, arrow: null, rotate90: null, changesContainer: null, changeRow: null, changeNumberText: null, changeItemText: null, colorHook: null, colorsHook: null, changeItemContent: null, changeItemTextContainer: null, forumTag: null, imageEmoji: null, textEmoji: null };
createCacheKey = { fontSize: 12, lineHeight: 30, color: require("Themes").unsafe_rawColors.PRIMARY_400 };
createCacheKey[4] = createCacheKey;
createCacheKey[5] = { marginLeft: 10, height: 32, width: 32 };
createCacheKey[6] = { fontSize: 12, marginHorizontal: 8, marginTop: 8, color: require("Themes").unsafe_rawColors.PRIMARY_400 };
let obj1 = { fontSize: 12, marginHorizontal: 8, marginTop: 8, color: require("Themes").unsafe_rawColors.PRIMARY_400 };
createCacheKey[7] = { height: 13, width: 8, marginRight: 8, tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
let items = [{ rotate: "90deg" }];
createCacheKey[8] = { transform: items };
let obj2 = { height: 13, width: 8, marginRight: 8, tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[9] = { marginTop: require("Themes").space.PX_4, padding: require("Themes").space.PX_8, borderRadius: require("Themes").radii.md, backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED };
createCacheKey[10] = { flexDirection: "row", flex: 1, alignItems: "flex-start" };
createCacheKey[11] = { marginRight: 10, fontFamily: Fonts.CODE_BOLD, lineHeight: 24 };
let obj3 = { marginTop: require("Themes").space.PX_4, padding: require("Themes").space.PX_8, borderRadius: require("Themes").radii.md, backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED };
createCacheKey[12] = { color: require("Themes").unsafe_rawColors.PRIMARY_400, alignItems: "baseline", fontSize: 14 };
let obj4 = { color: require("Themes").unsafe_rawColors.PRIMARY_400, alignItems: "baseline", fontSize: 14 };
createCacheKey[13] = { height: 10, width: 10, borderRadius: 5, borderColor: require("Themes").unsafe_rawColors.TRANSPARENT };
createCacheKey[14] = { display: "flex", flexDirection: "row", fontFamily: Fonts.PRIMARY_MEDIUM, justifyContent: "center", alignItems: "center", marginTop: -2 };
createCacheKey[15] = { flex: 1, alignItems: "flex-start" };
createCacheKey[16] = { alignItems: "center", flexDirection: "row", lineHeight: 24 };
createCacheKey[17] = { height: "auto", paddingVertical: 0, paddingHorizontal: 4 };
createCacheKey[18] = { height: 14, width: 14 };
createCacheKey[19] = { fontSize: 14, lineHeight: 16 };
createCacheKey = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
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
  const tmp = createCacheKey(this.context);
  const require = tmp;
  const log = this.props.log;
  const user = log.user;
  const target = log.target;
  let subtarget = log.options;
  let obj = user(target[17]);
  const changeTitle = obj.getChangeTitle(log);
  if (null == changeTitle) {
    return null;
  } else {
    obj = { style: null, accessibilityRole: "header", variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
    obj[0] = tmp.title;
    let intl = require(tmp2[18]).intl;
    obj = { user: null, target: null, userHook: null, targetHook: null, count: null, channel: null, channelHook: null, subtarget: null };
    obj[0] = user;
    obj[1] = target;
    obj[2] = function userHook() {
      let obj = user;
      if (null != user) {
        const items = [log(target[19]).getUserTag(obj, { mode: "username" }), ];
        const hasUniqueUsernameResult = obj.hasUniqueUsername();
        let tmp22 = !hasUniqueUsernameResult;
        if (!hasUniqueUsernameResult) {
          obj = { style: null, children: null };
          obj[0] = tmp.discriminator;
          obj[1] = `#${obj.discriminator}`;
          tmp22 = outer1_14(tmp(target[20]).LegacyText, obj);
        }
        obj = { variant: "text-md/medium", color: "text-default", children: null };
        items[1] = tmp22;
        obj[2] = items;
        return outer1_15(tmp(target[15]).Text, obj, "user" + obj.id);
      } else if (null != subtarget.integration_type) {
        let obj1 = log(target[12]);
        const value = obj1.get(tmp27.integration_type);
        let name;
        if (value != null) {
          name = value.name;
        }
        if (name == null) {
          const intl2 = tmp(target[18]).intl;
          name = intl2.string(tmp(target[18]).t["n+olu7"]);
        }
        obj1 = { variant: "text-md/medium", color: "text-default", children: null };
        obj1[2] = name;
        return outer1_14(tmp(target[15]).Text, obj1, "integration" + tmp27.integration_type);
      } else {
        const intl = tmp(target[18]).intl;
        return intl.string(tmp(target[18]).t["30mdIx"]);
      }
    };
    obj[3] = function targetHook(children) {
      if (log.targetType === outer1_10.USER) {
        if (target instanceof outer1_7) {
          const items = [log(target[19]).getUserTag(tmp3, { mode: "username" }), ];
          let tmp12 = "0" !== tmp3.discriminator;
          if (tmp12) {
            let obj = { style: null, children: null };
            obj[0] = tmp.discriminator;
            obj[1] = `#${tmp3.discriminator}`;
            tmp12 = outer1_14(tmp9(tmp10[20]).LegacyText, obj);
          }
          obj = { variant: "text-md/medium", color: "text-default", children: null };
          items[1] = tmp12;
          obj[2] = items;
          let tmp8Result = outer1_15(tmp(target[15]).Text, obj, `target${tmp3.id}`);
          const obj3 = log(target[19]);
          tmp10 = target;
          const tmp8 = outer1_15;
          tmp9 = tmp;
        }
        return tmp8Result;
      }
      if (log.targetType === outer1_10.GUILD) {
        if (typeof target === "object") {
          if (obj6.isGuildRecord(tmp5)) {
            const obj1 = { variant: "text-md/medium", color: "text-default", children: null };
            obj1[2] = tmp5.name;
            tmp8Result = outer1_14(tmp15(tmp16[15]).Text, obj1, `target${tmp5.id}`);
          }
          obj6 = tmp(target[21]);
          tmp15 = tmp;
          tmp16 = target;
        }
      }
      obj = { variant: "text-md/medium", color: "text-default", children };
      tmp8Result = outer1_14(tmp(target[15]).Text, obj, arg1);
    };
    let str = subtarget.count;
    if (str == null) {
      str = "";
    }
    obj[4] = str;
    if (null != subtarget.channel) {
      if (typeof subtarget.channel !== "string") {
        const tmp5Result = tmp5(tmp2[22]);
        let channel = tmp5Result.computeChannelName(subtarget.channel, mergeGuildAvatar, upsertRelationship, true);
      }
      obj[5] = channel;
      obj[6] = function channelHook(children) {
        return callback(tmp(target[15]).Text, { variant: "text-md/medium", color: "text-default", children }, arg1);
      };
      subtarget = subtarget.subtarget;
      obj[7] = subtarget;
      obj = intl.format(changeTitle, obj);
      obj[4] = obj;
      tmp4(require(tmp2[15]).Text, obj);
    }
    channel = subtarget.channel;
    tmp4 = closure_14;
    tmp5 = require;
  }
};
prototype["renderRoleUpdate"] = function renderRoleUpdate(newValue) {
  newValue = newValue.newValue;
  let mapped = null;
  if (Array.isArray(newValue)) {
    mapped = newValue.map((children) => callback2(callback(table[15]).Text, { variant: "text-sm/medium", color: "text-muted", children: children.name }, children.id));
  }
  return mapped;
};
prototype["renderPermissionUpdate"] = function renderPermissionUpdate(newValue) {
  const self = this;
  newValue = newValue.newValue;
  let mapped = null;
  if (Array.isArray(newValue)) {
    mapped = newValue.map((arg0) => {
      const obj = { variant: "text-sm/medium", color: "text-muted", children: null };
      obj[2] = outer1_2(outer1_3[17]).getStringForPermission(arg0, self.props.log);
      return outer1_14(self(outer1_3[15]).Text, obj, arg0);
    });
  }
  return mapped;
};
prototype["renderChangeDetails"] = function renderChangeDetails(changeStrings) {
  const self = this;
  let closure_1 = changeStrings;
  const tmp = createCacheKey(this.context);
  const importAll = tmp;
  const log = this.props.log;
  if (null == log.changes) {
    return null;
  } else {
    let c0 = 0;
    const changes = log.changes;
    let obj = { style: null, children: null };
    obj[0] = tmp.changesContainer;
    obj[1] = changes.map((key) => {
      let obj = tmp(log[17]);
      if (obj.shouldNotRenderChangeDetail(log, key)) {
        return null;
      } else {
        if (tmp2.action === outer1_12.CHANNEL_UPDATE) {
          if (key.key === outer1_13.TYPE) {
            let oldValue = key.oldValue;
            if (oldValue == null) {
              let obj7 = v0(tmp[23]);
              obj = { type: null };
              obj[0] = key.oldValue;
              oldValue = obj7.channelTypeString(obj);
            }
            obj = { oldValue: null, newValue: null, transformedValues: true };
            obj[0] = oldValue;
            let newValue2 = key.newValue;
            if (newValue2 == null) {
              let obj10 = v0(tmp[23]);
              let obj1 = { type: null };
              obj1[0] = key.newValue;
              newValue2 = obj10.channelTypeString(obj1);
            }
            obj[1] = newValue2;
            let obj13 = obj;
          }
          const oldValue2 = obj13.oldValue;
          let closure_0 = oldValue2;
          let newValue = obj13.newValue;
          if (tmp2.action !== tmp3.MEMBER_ROLE_UPDATE) {
            if (tmp2.action === tmp3.INVITE_CREATE) {
              let tmp19Result;
              if (newValue[key.key] != null) {
                tmp19Result = tmp19(key);
              }
              if (null == tmp19Result) {
                return null;
              } else {
                const intl = v0(tmp[18]).intl;
                const obj2 = { oldValue: null, newValue: null, count: null, subtarget: null, newColorHook: null, newColorsHook: null, oldColorHook: null, oldTagHook: null, newTagHook: null, oldEmojiHook: null, newEmojiHook: null, applicationHook: null };
                obj2[0] = oldValue2;
                obj2[1] = newValue;
                const _Array = Array;
                let num = 0;
                if (Array.isArray(newValue)) {
                  num = newValue.length;
                }
                obj2[2] = num;
                let str = tmp2.options.subtarget;
                if (str == null) {
                  str = key.subtarget;
                }
                if (str == null) {
                  str = "";
                }
                obj2[3] = str;
                obj2[4] = function newColorHook() {
                  return null;
                };
                obj2[5] = function newColorsHook(arg0, arg1) {
                  let obj = { style: outer1_2.colorsHook, children: null };
                  let items = [, , ];
                  ({ primary_color: arr[0], secondary_color: arr[1], tertiary_color: arr[2] } = newValue);
                  const found = items.filter(lib(log[25]).isNotNullish);
                  obj[1] = found.map((color) => {
                    let str = "";
                    if (arg1 > 0) {
                      str = ", ";
                    }
                    let obj = { children: null };
                    obj = { variant: "text-sm/bold", children: null };
                    let tmp3Result = tmp3(tmp4[26]);
                    obj[1] = "" + str + tmp3Result.int2hex(color).toUpperCase() + " ";
                    const items = [outer1_14(outer1_0(outer1_3[15]).Text, obj), ];
                    obj = { style: null };
                    const items1 = [colorHook.colorHook, ];
                    const obj1 = { backgroundColor: null };
                    tmp3Result = tmp3(tmp4[26]);
                    obj1[0] = tmp3Result.int2hex(color);
                    items1[1] = obj1;
                    obj[0] = items1;
                    items[1] = outer1_14(outer1_5, obj);
                    obj[0] = items;
                    return outer1_15(outer1_4.Fragment, obj, arg1);
                  });
                  return outer2_14(outer2_5, obj, arg1);
                };
                obj2[6] = function oldColorHook() {
                  return null;
                };
                obj2[7] = function oldTagHook(arg0, arg1) {
                  return outer2_14(lib(log[27]).AppliedForumTagPill, { tag: closure_0, containerStyle: outer1_2.forumTag, disableEndMargin: true }, arg1);
                };
                obj2[8] = function newTagHook(arg0, arg1) {
                  return outer2_14(lib(log[27]).AppliedForumTagPill, { tag: newValue, containerStyle: outer1_2.forumTag, disableEndMargin: true }, arg1);
                };
                obj2[9] = function oldEmojiHook(arg0, arg1) {
                  let emojiURL;
                  if (null != closure_0) {
                    let obj = newValue(log[11]);
                    obj = { id: null, animated: false, size: 24 };
                    obj[0] = tmp;
                    emojiURL = obj.getEmojiURL(obj);
                  }
                  obj = { src: emojiURL, name: tmp, textEmojiStyle: outer1_2.textEmoji, fastImageStyle: outer1_2.imageEmoji };
                  return outer2_14(newValue(log[28]), obj, arg1);
                };
                obj2[10] = function newEmojiHook(arg0, arg1) {
                  let emojiURL;
                  if (null != newValue) {
                    let obj = newValue(log[11]);
                    obj = { id: null, animated: false, size: 24 };
                    obj[0] = tmp;
                    emojiURL = obj.getEmojiURL(obj);
                  }
                  obj = { src: emojiURL, name: tmp, textEmojiStyle: outer1_2.textEmoji, fastImageStyle: outer1_2.imageEmoji };
                  return outer2_14(newValue(log[28]), obj, arg1);
                };
                obj2[11] = function applicationHook(arg0, arg1) {
                  let applicationId;
                  if (lib != null) {
                    applicationId = lib.application_id;
                  }
                  if (applicationId == null) {
                    let application_id1;
                    if (newValue != null) {
                      application_id1 = newValue.application_id;
                    }
                    applicationId = application_id1;
                  }
                  return outer2_14(outer2_17, { applicationId }, arg1);
                };
                const formatResult = intl.format(tmp19Result, obj2);
                if (null == formatResult) {
                  return null;
                } else {
                  const actionType = tmp2.actionType;
                  if (outer1_11.CREATE === actionType) {
                    let RED_400 = changeStrings(tmp[9]).unsafe_rawColors.GREEN_360;
                  } else if (tmp38.UPDATE === actionType) {
                    RED_400 = changeStrings(tmp[9]).unsafe_rawColors.YELLOW_300;
                  } else if (tmp38.DELETE === actionType) {
                    RED_400 = changeStrings(tmp[9]).unsafe_rawColors.RED_400;
                  }
                  closure_0 = closure_0 + 1;
                  let obj3 = { style: null, children: null };
                  obj3[0] = tmp.changeRow;
                  let obj4 = { variant: "text-sm/bold", style: null, children: null };
                  let items = [tmp.changeNumberText, ];
                  let obj5 = { color: null };
                  obj5[0] = RED_400;
                  items[1] = obj5;
                  obj4[1] = items;
                  let str2 = null;
                  if (closure_0 < 10) {
                    str2 = "0";
                  }
                  let items1 = [str2, closure_0, " \u2014"];
                  obj4[2] = items1;
                  const items2 = [outer1_15(tmp36(tmp[15]).Text, obj4), ];
                  const obj6 = { style: null, children: null };
                  obj6[0] = tmp.changeItemContent;
                  obj7 = { style: null, children: null };
                  obj7[0] = tmp.changeItemTextContainer;
                  const obj8 = { variant: "text-sm/normal", style: null, children: null };
                  obj8[1] = tmp.changeItemTextContainer;
                  obj8[2] = formatResult;
                  const items3 = [outer1_14(tmp36(tmp[15]).Text, obj8), ];
                  let tmp31Result = null;
                  if (null != newValue) {
                    tmp31Result = null;
                    if (true !== tmp12) {
                      const obj9 = { style: null };
                      const items4 = [tmp29.colorHook, ];
                      obj10 = { backgroundColor: null };
                      obj10[0] = newValue;
                      items4[1] = obj10;
                      obj9[0] = items4;
                      tmp31Result = outer1_14(tmp28, obj9);
                    }
                  }
                  items3[1] = tmp31Result;
                  obj7[1] = items3;
                  const items5 = [outer1_15(outer1_5, obj7), ];
                  let tmp33 = null;
                  if (null != result) {
                    tmp33 = result;
                  }
                  items5[1] = tmp33;
                  obj6[1] = items5;
                  items2[1] = outer1_15(outer1_5, obj6);
                  obj3[1] = items2;
                  return outer1_15(outer1_5, obj3, arg1);
                }
              }
            }
            if (tmp2.targetType !== outer1_10.ROLE) {
              if (tmp2.action !== tmp3.CHANNEL_OVERWRITE_CREATE) {
                result = null;
              }
            }
            result = self.renderPermissionUpdate(key);
          }
          result = self.renderRoleUpdate(key);
        }
        if (tmp2.action === outer1_12.MEMBER_UPDATE) {
          if (key.key === outer1_13.COMMUNICATION_DISABLED_UNTIL) {
            obj5 = changeStrings(tmp[24])(key.newValue);
            const obj11 = { oldValue: null, newValue: null, transformedValues: true };
            obj11[0] = key.oldValue;
            if (obj5.isValid()) {
              newValue = obj5.calendar();
            } else {
              newValue = key.newValue;
            }
            obj11[1] = newValue;
            obj13 = obj11;
          }
        }
        if (tmp2.action === outer1_12.GUILD_UPDATE) {
          if (key.key === outer1_13.OWNER_ID) {
            const obj12 = { oldValue: null, newValue: null, transformedValues: true };
            obj3 = changeStrings(tmp[19]);
            obj12[0] = obj3.getUserTag(key.oldValue, { mode: "username" });
            obj4 = changeStrings(tmp[19]);
            obj12[1] = obj4.getUserTag(key.newValue, { mode: "username" });
            obj13 = obj12;
          }
        }
        obj13 = { oldValue: null, newValue: null, transformedValues: false };
        ({ oldValue: obj2[0], newValue: obj2[1] } = key);
      }
    });
    return callback(View, obj);
  }
};
prototype["renderChangeSummary"] = function renderChangeSummary() {
  const self = this;
  let renderChangeDetailsResult = null;
  if (this.props.expanded) {
    renderChangeDetailsResult = self.renderChangeDetails(importAll(16493).getChangeStrings(tmp));
    const obj = importAll(16493);
  }
  return renderChangeDetailsResult;
};
prototype["render"] = function render() {
  let containerStyle;
  let expanded;
  let guildId;
  let log;
  let require;
  let theme;
  const self = this;
  const tmp = createCacheKey(this.context);
  const props = this.props;
  ({ log, expanded, guildId, channel: require } = props);
  const user = log.user;
  ({ containerStyle, theme } = props);
  let obj = importAll(16493);
  const checkChangesToRenderResult = obj.checkChangesToRender(log);
  const timestampStart = log.timestampStart;
  const calendarResult = timestampStart.calendar();
  const timestampEnd = log.timestampEnd;
  const calendarResult1 = timestampEnd.calendar();
  if (calendarResult === calendarResult1) {
    obj = { style: null, children: null };
    obj[0] = tmp.timestamp;
    obj[1] = calendarResult;
    let tmp8 = callback(require(1297) /* Button */.LegacyText, obj);
    let tmp9 = require;
    let tmp10 = require;
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.timestamp;
    const items = [calendarResult, "\u2014", calendarResult1];
    obj[1] = items;
    tmp8 = callback2(require(1297) /* Button */.LegacyText, obj);
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
  const obj1 = { accessible: false, style: items1, variant: null, border: null, onPress: null, children: null };
  items1 = [tmp.container, containerStyle];
  let str2 = "secondary";
  if (expanded) {
    str2 = "primary";
  }
  obj1[2] = str2;
  let str3 = "none";
  if (expanded) {
    str3 = "strong";
  }
  obj1[3] = str3;
  obj1[4] = onHeaderClick;
  const obj2 = { style: tmp.rowContainer, children: null };
  const items2 = [callback(user(16502), { action: log.action }), , , ];
  const obj4 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, onPress: null, children: null };
  const intl = tmp10(1236).intl;
  obj4[1] = intl.string(tmp10(1236).t.iXAna6);
  let username;
  if (user != null) {
    username = user.username;
  }
  obj4[2] = username;
  obj4[3] = function onPress() {
    let obj = user(outer1_3[32]);
    obj.hideActionSheet();
    if (null != user) {
      obj = { userId: null, channelId: null };
      obj[0] = tmp4.id;
      obj[1] = id.id;
      user(outer1_3[33])(obj);
    }
  };
  const obj5 = { style: tmp.avatar, source: null, size: null };
  if (log.action !== constants.AUTO_MODERATION_BLOCK_MESSAGE) {
    if (log.action !== tmp21.AUTO_MODERATION_FLAG_TO_CHANNEL) {
      if (log.action !== tmp21.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) {
        if (log.action !== tmp21.AUTO_MODERATION_QUARANTINE_USER) {
          if (null != log.options.integration_type) {
            const value = tmp18(4966).get(log.options.integration_type);
            if (null != value) {
              let tmp9Result = tmp9(4131);
              const icon = value.icon;
              tmp9Result = tmp9(1416);
              let source = tmp9Result.makeSource(tmp9Result.isThemeDark(theme) ? icon.darkPNG : icon.lightPNG);
              const tmp25 = tmp9Result.isThemeDark(theme) ? icon.darkPNG : icon.lightPNG;
            }
            const tmp18Result = tmp18(4966);
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
        obj5[1] = source;
        obj5[2] = tmp10(1297).AvatarSizes.SMALL;
        obj4[4] = tmp17(tmp20, obj5);
        items2[1] = tmp17(tmp10(4812).PressableOpacity, obj4);
        const obj6 = { accessibilityRole: "button", accessibilityState: null, onPress: null, style: null, disabled: null, children: null };
        const obj7 = { expanded: null, disabled: null };
        obj7[0] = expanded;
        obj7[1] = !checkChangesToRenderResult;
        obj6[1] = obj7;
        obj6[2] = onHeaderClick;
        obj6[3] = tmp.titleContainer;
        obj6[4] = !checkChangesToRenderResult;
        const items3 = [self.renderTitle(), tmp8];
        obj6[5] = items3;
        items2[2] = tmp15(tmp10(4812).PressableOpacity, obj6);
        let tmp17Result = null;
        if (checkChangesToRenderResult) {
          const obj8 = { style: null, size: null, source: null };
          const items4 = [tmp.arrow, rotate90];
          obj8[0] = items4;
          obj8[1] = tmp10(1297).Icon.Sizes.CUSTOM;
          obj8[2] = tmp18(13817);
          tmp17Result = tmp17(tmp10(1297).Icon, obj8);
        }
        items2[3] = tmp17Result;
        obj2[1] = items2;
        const items5 = [tmp15(tmp16, obj2), ];
        let renderChangeSummaryResult = null;
        if (expanded) {
          renderChangeSummaryResult = self.renderChangeSummary();
        }
        items5[1] = renderChangeSummaryResult;
        obj1[5] = items5;
        return tmp15(tmp10(5317).Card, obj1);
      }
    }
  }
  const obj3 = { action: log.action };
  tmp16 = View;
  const tmp9Result1 = tmp9(1419);
  const tmp9Result2 = tmp9(1416);
  source = tmp9Result1.ensureAvatarSource(tmp9Result2.makeSource(tmp9(1419).getAutomodAvatarURL()));
};
AuditLog.contextType = require("ManaContext").ThemeContext;
let obj5 = { height: 10, width: 10, borderRadius: 5, borderColor: require("Themes").unsafe_rawColors.TRANSPARENT };
let items1 = [importDefaultResult];
const tmp6 = require("initialize").connectStores(items1, () => ({ theme: importDefaultResult.theme }))(AuditLog);
let result = require("handleThemeChange").fileFinishedImporting("modules/guild_settings/audit_log/native/AuditLog.tsx");

export default tmp6;