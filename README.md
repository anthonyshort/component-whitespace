# component-whitespace

Compile styles using css-whitespace.

## Installation

```
npm install component-whitespace
```

## Usage

```
component build --use component-whitespace
```

Add your files to the `styles` section of your `component.json`

```
{
  "name": "foo",
  "path": ["local"],
  "styles": ["index.styl"]
}
```

Now this:

```
.foo
  .bar
    color: red
```

Will be converted to this:

```css
.foo .bar {
  color: red;
}
```