// Source Code By &copy; Ihsan. Right All Reserved.
var html = "=> HTML 5\n";
css = "=> CSS 3 Native\n";
js = "=> JavaScript Native/Vanilla\n";
textEditor = "=> VSCode\n";
font = "=> Font Awesome\n";
preview = "=> Live Server from Visual Studio Code Extension\n";
statementHtmlPrompt = "HTML"; //['HTML', 'html', 'Html', 'hTmL', 'hTlM', 'HTml', 'hTML', 'HtMl'];
statementJsPrompt = "JS"; //['JS', 'js', 'Js', 'jS', 'jS', 'JS', 'jSS', 'JsS'];
statementCssPrompt = "CSS"; //['CSS', 'css', 'Css', 'cSs', 'csS', 'CSs', 'cSS', 'CsS'];
wrongstatementPrompt = "Input yang kamu masukkan salah!❌\nSilahkan coba lagi.";
wrongNoText = "Input tidak boleh kosong!❌\nSilahkan coba lagi.";
noText = "";
devToolsHtml = [html + textEditor + font + preview];
coba = statementCssPrompt;

//this function button html
function showDevToolsHtml() {
  var cssOrJs = prompt(
    "This is a development tool HTML :\n" +
      devToolsHtml +
      "\nWant to see CSS or JavaScript development? Type 'CSS' or 'JS' (without quotes) ('')."
  );
  if (cssOrJs === null) {
    alert("Okeyyyy✅");
  } else if (
    cssOrJs !== statementHtmlPrompt &&
    cssOrJs !== statementCssPrompt &&
    cssOrJs !== statementJsPrompt
  ) {
    if (cssOrJs === noText) {
      alert(wrongNoText);
      showDevToolsHtml();
    } else {
      alert(wrongstatementPrompt);
      showDevToolsHtml();
    }
  }
  if (cssOrJs === statementJsPrompt) {
    alert(js);
  }
  if (cssOrJs === statementCssPrompt) {
    alert(css);
  }
  if (cssOrJs === statementHtmlPrompt) {
    var ConfirmStatement = confirm(
      "Input cannot be the same!❌\nPlease choose another input."
    );
    if (ConfirmStatement === true) {
      showDevToolsHtml();
    } else {
      alert("Successfully canceled ✅");
    }
  }
}

// this function button css
function showDevToolsCss() {
  var htmlOrJs = prompt(
    "This is a development tool CSS :\n" +
      css +
      "\nWant to see HTML or JavaScript development? Type 'HTML' or 'JS' (without quotes) ('')."
  );
  if (htmlOrJs === null) {
    alert("Okeyyyy✅");
  } else if (
    htmlOrJs !== statementHtmlPrompt &&
    htmlOrJs !== statementCssPrompt &&
    htmlOrJs !== statementJsPrompt
  ) {
    if (htmlOrJs === noText) {
      alert(wrongNoText);
      showDevToolsCss();
    } else {
      alert(wrongstatementPrompt);
      showDevToolsCss();
    }
  }
  if (htmlOrJs === statementJsPrompt) {
    alert(js);
  }
  if (htmlOrJs === statementHtmlPrompt) {
    alert(devToolsHtml);
  }
  if (htmlOrJs === statementCssPrompt) {
    var ConfirmStatement = confirm(
      "Input cannot be the same!❌\nPlease choose another input."
    );
    if (ConfirmStatement === true) {
      showDevToolsCss();
    } else {
      alert("Successfully canceled ✅");
    }
  }
}

// this function button js
function showDevToolsJs() {
  var htmlOrCss = prompt(
    "This is a development tool JavaScript :\n" +
      js +
      "\nWant to see HTML or CSS development? Type 'HTML' or 'CSS' (without quotes) ('')."
  );
  if (htmlOrCss === null) {
    alert("Okeyyyy✅");
  } else if (
    htmlOrCss !== statementHtmlPrompt &&
    htmlOrCss !== statementCssPrompt &&
    htmlOrCss !== statementJsPrompt
  ) {
    if (htmlOrCss === noText) {
      alert(wrongNoText);
      showDevToolsJs();
    } else {
      alert(wrongstatementPrompt);
      showDevToolsJs();
    }
  }
  if (htmlOrCss === statementCssPrompt) {
    alert(css);
  }
  if (htmlOrCss === statementHtmlPrompt) {
    alert(devToolsHtml);
  }
  if (htmlOrCss === statementJsPrompt) {
    var ConfirmStatement = confirm(
      "Input cannot be the same!❌\nPlease choose another input."
    );
    if (ConfirmStatement === true) {
      showDevToolsJs();
    } else {
      alert("Successfully canceled ✅");
    }
  }
}
