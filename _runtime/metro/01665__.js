// _runtime/metro/01665__.js
let prop;
if (nativeFabricUIManager != null) {
  prop = nativeFabricUIManager.nativeFabricUIManager;
}
let obj = {
  borderBottomEndRadius: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderBottomStartRadius: true,
  borderRadius: true,
  borderTopEndRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderTopStartRadius: true,
};
if (null == prop) {
  obj = {};
}
obj = { color: true, tintColor: true, shadowColor: true, placeholderTextColor: true };
const obj1 = {
  opacity: true,
  transform: true,
  backgroundColor: true,
  borderRightColor: true,
  borderBottomColor: true,
  borderColor: true,
  borderEndColor: true,
  borderLeftColor: true,
  borderStartColor: true,
  borderTopColor: true,
  shadowOpacity: true,
  shadowRadius: true,
};
const merged = Object.assign(obj);
obj1.scaleX = true;
obj1.scaleY = true;
obj1.translateX = true;
obj1.translateY = true;
let obj2 = obj;
if (null == prop) {
  obj2 = {};
}
const obj3 = { UI_THREAD_PROPS_WHITELIST: null, NATIVE_THREAD_PROPS_WHITELIST: null };
const merged1 = Object.assign(obj2);
obj3[0] = obj1;
if (null != prop) {
  obj = {};
}
const merged2 = Object.assign(obj);
if (null != prop) {
  obj = {};
}
const merged3 = Object.assign(obj);
obj3[1] = {
  borderBottomWidth: true,
  borderEndWidth: true,
  borderLeftWidth: true,
  borderRightWidth: true,
  borderStartWidth: true,
  borderTopWidth: true,
  borderWidth: true,
  bottom: true,
  boxShadow: true,
  flex: true,
  flexGrow: true,
  flexShrink: true,
  height: true,
  left: true,
  margin: true,
  marginBottom: true,
  marginEnd: true,
  marginHorizontal: true,
  marginLeft: true,
  marginRight: true,
  marginStart: true,
  marginTop: true,
  marginVertical: true,
  maxHeight: true,
  maxWidth: true,
  minHeight: true,
  minWidth: true,
  padding: true,
  paddingBottom: true,
  paddingEnd: true,
  paddingHorizontal: true,
  paddingLeft: true,
  paddingRight: true,
  paddingStart: true,
  paddingTop: true,
  paddingVertical: true,
  right: true,
  start: true,
  top: true,
  width: true,
  zIndex: true,
  elevation: true,
  fontSize: true,
  lineHeight: true,
  textShadowRadius: true,
  textShadowOffset: true,
  letterSpacing: true,
  aspectRatio: true,
  columnGap: true,
  end: true,
  flexBasis: true,
  gap: true,
  rowGap: true,
  display: true,
  backfaceVisibility: true,
  overflow: true,
  resizeMode: true,
  fontStyle: true,
  fontWeight: true,
  textAlign: true,
  textDecorationLine: true,
  fontFamily: true,
  textAlignVertical: true,
  fontVariant: true,
  textDecorationStyle: true,
  textTransform: true,
  writingDirection: true,
  alignContent: true,
  alignItems: true,
  alignSelf: true,
  direction: true,
  flexDirection: true,
  flexWrap: true,
  justifyContent: true,
  position: true,
};
arg5.PropsAllowlists = obj3;
