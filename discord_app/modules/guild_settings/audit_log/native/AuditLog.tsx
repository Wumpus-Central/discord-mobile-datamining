// === Module 16869: ApplicationHook ===

// Module 16869 (ApplicationHook)
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4739 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7183 */;
import getPermissionChangesAll from "getPermissionChanges" /* 16852 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import importDefaultResult from "handleThemeChange" /* 1302 */;
import closure_7 from "createdAt" /* 1930 */;
import closure_8 from "markAllUserIdListsStale" /* 4033 */;
import closure_9 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;
import set from "set" /* 500 */;
import importDefaultResult1 from "initialize" /* 589 */;

require = arg1;
function ApplicationHook(applicationId) {
  let obj = useGetOrFetchApplications;
  const getOrFetchApplication = obj.useGetOrFetchApplication(applicationId.applicationId);
  let tmp4 = null;
  if (null != getOrFetchApplication) {
    obj = { variant: "text-md/normal", color: "text-default", children: null };
    obj[2] = getOrFetchApplication.name;
    tmp4 = callback(Text.Text, obj);
  }
  return tmp4;
}
function InlineSegment(children) {
  children = children.children;
  let tmp2 = children;
  if (null != obj7) {
    const obj = { style: null, children: null };
    obj[0] = tmp;
    obj[1] = children;
    tmp2 = callback(View, obj);
  }
  return tmp2;
}
let c4 = importAllResult;
({ AuditLogTargetTypes: c10, AuditLogActionTypes: unpackModuleId, AuditLogActions: closure_12, Fonts, AuditLogChangeKeys: map1 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
createCacheKey = { container: { marginHorizontal: 8, marginVertical: 4, borderRadius: 3 }, rowContainer: { flex: 1, flexDirection: "row", alignItems: "center" }, titleContainer: { marginRight: 24, flex: 1 }, title: { marginHorizontal: 8 }, discriminator: null, avatar: null, timestamp: null, arrow: null, rotate90: null, changesContainer: null, changeRow: null, changeNumberText: null, changeItemText: null, colorHook: null, colorsHook: null, changeItemContent: null, changeItemRow: null, changeItemTextLine: null, forumTag: null, imageEmoji: null, textEmoji: null };
createCacheKey = { fontSize: 12, lineHeight: 30, color: ThemesDefault.unsafe_rawColors.PRIMARY_400 };
createCacheKey[4] = createCacheKey;
createCacheKey[5] = { marginLeft: 10, height: 32, width: 32 };
createCacheKey[6] = { fontSize: 12, marginHorizontal: 8, marginTop: 8, color: ThemesDefault.unsafe_rawColors.PRIMARY_400 };
let obj1 = { fontSize: 12, marginHorizontal: 8, marginTop: 8, color: ThemesDefault.unsafe_rawColors.PRIMARY_400 };
createCacheKey[7] = { height: 13, width: 8, marginRight: 8, tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let items = [{ rotate: "90deg" }];
createCacheKey[8] = { transform: items };
let obj2 = { height: 13, width: 8, marginRight: 8, tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[9] = { marginTop: ThemesDefault.space.PX_4, padding: ThemesDefault.space.PX_8, borderRadius: ThemesDefault.radii.md, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
createCacheKey[10] = { flexDirection: "row", flex: 1, alignItems: "flex-start" };
createCacheKey[11] = { marginRight: 10, fontFamily: Fonts.CODE_BOLD, lineHeight: 24 };
let obj3 = { marginTop: ThemesDefault.space.PX_4, padding: ThemesDefault.space.PX_8, borderRadius: ThemesDefault.radii.md, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
createCacheKey[12] = { color: ThemesDefault.unsafe_rawColors.PRIMARY_400, alignItems: "baseline", fontSize: 14 };
let obj4 = { color: ThemesDefault.unsafe_rawColors.PRIMARY_400, alignItems: "baseline", fontSize: 14 };
createCacheKey[13] = { height: 10, width: 10, borderRadius: 5, borderColor: ThemesDefault.unsafe_rawColors.TRANSPARENT };
createCacheKey[14] = { display: "flex", flexDirection: "row", fontFamily: Fonts.PRIMARY_MEDIUM, justifyContent: "center", alignItems: "center" };
createCacheKey[15] = { flex: 1, alignItems: "flex-start" };
createCacheKey[16] = { alignItems: "center", flexDirection: "row", flexWrap: "wrap" };
createCacheKey[17] = { lineHeight: 24 };
let obj5 = { height: 10, width: 10, borderRadius: 5, borderColor: ThemesDefault.unsafe_rawColors.TRANSPARENT };
let items1 = [{ translateY: 0.5 }];
createCacheKey[18] = { height: "auto", paddingVertical: 0, paddingHorizontal: ThemesDefault.space.PX_4, transform: items1 };
createCacheKey[19] = { height: 14, width: 14 };
createCacheKey[20] = { fontSize: 14, lineHeight: 16 };
let closure_16 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
let tmp6;
if (set.isAndroid()) {
  let obj7 = { transform: null };
  let items2 = [{ translateY: 1 }];
  obj7[0] = items2;
  tmp6 = obj7;
}
obj7 = tmp6;
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
  const tmp = callback3(this.context);
  const _require = tmp;
  const log = this.props.log;
  const user = log.user;
  const target = log.target;
  let subtarget = log.options;
  let obj = user(target[18]);
  const changeTitle = obj.getChangeTitle(log);
  if (null == changeTitle) {
    return null;
  } else {
    obj = { style: null, accessibilityRole: "header", variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
    obj[0] = tmp.title;
    let intl = _require(tmp2[19]).intl;
    obj = { user: null, target: null, userHook: null, targetHook: null, count: null, channel: null, channelHook: null, subtarget: null };
    obj[0] = user;
    obj[1] = target;
    obj[2] = function userHook() {
      let obj = user;
      if (null != user) {
        const items = [log(target[20]).getUserTag(obj, { mode: "username" }), ];
        const hasUniqueUsernameResult = obj.hasUniqueUsername();
        let tmp22 = !hasUniqueUsernameResult;
        if (!hasUniqueUsernameResult) {
          obj = { style: null, children: null };
          obj[0] = lib.discriminator;
          obj[1] = `#${obj.discriminator}`;
          tmp22 = closure_1_14(lib(target[21]).LegacyText, obj);
        }
        obj = { variant: "text-md/medium", color: "text-default", children: null };
        items[1] = tmp22;
        obj[2] = items;
        return closure_1_15(lib(target[15]).Text, obj, "user" + obj.id);
      } else if (null != subtarget.integration_type) {
        obj1 = log(target[12]);
        const value = obj1.get(tmp27.integration_type);
        let name;
        if (value != null) {
          name = value.name;
        }
        if (name == null) {
          const intl2 = lib(target[19]).intl;
          name = intl2.string(lib(target[19]).t["n+olu7"]);
        }
        obj1 = { variant: "text-md/medium", color: "text-default", children: null };
        obj1[2] = name;
        return closure_1_14(lib(target[15]).Text, obj1, "integration" + tmp27.integration_type);
      } else {
        const intl = lib(target[19]).intl;
        return intl.string(lib(target[19]).t["30mdIx"]);
      }
    };
    obj[3] = function targetHook(children) {
      if (log.targetType === closure_1_10.USER) {
        if (target instanceof closure_1_7) {
          const items = [log(target[20]).getUserTag(tmp3, { mode: "username" }), ];
          let tmp12 = "0" !== tmp3.discriminator;
          if (tmp12) {
            let obj = { style: null, children: null };
            obj[0] = lib.discriminator;
            obj[1] = `#${tmp3.discriminator}`;
            tmp12 = closure_1_14(tmp9(tmp10[21]).LegacyText, obj);
          }
          obj = { variant: "text-md/medium", color: "text-default", children: null };
          items[1] = tmp12;
          obj[2] = items;
          let tmp8Result = closure_1_15(lib(target[15]).Text, obj, `target${tmp3.id}`);
          const obj3 = log(target[20]);
          tmp10 = target;
          const tmp8 = closure_1_15;
          tmp9 = lib;
        }
        return tmp8Result;
      }
      if (log.targetType === closure_1_10.GUILD) {
        if (typeof target === "object") {
          if (obj6.isGuildRecord(tmp5)) {
            obj1 = { variant: "text-md/medium", color: "text-default", children: null };
            obj1[2] = tmp5.name;
            tmp8Result = closure_1_14(tmp15(tmp16[15]).Text, obj1, `target${tmp5.id}`);
          }
          obj6 = lib(target[22]);
          tmp15 = lib;
          tmp16 = target;
        }
      }
      obj = { variant: "text-md/medium", color: "text-default", children };
      tmp8Result = closure_1_14(lib(target[15]).Text, obj, arg1);
    };
    let str = subtarget.count;
    if (str == null) {
      str = "";
    }
    obj[4] = str;
    if (null != subtarget.channel) {
      if (typeof subtarget.channel !== "string") {
        const tmp5Result = tmp5(tmp2[23]);
        let channel = tmp5Result.computeChannelName(subtarget.channel, closure_9, closure_8, true);
      }
      obj[5] = channel;
      obj[6] = function channelHook(children) {
        return callback(lib(target[15]).Text, { variant: "text-md/medium", color: "text-default", children }, arg1);
      };
      subtarget = subtarget.subtarget;
      obj[7] = subtarget;
      obj = intl.format(changeTitle, obj);
      obj[4] = obj;
      tmp4(_require(tmp2[15]).Text, obj);
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
      const obj = { variant: "text-sm/medium", color: "text-muted", children: closure_1_2(closure_1_3[18]).getStringForPermission(arg0, self.props.log) };
      return closure_1_14(self(closure_1_3[15]).Text, obj, arg0);
    });
  }
  return mapped;
};
prototype["renderChangeDetails"] = function renderChangeDetails(changeStrings) {
  const self = this;
  closure_1 = changeStrings;
  const tmp = callback3(this.context);
  closure_2 = tmp;
  const log = this.props.log;
  if (null == log.changes) {
    return null;
  } else {
    c0 = 0;
    const changes = log.changes;
    let obj = { style: null, children: null };
    obj[0] = tmp.changesContainer;
    obj[1] = changes.map((key) => {
      let obj = lib(log[18]);
      if (obj.shouldNotRenderChangeDetail(log, key)) {
        return null;
      } else {
        if (tmp2.action === closure_1_12.CHANNEL_UPDATE) {
          if (key.key === closure_1_13.TYPE) {
            let oldValue = key.oldValue;
            if (oldValue == null) {
              obj7 = v0(tmp[24]);
              obj = { type: null };
              obj[0] = key.oldValue;
              oldValue = obj7.channelTypeString(obj);
            }
            obj = { oldValue: null, newValue: null };
            obj[0] = oldValue;
            let newValue2 = key.newValue;
            if (newValue2 == null) {
              let obj10 = v0(tmp[24]);
              obj1 = { type: null };
              obj1[0] = key.newValue;
              newValue2 = obj10.channelTypeString(obj1);
            }
            obj[1] = newValue2;
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
                obj2[4] = function newColorHook(arg0, arg1) {
                  let obj = { children: closure_2_14(closure_2_5, { style: items }) };
                  items = [arr.colorHook, ];
                  obj = { backgroundColor: items3 };
                  items[1] = obj;
                  return closure_2_14(closure_2_19, obj, arg1);
                };
                obj2[5] = function newColorsHook(arg0, arg1) {
                  let obj = { children: null };
                  obj = { style: arr.colorsHook, children: null };
                  let items = [, , ];
                  ({ primary_color: arr[0], secondary_color: arr[1], tertiary_color: arr[2] } = items3);
                  const found = items.filter(changeItemTextLine(log[26]).isNotNullish);
                  obj[1] = found.map((color) => {
                    let str = "";
                    if (arg1 > 0) {
                      str = ", ";
                    }
                    let obj = { children: null };
                    obj = { variant: "text-sm/bold", children: null };
                    let tmp3Result = tmp3(tmp4[27]);
                    obj[1] = "" + str + tmp3Result.int2hex(color).toUpperCase() + " ";
                    const items = [closure_1_14(closure_1_0(closure_1_3[15]).Text, obj), ];
                    obj = { style: null };
                    const items1 = [colorHook.colorHook, ];
                    obj1 = { backgroundColor: null };
                    tmp3Result = tmp3(tmp4[27]);
                    obj1[0] = tmp3Result.int2hex(color);
                    items1[1] = obj1;
                    obj[0] = items1;
                    items[1] = closure_1_14(closure_1_5, obj);
                    obj[0] = items;
                    return closure_1_15(closure_1_4.Fragment, obj, arg1);
                  });
                  obj[0] = closure_2_14(closure_2_5, obj);
                  return closure_2_14(closure_2_19, obj, arg1);
                };
                obj2[6] = function oldColorHook() {
                  return null;
                };
                obj2[7] = function oldTagHook(arg0, arg1) {
                  obj = { children: closure_2_14(changeItemTextLine(log[28]).AppliedForumTagPill, obj) };
                  obj = { tag: changeItemTextLine, containerStyle: arr.forumTag, disableEndMargin: true };
                  return closure_2_14(closure_2_19, obj, arg1);
                };
                obj2[8] = function newTagHook(arg0, arg1) {
                  obj = { children: closure_2_14(changeItemTextLine(log[28]).AppliedForumTagPill, obj) };
                  obj = { tag: items3, containerStyle: arr.forumTag, disableEndMargin: true };
                  return closure_2_14(closure_2_19, obj, arg1);
                };
                obj2[9] = function oldEmojiHook(arg0, arg1) {
                  let emojiURL;
                  if (null != changeItemTextLine) {
                    let obj = items3(log[11]);
                    obj = { id: null, animated: false, size: 24 };
                    obj[0] = tmp;
                    emojiURL = obj.getEmojiURL(obj);
                  }
                  obj = { children: closure_2_14(items3(log[29]), obj1) };
                  return closure_2_14(closure_2_19, obj, arg1);
                };
                obj2[10] = function newEmojiHook(arg0, arg1) {
                  let emojiURL;
                  if (null != items3) {
                    let obj = items3(log[11]);
                    obj = { id: null, animated: false, size: 24 };
                    obj[0] = tmp;
                    emojiURL = obj.getEmojiURL(obj);
                  }
                  obj = { children: closure_2_14(items3(log[29]), obj1) };
                  return closure_2_14(closure_2_19, obj, arg1);
                };
                obj2[11] = function applicationHook(arg0, arg1) {
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
                  return closure_2_14(closure_2_17, { applicationId }, arg1);
                };
                const formatResult = intl.format(tmp18Result, obj2);
                if (null == formatResult) {
                  return null;
                } else {
                  const actionType = tmp2.actionType;
                  if (closure_1_11.CREATE === actionType) {
                    let RED_400 = changeStrings(tmp[9]).unsafe_rawColors.GREEN_360;
                  } else if (tmp41.UPDATE === actionType) {
                    RED_400 = changeStrings(tmp[9]).unsafe_rawColors.YELLOW_300;
                  } else if (tmp41.DELETE === actionType) {
                    RED_400 = changeStrings(tmp[9]).unsafe_rawColors.RED_400;
                  }
                  changeItemTextLine = changeItemTextLine + 1;
                  let obj3 = { style: null, children: null };
                  obj3[0] = lib.changeRow;
                  let obj4 = { variant: "text-sm/bold", style: null, children: null };
                  let items = [lib.changeNumberText, ];
                  let obj5 = { color: null };
                  obj5[0] = RED_400;
                  items[1] = obj5;
                  obj4[1] = items;
                  let str2 = null;
                  if (changeItemTextLine < 10) {
                    str2 = "0";
                  }
                  let items1 = [str2, changeItemTextLine, " \u2014"];
                  obj4[2] = items1;
                  const items2 = [closure_1_15(tmp39(tmp[15]).Text, obj4), ];
                  const obj6 = { style: null, children: null };
                  obj6[0] = lib.changeItemContent;
                  obj7 = { style: null, children: null };
                  ({ changeItemRow: obj17[0], changeItemTextLine } = lib);
                  items3 = [];
                  lib = [];
                  const Children = self.Children;
                  const item = Children.toArray(formatResult).forEach((type) => {
                    if (closure_1_4.isValidElement(type)) {
                      if (type.type === closure_1_19) {
                        if (0 !== arr.length) {
                          const obj = { variant: "text-sm/normal", style: null, children: null };
                          obj[1] = changeItemTextLine;
                          obj[2] = arr;
                          const _HermesInternal = HermesInternal;
                          arr = items3.push(closure_1_14(changeItemTextLine(closure_1_3[15]).Text, obj, "text-" + items3.length));
                          arr = [];
                        }
                        arr = items3.push(type);
                      }
                    }
                    arr.push(type);
                  });
                  if (0 !== lib.length) {
                    const obj8 = { variant: "text-sm/normal", style: null, children: null };
                    obj8[1] = changeItemTextLine;
                    obj8[2] = lib;
                    let _HermesInternal = HermesInternal;
                    items3.push(tmp30(tmp39(tmp[15]).Text, obj8, "text-" + items3.length));
                    lib = [];
                  }
                  obj7[1] = items3;
                  const items4 = [closure_1_14(closure_1_5, obj7), ];
                  let tmp36 = null;
                  if (null != result) {
                    tmp36 = result;
                  }
                  items4[1] = tmp36;
                  obj6[1] = items4;
                  items2[1] = closure_1_15(closure_1_5, obj6);
                  obj3[1] = items2;
                  return closure_1_15(closure_1_5, obj3, arg1);
                }
              }
            }
            if (tmp2.targetType !== closure_1_10.ROLE) {
              if (tmp2.action !== tmp3.CHANNEL_OVERWRITE_CREATE) {
                result = null;
              }
            }
            result = self.renderPermissionUpdate(key);
          }
          result = self.renderRoleUpdate(key);
        }
        if (tmp2.action === closure_1_12.MEMBER_UPDATE) {
          if (key.key === closure_1_13.COMMUNICATION_DISABLED_UNTIL) {
            obj5 = changeStrings(tmp[25])(key.newValue);
            const obj9 = { oldValue: null, newValue: null };
            obj9[0] = key.oldValue;
            if (obj5.isValid()) {
              newValue = obj5.calendar();
            } else {
              newValue = key.newValue;
            }
            obj9[1] = newValue;
            obj11 = obj9;
          }
        }
        if (tmp2.action === closure_1_12.GUILD_UPDATE) {
          if (key.key === closure_1_13.OWNER_ID) {
            obj10 = { oldValue: null, newValue: null };
            obj3 = changeStrings(tmp[20]);
            obj10[0] = obj3.getUserTag(key.oldValue, { mode: "username" });
            obj4 = changeStrings(tmp[20]);
            obj10[1] = obj4.getUserTag(key.newValue, { mode: "username" });
            obj11 = obj10;
          }
        }
        obj11 = { oldValue: null, newValue: null };
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
    renderChangeDetailsResult = self.renderChangeDetails(getPermissionChangesAll.getChangeStrings(tmp));
    const obj = getPermissionChangesAll;
  }
  return renderChangeDetailsResult;
};
prototype["render"] = function render() {
  const self = this;
  const tmp = callback3(this.context);
  const props = this.props;
  ({ log, expanded, guildId, channel: require } = props);
  const user = log.user;
  ({ containerStyle, theme } = props);
  let obj = getPermissionChangesAll;
  const checkChangesToRenderResult = obj.checkChangesToRender(log);
  const timestampStart = log.timestampStart;
  const calendarResult = timestampStart.calendar();
  const timestampEnd = log.timestampEnd;
  const calendarResult1 = timestampEnd.calendar();
  if (calendarResult === calendarResult1) {
    obj = { style: null, children: null };
    obj[0] = tmp.timestamp;
    obj[1] = calendarResult;
    let tmp8 = callback(Button.LegacyText, obj);
    let tmp9 = require;
    let tmp10 = require;
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.timestamp;
    const items = [calendarResult, "\u2014", calendarResult1];
    obj[1] = items;
    tmp8 = callback2(Button.LegacyText, obj);
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
  obj1 = { accessible: false, style: items1, variant: null, border: null, onPress: null, children: null };
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
  const items2 = [callback(user(16861), { action: log.action }), , , ];
  const obj4 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, onPress: null, children: null };
  const intl = tmp10(1236).intl;
  obj4[1] = intl.string(tmp10(1236).t.iXAna6);
  let username;
  if (user != null) {
    username = user.username;
  }
  obj4[2] = username;
  obj4[3] = function onPress() {
    let obj = user(closure_1_3[33]);
    obj.hideActionSheet();
    if (null != user) {
      obj = { userId: null, channelId: null };
      obj[0] = tmp4.id;
      obj[1] = id.id;
      user(closure_1_3[34])(obj);
    }
  };
  const obj5 = { style: tmp.avatar, source: null, size: null };
  if (log.action !== constants.AUTO_MODERATION_BLOCK_MESSAGE) {
    if (log.action !== tmp21.AUTO_MODERATION_FLAG_TO_CHANNEL) {
      if (log.action !== tmp21.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) {
        if (log.action !== tmp21.AUTO_MODERATION_QUARANTINE_USER) {
          if (null != log.options.integration_type) {
            const value = tmp18(5102).get(log.options.integration_type);
            if (null != value) {
              let tmp9Result = tmp9(1363);
              const icon = value.icon;
              tmp9Result = tmp9(1435);
              let source = tmp9Result.makeSource(tmp9Result.isThemeDark(theme) ? icon.darkPNG : icon.lightPNG);
              const tmp25 = tmp9Result.isThemeDark(theme) ? icon.darkPNG : icon.lightPNG;
            }
            const tmp18Result = tmp18(5102);
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
        items2[1] = tmp17(tmp10(5438).PressableOpacity, obj4);
        const obj6 = { accessibilityRole: "button", accessibilityState: null, onPress: null, style: null, disabled: null, children: null };
        obj7 = { expanded: null, disabled: null };
        obj7[0] = expanded;
        obj7[1] = !checkChangesToRenderResult;
        obj6[1] = obj7;
        obj6[2] = onHeaderClick;
        obj6[3] = tmp.titleContainer;
        obj6[4] = !checkChangesToRenderResult;
        const items3 = [self.renderTitle(), tmp8];
        obj6[5] = items3;
        items2[2] = tmp15(tmp10(5438).PressableOpacity, obj6);
        let tmp17Result = null;
        if (checkChangesToRenderResult) {
          const obj8 = { style: null, size: null, source: null };
          const items4 = [tmp.arrow, rotate90];
          obj8[0] = items4;
          obj8[1] = tmp10(1297).Icon.Sizes.CUSTOM;
          obj8[2] = tmp18(14084);
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
        return tmp15(tmp10(6323).Card, obj1);
      }
    }
  }
  const obj3 = { action: log.action };
  tmp16 = View;
  const tmp9Result1 = tmp9(1438);
  const tmp9Result2 = tmp9(1435);
  source = tmp9Result1.ensureAvatarSource(tmp9Result2.makeSource(tmp9(1438).getAutomodAvatarURL()));
};
AuditLog.contextType = require("ManaContext").ThemeContext;
let obj6 = { height: "auto", paddingVertical: 0, paddingHorizontal: ThemesDefault.space.PX_4, transform: items1 };
let items3 = [importDefaultResult];
let result = set.fileFinishedImporting("modules/guild_settings/audit_log/native/AuditLog.tsx");

export default importDefaultResult1.connectStores(items3, () => ({ theme: importDefaultResult.theme }))(AuditLog);