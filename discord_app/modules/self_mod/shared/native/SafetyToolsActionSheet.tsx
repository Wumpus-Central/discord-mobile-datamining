// === Module 11735: SafetyToolsActionSheet ===

// Module 11735 (SafetyToolsActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import TableRowGroup from "TableRowGroup" /* 5990 */;
import CircleXIcon from "CircleXIcon" /* 6944 */;
import EyeSlashIcon2 from "EyeSlashIcon" /* 7297 */;
import EyeIcon from "EyeIcon" /* 7299 */;
import ChevronSmallRightIcon from "ChevronSmallRightIcon" /* 7540 */;
import FlagIcon from "FlagIcon" /* 9018 */;
import _modDef9019 from "module_9019" /* 9019 */;
import HeartIcon from "HeartIcon" /* 9130 */;
import _modDef9131 from "module_9131" /* 9131 */;
import _modDef9594 from "module_9594" /* 9594 */;
import ShieldIcon from "ShieldIcon" /* 9595 */;
import MusicIcon from "MusicIcon" /* 10253 */;
import _modDef10254 from "module_10254" /* 10254 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 11713 */;
import _modDef11744 from "module_11744" /* 11744 */;
import _modDef11749 from "module_11749" /* 11749 */;
import EducationIcon from "EducationIcon" /* 11750 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4472 */;

