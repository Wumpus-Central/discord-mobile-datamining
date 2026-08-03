// === Module 13548: reactNativeCorePlugins ===

// Module 13548 (reactNativeCorePlugins)
import importDefaultResult from "reactNativeCorePlugins";

const reactNative = require("reactNativeCorePlugins").configure({}).useReactNative();
reactNative.connect();
const configureResult = require("reactNativeCorePlugins").configure({});
const result = require("set").fileFinishedImporting("modules/debug/native/ReactotronConfig.tsx");