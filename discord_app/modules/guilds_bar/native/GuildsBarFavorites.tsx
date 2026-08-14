// discord_app/modules/guilds_bar/native/GuildsBarFavorites.tsx
import importAllResult from "StarIcon";
import { View } from "getSystemLocale";
import initializeFromUserSettings from "initializeFromUserSettings";
import { FAVORITES } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let c9;
let metroImportAll;
const require = arg1;
let c3 = importAllResult;
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let c10 = "more-options";
let obj = { anchor: null };
obj = { position: "absolute", top: require("Themes").modules.mobile.GUILD_BAR_ITEM_MARGIN, left: 12, width: require("Themes").modules.mobile.GUILD_BAR_ITEM_SIZE, height: require("Themes").modules.mobile.GUILD_BAR_ITEM_SIZE };
obj[0] = obj;
let closure_11 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function GuildsBarFavorites() {
  let accessibilityActions;
  let badge;
  let badge2;
  let cutouts;
  let onAccessibilityAction;
  let unread;
  const tmp3 = markPopoverAsDismissed(1367)("GuildsBarFavorites");
  let obj = shouldShowPopover(15508);
  let obj1 = shouldShowPopover(9770);
  const isFavoritesGuildSelected = obj1.useIsFavoritesGuildSelected();
  let obj2 = shouldShowPopover(589);
  let items = [initializeFromUserSettings];
  const stateFromStores = obj2.useStateFromStores(items, () => favoriteChannels.getFavoriteChannels());
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  ({ badge, unread } = markPopoverAsDismissed(15525)(stateFromStores));
  const tmp8 = markPopoverAsDismissed(15525)(stateFromStores);
  ({ badge: badge2, cutouts } = markPopoverAsDismissed(15510)({ mentionCount: badge }));
  const ref = importAllResult.useRef(null);
  const tmp9 = markPopoverAsDismissed(15510)({ mentionCount: badge });
  const tmp11 = callback();
  const favoritesIntroPopover = shouldShowPopover(9779).useFavoritesIntroPopover();
  shouldShowPopover = favoritesIntroPopover.shouldShowPopover;
  markPopoverAsDismissed = favoritesIntroPopover.markPopoverAsDismissed;
  const items1 = [shouldShowPopover, markPopoverAsDismissed];
  const memo = importAllResult.useMemo(() => ({
    onPress() {
      if (closure_0) {
        callback(outer1_7.TAKE_ACTION);
      }
      outer1_1(outer1_2[15])(outer1_6);
    },
    onLongPress() {
      callback(table[16])();
    }
  }), items1);
  const memo1 = importAllResult.useMemo(() => {
    let obj = { accessibilityActions: null, onAccessibilityAction: null };
    obj = { name: closure_10, label: null };
    const intl = shouldShowPopover(1236).intl;
    obj[1] = intl.string(shouldShowPopover(1236).t.PdRCRg);
    const items = [obj];
    obj[0] = items;
    obj[1] = function onAccessibilityAction(nativeEvent) {
      if (nativeEvent.nativeEvent.actionName === closure_10) {
        callback(table[16])();
      }
    };
    return obj;
  }, []);
  ({ accessibilityActions, onAccessibilityAction } = memo1);
  obj = { selected: isFavoritesGuildSelected, circle: null, unread: null, styles: null, cutouts: null, overState: "l", config: "function runOnRuntime_Pnpm_runtimesTs2(workletRuntime,worklet){const{__DEV__,SHOULD_BE_USE_WEB,isWorkletFunction,makeShareableCloneOnUIRecursive,ReanimatedModule,makeShareableCloneRecursive}=this.__closure;if(__DEV__&&!SHOULD_BE_USE_WEB&&!isWorkletFunction(worklet)){throw new ReanimatedError('The function passed to `runOnRuntime` is not a worklet.'+(_WORKLET?' Please make sure that `processNestedWorklets` option in Reanimated Babel plugin is enabled.':''));}if(_WORKLET){return function(...args){return global._scheduleOnRuntime(workletRuntime,makeShareableCloneOnUIRecursive(function(){'worklet';worklet(...args);}));};}return function(...args){return ReanimatedModule.scheduleOnRuntime(workletRuntime,makeShareableCloneRecursive(function(){'worklet';worklet(...args);}));};}", accessibilityActions: "function pnpm_timingTs2(){const{Easing,userConfig,toValue,callback,getReduceMotionForAnimation}=this.__closure;var _userConfig;const config={duration:300,easing:Easing.inOut(Easing.quad)};if(userConfig){Object.keys(userConfig).forEach(function(key){return config[key]=userConfig[key];});}function timing(animation,now){const{toValue:toValue,startTime:startTime,startValue:startValue}=animation;const runtime=now-startTime;if(runtime>=config.duration){animation.startTime=0;animation.current=toValue;return true;}const progress=animation.easing(runtime/config.duration);animation.current=startValue+(toValue-startValue)*progress;return false;}function onStart(animation,value,now,previousAnimation){if(previousAnimation&&previousAnimation.type==='timing'&&previousAnimation.toValue===toValue&&previousAnimation.startTime){animation.startTime=previousAnimation.startTime;animation.startValue=previousAnimation.startValue;}else{animation.startTime=now;animation.startValue=value;}animation.current=value;if(typeof config.easing==='object'){animation.easing=config.easing.factory();}else{animation.easing=config.easing;}}return{type:'timing',onFrame:timing,onStart:onStart,progress:0,toValue:toValue,startValue:0,startTime:0,easing:function(){return 0;},current:toValue,callback:callback,reduceMotion:getReduceMotionForAnimation((_userConfig=userConfig)===null||_userConfig===void 0?void 0:_userConfig.reduceMotion)};}", onAccessibilityAction: "function pnpm_timingTs1(toValue,userConfig,callback){const{__DEV__,assertEasingIsWorklet,defineAnimation,Easing,getReduceMotionForAnimation}=this.__closure;if(__DEV__&&userConfig!==null&&userConfig!==void 0&&userConfig.easing){assertEasingIsWorklet(userConfig.easing);}return defineAnimation(toValue,function(){'worklet';const config={duration:300,easing:Easing.inOut(Easing.quad)};if(userConfig){Object.keys(userConfig).forEach(function(key){return config[key]=userConfig[key];});}function timing(animation,now){const{toValue:toValue,startTime:startTime,startValue:startValue}=animation;const runtime=now-startTime;if(runtime>=config.duration){animation.startTime=0;animation.current=toValue;return true;}const progress=animation.easing(runtime/config.duration);animation.current=startValue+(toValue-startValue)*progress;return false;}function onStart(animation,value,now,previousAnimation){if(previousAnimation&&previousAnimation.type==='timing'&&previousAnimation.toValue===toValue&&previousAnimation.startTime){animation.startTime=previousAnimation.startTime;animation.startValue=previousAnimation.startValue;}else{animation.startTime=now;animation.startValue=value;}animation.current=value;if(typeof config.easing==='object'){animation.easing=config.easing.factory();}else{animation.easing=config.easing;}}return{type:'timing',onFrame:timing,onStart:onStart,progress:0,toValue:toValue,startValue:0,startTime:0,easing:function(){return 0;},current:toValue,callback:callback,reduceMotion:getReduceMotionForAnimation(userConfig===null||userConfig===void 0?void 0:userConfig.reduceMotion)};});}", label: "function linear_Pnpm_EasingTs1(t){return t;}", externalChildren: "function quad_Pnpm_EasingTs3(t){return t*t;}", expandedChildren: "function cubic_Pnpm_EasingTs4(t){return t*t*t;}", children: "function poly_Pnpm_EasingTs5(n){return function(t){'worklet';return Math.pow(t,n);};}" };
  let tmp19 = !tmp3;
  const obj4 = shouldShowPopover(9779);
  const tmp15 = closure_9;
  if (!tmp3) {
    tmp19 = !isFavoritesGuildSelected;
  }
  obj[1] = tmp19;
  obj[2] = unread;
  obj[3] = guildsBarAnimatedWrapperStyles;
  obj[4] = cutouts;
  obj[6] = memo;
  obj[7] = accessibilityActions;
  obj[8] = onAccessibilityAction;
  let intl = tmp4(1236).intl;
  obj[9] = intl.string(shouldShowPopover(1236).t.wMWyci);
  obj[10] = badge2;
  obj[11] = closure_8(shouldShowPopover(15526).HomeDrawerFavoritesRowExpandedChildren, {});
  const colors = tmp(712).colors;
  obj = { color: isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT };
  obj[12] = closure_8(shouldShowPopover(8807).StarIcon, obj);
  const children = [closure_8(markPopoverAsDismissed(15508), obj), , ];
  obj1 = { ref, style: tmp11.anchor, pointerEvents: "none", collapsable: false };
  children[1] = closure_8(View, obj1);
  if (shouldShowPopover) {
    obj2 = { targetRef: null, markAsDismissed: null };
    obj2[0] = ref;
    obj2[1] = markPopoverAsDismissed;
    shouldShowPopover = tmp17(tmp(15527), obj2);
  }
  children[2] = shouldShowPopover;
  return tmp15(View, { children });
});
const result = require("initializeFromUserSettings").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFavorites.tsx");

export default memoResult;