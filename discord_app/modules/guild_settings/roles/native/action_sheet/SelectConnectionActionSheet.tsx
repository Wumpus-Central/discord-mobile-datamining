// discord_app/modules/guild_settings/roles/native/action_sheet/SelectConnectionActionSheet.tsx
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import useThemeDefault from "../../../../../hooks/useTheme.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRow from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import BottomSheetModal from "../../../../../../_runtime/06627_BottomSheetModal.js";
import common_SafeAreaView from "../../../../../components_native/common/SafeAreaView.tsx";
import BottomSheetTitleHeader from "../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import ConnectionsHooks from "../../../../connections/ConnectionsHooks.tsx";
import SegmentedControlState from "../../../../../design/components/SegmentedControl/native/SegmentedControlState.native.tsx";
import SegmentedControl from "../../../../../design/components/SegmentedControl/native/SegmentedControl.native.tsx";
import useGetOrFetchApplicationBatched from "../../../../applications/useGetOrFetchApplicationBatched.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function IdentityApplicationRow(arg0) {
  ({ applicationId, onPress } = arg0);
  let obj = useGetOrFetchApplicationBatched;
  const getOrFetchApplicationBatched = obj.useGetOrFetchApplicationBatched(applicationId);
  if (null == getOrFetchApplicationBatched) {
    return null;
  } else {
    const bot = getOrFetchApplicationBatched.bot;
    let tmp6Result = null;
    if (null != bot) {
      obj = { user: bot, size: native.AvatarSizes.XSMALL, guildId: "Array" };
      tmp6Result = timestampProducer(native.Avatar, obj);
    }
    obj = { icon: tmp6Result, label: getOrFetchApplicationBatched.name, subLabel: null, onPress: null };
    let description;
    if ("" !== getOrFetchApplicationBatched.description) {
      description = getOrFetchApplicationBatched.description;
    }
    obj.subLabel = description;
    obj.onPress = onPress;
    return timestampProducer(TableRow.TableRow, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_settings/roles/native/action_sheet/SelectConnectionActionSheet.tsx",
);

export default function SelectConnectionActionSheet(arg0) {
  ({
    addConnection: require,
    excludedConnections: importDefault,
    excludedApplications: dependencyMap,
    integrations,
    onCompleteApplication: _slicedToArray,
    gameApplicationIds,
    onCompleteIdentityApplication,
  } = arg0);
  closure_5 = useThemeDefault();
  let obj = { title: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.Sm0YG7);
  const tmp5 = _slicedToArray(onCompleteIdentityApplication.useState(0), 2);
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
  let tmp3Result = ConnectionsHooks;
  const platforms = tmp3Result.usePlatforms();
  const found1 = platforms.filter((type) => !set.has(type.type));
  let mapped1;
  const mapped = found1.map((icon) => {
    let obj = require("AvatarUtils");
    icon = icon.icon;
    const source = obj.makeSource(require("shared").isThemeDark(closure_5) ? icon.darkPNG : icon.lightPNG);
    obj = {
      icon: closure_1_6(require("native").Icon, { source, disableColor: true }),
      label: icon.name,
      onPress() {
        require(icon.type);
        ActionSheetActionCreatorsDefault.hideActionSheet();
      },
    };
    return closure_1_6(require("TableRow").TableRow, obj, "row-" + icon.type);
  });
  if (found != null) {
    mapped1 = found.map((application) => {
      application = application.application;
      let tmp = null;
      if (null != application) {
        let obj = { icon: null, label: null, subLabel: null, onPress: null };
        obj = { user: application.bot, size: require("native").AvatarSizes.XSMALL, guildId: "Array" };
        obj.icon = closure_1_6(require("native").Avatar, obj);
        obj.label = application.name;
        let description;
        if ("" !== application.description) {
          description = application.description;
        }
        obj.subLabel = description;
        obj.onPress = function onPress() {
          _slicedToArray(application.id);
          ActionSheetActionCreatorsDefault.hideActionSheet();
        };
        const _HermesInternal = HermesInternal;
        tmp = closure_1_6(require("TableRow").TableRow, obj, "row-" + application.id);
      }
      return tmp;
    });
  }
  if (gameApplicationIds == null) {
    gameApplicationIds = [];
  }
  const found2 = gameApplicationIds.filter((item) => !set2.has(item));
  if (null != onCompleteIdentityApplication) {
    let mapped2 = found2.map((applicationId) => {
      closure_0 = applicationId;
      return closure_1_6(
        IdentityApplicationRow,
        {
          applicationId,
          onPress() {
            onCompleteIdentityApplication(closure_0);
            ActionSheetActionCreatorsDefault.hideActionSheet();
          },
        },
        "row-identity-" + applicationId,
      );
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
  const intl2 = util.intl;
  const items = [intl2.string(util.t["3fe7U5"])];
  if (num > 0) {
    const intl3 = util.intl;
    items.push(intl3.string(util.t.PHjkRE));
  }
  if (tmp11) {
    const intl4 = util.intl;
    items.push(intl4.string(util.t.y3ZnnU));
  }
  tmp3Result = SegmentedControlState;
  obj = {
    pageWidth: 0,
    defaultIndex: first,
    onSetActiveIndex: tmp5[1],
    items: items.map((id) => ({ id, label: id, page: null })),
  };
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
  obj = {
    scrollable: true,
    header: closure_6(BottomSheetTitleHeader.BottomSheetTitleHeader, obj),
    startExpanded: true,
    children: null,
  };
  if (num > 0) {
    const obj1 = { children: null };
    const obj2 = { state: segmentedControlState };
    obj1.children = closure_6(SegmentedControl.SegmentedControl, obj2);
    let tmp2Result = closure_6(closure_5, obj1);
  } else {
    tmp2Result = null;
  }
  const items1 = [tmp2Result];
  const obj3 = { children: null };
  tmp11 = mapped2.length > 0;
  const tmp4 = closure_6(BottomSheetTitleHeader.BottomSheetTitleHeader, obj);
  obj3.children = closure_6(common_SafeAreaView.SafeAreaPaddingView, {
    bottom: true,
    children: closure_6(TableRowGroup.TableRowGroup, { hasIcons: true, children: tmp15 }),
  });
  items1[1] = closure_6(BottomSheetModal.BottomSheetScrollView, obj3);
  obj.children = items1;
  return closure_7(ActionSheet.ActionSheet, obj);
}
