// discord_app/components_native/channel_settings/ChannelSettingsChangeRTCRegion.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import Form from "../../design/void/Form/native/index.tsx";
import TableRadioRow from "../../design/components/TableRow/native/TableRadioRow.native.tsx";
import _toArray from "../../../_runtime/00853__toArray.js";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import initialize from "../../stores/RegionStore.tsx";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import importAllResult from "../../../_runtime/00019_noop.js";

require = fn;
const AUTOMATIC_RTC_REGION = "AUTOMATIC_RTC_REGION";
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
let closure_8 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class ChannelSettingsChangeRTCRegion extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    obj = { regions: [], submitting: false, selectedRegionId: AUTOMATIC_RTC_REGION };
    channel = applyArgumentsResult.props.channel;
    tmp3 = AUTOMATIC_RTC_REGION;
    regions = closure_5.getRegions(channel.getGuildId());
    obj = { id: AUTOMATIC_RTC_REGION, name: null, sample_hostname: "", sample_port: 0, vip: false, deprecated: false, optimal: false, hidden: false };
    intl = require("getSystemLocale").intl;
    obj[1] = intl.string(require("getSystemLocale").t.JEmsap);
    items = [];
    items[0] = obj;
    if (null != regions) {
      push = items.push;
      items1 = [];
      num = 0;
      tmp4 = items1;
      arraySpreadResult = HermesBuiltin.arraySpread(regions.filter((item, index) => {
        const deprecated = item.deprecated;
        let tmp = !deprecated;
        if (!deprecated) {
          tmp = !item.hidden;
        }
        return tmp;
      }), 0);
      tmp6 = push;
      tmp7 = items1;
      tmp8 = items;
      applyResult = HermesBuiltin.apply(items1, items);
      found = regions.find((item, index) => item.id === applyArgumentsResult.props.channel.rtcRegion);
      id = undefined;
      if (found != null) {
        id = found.id;
      }
      if (id == null) {
        id = tmp3;
      }
      obj.selectedRegionId = id;
    }
    obj.regions = items;
    applyArgumentsResult.state = obj;
    return applyArgumentsResult;
  }
}
const prototype = ChannelSettingsChangeRTCRegion.prototype;
prototype["handleSetRegion"] = function handleSetRegion(arg0) {
  const self = this;
  let tmp = arg0;
  c0 = arg0;
  let tmp2 = arg0;
  if (arg0 == null) {
    tmp2 = AUTOMATIC_RTC_REGION;
  }
  this.state.selectedRegionId = tmp2;
  if (tmp === AUTOMATIC_RTC_REGION) {
    c0 = null;
    tmp = null;
  }
  self(8132).updateChannel({ rtcRegion: tmp });
  self.setState({ submitting: true }, () => {
    self(dependencyMap[9]);
    const obj = { rtcRegion: c0 };
    obj.saveChannel(self.props.channel.id, obj);
  });
};
prototype["renderRegion"] = function renderRegion(label) {
  return jsx(TableRadioRow.TableRadioRow, { label: label.name, value: label.id }, label.id);
};
prototype["renderRegions"] = function renderRegions() {
  const self = this;
  const substr = callback(this.state.regions).slice(0);
  const mapped = substr.map(this.renderRegion, this);
  return jsx(self(8101).TableRadioGroup, {
    defaultValue: this.state.selectedRegionId,
    onChange(arg0) {
      return self.handleSetRegion(arg0);
    },
    hasIcons: false,
    children: mapped
  });
};
prototype["render"] = function render() {
  const tmp = callback2(this.context);
  return jsx(Form.Form, { style: callback2(this.context).form, children: this.renderRegions() });
};
ChannelSettingsChangeRTCRegion.contextType = require("ManaContext").ThemeContext;
const result = require("obj132").fileFinishedImporting("components_native/channel_settings/ChannelSettingsChangeRTCRegion.tsx");

export default function ConnectedChannelSettingsChangeRTCRegion(channelId) {
  channelId = channelId.channelId;
  const items = [closure_4];
  const channel = channelId(589).useStateFromStores(items, () => closure_1_4.getChannel(channelId));
  _modDef38(null != channel, "ConnectedChannelSettingsChangeRTCRegion: channel cannot be undefined");
  return <ChannelSettingsChangeRTCRegion channel={channel} />;
};