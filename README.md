# Tikui documentation

This is the official Tikui documentation module.


## Create a documentation module

If you want to create your own module, please name it `tikuidoc-$MODULE_NAME` where `MODULE_NAME` is the name of your module.

Then you can clone this module as a reference and change files you want (don't forget to change `package.json` to make your style and then you should publish it on the official node package registry using `npm publish`.

## Consume a tikui module

To consume a module, you should install it on your Tikui project using the latest version from `tikui/tikui` and then you have to edit the `tikuiconfig.json` to set the documentation name like your `$MODULE_NAME`.

Here is an example for a module named `tikuidoc-my-custom-module`:

```json
{
  "documentation": "my-custom-module"
}
```

Then you can do exactly what you do with a standard Tikui project.

