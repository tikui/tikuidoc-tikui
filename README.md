# Tikui documentation

This is the official Tikui documentation module.

## Create a documentation module

If you want to create your own module, please name it `tikuidoc-$MODULE_NAME` where `MODULE_NAME` is the name of your module.

Then you can clone this module as a reference and change files you want (don't forget to change `package.json` to make your style and then you should publish it on the official node package registry using `npm publish`.

## Consume a tikui module

To use a module, you should install it on your Tikui project using the latest version from `@tikui/tikui-core` (or by generating it using `@tikui/cli`) and then you have to edit the `tikuiconfig.json` to set the documentation name like your `$MODULE_NAME`.

Here is an example for a module named `tikuidoc-tikui`:

```json
{
  "documentation": "tikui"
}
```

Then you can do exactly what you do with a standard Tikui project.

## About

Initially, Bootstrap was needed to make the documentation work. Now we have a dedicated style but if you still want to use the Bootstrap one, you may need to install `tikuidoc-bootstrap` and change `tikui` by `bootstrap` in your `tikuiconfig.json`.
