// === Module 18723: YouSwitchClientsRadioGroup ===

// Module 18723 (YouSwitchClientsRadioGroup)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import DiscordVariants from "DiscordVariants" /* 18724 */;
import DiscordVariantTypes from "DiscordVariantTypes" /* 18725 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouSwitchClientsRadioGroup.tsx");

export default function YouSwitchClientsRadioGroup() {
  const memo = noop.useMemo(() => memo(18724).getCurrentVariant(), []);
  [arr, importDefault] = noop.useState(null);
  items = [memo];
  const effect = noop.useEffect(() => {
    if (null != c0) {
      c0 = false;
      let DISCORD_VARIANT_LIST = memo(18725).DISCORD_VARIANT_LIST;
      const allPromises = Promise.all(DISCORD_VARIANT_LIST.map((item) => _true(dependencyMap[3]).isVariantInstalled(item)));
      Promise.all(DISCORD_VARIANT_LIST.map((item) => _true(dependencyMap[3]).isVariantInstalled(item))).then((result) => {
        closure_0 = result;
        if (!c0) {
          const DISCORD_VARIANT_LIST = DiscordVariantTypes.DISCORD_VARIANT_LIST;
          importDefault(DISCORD_VARIANT_LIST.filter((item, index) => closure_0[index]));
        }
      }).catch(() => {
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
                  const obj = { value, label: memo(18725).DISCORD_VARIANTS[value].label, icon: jsx(memo(10863).ClydeIcon, { color: memo(18725).DISCORD_VARIANTS[value].color }) };
                  return jsx(memo(7202).TableRadioRow, { value, label: memo(18725).DISCORD_VARIANTS[value].label, icon: jsx(memo(10863).ClydeIcon, { color: memo(18725).DISCORD_VARIANTS[value].color }) }, value);
                })
        };
        tmp5 = jsx(memo(7199).TableRadioGroup, {
          title: "Switch Clients",
          value: memo,
          onChange: tmp4,
          hasIcons: true,
          children: arr.map((value) => {
                  const obj = { value, label: memo(18725).DISCORD_VARIANTS[value].label, icon: jsx(memo(10863).ClydeIcon, { color: memo(18725).DISCORD_VARIANTS[value].color }) };
                  return jsx(memo(7202).TableRadioRow, { value, label: memo(18725).DISCORD_VARIANTS[value].label, icon: jsx(memo(10863).ClydeIcon, { color: memo(18725).DISCORD_VARIANTS[value].color }) }, value);
                })
        });
      }
    }
  }
  return tmp5;
};