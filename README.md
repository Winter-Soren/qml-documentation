# Quantum Machine Learning Documentation

This repository contains comprehensive documentation on Quantum Machine Learning (QML), aimed at beginners and practitioners interested in exploring the intersection of quantum computing and machine learning.

## Table of Contents

1. [How to get started with the documentation](#how-to-get-started-with-the-documentation)
2. [Contribution Guidelines](./CONTRIBUTING.md)
3. [Status of the Project](#status-of-the-project)
4. [Installation](#installation)
5. [Project Structure](#project-structure)
6. [License](#license)

## How to get started with the documentation

When you go to the [live website](https://quantummlhandbook.vercel.app/) or local server [after installation](#installation), you will see the following tabs in the navigation bar:

-   **Home**: This is the landing page of the documentation. It contains a brief overview of the documentation and the project.

`Under the Documentation drop down in navigation bar:`

-   **Basics**: This section contains the basics of quantum computing and quantum mechanics. It is aimed at beginners who are new to quantum computing and quantum mechanics. The contents are marked using 1, 2, 3, etc. to indicate the order of learning the topics

-   **Gates and Circuits**: This section contains the basics of quantum gates and circuits. It is aimed at beginners who are new to quantum gates and circuits.

## Status of the Project

-   [x] The framework of the documentation is ready.
-   [x] Overview.
-   [x] General issues in QC.
-   [x] Notations and representations.
-   [x] Fundamentals of Quantum Mechanics.
    -   [x] Qubits.
    -   [x] Superposition.
    -   [x] Entanglement.
    -   [x] Bloch Sphere.
-   [ ] Understanding Quantum gates (analogy with classical gates).
    -   [ ] Single qubit gates.
        -   [x] Pauli gates.
        -   [x] Hadamard gate.
        -   [x] Phase gate.
        -   [ ] T gate.
        -   [ ] S gate.
        -   [ ] U gate.
    -   [ ] Multi qubit gates.
        -   [ ] CNOT gate.
        -   [ ] SWAP gate.
        -   [ ] Toffoli gate.
        -   [ ] Fredkin gate.
        -   [ ] Controlled U gate.
        -   [ ] Controlled phase gate.
    -   [ ] Universal gates.
        -   [ ] X, Y, Z gates.
        -   [ ] Hadamard gate.
        -   [ ] CNOT gate.
        -   [ ] Toffoli gate.
        -   [ ] SWAP gate.
        -   [ ] Fredkin gate.
-   [ ] Quantum circuits.
    -   [ ] How to construct any circuit.
-   [ ] Quantum ML algorithms (algos like SVM, KNN etc).
-   [ ] Quantum Neural Networks.
-   [ ] Quantum Convolutional Neural Networks.
-   [ ] Quantum Generative Adversarial Networks.
-   [ ] Quantum Reinforcement Learning.
-   [ ] Quantum Transfer Learning.
-   [ ] Quantum Autoencoders.

## Installation

before you start, make sure you have the following installed:

-   Node v18.x or higher

install node_modules:

```bash
npm install
```

to run the documentation locally, run the following command:

```bash
npm start
```

now you can access the documentation at `http://localhost:3000/` in your browser.

## Project Structure

The project structure is as follows:

```
├───.github
│   ├───ISSUE_TEMPLATE
│   └───workflows
├───docs
│   ├───basics
│   ├───gates-and-circuits
│
├───src
│   ├───components
│   ├───pages
│   ├───css
│   ├───data
│   ├───sections
│   ├───theme
├───static
└───mkdocs.yml
```

this is standard file and folder structure of docusaurus v2. the static folder contains the images and after building the static folder will remain the same. the docs folder contains the markdown files for the documentation. the src folder contains the source code for the documentation.

## License

MIT License
