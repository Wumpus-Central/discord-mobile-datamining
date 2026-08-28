// discord_app/modules/guild_settings/roles/native/action_sheet/SelectConnectionActionSheet.tsx
import getSystemLocale from "../../../../../intl/index.native.tsx";
import useThemeDefault from "../../../../../hooks/useTheme.tsx";
import SafeAreaPaddingView from "../../../../../components_native/common/SafeAreaView.tsx";
import RedesignBottomSheetTitleHeaderBase from "../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import BottomSheetModal from "../../../../../../_runtime/05589_BottomSheetModal.js";
import ActionSheet from "../../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import TableRowGroupTitle from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import request from "../../../../applications/useGetOrFetchApplicationBatched.tsx";
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
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
      obj[1] = tmp(1297).AvatarSizes.XSMALL;
      tmp6Result = tmp6(tmp(1297).Avatar, obj);
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
    return closure_6(tmp(5564).TableRow, obj);
  }
}
({ jsx: closure_6, jsxs: error } = jsxProd);
const result = require("set").fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/SelectConnectionActionSheet.tsx");

export default function SelectConnectionActionSheet(arg0) {
  ({ addConnection: require, excludedConnections: importDefault, excludedApplications: dependencyMap, integrations, onCompleteApplication: closure_3, gameApplicationIds, onCompleteIdentityApplication } = arg0);
  closure_5 = undefined;
  closure_5 = useThemeDefault();
  let obj = { title: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.Sm0YG7);
  const tmp5 = callback(onCompleteIdentityApplication.useState(0), 2);
  const first = tmp5[0];
  let found;
  if (integrations != null) {
    found = integrations.filter((application) => {
      application = application.application;
      let prop;
      if (application != null) {
        prop = application.roleConnectionsVerificationUrl;
      }
      let tmp2 = null != prop;
      if (tmp2) {
        const application2 = application.application;
        let id;
        if (application2 != null) {
          id = application2.id;
        }
        tmp2 = !set2.has(id);
      }
      return tmp2;
    });
  }
  let tmp3Result = tmp3(7195);
  const platforms = tmp3Result.usePlatforms();
  const found1 = platforms.filter((type) => !set.has(type.type));
  let mapped1;
  const mapped = found1.map((icon) => {
    closure_0 = icon;
    let obj = closure_1_0(closure_1_2[11]);
    icon = icon.icon;
    const source = obj.makeSource(closure_1_0(closure_1_2[12]).isThemeDark(closure_5) ? icon.darkPNG : icon.lightPNG);
    obj = {
      icon: closure_1_6(tmp(tmp2[6]).Icon, { source, disableColor: true }),
      label: icon.name,
      onPress() {
        icon(icon.type);
        closure_2_1(closure_2_2[13]).hideActionSheet();
      }
    };
    return closure_1_6(closure_1_0(closure_1_2[5]).TableRow, obj, "row-" + icon.type);
  });
  if (found != null) {
    mapped1 = found.map((application) => {
      application = application.application;
      let tmp = null;
      if (null != application) {
        let obj = { icon: null, label: null, subLabel: null, onPress: null };
        obj = { user: null, size: null, guildId: "Array" };
        obj[0] = application.bot;
        obj[1] = closure_1_0(closure_1_2[6]).AvatarSizes.XSMALL;
        obj[0] = closure_1_6(closure_1_0(closure_1_2[6]).Avatar, obj);
        obj[1] = application.name;
        let description;
        if ("" !== application.description) {
          description = application.description;
        }
        obj[2] = description;
        obj[3] = function onPress() {
          closure_1_3(application.id);
          closure_2_1(closure_2_2[13]).hideActionSheet();
        };
        const _HermesInternal = HermesInternal;
        tmp = closure_1_6(closure_1_0(closure_1_2[5]).TableRow, obj, "row-" + application.id);
        const tmp2 = closure_1_6;
      }
      return tmp;
    });
  }
  if (gameApplicationIds == null) {
    gameApplicationIds = [];
  }
  const found2 = gameApplicationIds.filter((arg0) => !set2.has(arg0));
  if (null != onCompleteIdentityApplication) {
    let mapped2 = found2.map((applicationId) => {
      closure_0 = applicationId;
      return closure_1_6(closure_1_8, {
        applicationId,
        onPress() {
          closure_1_4(closure_0);
          closure_2_1(closure_2_2[13]).hideActionSheet();
        }
      }, "row-identity-" + applicationId);
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
  const intl2 = tmp3(1236).intl;
  const items = [intl2.string(getSystemLocale.t["3fe7U5"])];
  if (num > 0) {
    const intl3 = tmp3(1236).intl;
    items.push(intl3.string(tmp3(1236).t.PHjkRE));
  }
  if (mapped2.length > 0) {
    const intl4 = tmp3(1236).intl;
    items.push(intl4.string(tmp3(1236).t.y3ZnnU));
  }
  tmp3Result = tmp3(9199);
  obj = { pageWidth: 0, defaultIndex: first, onSetActiveIndex: tmp5[1], items: items.map((id) => ({ id, label: id, page: null })) };
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
    obj1[0] = tmp2(tmp3(9701).SegmentedControl, obj2);
    let tmp2Result = tmp2(closure_5, obj1);
  } else {
    tmp2Result = null;
  }
  const items1 = [tmp2Result, ];
  const obj3 = { children: null };
  const tmp16 = closure_7;
  const tmp4 = callback2(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj);
  obj3[0] = callback2(SafeAreaPaddingView.SafeAreaPaddingView, { bottom: true, children: callback2(TableRowGroupTitle.TableRowGroup, { hasIcons: true, children: tmp15 }) });
  items1[1] = callback2(BottomSheetModal.BottomSheetScrollView, obj3);
  obj[3] = items1;
  return tmp16(ActionSheet.ActionSheet, obj);
};