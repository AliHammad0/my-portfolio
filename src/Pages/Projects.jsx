
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import {
  FaExternalLinkAlt,
  FaLaptopCode,
  FaGlobe,
  FaPause,
  FaPlay
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const scenes = [
  {
    label: 'FIRST MEETING',
    title: 'A New Client Walks In',
    description: 'Every successful project starts with a conversation. I meet the client, introduce myself and understand their business goals.',
    clientMessage: 'Hello! I have an idea for my business.',
    developerMessage: 'Welcome! I would love to hear about it.',
    action: 'handshake'
  },
  {
    label: 'PROJECT DISCUSSION',
    title: 'Understanding the Requirements',
    description: 'We discuss website structure, business requirements, target audience and the features needed.',
    clientMessage: 'I need a professional business website.',
    developerMessage: 'Let’s discuss the design and features.',
    action: 'discussion'
  },
  {
    label: 'BUDGET & QUOTATION',
    title: 'Planning the Project Budget',
    description: 'We discuss the project scope, estimated cost, delivery timeline and services included in the quotation.',
    clientMessage: 'Can you share the project price?',
    developerMessage: 'Of course. Here is the quotation.',
    action: 'quotation'
  },
  {
    label: 'APPROVAL & DEVELOPMENT',
    title: 'Turning the Idea Into Reality',
    description: 'Once the client approves the proposal, I start designing and developing the website.',
    clientMessage: 'Everything looks good. Let’s begin!',
    developerMessage: 'Perfect! I am starting development.',
    action: 'development'
  },
  {
    label: 'FINAL DELIVERY',
    title: 'Presenting the Finished Website',
    description: 'The website is completed, presented to the client and prepared for final delivery.',
    clientMessage: 'This looks exactly what I wanted!',
    developerMessage: 'Your website is ready. Thank you!',
    action: 'delivery'
  }
]

const projects = [
  {
    title: 'The Shoe Spot',
    category: 'Footwear eCommerce',
    description: 'A modern footwear eCommerce platform with product browsing, shopping cart, wishlist and checkout functionality.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgRGqVTeQkUzai-IxJ2WANLaT44kb0oatyELdoYu-QjA&s=10',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    liveLink: 'https://frontend-mocha-theta-43.vercel.app/'
  },
  {
    title: 'Trade Rank Media',
    category: 'Digital Marketing Website',
    description: 'A professional digital marketing agency website showcasing web development, guest posting, link building and digital services.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyvErr0qMRlBxdnmW3zq_ZIOANBvvKS5bX7ZQQumDPeA&s=10',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    liveLink: 'https://trade-rank-media.vercel.app/'
  },
  {
    title: 'Soleora Clothing Brand',
    category: 'Fashion & Clothing',
    description: 'A modern clothing brand website with a clean shopping experience and premium visual presentation.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeWk6lW-B-hv1ZWyf8uAA8nbo_9F-9j6zheLWobvV54Q&s=10',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    liveLink: 'https://soleora-clothing-brand.vercel.app/'
  },
  {
    title: 'Hammad Foods',
    category: 'Restaurant & Food',
    description: 'A food ordering website featuring menu presentation, food products and a modern online ordering experience.',
    image: 'https://g-cdn.blinkco.io/ordering-system/55363/dish_image/1761382396626.jpg',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    liveLink: 'https://hammad-foods.vercel.app/'
  },
  {
    title: 'Mobile Spot',
    category: 'Mobile & Electronics',
    description: 'A responsive mobile store website designed to present smartphones and electronic products in a modern layout.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi5YGsPdJwF1uDRvGulWD8UelLaxUyUSN7K8n-QxvxjA&s=10',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    liveLink: 'https://mobile-spot-seven.vercel.app/'
  }
]

const material = (color, roughness = 0.8) =>
  new THREE.MeshStandardMaterial({ color, roughness })

const createHuman = (isClient) => {
  const group = new THREE.Group()

  const skin = material(isClient ? '#bd8568' : '#d49b78')
  const shirt = material(isClient ? '#34445a' : '#b18b5c')
  const trousers = material(isClient ? '#273447' : '#292929')
  const hair = material(isClient ? '#29221f' : '#332820')
  const shoes = material('#171717')
  const white = material('#ffffff')
  const dark = material('#252525')

  const sphere = (parent, x, y, z, sx, sy, sz, mat) => {
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(1, 24, 20),
      mat
    )
    mesh.position.set(x, y, z)
    mesh.scale.set(sx, sy, sz)
    mesh.castShadow = true
    parent.add(mesh)
    return mesh
  }

  const cylinder = (parent, x, y, z, top, bottom, height, mat) => {
    const mesh = new THREE.Mesh(
      new THREE.CylinderGeometry(top, bottom, height, 20),
      mat
    )
    mesh.position.set(x, y, z)
    mesh.castShadow = true
    parent.add(mesh)
    return mesh
  }

  cylinder(group, -0.2, 0.48, 0, 0.13, 0.16, 0.85, trousers)
  cylinder(group, 0.2, 0.48, 0, 0.13, 0.16, 0.85, trousers)

  sphere(group, -0.2, 0.08, 0.1, 0.22, 0.11, 0.34, shoes)
  sphere(group, 0.2, 0.08, 0.1, 0.22, 0.11, 0.34, shoes)

  cylinder(group, 0, 1.55, 0, 0.36, 0.43, 1.05, shirt)
  cylinder(group, 0, 2.12, 0, 0.13, 0.13, 0.25, skin)

  const head = new THREE.Group()
  head.position.set(0, 2.48, 0)
  group.add(head)

  sphere(head, 0, 0, 0, 0.36, 0.43, 0.32, skin)
  sphere(head, 0, 0.25, -0.025, 0.37, 0.24, 0.33, hair)
  sphere(head, -0.28, 0.12, 0.02, 0.1, 0.22, 0.26, hair)
  sphere(head, 0.28, 0.12, 0.02, 0.1, 0.22, 0.26, hair)

  sphere(head, -0.13, 0.04, 0.29, 0.045, 0.055, 0.025, white)
  sphere(head, 0.13, 0.04, 0.29, 0.045, 0.055, 0.025, white)
  sphere(head, -0.13, 0.04, 0.315, 0.021, 0.028, 0.015, dark)
  sphere(head, 0.13, 0.04, 0.315, 0.021, 0.028, 0.015, dark)
  sphere(head, 0, -0.055, 0.31, 0.045, 0.07, 0.045, skin)

  const mouth = new THREE.Mesh(
    new THREE.SphereGeometry(0.055, 16, 12),
    material('#633e32')
  )
  mouth.position.set(0, -0.16, 0.307)
  mouth.scale.set(1, 0.18, 0.35)
  head.add(mouth)

  const createArm = (side) => {
    const shoulder = new THREE.Group()
    shoulder.position.set(side * 0.37, 1.95, 0)
    group.add(shoulder)

    cylinder(shoulder, 0, -0.34, 0, 0.105, 0.13, 0.72, shirt)

    const elbow = new THREE.Group()
    elbow.position.set(0, -0.68, 0)
    shoulder.add(elbow)

    cylinder(elbow, 0, -0.3, 0, 0.085, 0.105, 0.62, shirt)
    sphere(elbow, 0, -0.64, 0, 0.105, 0.11, 0.105, skin)

    return { shoulder, elbow }
  }

  return {
    group,
    head,
    mouth,
    leftArm: createArm(-1),
    rightArm: createArm(1)
  }
}

