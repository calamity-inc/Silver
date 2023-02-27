# Silver

A website design framework made for dark mode.

[See what Silver looks like](https://see.slv.do)

## Usage

```HTML
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://slv.do/base.css">
```

Additionally, if you want the navbar:

```HTML
<link rel="stylesheet" href="https://slv.do/navbar.css">
<script src="https://slv.do/navbar.js"></script>
```

## Config

By default, Silver shows a warning when Dark Reader is enabled since it has no considerations for websites already being in dark mode. You can disable this by adding the `slv-ignore-darkreader` class to your `body` tag.
