// discord_app/modules/guild_settings/roles/native/action_sheet/SelectConnectionActionSheet.tsx
import getSystemLocale from "../../../../../intl/index.native.tsx";
import Button from "../../../../../design/void/native.tsx";
import AccessibilityAnnouncer from "../../../../../design/shared.tsx";
import getAvatarURL from "../../../../../utils/AvatarUtils.tsx";
import useThemeDefault from "../../../../../hooks/useTheme.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import PlatformTypes from "../../../../connections/ConnectionsHooks.tsx";
import TableRowGroupTitle from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TableRowInner from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import SafeAreaPaddingView from "../../../../../components_native/common/SafeAreaView.tsx";
import RedesignBottomSheetTitleHeaderBase from "../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import BottomSheetModal from "../../../../../../_runtime/06952_BottomSheetModal.js";
import ActionSheet from "../../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import useSegmentedControlState from "../../../../../design/components/SegmentedControl/native/SegmentedControlState.native.tsx";
import SegmentedControl from "../../../../../design/components/SegmentedControl/native/SegmentedControl.native.tsx";
import request from "../../../../applications/useGetOrFetchApplicationBatched.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
function IdentityApplicationRow(arg0) {
  ({ applicationId, onPress } = arg0);
  let obj = request;
  const getOrFetchApplicationBatched = obj.useGetOrFetchApplicationBatched(applicationId);
  if (null == getOrFetchApplicationBatched) {
    return null;
  } else {
    const bot = getOrFetchApplicationBatched.bot;
    let tmp6Result = null;
    if (null != bot) {
      obj = { user: null, size: null, guildId: "Array" };
      obj[0] = bot;
      obj[1] = Button.AvatarSizes.XSMALL;
      tmp6Result = callback(Button.Avatar, obj);
    }
    obj = { icon: null, label: null, subLabel: null, onPress: null };
    obj[0] = tmp6Result;
    obj[1] = getOrFetchApplicationBatched.name;
    let description;
    if ("" !== getOrFetchApplicationBatched.description) {
      description = getOrFetchApplicationBatched.description;
    }
    obj[2] = description;
    obj[3] = onPress;
    return callback(TableRowInner.TableRow, obj);
  }
}
({ jsx: closure_6, jsxs: error } = jsxProd);
const result = require("obj132").fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/SelectConnectionActionSheet.tsx");

export default function SelectConnectionActionSheet(arg0) {
  ({ addConnection: require, excludedConnections: importDefault, excludedApplications: dependencyMap, integrations, onCompleteApplication: closure_3, gameApplicationIds, onCompleteIdentityApplication } = arg0);
  closure_5 = useThemeDefault();
  let obj = { title: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.Sm0YG7);
  const tmp5 = callback(onCompleteIdentityApplication.useState(0), 2);
  const first = tmp5[0];
  let found;
  if (integrations != null) {
    found = integrations.filter((item, index) => {
      const application = item.application;
      let prop;
      if (application != null) {
        prop = application.roleConnectionsVerificationUrl;
      }
      let tmp2 = null != prop;
      if (tmp2) {
        const application2 = item.application;
        let id;
        if (application2 != null) {
          id = application2.id;
        }
        tmp2 = !set2.has(id);
      }
      return tmp2;
    });
  }
  let tmp3Result = PlatformTypes;
  const platforms = tmp3Result.usePlatforms();
  const found1 = platforms.filter((item, index) => !set.has(item.type));
  let mapped1;
  const mapped = found1.map((item, index) => {
    closure_0 = item;
    let obj = getAvatarURL;
    const icon = item.icon;
    const source = obj.makeSource(AccessibilityAnnouncer.isThemeDark(closure_5) ? icon.darkPNG : icon.lightPNG);
    obj = {
      icon: closure_1_6(Button.Icon, { source, disableColor: true }),
      label: item.name,
      onPress() {
        item(item.type);
        ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
      }
    };
    return closure_1_6(TableRowInner.TableRow, obj, "row-" + item.type);
  });
  if (found != null) {
    mapped1 = found.map((item, index) => {
      const application = item.application;
      let tmp = null;
      if (null != application) {
        const obj = { user: null, size: null, guildId: "Array" };
        obj[0] = application.bot;
        obj[1] = Button.AvatarSizes.XSMALL;
        obj[0] = closure_1_6(Button.Avatar, obj);
        obj[1] = application.name;
        let description;
        if ("" !== application.description) {
          description = application.description;
        }
        obj[2] = description;
        obj[3] = function onPress() {
          closure_1_3(application.id);
          ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
        };
        const _HermesInternal = HermesInternal;
        tmp = closure_1_6(TableRowInner.TableRow, obj, "row-" + application.id);
      }
      return tmp;
    });
  }
  if (gameApplicationIds == null) {
    gameApplicationIds = [];
  }
  const found2 = gameApplicationIds.filter((item, index) => !set2.has(item));
  if (null != onCompleteIdentityApplication) {
    let mapped2 = found2.map((item, index) => {
      closure_0 = item;
      return closure_1_6(IdentityApplicationRow, {
        applicationId: item,
        onPress() {
          onCompleteIdentityApplication(closure_0);
          ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
        }
      }, "row-identity-" + item);
    });
  } else {
    mapped2 = [];
  }
  let num;
  if (mapped1 != null) {
    num = mapped1.length;
  }
  if (num == null) {
    num = 0;
  }
  const intl2 = getSystemLocale.intl;
  const items = [intl2.string(getSystemLocale.t["3fe7U5"])];
  if (num > 0) {
    const intl3 = getSystemLocale.intl;
    items.push(intl3.string(getSystemLocale.t.PHjkRE));
  }
  if (tmp11) {
    const intl4 = getSystemLocale.intl;
    items.push(intl4.string(getSystemLocale.t.y3ZnnU));
  }
  tmp3Result = useSegmentedControlState;
  obj = { pageWidth: 0, defaultIndex: first, onSetActiveIndex: tmp5[1], items: items.map((item, index) => ({ id: item, label: item, page: null })) };
  const segmentedControlState = tmp3Result.useSegmentedControlState(obj);
  if (1 === first) {
    if (tmp10) {
      mapped2 = mapped1;
    }
    let tmp15 = mapped2;
  } else {
    tmp15 = mapped;
    if (2 === first) {
      tmp15 = mapped2;
    }
  }
  obj = { scrollable: true, header: callback2(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj), startExpanded: true, children: null };
  if (num > 0) {
    obj1 = { children: null };
    const obj2 = { state: null };
    obj2[0] = segmentedControlState;
    obj1[0] = callback2(SegmentedControl.SegmentedControl, obj2);
    let tmp2Result = callback2(closure_5, obj1);
  } else {
    tmp2Result = null;
  }
  const items1 = [tmp2Result, ];
  const obj3 = { children: null };
  tmp11 = mapped2.length > 0;
  const tmp4 = callback2(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj);
  obj3[0] = callback2(SafeAreaPaddingView.SafeAreaPaddingView, { bottom: true, children: callback2(TableRowGroupTitle.TableRowGroup, { hasIcons: true, children: tmp15 }) });
  items1[1] = callback2(BottomSheetModal.BottomSheetScrollView, obj3);
  obj[3] = items1;
  return callback2(ActionSheet.ActionSheet, obj);
};