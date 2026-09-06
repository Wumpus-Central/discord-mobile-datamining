// === Module 11392: SafetyToolsActionSheet ===

// Module 11392 (SafetyToolsActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import CircleXIcon from "CircleXIcon" /* 6616 */;
import ChevronSmallRightIcon from "ChevronSmallRightIcon" /* 7209 */;
import FlagIcon from "FlagIcon" /* 8664 */;
import _modDef8665 from "module_8665" /* 8665 */;
import HeartIcon from "HeartIcon" /* 8774 */;
import _modDef8775 from "module_8775" /* 8775 */;
import _modDef9401 from "module_9401" /* 9401 */;
import ShieldIcon from "ShieldIcon" /* 9402 */;
import MusicIcon from "MusicIcon" /* 9911 */;
import _modDef9912 from "module_9912" /* 9912 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 11370 */;
import _modDef11401 from "module_11401" /* 11401 */;
import _modDef11406 from "module_11406" /* 11406 */;
import EducationIcon from "EducationIcon" /* 11407 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;

require = fn;
const View = fn(17).View;
const Constants = fn(11363);
({ ACTION_SHEET_CONTEXT_MOBILE: metroRequire, getSafetyToolsActionSheetKey: closure_7, THROUGHLINE_URL: closure_8, NOFILTR_URL: closure_9, VIBING_WUMPUS_MODAL_KEY: c10 } = Constants);
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: { flex: 1 }, actionRowGroup: null };
createStyles = { marginHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_24 };
createStyles.actionRowGroup = createStyles;
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsActionSheet.tsx");

export default function SafetyToolsActionSheet(channelId) {
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  const recipientId = channelId.recipientId;
  const onClose = channelId.onClose;
  let callback;
  const tmp = callback();
  const actionRowGroup = tmp;
  let obj = channelId(warningType[7]);
  const lastChannelMessage = obj.useLastChannelMessage(channelId);
  const shouldShowHelplineLink = channelId(warningType[8]).useShouldShowHelplineLink();
  let obj2 = channelId(warningType[8]);
  const shouldShowThroughlineLink = channelId(warningType[8]).useShouldShowThroughlineLink();
  let obj3 = channelId(warningType[8]);
  const tmp5 = null != channelId(warningType[9]).useSafetyToolsButtonTooltipForChannel(channelId);
  const isNudgeWarning = tmp5;
  let obj4 = channelId(warningType[9]);
  let items = [actionRowGroup];
  let items1 = [recipientId];
  const stateFromStores = channelId(warningType[10]).useStateFromStores(items, () => RelationshipStore.isBlocked(recipientId), items1);
  let obj5 = channelId(warningType[10]);
  let items2 = [actionRowGroup];
  let items3 = [recipientId];
  const stateFromStores1 = channelId(warningType[10]).useStateFromStores(items2, () => RelationshipStore.isIgnored(recipientId), items3);
  const items4 = [channelId, warningId, warningType, recipientId, tmp5];
  callback = recipientId.useCallback((cta) => {
    const obj = { channelId, warningId, senderId: recipientId, warningType, cta, isNudgeWarning };
    obj.trackCtaEvent(obj);
  }, items4);
  const items5 = [stateFromStores, stateFromStores1, shouldShowHelplineLink, shouldShowThroughlineLink, callback, recipientId, channelId, warningId, warningType, onClose, lastChannelMessage];
  const memo = recipientId.useMemo(() => {
    let obj = { size: "md", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
    const tmp4 = jsx(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "md", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
    obj = { label: null, subLabel: null, icon: null, IconComponent: null, trailing: null, onPress: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.ZSbbMJ);
    const intl2 = util.intl;
    obj.subLabel = intl2.string(util.t.iNcsrW);
    obj.icon = _modDef8775;
    obj.IconComponent = HeartIcon.HeartIcon;
    obj.trailing = tmp4;
    obj.onPress = function onPress() {
      closure_0 = shouldShowHelplineLink(channelId);
      warningId(warningType[16]);
      const obj = {
        recipientId,
        channelId,
        warningId,
        warningType,
        onClose() {
          warningId(warningType[16]).hideActionSheet(closure_0);
        },
        trackAnalyticsEvent
      };
      obj.openLazy(channelId(warningType[18])(warningType[17], warningType.paths), shouldShowHelplineLink(channelId), obj);
      trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_CTL);
    };
    obj = { label: null, subLabel: null, icon: null, IconComponent: null, onPress: null };
    const intl3 = util.intl;
    obj.label = intl3.string(util.t.ZSbbMJ);
    const intl4 = util.intl;
    obj.subLabel = intl4.string(util.t.S9O1ZZ);
    obj.icon = _modDef8775;
    obj.IconComponent = HeartIcon.HeartIcon;
    obj.onPress = function onPress() {
      warningId(warningType[19]).openURL(shouldShowThroughlineLink);
      trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_THROUGHLINE);
    };
    let obj1 = { label: null, subLabel: null, icon: null, IconComponent: null, onPress: null };
    const intl5 = util.intl;
    obj1.label = intl5.string(util.t.ZSbbMJ);
    const intl6 = util.intl;
    obj1.subLabel = intl6.string(util.t.g5uwC5);
    obj1.icon = _modDef8775;
    obj1.IconComponent = HeartIcon.HeartIcon;
    obj1.onPress = function onPress() {
      warningId(warningType[19]).openURL(closure_9);
      trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_NO_FILTR);
    };
    const intl7 = util.intl;
    const string = intl7.string;
    const t = util.t;
    if (stateFromStores1) {
      let stringResult = string(t["9e0wLn"]);
    } else {
      stringResult = string(t.B7ZT06);
    }
    const obj2 = { label: stringResult, subLabel: null, icon: null, IconComponent: null, disabled: null, onPress: null };
    let stringResult1;
    if (!stateFromStores1) {
      const intl8 = tmp(1114).intl;
      stringResult1 = intl8.string(tmp(1114).t.fCfp49);
    }
    obj2.subLabel = stringResult1;
    obj2.icon = importDefault(stateFromStores1 ? 6971 : 6969);
    if (stateFromStores1) {
      let EyeSlashIcon = tmp(6970).EyeIcon;
    } else {
      EyeSlashIcon = tmp(6968).EyeSlashIcon;
    }
    obj2.IconComponent = EyeSlashIcon;
    obj2.disabled = stateFromStores;
    obj2.onPress = function onPress() {
      const obj = warningId(warningType[24]);
      if (stateFromStores1) {
        obj.unignoreUser(recipientId, lastChannelMessage, closure_1_0);
        trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_UNIGNORE);
      } else {
        obj.ignoreUser(recipientId, lastChannelMessage, closure_1_0);
        trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_IGNORE);
      }
    };
    const items = [obj2, , ];
    const intl9 = tmp(1114).intl;
    const string2 = intl9.string;
    const t2 = tmp(1114).t;
    if (stateFromStores) {
      let string2Result = string2(t2.Hro40y);
    } else {
      string2Result = string2(t2.oDxaKy);
    }
    const obj3 = { sectionKey: "action", buttons: null };
    const obj4 = { label: string2Result, subLabel: null, icon: null, IconComponent: null, onPress: null };
    const intl10 = tmp(1114).intl;
    obj4.subLabel = intl10.string(util.t.Lj37az);
    obj4.icon = _modDef11401;
    obj4.IconComponent = CircleXIcon.CircleXIcon;
    obj4.onPress = function onPress() {
      if (stateFromStores) {
        let tmpResult = tmp(tmp2[24]);
        let obj = { location: lastChannelMessage };
        tmpResult.unblockUser(recipientId, obj);
        const result = warningId(warningType[27]).showUnblockSuccessToast(recipientId, closure_1_0);
        trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_UNBLOCK);
        const obj5 = warningId(warningType[27]);
      } else {
        tmpResult = tmp(tmp2[28]);
        obj = {
          importer() {
              return channelId(warningType[18])(warningType[29], warningType.paths).then((result) => {
                closure_0 = result.default;
                return () => { ... };
              });
            }
        };
        tmpResult.openLazy(obj);
      }
    };
    items[1] = obj4;
    let obj5 = { label: null, subLabel: null, icon: null, IconComponent: null, onPress: null };
    const intl11 = tmp(1114).intl;
    obj5.label = intl11.string(util.t.X27yhD);
    const intl12 = tmp(1114).intl;
    obj5.subLabel = intl12.string(util.t["0tydOa"]);
    obj5.icon = _modDef8665;
    obj5.IconComponent = FlagIcon.FlagIcon;
    obj5.onPress = function onPress() {
      onClose();
      const result = channelId(warningType[32]).showReportModalForInappropriateConversationSafetyAlert(lastChannelMessage);
      trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_REPORT);
    };
    items[2] = obj5;
    obj3.buttons = items;
    const items1 = [obj3, , ];
    const obj6 = { label: null, subLabel: null, icon: null, IconComponent: null, trailing: null, onPress: null };
    const intl13 = tmp(1114).intl;
    obj6.label = intl13.string(util.t.syuaPI);
    const intl14 = tmp(1114).intl;
    obj6.subLabel = intl14.string(util.t.LLBnNk);
    obj6.icon = _modDef9912;
    obj6.IconComponent = MusicIcon.MusicIcon;
    obj6.trailing = tmp4;
    obj6.onPress = function onPress() {
      let obj = warningId(warningType[16]);
      obj.hideActionSheet();
      obj = {
        onClose() {

        }
      };
      warningId(warningType[35]).pushLazy(channelId(warningType[18])(warningType[36], warningType.paths), obj, stateFromStores);
      trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_VIBING_WUMPUS);
    };
    const items2 = [obj6, , ];
    const obj7 = { label: null, subLabel: null, icon: null, IconComponent: null, trailing: null, onPress: null };
    const intl15 = tmp(1114).intl;
    obj7.label = intl15.string(util.t["7LgVmt"]);
    const intl16 = tmp(1114).intl;
    obj7.subLabel = intl16.string(util.t.pwoRjc);
    obj7.icon = _modDef11406;
    obj7.IconComponent = EducationIcon.EducationIcon;
    obj7.trailing = tmp4;
    obj7.onPress = function onPress() {
      closure_0 = shouldShowHelplineLink(channelId);
      warningId(warningType[16]);
      const obj = {
        recipientId,
        channelId,
        warningId,
        warningType,
        onClose() {
          warningId(warningType[16]).hideActionSheet(closure_0);
        }
      };
      obj.openLazy(channelId(warningType[18])(warningType[39], warningType.paths), shouldShowHelplineLink(channelId), obj);
      trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_SAFETY_TIPS);
    };
    items2[1] = obj7;
    if (!shouldShowHelplineLink) {
      if (shouldShowThroughlineLink) {
        obj1 = obj;
      }
      obj = obj1;
    }
    items2[2] = obj;
    items1[1] = { sectionKey: "support", buttons: items2 };
    const obj8 = { sectionKey: "info", buttons: null };
    const obj9 = { label: null, icon: null, IconComponent: null, trailing: null, onPress: null };
    const intl17 = tmp(1114).intl;
    obj9.label = intl17.string(util.t.otdt24);
    obj9.icon = _modDef9401;
    obj9.IconComponent = ShieldIcon.ShieldIcon;
    obj9.trailing = tmp4;
    obj9.onPress = function onPress() {
      closure_0 = shouldShowHelplineLink(channelId);
      warningId(warningType[16]);
      const obj = {
        recipientId,
        channelId,
        warningId,
        warningType,
        onClose() {
          warningId(warningType[16]).hideActionSheet(closure_0);
        }
      };
      obj.openLazy(channelId(warningType[18])(warningType[42], warningType.paths), shouldShowHelplineLink(channelId), obj);
      trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
    };
    const items3 = [obj9];
    obj8.buttons = items3;
    items1[2] = obj8;
    return items1;
  }, items5);
  obj = { headerTitle: null, channelId: null, recipientId: null, warningId: null, warningType: null, onClose: null, children: null };
  let obj6 = channelId(warningType[10]);
  let intl = channelId(warningType[13]).intl;
  obj.headerTitle = intl.string(channelId(warningType[13]).t.MAhAp6);
  obj.channelId = channelId;
  obj.recipientId = recipientId;
  obj.warningId = warningId;
  obj.warningType = warningType;
  obj.onClose = onClose;
  obj = {
    style: tmp.container,
    children: memo.map((buttons) => {
      let obj = { style: actionRowGroup.actionRowGroup, children: null };
      obj = { hasIcons: true, children: jsx(TableRowGroup.TableRowGroup, { style: actionRowGroup.actionRowGroup, children: null }) };
      buttons = buttons.buttons;
      obj.children = buttons.map((item, index) => {
        ({ label, subLabel, IconComponent, icon, trailing, onPress, disabled } = item);
        return stateFromStores1(channelId(5605).TableRow, { label, subLabel, onPress, trailing, disabled, icon: stateFromStores1(channelId(5611).TableRowIcon, { source: icon, IconComponent }) }, index);
      });
      return <View key={arg0.sectionKey} hasIcons>{jsx(TableRowGroup.TableRowGroup, { style: actionRowGroup.actionRowGroup, children: null })}</View>;
    })
  };
  obj.children = stateFromStores1(onClose, obj);
  return stateFromStores1(warningId(warningType[43]), obj);
};