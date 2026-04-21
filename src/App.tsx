import { useEffect, useState } from 'react'
import loginSelectImage from './assets/images/登陆选择页.png'
import patientSearchImage from './assets/images/患者查询.png'
import addPatientImage from './assets/images/新增患者1@2x.png'
import healthProfileImage from './assets/images/我的-健康档案@2x.png'
import testRecordImage from './assets/images/检测记录@2x.png'
import uricAcidCollectingImage from './assets/images/自动采集-血尿酸-检测中@2x.png'
import eyeVideoCourseImage from './assets/images/eyesimages/视频课程.png'
import eyeForumImage from './assets/images/eyesimages/学习交流科普一体论坛.png'
import eyeVideoConsultImage from './assets/images/eyesimages/视频咨询.png'
import eyeMessageConsultImage from './assets/images/eyesimages/留言咨询.png'
import eyePatientRecordImage from './assets/images/eyesimages/患者档案管理.png'

const sections = [
  { id: 'about', label: '个人简介' },
  { id: 'projects', label: '项目展示' },
  { id: 'skills', label: '技能展示' },
] as const

const projectList = [
  {
    name: '慢病管理系统',
    summary: '涵盖小程序、医院端SAAS平台、业务运营平台三端，实现慢病管理全业务闭环。',
    stack: ['UniApp', 'Pinia', 'Vue3', 'JavaScript'],
    highlights: ['实现蓝牙设备全生命周期管理', '小程序分包加载优化', '多端适配与权限精细处理'],
    images: [
      {
        src: loginSelectImage,
        caption: '登录选择页：支持多角色登录入口，便于患者、医生和运营侧快速分流。',
      },
      {
        src: patientSearchImage,
        caption: '患者查询页：支持按姓名与条件组合检索，提高门诊场景下的信息定位效率。',
      },
      {
        src: addPatientImage,
        caption: '新增患者页：结构化录入基础信息，减少人工登记错误并提升建档速度。',
      },
      {
        src: healthProfileImage,
        caption: '我的健康档案：集中展示个人健康数据，帮助用户持续追踪慢病指标变化。',
      },
      {
        src: testRecordImage,
        caption: '检测记录页：按时间维度查看历史检测结果，支持后续趋势对比分析。',
      },
      {
        src: uricAcidCollectingImage,
        caption: '自动采集中：实时反馈设备检测状态，增强用户对检测流程的可感知性。',
      },
    ],
  },
  {
    name: '慧眼识微眼底医学影像智能诊断和医疗系统',
    summary: '入选国家级创新创业项目，实现医患实时沟通、影像诊断、报告生成等核心功能。',
    stack: ['Vue3', 'ECharts', 'WebSocket', 'Vite', 'Pinia'],
    highlights: ['WebSocket实现实时视频通话', '大文件切片断点续传', '首屏加载优化'],
    images: [
      {
        src: eyeVideoCourseImage,
        caption: '视频课程：提供眼底健康课程内容，支持患者自助学习与科普教育。',
      },
      {
        src: eyeForumImage,
        caption: '学习交流论坛：集科普、讨论、经验分享于一体，提升患者活跃度与粘性。',
      },
      {
        src: eyeVideoConsultImage,
        caption: '视频咨询：支持医患实时沟通，提升远程问诊效率与服务体验。',
      },
      {
        src: eyeMessageConsultImage,
        caption: '留言咨询：支持非实时问答场景，医生可集中处理患者问题。',
      },
      {
        src: eyePatientRecordImage,
        caption: '患者档案管理：统一管理患者基础信息与就诊记录，便于长期追踪。',
      },
    ],
  },
  {
    name: '智管有方智能排课系统',
    summary: '区级创新创业项目，面向教育机构的智能排课后台，优化排课效率与权限管控。',
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'Ant Design'],
    highlights: ['权限路由动态加载', '组件精准缓存优化', '大数据渲染卡顿解决'],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80',
        caption: '后台管理主页面展示。',
      },
      {
        src: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1400&q=80',
        caption: '关键业务流程页面展示。',
      },
      {
        src: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=1400&q=80',
        caption: '系统功能模块页面展示。',
      },
    ],
  },
] as const

