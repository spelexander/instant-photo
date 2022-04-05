
# 📷 instant-photo

<img src="./images/example-46mm.png" alt="Example screenshot" width="20%"/>

📸 React component that makes images look like a polaroid picture.

- [Live demo](https://instant-photo.pages.dev/)


```bash
yarn add instant-photo
# or
npm -i instant-photo
```

### Usage

```jsx
import { InstantPhoto } from 'instant-photo';

<InstantPhoto
    image="https://images.unsplash.com/photo-1648142618804-92f908f93c10"
  />
```

Size 'small' or 'large' (defaulting to large)

```jsx
<InstantPhoto
    size="small"
  />
```

Variants '46mm' or '99mm' (defaulting to 46mm)

```jsx
<InstantPhoto
    variant="99mm"
  />
```

Filters 'polaroid' | 'vintage' | 'greyscale' | 'bloom' | 'none' (defaulting to polaroid)

```jsx
<InstantPhoto
    filter="vintage"
  />
```

No image, black placeholder film.

```jsx
<InstantPhoto />
```

For more examples see `src/examples/examples.stories.tsx`