const createPresentationTexture = () => {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 300

  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#171717'
  ctx.fillRect(0, 0, 512, 300)

  ctx.fillStyle = '#c5a477'
  ctx.font = 'bold 24px Arial'
  ctx.fillText('PROJECT PRESENTATION', 35, 55)

  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 34px Arial'
  ctx.fillText('Your Website', 35, 125)

  ctx.fillStyle = '#d1d1d1'
  ctx.font = '22px Arial'
  ctx.fillText('Design  •  Development  •  Delivery', 35, 185)

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

const ProjectIllustration = ({ scene }) => {
  const mountRef = useRef(null)
  const sceneRef = useRef(scene)

  useEffect(() => {
    sceneRef.current = scene
  }, [scene])

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    let frame
    let observer

    const world = new THREE.Scene()
    world.background = new THREE.Color('#e9e4dc')

    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100)
    camera.position.set(0, 4.1, 10.5)
    camera.lookAt(0, 1.45, 0)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false
    })

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.1

    container.appendChild(renderer.domElement)

    world.add(new THREE.HemisphereLight('#ffffff', '#b6a58f', 2))

    const mainLight = new THREE.DirectionalLight('#ffffff', 3)
    mainLight.position.set(-4, 8, 6)
    mainLight.castShadow = true
    mainLight.shadow.mapSize.set(1024, 1024)
    world.add(mainLight)

    const fillLight = new THREE.PointLight('#e8d5b7', 35)
    fillLight.position.set(4, 4, 3)
    world.add(fillLight)

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(30, 30),
      material('#cfc4b5')
    )
    floor.rotation.x = -Math.PI / 2
    floor.position.y = -0.03
    floor.receiveShadow = true
    world.add(floor)

    const wall = new THREE.Mesh(
      new THREE.BoxGeometry(12, 7, 0.2),
      material('#f5f1e9')
    )
    wall.position.set(0, 3.2, -2.6)
    world.add(wall)

    const windowGlass = new THREE.Mesh(
      new THREE.BoxGeometry(2.7, 2.2, 0.05),
      material('#c5d9df', 0.3)
    )
    windowGlass.position.set(-3.5, 3.2, -2.45)
    world.add(windowGlass)

    const client = createHuman(true)
    const developer = createHuman(false)

    client.group.position.set(-2.25, 0, 0.15)
    developer.group.position.set(2.25, 0, 0.15)
    client.group.rotation.y = 0.2
    developer.group.rotation.y = -0.2

    world.add(client.group)
    world.add(developer.group)

    const tableTop = new THREE.Mesh(
      new THREE.BoxGeometry(3.5, 0.16, 1.35),
      material('#795b3e')
    )
    tableTop.position.set(0, 1.05, 0)
    tableTop.castShadow = true
    world.add(tableTop)

    ;[-1.45, 1.45].forEach((x) => {
      const leg = new THREE.Mesh(
        new THREE.BoxGeometry(0.14, 1.05, 0.14),
        material('#51402e')
      )
      leg.position.set(x, 0.5, 0)
      world.add(leg)
    })

    const laptopBody = new THREE.Mesh(
      new THREE.BoxGeometry(1.15, 0.07, 0.75),
      material('#353535')
    )
    laptopBody.position.set(0, 1.18, -0.12)
    world.add(laptopBody)

    const laptopScreen = new THREE.Mesh(
      new THREE.BoxGeometry(1.1, 0.78, 0.06),
      material('#242424')
    )
    laptopScreen.position.set(0, 1.58, -0.43)
    world.add(laptopScreen)

    const laptopDisplay = new THREE.Mesh(
      new THREE.PlaneGeometry(0.98, 0.65),
      material('#e9e3d9')
    )
    laptopDisplay.position.set(0, 1.58, -0.395)
    world.add(laptopDisplay)

    const screenLines = new THREE.Group()
    screenLines.position.set(0, 1.58, -0.38)
    world.add(screenLines)

    for (let i = 0; i < 4; i++) {
      const line = new THREE.Mesh(
        new THREE.BoxGeometry(0.65 - i * 0.08, 0.025, 0.01),
        material('#b18b5c')
      )
      line.position.set(-0.05, 0.18 - i * 0.12, 0)
      screenLines.add(line)
    }

    const presentation = new THREE.Mesh(
      new THREE.PlaneGeometry(2.5, 1.45),
      new THREE.MeshBasicMaterial({ map: createPresentationTexture() })
    )
    presentation.position.set(0, 3.1, -1.9)
    presentation.visible = false
    world.add(presentation)

    const approval = new THREE.Group()

    const approvalCircle = new THREE.Mesh(
      new THREE.CircleGeometry(0.45, 40),
      material('#b18b5c')
    )
    approval.add(approvalCircle)

    const check = new THREE.Mesh(
      new THREE.BoxGeometry(0.38, 0.06, 0.03),
      material('#ffffff')
    )
    check.rotation.z = -0.7
    check.position.set(0, 0.02, 0.04)
    approval.add(check)

    const checkPart = new THREE.Mesh(
      new THREE.BoxGeometry(0.17, 0.06, 0.03),
      material('#ffffff')
    )
    checkPart.rotation.z = 0.75
    checkPart.position.set(-0.12, -0.1, 0.04)
    approval.add(checkPart)

    approval.position.set(0, 2.55, 0.5)
    approval.visible = false
    world.add(approval)

    const resize = () => {
      const width = container.clientWidth
      const height = container.clientHeight || 480
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    observer = new ResizeObserver(resize)
    observer.observe(container)
    resize()

    const clock = new THREE.Clock()

    const animate = () => {
      frame = requestAnimationFrame(animate)

      const elapsed = clock.getElapsedTime()
      const action = scenes[sceneRef.current].action

      client.group.position.y = Math.sin(elapsed * 1.8) * 0.025
      developer.group.position.y = Math.sin(elapsed * 1.8 + 1) * 0.025

      client.head.rotation.y = Math.sin(elapsed * 1.1) * 0.06
      developer.head.rotation.y = Math.sin(elapsed * 1.1 + 1) * 0.06

      client.head.rotation.x = Math.sin(elapsed * 1.5) * 0.025
      developer.head.rotation.x = Math.sin(elapsed * 1.5 + 1) * 0.025

      const talking = Math.sin(elapsed * 9) > 0.35 ? 1 : 0

      client.mouth.scale.y =
        (sceneRef.current === 0 || sceneRef.current === 2)
          ? 0.18 + talking * 0.8
          : 0.18

      developer.mouth.scale.y =
        (sceneRef.current === 1 || sceneRef.current === 3 || sceneRef.current === 4)
          ? 0.18 + talking * 0.8
          : 0.18

      const clientLeft = client.leftArm.shoulder
      const clientRight = client.rightArm.shoulder
      const developerLeft = developer.leftArm.shoulder
      const developerRight = developer.rightArm.shoulder

      clientLeft.rotation.z = -0.05
      clientRight.rotation.z = 0.05
      developerLeft.rotation.z = -0.05
      developerRight.rotation.z = 0.05

      client.leftArm.elbow.rotation.z = 0
      client.rightArm.elbow.rotation.z = 0
      developer.leftArm.elbow.rotation.z = 0
      developer.rightArm.elbow.rotation.z = 0

      if (action === 'handshake') {
        clientRight.rotation.z = 1.05 + Math.sin(elapsed * 5) * 0.09
        developerLeft.rotation.z = -1.05 - Math.sin(elapsed * 5) * 0.09
        client.rightArm.elbow.rotation.z = -0.25
        developer.leftArm.elbow.rotation.z = 0.25
      }

      if (action === 'discussion') {
        clientRight.rotation.z = 0.7 + Math.sin(elapsed * 2.5) * 0.15
        developerLeft.rotation.z = -0.8 + Math.sin(elapsed * 2.5) * 0.15
        client.rightArm.elbow.rotation.z = -0.5
        developer.leftArm.elbow.rotation.z = 0.45
      }

      if (action === 'quotation') {
        developerLeft.rotation.z = -1.15 + Math.sin(elapsed * 2) * 0.08
        developer.leftArm.elbow.rotation.z = 0.55
        clientRight.rotation.z = 0.45
        client.rightArm.elbow.rotation.z = -0.4
      }

      if (action === 'development') {
        clientRight.rotation.z = 0.9
        client.rightArm.elbow.rotation.z = -0.5
        developerLeft.rotation.z = -0.35
        developerRight.rotation.z = 0.35
        developer.leftArm.elbow.rotation.z = 0.4
        developer.rightArm.elbow.rotation.z = -0.4
      }

      if (action === 'delivery') {
        developerLeft.rotation.z = -1.1
        developer.leftArm.elbow.rotation.z = 0.45
        clientRight.rotation.z = 0.8
        client.rightArm.elbow.rotation.z = -0.45
      }

      presentation.visible = action === 'quotation' || action === 'delivery'
      approval.visible = action === 'development'

      if (action === 'quotation') {
        presentation.position.y = 3.1 + Math.sin(elapsed * 2) * 0.035
      }

      if (action === 'development') {
        approval.scale.setScalar(1 + Math.sin(elapsed * 3) * 0.04)
      }

      renderer.render(world, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(frame)
      observer?.disconnect()

      world.traverse((object) => {
        object.geometry?.dispose()

        if (object.material) {
          const materials = Array.isArray(object.material)
            ? object.material
            : [object.material]

          materials.forEach((mat) => {
            mat.map?.dispose()
            mat.dispose()
          })
        }
      })

      renderer.dispose()

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div className="relative h-[340px] w-full overflow-hidden bg-[#e9e4dc] sm:h-[430px] md:h-[520px]">
      <div ref={mountRef} className="absolute inset-0 h-full w-full" />

      <div className="absolute bottom-4 left-4 z-10 bg-white/90 px-4 py-2 shadow-md backdrop-blur-sm">
        <p className="text-[10px] font-bold tracking-[2px] text-[#a17b4e]">
          FMEOS PK
        </p>
        <p className="text-xs font-semibold text-[#242424]">
          Client Project Journey
        </p>
      </div>

      <div className="absolute right-4 top-4 z-10 bg-[#171717]/90 px-4 py-2 text-white">
        <p className="text-[10px] font-bold tracking-[2px]">
          3D EXPERIENCE
        </p>
      </div>
    </div>
  )
}

const Projects = () => {
  const [activeScene, setActiveScene] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setActiveScene((previous) => (previous + 1) % scenes.length)
    }, 6500)

    return () => clearInterval(interval)
  }, [isPlaying])

  const changeScene = (index) => {
    setActiveScene((index + scenes.length) % scenes.length)
  }

  return (
    <main className="bg-white font-[Arial] text-[#202020]">

      <section className="bg-[#171717] py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-6 text-xs font-bold uppercase tracking-[4px] text-[#c5a477]">
            My Portfolio
          </p>

          <h1 className="mb-8 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
            Work That Speaks for Itself.
          </h1>

          <p className="max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            Explore selected projects showcasing modern design,
            smart development and practical digital solutions
            built to help businesses grow.
          </p>

          <div className="mt-12 flex flex-wrap gap-8">
            <div>
              <h3 className="text-3xl font-bold text-[#c5a477]">
                {projects.length}+
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Featured Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#c5a477]">
                100%
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Project Focus
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f3ef] px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="mb-14 text-center">
            <p className="mb-5 text-xs font-bold uppercase tracking-[4px] text-[#b18b5c]">
              The Client Experience
            </p>

            <h2 className="mb-5 text-3xl font-bold md:text-5xl">
              From Meeting to Making It Happen.
            </h2>

            <p className="mx-auto max-w-2xl leading-7 text-gray-500">
              See how an idea becomes a complete digital project,
              from the first meeting to final website delivery.
            </p>
          </div>

          <div className="border border-[#e8e1d7] bg-white shadow-xl">
            <ProjectIllustration scene={activeScene} />

            <div className="px-5 py-8 md:px-10">

              <div className="mb-8 grid gap-4 md:grid-cols-2">
                <div className="border-l-4 border-[#b18b5c] bg-[#f5f1eb] p-5">
                  <p className="mb-2 text-[10px] font-bold tracking-[2px] text-[#a17b4e]">
                    CLIENT
                  </p>
                  <p className="text-sm font-semibold md:text-base">
                    {scenes[activeScene].clientMessage}
                  </p>
                </div>

                <div className="border-l-4 border-[#c5a477] bg-[#171717] p-5 text-white">
                  <p className="mb-2 text-[10px] font-bold tracking-[2px] text-[#c5a477]">
                    DEVELOPER
                  </p>
                  <p className="text-sm font-semibold md:text-base">
                    {scenes[activeScene].developerMessage}
                  </p>
                </div>
              </div>

              <div className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-center">
                <div>
                  <p className="mb-3 text-xs font-bold tracking-[3px] text-[#b18b5c]">
                    STEP 0{activeScene + 1} — {scenes[activeScene].label}
                  </p>

                  <h3 className="text-2xl font-bold md:text-3xl">
                    {scenes[activeScene].title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500">
                    {scenes[activeScene].description}
                  </p>
                </div>

                <div className="flex shrink-0 flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    aria-label={isPlaying ? 'Pause animation' : 'Play animation'}
                    className="flex h-12 w-12 items-center justify-center border border-gray-300 transition hover:bg-[#f5f1eb]"
                  >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                  </button>

                  <button
                    type="button"
                    onClick={() => changeScene(activeScene - 1)}
                    className="border border-gray-300 px-5 py-3 text-sm font-bold transition hover:bg-[#f5f1eb]"
                  >
                    Previous
                  </button>

                  <button
                    type="button"
                    onClick={() => changeScene(activeScene + 1)}
                    className="bg-[#171717] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#b18b5c]"
                  >
                    Next
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {scenes.map((item, index) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => changeScene(index)}
                    className="text-left"
                  >
                    <div
                      className={`mb-3 h-1.5 transition ${
                        activeScene === index
                          ? 'bg-[#b18b5c]'
                          : 'bg-gray-200'
                      }`}
                    />

                    <span
                      className={`text-[9px] font-bold sm:text-xs ${
                        activeScene === index
                          ? 'text-[#b18b5c]'
                          : 'text-gray-400'
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#b18b5c]">
                Selected Work
              </p>

              <h2 className="text-3xl font-bold md:text-5xl">
                Projects I've Built.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-gray-500">
              Every project is an opportunity to create something
              useful, functional and visually appealing.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden border border-gray-200 bg-white transition duration-500 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Full image without cropping */}
                <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-[#f5f3ef] p-3 sm:p-5">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain object-center transition duration-500 group-hover:scale-[1.02]"
                  />

                  <span className="absolute left-5 top-5 bg-white px-4 py-2 text-xs font-bold text-[#171717] shadow-sm">
                    {project.category}
                  </span>
                </div>

                <div className="p-7 md:p-9">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-bold">
                      {project.title}
                    </h3>

                    <FaLaptopCode className="shrink-0 text-xl text-[#b18b5c]" />
                  </div>

                  <p className="mb-7 text-sm leading-7 text-gray-500">
                    {project.description}
                  </p>

                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="bg-[#f5f1eb] px-3 py-2 text-xs text-gray-700"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border-b-2 border-[#c5a477] pb-2 text-sm font-bold transition hover:text-[#b18b5c]"
                  >
                    Visit Live Website
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f1eb] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FaGlobe className="mx-auto mb-7 text-4xl text-[#b18b5c]" />

          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Have a Project in Mind?
          </h2>

          <p className="mb-9 leading-8 text-gray-600">
            Let's create something valuable for your business.
            Share your idea and I'll help you turn it into reality.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#171717] px-9 py-4 text-sm font-bold text-white transition hover:bg-[#b18b5c]"
          >
            Start Your Project
            <FaExternalLinkAlt className="text-xs" />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Projects
