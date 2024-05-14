// ... Existing Photoshop JavaScript code ...

// Get Folder Path from User
function getFolderPath() {
  var folder = Folder.selectDialog("Please select the folder containing your graphics.");
  if (folder) {
    return folder.absoluteURI; // or folder.path
  } else {
    return null;
  }
}

// Get the folder path
var selectedFolderPath = getFolderPath();

// Update Photoshop code
if (selectedFolderPath) {
  // Use a regex to find each "desc2.putPath..." line
  var code = code.replace(/desc2\.putPath\(cTID\('In '\), new File\(".*?"\)\)/g, 
               "desc2.putPath(cTID('In '), new File(\"" + selectedFolderPath + "\"))");

  // ... Continue with updated code ...
} else {
  alert("Folder selection is required. Operation cancelled.");
}

// ... Rest of your Photoshop JavaScript code ...

#target photoshop
//
// Action1.jsx
//

//
// Generated Thu May 09 2024 18:31:39 GMT+0300
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Action 1 ==============
//
function Action1() {
  // Export
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Op  '), cTID('SWOp'), cTID('OpSa'));
    desc2.putBoolean(cTID('DIDr'), true);
    desc2.putPath(cTID('In  '), new File("~/Desktop/File or Folder not found"));
    desc2.putString(cTID('PthN'), "/Volumes/Macbook_Old/EasyMockAI/PhoneCase.jpg");
    desc2.putEnumerated(cTID('Fmt '), cTID('IRFm'), sTID("JPEGFormat"));
    desc2.putBoolean(cTID('Intr'), false);
    desc2.putInteger(cTID('Qlty'), 27);
    desc2.putInteger(cTID('QChS'), 0);
    desc2.putInteger(cTID('QCUI'), 0);
    desc2.putBoolean(cTID('QChT'), false);
    desc2.putBoolean(cTID('QChV'), false);
    desc2.putBoolean(cTID('Optm'), true);
    desc2.putInteger(cTID('Pass'), 1);
    desc2.putDouble(cTID('blur'), 0);
    desc2.putBoolean(cTID('Mtt '), true);
    desc2.putBoolean(cTID('EICC'), false);
    desc2.putInteger(cTID('MttR'), 255);
    desc2.putInteger(cTID('MttG'), 255);
    desc2.putInteger(cTID('MttB'), 255);
    desc2.putBoolean(cTID('SHTM'), false);
    desc2.putBoolean(cTID('SImg'), true);
    desc2.putEnumerated(cTID('SWsl'), cTID('STsl'), cTID('SLAl'));
    desc2.putEnumerated(cTID('SWch'), cTID('STch'), cTID('CHsR'));
    desc2.putEnumerated(cTID('SWmd'), cTID('STmd'), cTID('MDCp'));
    desc2.putBoolean(cTID('ohXH'), false);
    desc2.putBoolean(cTID('ohIC'), true);
    desc2.putBoolean(cTID('ohAA'), true);
    desc2.putBoolean(cTID('ohQA'), true);
    desc2.putBoolean(cTID('ohCA'), false);
    desc2.putBoolean(cTID('ohIZ'), true);
    desc2.putEnumerated(cTID('ohTC'), cTID('SToc'), cTID('OC03'));
    desc2.putEnumerated(cTID('ohAC'), cTID('SToc'), cTID('OC03'));
    desc2.putInteger(cTID('ohIn'), -1);
    desc2.putEnumerated(cTID('ohLE'), cTID('STle'), cTID('LE03'));
    desc2.putEnumerated(cTID('ohEn'), cTID('STen'), cTID('EN00'));
    desc2.putBoolean(cTID('olCS'), false);
    desc2.putEnumerated(cTID('olEC'), cTID('STst'), cTID('ST00'));
    desc2.putEnumerated(cTID('olWH'), cTID('STwh'), cTID('WH01'));
    desc2.putEnumerated(cTID('olSV'), cTID('STsp'), cTID('SP04'));
    desc2.putEnumerated(cTID('olSH'), cTID('STsp'), cTID('SP04'));
    var list1 = new ActionList();
    var desc3 = new ActionDescriptor();
    desc3.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC00'));
    list1.putObject(cTID('SCnc'), desc3);
    var desc4 = new ActionDescriptor();
    desc4.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC19'));
    list1.putObject(cTID('SCnc'), desc4);
    var desc5 = new ActionDescriptor();
    desc5.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC28'));
    list1.putObject(cTID('SCnc'), desc5);
    var desc6 = new ActionDescriptor();
    desc6.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list1.putObject(cTID('SCnc'), desc6);
    var desc7 = new ActionDescriptor();
    desc7.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list1.putObject(cTID('SCnc'), desc7);
    var desc8 = new ActionDescriptor();
    desc8.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list1.putObject(cTID('SCnc'), desc8);
    desc2.putList(cTID('olNC'), list1);
    desc2.putBoolean(cTID('obIA'), false);
    desc2.putString(cTID('obIP'), "");
    desc2.putEnumerated(cTID('obCS'), cTID('STcs'), cTID('CS01'));
    var list2 = new ActionList();
    var desc9 = new ActionDescriptor();
    desc9.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC01'));
    list2.putObject(cTID('SCnc'), desc9);
    var desc10 = new ActionDescriptor();
    desc10.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC20'));
    list2.putObject(cTID('SCnc'), desc10);
    var desc11 = new ActionDescriptor();
    desc11.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC02'));
    list2.putObject(cTID('SCnc'), desc11);
    var desc12 = new ActionDescriptor();
    desc12.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC19'));
    list2.putObject(cTID('SCnc'), desc12);
    var desc13 = new ActionDescriptor();
    desc13.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC06'));
    list2.putObject(cTID('SCnc'), desc13);
    var desc14 = new ActionDescriptor();
    desc14.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list2.putObject(cTID('SCnc'), desc14);
    var desc15 = new ActionDescriptor();
    desc15.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list2.putObject(cTID('SCnc'), desc15);
    var desc16 = new ActionDescriptor();
    desc16.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list2.putObject(cTID('SCnc'), desc16);
    var desc17 = new ActionDescriptor();
    desc17.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC22'));
    list2.putObject(cTID('SCnc'), desc17);
    desc2.putList(cTID('ovNC'), list2);
    desc2.putBoolean(cTID('ovCM'), false);
    desc2.putBoolean(cTID('ovCW'), false);
    desc2.putBoolean(cTID('ovCU'), true);
    desc2.putBoolean(cTID('ovSF'), true);
    desc2.putBoolean(cTID('ovCB'), true);
    desc2.putString(cTID('ovSN'), "images");
    desc1.putObject(cTID('Usng'), sTID("SaveForWeb"), desc2);
    executeAction(cTID('Expr'), desc1, dialogMode);
  };

  // Hide
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Ortho_view");
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Hd  '), desc1, dialogMode);
  };

  // Show
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Perspective_view");
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Shw '), desc1, dialogMode);
  };

  // Export
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Op  '), cTID('SWOp'), cTID('OpSa'));
    desc2.putBoolean(cTID('DIDr'), true);
    desc2.putPath(cTID('In  '), new File("~/Desktop/File or Folder not found"));
    desc2.putString(cTID('PthN'), "/Volumes/Macbook_Old/EasyMockAI/PhoneCase1.jpg");
    desc2.putString(cTID('ovFN'), "PhoneCase1.jpg");
    desc2.putEnumerated(cTID('Fmt '), cTID('IRFm'), sTID("JPEGFormat"));
    desc2.putBoolean(cTID('Intr'), false);
    desc2.putInteger(cTID('Qlty'), 27);
    desc2.putInteger(cTID('QChS'), 0);
    desc2.putInteger(cTID('QCUI'), 0);
    desc2.putBoolean(cTID('QChT'), false);
    desc2.putBoolean(cTID('QChV'), false);
    desc2.putBoolean(cTID('Optm'), true);
    desc2.putInteger(cTID('Pass'), 1);
    desc2.putDouble(cTID('blur'), 0);
    desc2.putBoolean(cTID('Mtt '), true);
    desc2.putBoolean(cTID('EICC'), false);
    desc2.putInteger(cTID('MttR'), 255);
    desc2.putInteger(cTID('MttG'), 255);
    desc2.putInteger(cTID('MttB'), 255);
    desc2.putBoolean(cTID('SHTM'), false);
    desc2.putBoolean(cTID('SImg'), true);
    desc2.putEnumerated(cTID('SWsl'), cTID('STsl'), cTID('SLAl'));
    desc2.putEnumerated(cTID('SWch'), cTID('STch'), cTID('CHsR'));
    desc2.putEnumerated(cTID('SWmd'), cTID('STmd'), cTID('MDCp'));
    desc2.putBoolean(cTID('ohXH'), false);
    desc2.putBoolean(cTID('ohIC'), true);
    desc2.putBoolean(cTID('ohAA'), true);
    desc2.putBoolean(cTID('ohQA'), true);
    desc2.putBoolean(cTID('ohCA'), false);
    desc2.putBoolean(cTID('ohIZ'), true);
    desc2.putEnumerated(cTID('ohTC'), cTID('SToc'), cTID('OC03'));
    desc2.putEnumerated(cTID('ohAC'), cTID('SToc'), cTID('OC03'));
    desc2.putInteger(cTID('ohIn'), -1);
    desc2.putEnumerated(cTID('ohLE'), cTID('STle'), cTID('LE03'));
    desc2.putEnumerated(cTID('ohEn'), cTID('STen'), cTID('EN00'));
    desc2.putBoolean(cTID('olCS'), false);
    desc2.putEnumerated(cTID('olEC'), cTID('STst'), cTID('ST00'));
    desc2.putEnumerated(cTID('olWH'), cTID('STwh'), cTID('WH01'));
    desc2.putEnumerated(cTID('olSV'), cTID('STsp'), cTID('SP04'));
    desc2.putEnumerated(cTID('olSH'), cTID('STsp'), cTID('SP04'));
    var list1 = new ActionList();
    var desc3 = new ActionDescriptor();
    desc3.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC00'));
    list1.putObject(cTID('SCnc'), desc3);
    var desc4 = new ActionDescriptor();
    desc4.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC19'));
    list1.putObject(cTID('SCnc'), desc4);
    var desc5 = new ActionDescriptor();
    desc5.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC28'));
    list1.putObject(cTID('SCnc'), desc5);
    var desc6 = new ActionDescriptor();
    desc6.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list1.putObject(cTID('SCnc'), desc6);
    var desc7 = new ActionDescriptor();
    desc7.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list1.putObject(cTID('SCnc'), desc7);
    var desc8 = new ActionDescriptor();
    desc8.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list1.putObject(cTID('SCnc'), desc8);
    desc2.putList(cTID('olNC'), list1);
    desc2.putBoolean(cTID('obIA'), false);
    desc2.putString(cTID('obIP'), "");
    desc2.putEnumerated(cTID('obCS'), cTID('STcs'), cTID('CS01'));
    var list2 = new ActionList();
    var desc9 = new ActionDescriptor();
    desc9.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC01'));
    list2.putObject(cTID('SCnc'), desc9);
    var desc10 = new ActionDescriptor();
    desc10.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC20'));
    list2.putObject(cTID('SCnc'), desc10);
    var desc11 = new ActionDescriptor();
    desc11.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC02'));
    list2.putObject(cTID('SCnc'), desc11);
    var desc12 = new ActionDescriptor();
    desc12.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC19'));
    list2.putObject(cTID('SCnc'), desc12);
    var desc13 = new ActionDescriptor();
    desc13.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC06'));
    list2.putObject(cTID('SCnc'), desc13);
    var desc14 = new ActionDescriptor();
    desc14.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list2.putObject(cTID('SCnc'), desc14);
    var desc15 = new ActionDescriptor();
    desc15.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list2.putObject(cTID('SCnc'), desc15);
    var desc16 = new ActionDescriptor();
    desc16.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list2.putObject(cTID('SCnc'), desc16);
    var desc17 = new ActionDescriptor();
    desc17.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC22'));
    list2.putObject(cTID('SCnc'), desc17);
    desc2.putList(cTID('ovNC'), list2);
    desc2.putBoolean(cTID('ovCM'), false);
    desc2.putBoolean(cTID('ovCW'), false);
    desc2.putBoolean(cTID('ovCU'), true);
    desc2.putBoolean(cTID('ovSF'), true);
    desc2.putBoolean(cTID('ovCB'), true);
    desc2.putString(cTID('ovSN'), "images");
    desc1.putObject(cTID('Usng'), sTID("SaveForWeb"), desc2);
    executeAction(cTID('Expr'), desc1, dialogMode);
  };

  // Hide
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Perspective_view");
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Hd  '), desc1, dialogMode);
  };

  // Show
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Ortho_view");
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Shw '), desc1, dialogMode);
  };

  // Edit Contents
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putInteger(cTID('DocI'), 641);
    desc1.putInteger(cTID('LyrI'), 3783);
    executeAction(sTID('placedLayerEditContents'), desc1, dialogMode);
  };

  // Hide
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Hd  '), desc1, dialogMode);
  };

  // Close
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putBoolean(sTID("maximizeCompatibility"), false);
    desc1.putObject(cTID('As  '), sTID("largeDocumentFormat"), desc2);
    desc1.putPath(cTID('In  '), new File("~/Desktop/File or Folder not found"));
    desc1.putInteger(cTID('DocI'), 861);
    desc1.putBoolean(cTID('LwCs'), true);
    desc1.putEnumerated(cTID('Svng'), cTID('YsN '), cTID('Ys  '));
    desc1.putBoolean(sTID("forceNotify"), true);
    executeAction(cTID('Cls '), desc1, dialogMode);
  };

  // Export
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Op  '), cTID('SWOp'), cTID('OpSa'));
    desc2.putBoolean(cTID('DIDr'), true);
    desc2.putPath(cTID('In  '), new File("~/Desktop/File or Folder not found"));
    desc2.putString(cTID('PthN'), "/Volumes/Macbook_Old/EasyMockAI/PhoneCase2.jpg");
    desc2.putString(cTID('ovFN'), "PhoneCase2.jpg");
    desc2.putEnumerated(cTID('Fmt '), cTID('IRFm'), sTID("JPEGFormat"));
    desc2.putBoolean(cTID('Intr'), false);
    desc2.putInteger(cTID('Qlty'), 27);
    desc2.putInteger(cTID('QChS'), 0);
    desc2.putInteger(cTID('QCUI'), 0);
    desc2.putBoolean(cTID('QChT'), false);
    desc2.putBoolean(cTID('QChV'), false);
    desc2.putBoolean(cTID('Optm'), true);
    desc2.putInteger(cTID('Pass'), 1);
    desc2.putDouble(cTID('blur'), 0);
    desc2.putBoolean(cTID('Mtt '), true);
    desc2.putBoolean(cTID('EICC'), false);
    desc2.putInteger(cTID('MttR'), 255);
    desc2.putInteger(cTID('MttG'), 255);
    desc2.putInteger(cTID('MttB'), 255);
    desc2.putBoolean(cTID('SHTM'), false);
    desc2.putBoolean(cTID('SImg'), true);
    desc2.putEnumerated(cTID('SWsl'), cTID('STsl'), cTID('SLAl'));
    desc2.putEnumerated(cTID('SWch'), cTID('STch'), cTID('CHsR'));
    desc2.putEnumerated(cTID('SWmd'), cTID('STmd'), cTID('MDCp'));
    desc2.putBoolean(cTID('ohXH'), false);
    desc2.putBoolean(cTID('ohIC'), true);
    desc2.putBoolean(cTID('ohAA'), true);
    desc2.putBoolean(cTID('ohQA'), true);
    desc2.putBoolean(cTID('ohCA'), false);
    desc2.putBoolean(cTID('ohIZ'), true);
    desc2.putEnumerated(cTID('ohTC'), cTID('SToc'), cTID('OC03'));
    desc2.putEnumerated(cTID('ohAC'), cTID('SToc'), cTID('OC03'));
    desc2.putInteger(cTID('ohIn'), -1);
    desc2.putEnumerated(cTID('ohLE'), cTID('STle'), cTID('LE03'));
    desc2.putEnumerated(cTID('ohEn'), cTID('STen'), cTID('EN00'));
    desc2.putBoolean(cTID('olCS'), false);
    desc2.putEnumerated(cTID('olEC'), cTID('STst'), cTID('ST00'));
    desc2.putEnumerated(cTID('olWH'), cTID('STwh'), cTID('WH01'));
    desc2.putEnumerated(cTID('olSV'), cTID('STsp'), cTID('SP04'));
    desc2.putEnumerated(cTID('olSH'), cTID('STsp'), cTID('SP04'));
    var list1 = new ActionList();
    var desc3 = new ActionDescriptor();
    desc3.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC00'));
    list1.putObject(cTID('SCnc'), desc3);
    var desc4 = new ActionDescriptor();
    desc4.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC19'));
    list1.putObject(cTID('SCnc'), desc4);
    var desc5 = new ActionDescriptor();
    desc5.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC28'));
    list1.putObject(cTID('SCnc'), desc5);
    var desc6 = new ActionDescriptor();
    desc6.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list1.putObject(cTID('SCnc'), desc6);
    var desc7 = new ActionDescriptor();
    desc7.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list1.putObject(cTID('SCnc'), desc7);
    var desc8 = new ActionDescriptor();
    desc8.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list1.putObject(cTID('SCnc'), desc8);
    desc2.putList(cTID('olNC'), list1);
    desc2.putBoolean(cTID('obIA'), false);
    desc2.putString(cTID('obIP'), "");
    desc2.putEnumerated(cTID('obCS'), cTID('STcs'), cTID('CS01'));
    var list2 = new ActionList();
    var desc9 = new ActionDescriptor();
    desc9.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC01'));
    list2.putObject(cTID('SCnc'), desc9);
    var desc10 = new ActionDescriptor();
    desc10.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC20'));
    list2.putObject(cTID('SCnc'), desc10);
    var desc11 = new ActionDescriptor();
    desc11.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC02'));
    list2.putObject(cTID('SCnc'), desc11);
    var desc12 = new ActionDescriptor();
    desc12.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC19'));
    list2.putObject(cTID('SCnc'), desc12);
    var desc13 = new ActionDescriptor();
    desc13.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC06'));
    list2.putObject(cTID('SCnc'), desc13);
    var desc14 = new ActionDescriptor();
    desc14.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list2.putObject(cTID('SCnc'), desc14);
    var desc15 = new ActionDescriptor();
    desc15.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list2.putObject(cTID('SCnc'), desc15);
    var desc16 = new ActionDescriptor();
    desc16.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list2.putObject(cTID('SCnc'), desc16);
    var desc17 = new ActionDescriptor();
    desc17.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC22'));
    list2.putObject(cTID('SCnc'), desc17);
    desc2.putList(cTID('ovNC'), list2);
    desc2.putBoolean(cTID('ovCM'), false);
    desc2.putBoolean(cTID('ovCW'), false);
    desc2.putBoolean(cTID('ovCU'), true);
    desc2.putBoolean(cTID('ovSF'), true);
    desc2.putBoolean(cTID('ovCB'), true);
    desc2.putString(cTID('ovSN'), "images");
    desc1.putObject(cTID('Usng'), sTID("SaveForWeb"), desc2);
    executeAction(cTID('Expr'), desc1, dialogMode);
  };

  // Hide
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Ortho_view");
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Hd  '), desc1, dialogMode);
  };

  // Show
  function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Perspective_view");
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Shw '), desc1, dialogMode);
  };

  // Export
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Op  '), cTID('SWOp'), cTID('OpSa'));
    desc2.putBoolean(cTID('DIDr'), true);
    desc2.putPath(cTID('In  '), new File("~/Desktop/File or Folder not found"));
    desc2.putString(cTID('PthN'), "/Volumes/Macbook_Old/EasyMockAI/PhoneCase2-1.jpg");
    desc2.putString(cTID('ovFN'), "PhoneCase2-1.jpg");
    desc2.putEnumerated(cTID('Fmt '), cTID('IRFm'), sTID("JPEGFormat"));
    desc2.putBoolean(cTID('Intr'), false);
    desc2.putInteger(cTID('Qlty'), 27);
    desc2.putInteger(cTID('QChS'), 0);
    desc2.putInteger(cTID('QCUI'), 0);
    desc2.putBoolean(cTID('QChT'), false);
    desc2.putBoolean(cTID('QChV'), false);
    desc2.putBoolean(cTID('Optm'), true);
    desc2.putInteger(cTID('Pass'), 1);
    desc2.putDouble(cTID('blur'), 0);
    desc2.putBoolean(cTID('Mtt '), true);
    desc2.putBoolean(cTID('EICC'), false);
    desc2.putInteger(cTID('MttR'), 255);
    desc2.putInteger(cTID('MttG'), 255);
    desc2.putInteger(cTID('MttB'), 255);
    desc2.putBoolean(cTID('SHTM'), false);
    desc2.putBoolean(cTID('SImg'), true);
    desc2.putEnumerated(cTID('SWsl'), cTID('STsl'), cTID('SLAl'));
    desc2.putEnumerated(cTID('SWch'), cTID('STch'), cTID('CHsR'));
    desc2.putEnumerated(cTID('SWmd'), cTID('STmd'), cTID('MDCp'));
    desc2.putBoolean(cTID('ohXH'), false);
    desc2.putBoolean(cTID('ohIC'), true);
    desc2.putBoolean(cTID('ohAA'), true);
    desc2.putBoolean(cTID('ohQA'), true);
    desc2.putBoolean(cTID('ohCA'), false);
    desc2.putBoolean(cTID('ohIZ'), true);
    desc2.putEnumerated(cTID('ohTC'), cTID('SToc'), cTID('OC03'));
    desc2.putEnumerated(cTID('ohAC'), cTID('SToc'), cTID('OC03'));
    desc2.putInteger(cTID('ohIn'), -1);
    desc2.putEnumerated(cTID('ohLE'), cTID('STle'), cTID('LE03'));
    desc2.putEnumerated(cTID('ohEn'), cTID('STen'), cTID('EN00'));
    desc2.putBoolean(cTID('olCS'), false);
    desc2.putEnumerated(cTID('olEC'), cTID('STst'), cTID('ST00'));
    desc2.putEnumerated(cTID('olWH'), cTID('STwh'), cTID('WH01'));
    desc2.putEnumerated(cTID('olSV'), cTID('STsp'), cTID('SP04'));
    desc2.putEnumerated(cTID('olSH'), cTID('STsp'), cTID('SP04'));
    var list1 = new ActionList();
    var desc3 = new ActionDescriptor();
    desc3.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC00'));
    list1.putObject(cTID('SCnc'), desc3);
    var desc4 = new ActionDescriptor();
    desc4.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC19'));
    list1.putObject(cTID('SCnc'), desc4);
    var desc5 = new ActionDescriptor();
    desc5.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC28'));
    list1.putObject(cTID('SCnc'), desc5);
    var desc6 = new ActionDescriptor();
    desc6.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list1.putObject(cTID('SCnc'), desc6);
    var desc7 = new ActionDescriptor();
    desc7.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list1.putObject(cTID('SCnc'), desc7);
    var desc8 = new ActionDescriptor();
    desc8.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list1.putObject(cTID('SCnc'), desc8);
    desc2.putList(cTID('olNC'), list1);
    desc2.putBoolean(cTID('obIA'), false);
    desc2.putString(cTID('obIP'), "");
    desc2.putEnumerated(cTID('obCS'), cTID('STcs'), cTID('CS01'));
    var list2 = new ActionList();
    var desc9 = new ActionDescriptor();
    desc9.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC01'));
    list2.putObject(cTID('SCnc'), desc9);
    var desc10 = new ActionDescriptor();
    desc10.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC20'));
    list2.putObject(cTID('SCnc'), desc10);
    var desc11 = new ActionDescriptor();
    desc11.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC02'));
    list2.putObject(cTID('SCnc'), desc11);
    var desc12 = new ActionDescriptor();
    desc12.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC19'));
    list2.putObject(cTID('SCnc'), desc12);
    var desc13 = new ActionDescriptor();
    desc13.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC06'));
    list2.putObject(cTID('SCnc'), desc13);
    var desc14 = new ActionDescriptor();
    desc14.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list2.putObject(cTID('SCnc'), desc14);
    var desc15 = new ActionDescriptor();
    desc15.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list2.putObject(cTID('SCnc'), desc15);
    var desc16 = new ActionDescriptor();
    desc16.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list2.putObject(cTID('SCnc'), desc16);
    var desc17 = new ActionDescriptor();
    desc17.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC22'));
    list2.putObject(cTID('SCnc'), desc17);
    desc2.putList(cTID('ovNC'), list2);
    desc2.putBoolean(cTID('ovCM'), false);
    desc2.putBoolean(cTID('ovCW'), false);
    desc2.putBoolean(cTID('ovCU'), true);
    desc2.putBoolean(cTID('ovSF'), true);
    desc2.putBoolean(cTID('ovCB'), true);
    desc2.putString(cTID('ovSN'), "images");
    desc1.putObject(cTID('Usng'), sTID("SaveForWeb"), desc2);
    executeAction(cTID('Expr'), desc1, dialogMode);
  };

  step1();      // Export
  step2();      // Hide
  step3();      // Show
  step4();      // Export
  step5();      // Hide
  step6();      // Show
  step7();      // Edit Contents
  step8();      // Hide
  step9();      // Close
  step10();      // Export
  step11();      // Hide
  step12();      // Show
  step13();      // Export
};



//=========================================
//                    Action1.main
//=========================================
//

Action1.main = function () {
  Action1();
};

Action1.main();

// EOF

"Action1.jsx"
// EOF
# Compiled class file
*.class

# Log file
*.log

# BlueJ files
*.ctxt

# Mobile Tools for Java (J2ME)
.mtj.tmp/

# Package Files #
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar

# virtual machine crash logs, see http://www.java.com/en/download/help/error_hotspot.xml
hs_err_pid*
replay_pid*
