{pkgs}: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_20
    pkgs.bun
  ];
  idx.extensions = [
    "miguelsolorio.fluent-icons"
    "PKief.material-icon-theme"
    "streetsidesoftware.code-spell-checker"
    "streetsidesoftware.code-spell-checker-spanish"
    "DaltonMenezes.aura-theme"
    "formulahendry.auto-close-tag"
    "formulahendry.auto-rename-tag"
    "aaron-bond.better-comments"
    "dotenv.dotenv-vscode"
    "usernamehw.errorlens"
    "dbaeumer.vscode-eslint"
    "wix.vscode-import-cost"
    "christian-kohler.path-intellisense"
    "esbenp.prettier-vscode"
    "YoavBls.pretty-ts-errors"
    "bradlc.vscode-tailwindcss"
    "meganrogge.template-string-converter"
    "Gruntfuggly.todo-tree"
    "shardulm94.trailing-spaces"
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "bun"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}