const skillGroups = [
  {
    title: '前端基础',
    items: [
      { name: 'HTML', level: 90, tag: '熟练', detail: '熟练运用HTML5语义化标签，贴合可访问性与SEO规范。' },
      { name: 'CSS', level: 88, tag: '熟练', detail: '擅长Flex/Grid布局、响应式设计与CSS3动画实现。' },
      { name: 'JavaScript', level: 86, tag: '熟练', detail: '掌握异步编程、DOM操作，熟悉ES6+语法特性。' },
    ],
  },
  {
    title: '框架应用',
    items: [
      { name: 'Vue3', level: 90, tag: '熟练', detail: '精通Vue3组合式API，熟练使用Pinia、Vue Router，能构建复杂交互应用。' },
      { name: 'TypeScript', level: 82, tag: '熟练', detail: '可建立稳定类型系统，约束组件与数据，减少开发bug。' },
      { name: 'React', level: 80, tag: '熟练', detail: '熟悉React Hooks、Redux Toolkit，能快速开发高性能前端应用。' },
      { name: 'UniApp', level: 85, tag: '熟练', detail: '擅长UniApp多端开发，能搭建小程序与H5双端应用。' },
    ],
  },
  {
    title: '工具与工程化',
    items: [
      { name: 'Vite', level: 85, tag: '熟练', detail: '熟练使用Vite搭建开发环境，优化构建与打包流程。' },
      { name: 'Webpack', level: 75, tag: '了解', detail: '熟悉Webpack基本配置，可定制简单loader与plugin。' },
      { name: 'Git', level: 88, tag: '熟练', detail: '规范使用Git进行版本管理、分支协作与代码合并。' },
      { name: 'ECharts', level: 82, tag: '熟练', detail: '擅长使用ECharts搭建可视化面板，优化大数据渲染效率。' },
    ],
  },
]


