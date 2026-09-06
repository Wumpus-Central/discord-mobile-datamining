// discord_app/modules/main_tabs_v2/native/tabs/you/YouSwitchClientsRadioGroup.tsx
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import DiscordVariants from "../../../../links/native/DiscordVariants.android.tsx";
import DiscordVariantTypes from "../../../../links/native/DiscordVariantTypes.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouSwitchClientsRadioGroup.tsx");

export default function YouSwitchClientsRadioGroup() {
  const memo = noop.useMemo(() => memo(16381).getCurrentVariant(), []);
  [arr, importDefault] = _slicedToArray(noop.useState(null), 2);
  const items = [memo];
  const effect = noop.useEffect(() => {
    if (null != c0) {
      c0 = false;
      let DISCORD_VARIANT_LIST = memo(16382).DISCORD_VARIANT_LIST;
      const allPromises = Promise.all(
        DISCORD_VARIANT_LIST.map((item) => _true(dependencyMap[3]).isVariantInstalled(item)),
      );
      Promise.all(DISCORD_VARIANT_LIST.map((item) => _true(dependencyMap[3]).isVariantInstalled(item)))
        .then((result) => {
          closure_0 = result;
          if (!c0) {
            const DISCORD_VARIANT_LIST = DiscordVariantTypes.DISCORD_VARIANT_LIST;
            importDefault(DISCORD_VARIANT_LIST.filter((item, index) => closure_0[index]));
          }
        })
        .catch(() => {
          if (!c0) {
            importDefault([]);
          }
        });
      return () => {
        c0 = true;
      };
    }
  }, items);
  [][0] = memo;
  let tmp5 = null;
  if (null != memo) {
    tmp5 = null;
    if (null != arr) {
      tmp5 = null;
      if (arr.length >= 2) {
        let obj = {
          title: "Switch Clients",
          value: memo,
          onChange: tmp4,
          hasIcons: true,
          children: arr.map((value) => {
            let obj = { value, label: memo(16382).DISCORD_VARIANTS[value].label, icon: null };
            obj = { color: memo(16382).DISCORD_VARIANTS[value].color };
            obj.icon = jsx(memo(10818).ClydeIcon, { color: memo(16382).DISCORD_VARIANTS[value].color });
            return jsx(memo(5688).TableRadioRow, { color: memo(16382).DISCORD_VARIANTS[value].color }, value);
          }),
        };
        tmp5 = jsx(memo(5685).TableRadioGroup, {
          title: "Switch Clients",
          value: memo,
          onChange: tmp4,
          hasIcons: true,
          children: arr.map((value) => {
            let obj = { value, label: memo(16382).DISCORD_VARIANTS[value].label, icon: null };
            obj = { color: memo(16382).DISCORD_VARIANTS[value].color };
            obj.icon = jsx(memo(10818).ClydeIcon, { color: memo(16382).DISCORD_VARIANTS[value].color });
            return jsx(memo(5688).TableRadioRow, { color: memo(16382).DISCORD_VARIANTS[value].color }, value);
          }),
        });
      }
    }
  }
  return tmp5;
}
