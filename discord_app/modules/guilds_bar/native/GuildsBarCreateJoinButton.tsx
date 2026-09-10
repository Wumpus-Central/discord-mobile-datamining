// discord_app/modules/guilds_bar/native/GuildsBarCreateJoinButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import GuildsBarAnimatedItemWrapperDefault from "GuildsBarAnimatedItemWrapper.tsx";
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";

const require = fn;
let closure_14 = async function _handleCreateJoinGuildPress() {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp5;
          closure_0 = tmp2;
          closure_128_0 = undefined;
          closure_128_1 = undefined;
          c2 = 1;
          c3 = 1;
          const obj1 = { value: require("asyncRequireImpl")(paths[8], paths.paths), done: false };
          return obj1;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_128_0 = value.default;
          c2 = 2;
          c3 = 1;
          const obj3 = { value: closure_129_0(closure_129_2[9])(closure_129_2[10], closure_129_2.paths), done: false };
          return obj3;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        closure_128_1 = value.default;
        closure_128_0.acknowledgeTooltip(closure_129_9.GUILD_TOOLTIP);
        if (obj11.isAtGuildCapAndNonPremium()) {
          obj = closure_129_1(closure_129_2[12]);
          const obj5 = {
            initialUpsellKey: closure_129_10.GUILD_CAP,
            analyticsLocation: null,
            analyticsLocations: null,
            analyticsProperties: null,
          };
          const obj6 = { page: closure_129_7.CREATE_JOIN_GUILD_MODAL };
          obj5.analyticsLocation = obj6;
          const items = [closure_129_1(closure_129_2[13]).NEW_GUILD_BUTTON];
          obj5.analyticsLocations = items;
          const obj7 = { type: closure_129_11.GUILD_CAP_MODAL_UPSELL };
          obj5.analyticsProperties = obj7;
          const result = obj.handleShowUpsellAlert(obj5);
        } else {
          closure_128_1.openCreateGuildModal();
        }
        c3 = 3;
        obj11 = closure_129_0(closure_129_2[11]);
      }
    } catch (tmp27) {
      c3 = tmp;
      throw tmp27;
    }
  }
};
const View = fn(17).View;
const Constants = fn(1074);
({
  AnalyticsPages: closure_7,
  MOBILE_GUILD_UPSELL_LIST: closure_8,
  TooltipNames: closure_9,
  UpsellTypes: c10,
} = Constants);
const PremiumUpsellTypes = fn(1373).PremiumUpsellTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4605);
let closure_13 = createStyles.createStyles({ stretch: { alignSelf: "stretch" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarCreateJoinButton.tsx");

export default noop.memo(function GuildsBarCreateJoinButton() {
  let obj = enabled(16376);
  const tmp = closure_13();
  const GameCommunityAddServerEntryExperiment = enabled(13790).GameCommunityAddServerEntryExperiment;
  enabled = GameCommunityAddServerEntryExperiment.useConfig({ location: "GuildsBarCreateJoinButton" }).enabled;
  let obj1 = enabled(504);
  const items = [SelectedGuildStore];
  let stateFromStores = enabled;
  if (enabled) {
    stateFromStores = obj1.useStateFromStores(items, () => guildId.getGuildId() === closure_1_8);
  }
  const items1 = [enabled];
  obj = { style: tmp.stretch, children: null };
  const memo = noop.useMemo(
    () => ({
      onPress() {
        if (closure_1_0) {
          if (!obj.isAtGuildCapAndNonPremium()) {
            transitionGuildsBarToGuildOrOpenSelectedChannelDefault(closure_2_8);
          }
          obj = enabled(dependencyMap[11]);
        }
        (function handleCreateJoinGuildPress() {
          const self = this;
          const apply = closure_1_14.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })();
      },
    }),
    items1,
  );
  obj = {
    selected: stateFromStores,
    circle: false,
    unread: false,
    styles: obj.useGuildsBarAnimatedWrapperStyles(),
    overState: "y",
    config: memo,
    label:
      "m180.747 219.024 29.309.136s-13.284-17.969-30.586-3.674a2.005 2.005 0 0 0-.598 2.215 2.006 2.006 0 0 0 1.875 1.323ZM279.165 161.961l20.489 16.006a2.122 2.122 0 0 1-.058 3.413 2.13 2.13 0 0 1-1.238.397c-6.35-.045-16.711-1.75-23.911-11.113l4.718-8.703Z",
    expandedChildren: "#242145",
    children:
      "m190.667 112.195-2.682 37.96a138.277 138.277 0 0 0 .097 20.736s.279 37.15 3.564 39.126c6.765.959 13.802 9.143 13.802 9.143h9.895a2.08 2.08 0 0 0 1.509-.643 2.073 2.073 0 0 0 .578-1.534l-.246-5.333-2.806-60.621 23.892 34.072a8.718 8.718 0 0 0 9.02 3.467l30.054-6.648a2.896 2.896 0 0 0 2.236-2.495l2.086-18.792a1.985 1.985 0 0 0-1.475-2.138 1.984 1.984 0 0 0-.935-.014l-27.988 6.293-20.865-27.398a7.256 7.256 0 0 1-1.257-6.26c.991-3.654 1.723-9.895-2.294-15.467l-36.185-3.454Z",
  };
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const intl = tmp2(1114).intl;
  obj.label = intl.string(enabled(1114).t.l5WIbf);
  obj.expandedChildren = jsx(enabled(16436).HomeDrawerAddServerRowExpandedChildren, {});
  const colors = nativeDefault.colors;
  obj1 = { size: "md", color: stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT };
  obj.children = jsx(enabled(11276).CirclePlusIcon, {
    size: "md",
    color: stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT,
  });
  obj.children = jsx(GuildsBarAnimatedItemWrapperDefault, {
    selected: stateFromStores,
    circle: false,
    unread: false,
    styles: obj.useGuildsBarAnimatedWrapperStyles(),
    overState: "y",
    config: memo,
    label:
      "m180.747 219.024 29.309.136s-13.284-17.969-30.586-3.674a2.005 2.005 0 0 0-.598 2.215 2.006 2.006 0 0 0 1.875 1.323ZM279.165 161.961l20.489 16.006a2.122 2.122 0 0 1-.058 3.413 2.13 2.13 0 0 1-1.238.397c-6.35-.045-16.711-1.75-23.911-11.113l4.718-8.703Z",
    expandedChildren: "#242145",
    children:
      "m190.667 112.195-2.682 37.96a138.277 138.277 0 0 0 .097 20.736s.279 37.15 3.564 39.126c6.765.959 13.802 9.143 13.802 9.143h9.895a2.08 2.08 0 0 0 1.509-.643 2.073 2.073 0 0 0 .578-1.534l-.246-5.333-2.806-60.621 23.892 34.072a8.718 8.718 0 0 0 9.02 3.467l30.054-6.648a2.896 2.896 0 0 0 2.236-2.495l2.086-18.792a1.985 1.985 0 0 0-1.475-2.138 1.984 1.984 0 0 0-.935-.014l-27.988 6.293-20.865-27.398a7.256 7.256 0 0 1-1.257-6.26c.991-3.654 1.723-9.895-2.294-15.467l-36.185-3.454Z",
  });
  return (
    <View
      selected={stateFromStores}
      circle={false}
      unread={false}
      styles={obj.useGuildsBarAnimatedWrapperStyles()}
      overState="y"
      config={memo}
      label="m180.747 219.024 29.309.136s-13.284-17.969-30.586-3.674a2.005 2.005 0 0 0-.598 2.215 2.006 2.006 0 0 0 1.875 1.323ZM279.165 161.961l20.489 16.006a2.122 2.122 0 0 1-.058 3.413 2.13 2.13 0 0 1-1.238.397c-6.35-.045-16.711-1.75-23.911-11.113l4.718-8.703Z"
      expandedChildren="#242145"
    >
      {
        "m190.667 112.195-2.682 37.96a138.277 138.277 0 0 0 .097 20.736s.279 37.15 3.564 39.126c6.765.959 13.802 9.143 13.802 9.143h9.895a2.08 2.08 0 0 0 1.509-.643 2.073 2.073 0 0 0 .578-1.534l-.246-5.333-2.806-60.621 23.892 34.072a8.718 8.718 0 0 0 9.02 3.467l30.054-6.648a2.896 2.896 0 0 0 2.236-2.495l2.086-18.792a1.985 1.985 0 0 0-1.475-2.138 1.984 1.984 0 0 0-.935-.014l-27.988 6.293-20.865-27.398a7.256 7.256 0 0 1-1.257-6.26c.991-3.654 1.723-9.895-2.294-15.467l-36.185-3.454Z"
      }
    </View>
  );
});