require = fn;
const View = fn(17).View;
const Constants = fn(11706);
({ ACTION_SHEET_CONTEXT_MOBILE: metroRequire, getSafetyToolsActionSheetKey: closure_7, THROUGHLINE_URL: closure_8, NOFILTR_URL: closure_9, VIBING_WUMPUS_MODAL_KEY: c10 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4827);
let obj2 = { container: { flex: 1 }, actionRowGroup: { marginHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_24 } };
let closure_12 = createStyles.createStyles(obj2);
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
  const lastChannelMessage = channelId(warningType[7]).useLastChannelMessage(channelId);
  let obj = channelId(warningType[7]);
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
    SafetyWarningUtils.trackCtaEvent({ channelId, warningId, senderId: recipientId, warningType, cta, isNudgeWarning });
  }, items4);
  const items5 = [stateFromStores, stateFromStores1, shouldShowHelplineLink, shouldShowThroughlineLink, callback, recipientId, channelId, warningId, warningType, onClose, lastChannelMessage];
  const memo = recipientId.useMemo(() => {
    const tmp4 = jsx(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "md", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
    let obj2 = { label: null, subLabel: null, icon: null, IconComponent: null, trailing: null, onPress: null };
    const intl = util.intl;
    obj2.label = intl.string(util.t.ZSbbMJ);
    const intl2 = util.intl;
    obj2.subLabel = intl2.string(util.t.iNcsrW);
    obj2.icon = _modDef9131;
    obj2.IconComponent = HeartIcon.HeartIcon;
    obj2.trailing = tmp4;
    obj2.onPress = function onPress() {
      closure_0 = shouldShowHelplineLink(channelId);
      const obj = warningId(warningType[16]);
      obj.openLazy(channelId(warningType[18])(warningType[17], warningType.paths), shouldShowHelplineLink(channelId), {
        recipientId,
        channelId,
        warningId,
        warningType,
        onClose() {
          warningId(warningType[16]).hideActionSheet(closure_0);
        },
        trackAnalyticsEvent
      });
      trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_CTL);
    };
    const obj3 = { label: null, subLabel: null, icon: null, IconComponent: null, onPress: null };
    const intl3 = util.intl;
    obj3.label = intl3.string(util.t.ZSbbMJ);
    const intl4 = util.intl;
    obj3.subLabel = intl4.string(util.t.S9O1ZZ);
    obj3.icon = _modDef9131;
    obj3.IconComponent = HeartIcon.HeartIcon;
    obj3.onPress = function onPress() {
      warningId(warningType[19]).openURL(shouldShowThroughlineLink);
      trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_THROUGHLINE);
    };
    let obj4 = { label: null, subLabel: null, icon: null, IconComponent: null, onPress: null };
    const intl5 = util.intl;
    obj4.label = intl5.string(util.t.ZSbbMJ);
    const intl6 = util.intl;
    obj4.subLabel = intl6.string(util.t.g5uwC5);
    obj4.icon = _modDef9131;
    obj4.IconComponent = HeartIcon.HeartIcon;
    obj4.onPress = function onPress() {
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
    let obj5 = { label: stringResult, subLabel: null, icon: null, IconComponent: null, disabled: null, onPress: null };
    let stringResult1;
    if (!stateFromStores1) {
      const intl8 = util.intl;
      stringResult1 = intl8.string(util.t.fCfp49);
    }
    obj5.subLabel = stringResult1;
    obj5.icon = importDefault(stateFromStores1 ? 7300 : 7298);
    if (stateFromStores1) {
      let EyeSlashIcon = EyeIcon.EyeIcon;
    } else {
      EyeSlashIcon = EyeSlashIcon2.EyeSlashIcon;
    }
    obj5.IconComponent = EyeSlashIcon;
    obj5.disabled = stateFromStores;
    obj5.onPress = function onPress() {
      const obj = warningId(warningType[24]);
      if (stateFromStores1) {
        obj.unignoreUser(recipientId, lastChannelMessage, closure_1_0);
        trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_UNIGNORE);
      } else {
        obj.ignoreUser(recipientId, lastChannelMessage, closure_1_0);
        trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_IGNORE);
      }
    };
    const items = [obj5, , ];
    const intl9 = util.intl;
    const string2 = intl9.string;
    const t2 = util.t;
    if (stateFromStores) {
      let string2Result = string2(t2.Hro40y);
    } else {
      string2Result = string2(t2.oDxaKy);
    }
    const obj6 = { sectionKey: "action", buttons: null };
    const obj7 = { label: string2Result, subLabel: null, icon: null, IconComponent: null, onPress: null };
    const intl10 = util.intl;
    obj7.subLabel = intl10.string(util.t.Lj37az);
    obj7.icon = _modDef11744;
    obj7.IconComponent = CircleXIcon.CircleXIcon;
    obj7.onPress = function onPress() {
      if (stateFromStores) {
        let obj = { location: lastChannelMessage };
        warningId(warningType[24]).unblockUser(recipientId, obj);
        const tmpResult = warningId(warningType[24]);
        const result = warningId(warningType[27]).showUnblockSuccessToast(recipientId, closure_1_0);
        trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_UNBLOCK);
        const obj5 = warningId(warningType[27]);
      } else {
        const obj2 = {
          importer() {
              return channelId(warningType[18])(warningType[29], warningType.paths).then((result) => {
                closure_0 = result.default;
                return () => { ... };
              });
            },
          isDismissable: false
        };
        warningId(warningType[28]).openLazy(obj2);
        const tmpResult2 = warningId(warningType[28]);
      }
    };
    items[1] = obj7;
    const obj8 = { label: null, subLabel: null, icon: null, IconComponent: null, onPress: null };
    const intl11 = util.intl;
    obj8.label = intl11.string(util.t.X27yhD);
    const intl12 = util.intl;
    obj8.subLabel = intl12.string(util.t["0tydOa"]);
    obj8.icon = _modDef9019;
    obj8.IconComponent = FlagIcon.FlagIcon;
    obj8.onPress = function onPress() {
      onClose();
      const result = channelId(warningType[32]).showReportModalForInappropriateConversationSafetyAlert(lastChannelMessage);
      trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_REPORT);
    };
    items[2] = obj8;
    obj6.buttons = items;
    const items1 = [obj6, , ];
    const obj9 = { label: null, subLabel: null, icon: null, IconComponent: null, trailing: null, onPress: null };
    const intl13 = util.intl;
    obj9.label = intl13.string(util.t.syuaPI);
    const intl14 = util.intl;
    obj9.subLabel = intl14.string(util.t.LLBnNk);
    obj9.icon = _modDef10254;
    obj9.IconComponent = MusicIcon.MusicIcon;
    obj9.trailing = tmp4;
    obj9.onPress = function onPress() {
      warningId(warningType[16]).hideActionSheet();
      const obj = warningId(warningType[16]);
      warningId(warningType[35]).pushLazy(channelId(warningType[18])(warningType[36], warningType.paths), {
        onClose() {

        }
      }, stateFromStores);
      trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_VIBING_WUMPUS);
    };
    const items2 = [obj9, , ];
    const obj10 = { label: null, subLabel: null, icon: null, IconComponent: null, trailing: null, onPress: null };
    const intl15 = util.intl;
    obj10.label = intl15.string(util.t["7LgVmt"]);
    const intl16 = util.intl;
    obj10.subLabel = intl16.string(util.t.pwoRjc);
    obj10.icon = _modDef11749;
    obj10.IconComponent = EducationIcon.EducationIcon;
    obj10.trailing = tmp4;
    obj10.onPress = function onPress() {
      closure_0 = shouldShowHelplineLink(channelId);
      const obj = warningId(warningType[16]);
      obj.openLazy(channelId(warningType[18])(warningType[39], warningType.paths), shouldShowHelplineLink(channelId), {
        recipientId,
        channelId,
        warningId,
        warningType,
        onClose() {
          warningId(warningType[16]).hideActionSheet(closure_0);
        }
      });
      trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_SAFETY_TIPS);
    };
    items2[1] = obj10;
    if (!shouldShowHelplineLink) {
      if (shouldShowThroughlineLink) {
        obj4 = obj3;
      }
      obj2 = obj4;
    }
    items2[2] = obj2;
    items1[1] = { sectionKey: "support", buttons: items2 };
    const obj11 = { sectionKey: "info", buttons: null };
    const obj12 = { label: null, icon: null, IconComponent: null, trailing: null, onPress: null };
    const intl17 = util.intl;
    obj12.label = intl17.string(util.t.otdt24);
    obj12.icon = _modDef9594;
    obj12.IconComponent = ShieldIcon.ShieldIcon;
    obj12.trailing = tmp4;
    obj12.onPress = function onPress() {
      closure_0 = shouldShowHelplineLink(channelId);
      const obj = warningId(warningType[16]);
      obj.openLazy(channelId(warningType[18])(warningType[42], warningType.paths), shouldShowHelplineLink(channelId), {
        recipientId,
        channelId,
        warningId,
        warningType,
        onClose() {
          warningId(warningType[16]).hideActionSheet(closure_0);
        }
      });
      trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
    };
    const items3 = [obj12];
    obj11.buttons = items3;
    items1[2] = obj11;
    return items1;
  }, items5);
  let obj7 = { headerTitle: null, channelId: null, recipientId: null, warningId: null, warningType: null, onClose: null, children: null };
  let obj6 = channelId(warningType[10]);
  let intl = channelId(warningType[13]).intl;
  obj7.headerTitle = intl.string(channelId(warningType[13]).t.MAhAp6);
  obj7.channelId = channelId;
  obj7.recipientId = recipientId;
  obj7.warningId = warningId;
  obj7.warningType = warningType;
  obj7.onClose = onClose;
  const tmp9 = warningId(warningType[43]);
  obj7.children = stateFromStores1(onClose, {
    style: tmp.container,
    children: memo.map((buttons) => {
      const obj = { style: actionRowGroup.actionRowGroup, children: null };
      const obj2 = { hasIcons: true, children: null };
      buttons = buttons.buttons;
      obj2.children = buttons.map((item, index) => {
        ({ label, subLabel, IconComponent, icon, trailing, onPress, disabled } = item);
        return stateFromStores1(channelId(5908).TableRow, { label, subLabel, onPress, trailing, disabled, icon: stateFromStores1(channelId(5914).TableRowIcon, { source: icon, IconComponent }) }, index);
      });
      obj.children = jsx(TableRowGroup.TableRowGroup, { hasIcons: true, children: null });
      return <View key={buttons.sectionKey} style={actionRowGroup.actionRowGroup}>{null}</View>;
    })
  });
  return stateFromStores1(tmp9, obj7);
};