function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)
  const [navSolid, setNavSolid] = useState(false)
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null)
  const [detailImageIndex, setDetailImageIndex] = useState(0)
  const [avatarFailed, setAvatarFailed] = useState(false)
  const [imageFailed, setImageFailed] = useState<Record<string, boolean>>({})
  const selectedProject =
    selectedProjectIndex === null ? null : projectList[selectedProjectIndex]
  const detailImageKey =
    selectedProjectIndex === null ? '' : `${selectedProjectIndex}-${detailImageIndex}`
  const currentDetailImage = selectedProject?.images[detailImageIndex]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.4 },
    )

    sections.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    const onScroll = () => setNavSolid(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMenuOpen(false)
    }
  }

  const openProjectDetail = (projectIndex: number) => {
    setSelectedProjectIndex(projectIndex)
    setDetailImageIndex(0)
  }

  const closeProjectDetail = () => {
    setSelectedProjectIndex(null)
    setDetailImageIndex(0)
  }

  const moveDetailImage = (step: number) => {
    if (!selectedProject) return
    const totalImages = selectedProject.images.length
    setDetailImageIndex((prev) => (prev + step + totalImages) % totalImages)
  }

  return (
    <div className="app">
      <header className={`nav ${navSolid ? 'nav-solid' : ''}`}>
        <div className="nav-inner">
          <div className="brand">李英苹的前端作品集</div>
          <button
            className="menu-toggle"
            aria-label="打开导航菜单"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {sections.map((item) => (
              <button
                key={item.id}
                className={activeSection === item.id ? 'active' : ''}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="about" className="section about">
          <div className="avatar-wrap">
            {!avatarFailed ? (
              <img
                className="avatar"
                src="src/assets/images/头像1.jpg"
                alt="个人头像"
                loading="lazy"
                onError={() => setAvatarFailed(true)}
              />
            ) : (
              <div className="avatar-fallback" aria-label="头像加载失败">
                <span>👤</span>
              </div>
            )}
          </div>
          <div className="about-content">
            <h1>李英苹</h1>
            <h2>前端实习生 | 桂林电子科技大学·信息安全专业</h2>
            <p>
              中共党员，22岁，专注前端开发领域，熟悉Vue3、React、UniApp等技术栈，具备多端开发与项目优化经验。
              参与多个创新创业项目与实习项目，注重代码规范与用户体验，擅长组件封装、性能优化及多平台适配，
              具备良好的问题解决能力与团队协作意识。
            </p>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <h2 className="section-title">项目展示</h2>
          {selectedProject ? (
            <article
              className={`project-detail ${selectedProjectIndex === 0 ? 'miniapp-layout' : ''}`}
            >
              <button className="back-btn" onClick={closeProjectDetail}>
                返回项目列表
              </button>
              <div className="detail-grid">
                <div className="detail-media">
                  <div className="detail-carousel">
                    {!imageFailed[detailImageKey] ? (
                      <img
                        className={selectedProjectIndex === 0 ? 'miniapp-image' : ''}
                        src={currentDetailImage?.src}
                        alt={`${selectedProject.name} 项目截图 ${detailImageIndex + 1}`}
                        loading="lazy"
                        onError={() =>
                          setImageFailed((prev) => ({ ...prev, [detailImageKey]: true }))
                        }
                      />
                    ) : (
                      <div className="image-fallback">
                        <span>项目截图加载失败</span>
                      </div>
                    )}
                    <button
                      className="control left"
                      onClick={() => moveDetailImage(-1)}
                      aria-label="上一张项目图"
                    >
                      ‹
                    </button>
                    <button
                      className="control right"
                      onClick={() => moveDetailImage(1)}
                      aria-label="下一张项目图"
                    >
                      ›
                    </button>
                  </div>
                  <div className="gallery-head">
                    <span>项目截图</span>
                    <span>
                      {detailImageIndex + 1} / {selectedProject.images.length}
                    </span>
                  </div>
                  <div className="gallery-strip">
                    {selectedProject.images.map((img, imgIndex) => (
                      <button
                        key={`${img.src}-${imgIndex}`}
                        className={imgIndex === detailImageIndex ? 'active' : ''}
                        onClick={() => setDetailImageIndex(imgIndex)}
                        aria-label={`查看第${imgIndex + 1}张项目图`}
                      >
                        <img
                          src={img.src}
                          alt={`${selectedProject.name} 缩略图 ${imgIndex + 1}`}
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="detail-info">
                  <h3>{selectedProject.name}</h3>
                  <p>{selectedProject.summary}</p>
                  <div className="tags">
                    {selectedProject.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <p className="image-caption">{currentDetailImage?.caption}</p>
                  <ul className="detail-highlights">
                    {selectedProject.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ) : (
            <div className="project-list">
              {projectList.map((project, index) => (
                <article className="project-item" key={project.name}>
                  {!imageFailed[`cover-${index}`] ? (
                    <img
                      className="project-cover"
                      src={project.images[0].src}
                      alt={`${project.name} 封面图`}
                      loading="lazy"
                      onError={() =>
                        setImageFailed((prev) => ({ ...prev, [`cover-${index}`]: true }))
                      }
                    />
                  ) : (
                    <div className="project-cover-fallback">封面图加载失败</div>
                  )}
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <div className="tags">
                    {project.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <button className="detail-btn" onClick={() => openProjectDetail(index)}>
                    查看项目详情
                  </button>
                </article>
              ))}
            </div>
          )}
        </section>

        <section id="skills" className="section skills">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-group">
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.items.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-header">
                      <strong>{skill.name}</strong>
                      <span>{skill.tag}</span>
                    </div>
                    <div className="progress-track">
                      <div
                        className="progress-fill"
                        style={{ width: `${skill.level}%` }}
                        aria-label={`${skill.name}熟练度${skill.level}%`}
                      />
                    </div>
                    <p>{skill.detail}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer className="footer">
        <div className="contacts">
          <a href="mailto:1130644040@qq.com" target="_blank" rel="noreferrer">
            📧 邮箱
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            🐙 GitHub
          </a>
         
        </div>
        <p>© 2026 李英苹 前端作品集 </p>
      </footer>
    </div>
  )
}

export default App
