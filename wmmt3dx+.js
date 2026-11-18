Game.ExecutableName = "super3dx.exe";
Game.GameName = "Super3DX+";
Game.GUID = "Super3DXPlus";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.HandlerInterval = 100;

// Basic Input Support (ProtoInput handles keyboard/mouse & controller routing automatically)
Game.SupportsMultipleKeyboardsAndMice = true;
Game.SupportsControllers = true;

// Essential Window & Focus Settings
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "Super3DX+";
Game.SetWindowHook = true;
Game.ResetWindows = true;

// Enable ProtoInput for Unity Controller Isolation
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

// Block Raw Input so Unity doesn't read all connected controllers globally
Game.ProtoInput.RegisterRawInputHook = true;
Game.ProtoInput.GetRawInputDataHook = true;

// Route XInput per instance via ProtoInput
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true; // Crucial for Unity games!

// Focus & Message Filtering (Keeps background Unity instance alive)
Game.ProtoInput.MessageFilterHook = true;
Game.ProtoInput.FocusHooks = true

// Prevent missing asset crashes by copying/symlinking the full directory
Game.UseNucleusEnvironment = true;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.KeepSymLinkOnExit = false;

Game.Play = function() {
    // Keep startup arguments empty so SDL2 doesn't reject unrecognized flags
    Context.StartArguments = "";
};