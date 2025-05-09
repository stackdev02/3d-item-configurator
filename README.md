# 3D Item Configurator

This project was made with GLTF models, Threejs, 3-Fiber, 3-drei and React!

[Live Demo](https://3d-item-configurator.vercel.app/)

![Demo](/src/img/demo.png)

## About the Project

An interactive 3D product visualizer with color picker built with Three.js, React Three Fiber, and React. It is a useful tool for e-commerce websites or other online platforms that sell physical products. It allows users to view a 3D model of the product from different angles and customize its appearance by changing the color and other visual aspects.

## Implementation Details

### Scene Setup
To build this tool, I started by setting up a basic 3D scene using Three.js and React Three Fiber. This involves creating a renderer, camera, and scene, as well as adding lighting and any necessary materials or textures.

### 3D Models
Next, I added the 3D models to the scene. Adjusted the scale and rigged the materials to be grouped appropriately with the mesh parts. The models can be created from scratch or imported from a 3D modeling software such as Blender.

### Color Customization
To allow the user to customize the appearance of the product, I then implemented a color picker UI element that allows the user to select different parts of the mesh and edit the visual options. Then update the material of the product model based on the user's selection.

### User Interface
Finally, I added any desired visual effects, as well as any necessary user interface elements, such as buttons to rotate the model or zoom in and out.

## Features

- Interactive 3D model viewing
- Real-time color customization
- Multiple product models
- Orbit controls for model rotation
- Zoom in/out functionality
- Realistic lighting and shadows
- Responsive design

## Getting Started

### Prerequisites
- Node.js
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/stackdev02/3d-product-configurator.git
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Technologies Used

- Three.js
- React Three Fiber
- React Three Drei
- React
- Valtio (State Management)
- React Colorful (Color Picker)
- SASS

## Conclusion

Overall, an interactive 3D product visualizer with color picker built with Three.js, React Three Fiber, and React can be a useful and engaging tool for online shopping platforms, allowing users to get a better sense of the appearance and dimensions of a product before purchasing.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.