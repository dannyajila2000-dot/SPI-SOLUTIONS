import { CopyButton } from "@/components/copy-button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <>
      <div className="wrap">
        <header className="nav">
          <a className="logo" href="#inicio" aria-label="SPI Solutions, inicio"><span className="logo-mark">SPI</span>SPI Solutions</a>
          <nav className="nav-links" aria-label="Principal">
            <a href="#servicios">Servicios</a>
            <a href="#proceso">Cómo trabajamos</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#preguntas">Preguntas</a>
            <ThemeToggle />
            <a className="btn btn-cta" href="https://wa.me/593983210108" target="_blank" rel="noopener">Escríbenos</a>
          </nav>
        </header>

        <main id="inicio">
          <div className="hero">
            <div>
              <span className="eyebrow">Desarrollo de software en Ecuador</span>
              <h1>Sistemas a la medida para que tu negocio <em>deje de depender del Excel</em>.</h1>
              <p className="lead">Creamos sistemas administrativos, páginas web, apps móviles y automatizaciones para negocios pequeños y medianos. Hablas con quien programa tu sistema, y cada avance lo ves funcionando.</p>
              <div className="hero-cta">
                <a className="btn btn-cta" href="https://wa.me/593983210108" target="_blank" rel="noopener">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.8 7L3 21l2-5.2A8 8 0 1 1 21 12z"/></svg>
                  Cuéntanos tu idea por WhatsApp
                </a>
                <a className="btn btn-ghost" href="#contacto">Agendar una llamada</a>
              </div>
              <p className="hero-note"><span>Respuesta el mismo día</span><span>Propuesta con precio cerrado</span><span>Soporte en español</span></p>
            </div>

            <aside className="panel" aria-label="Ejemplo de panel administrativo">
              <div className="panel-top"><b>Panel de ventas</b><span className="tag">Datos de ejemplo</span></div>
              <div className="kpis">
                <div className="kpi"><small>Ventas hoy</small><strong>$1.284,50</strong></div>
                <div className="kpi"><small>Pedidos</small><strong>37</strong></div>
                <div className="kpi"><small>Por cobrar</small><strong>$412,00</strong></div>
              </div>
              <div className="chart">
                <svg viewBox="0 0 280 124" role="img" aria-label="Ventas por día de la semana en dólares; el sábado es el día más alto con 880 dólares">
                  <line className="base" x1="0" y1="100" x2="280" y2="100"/>
                  <rect className="bar" x="10" y="62.7" width="26" height="37.3" rx="4"/>
                  <rect className="bar" x="48" y="66.2" width="26" height="33.8" rx="4"/>
                  <rect className="bar" x="86" y="54.7" width="26" height="45.3" rx="4"/>
                  <rect className="bar" x="124" y="58.7" width="26" height="41.3" rx="4"/>
                  <rect className="bar" x="162" y="38.7" width="26" height="61.3" rx="4"/>
                  <rect className="bar peak" x="200" y="21.8" width="26" height="78.2" rx="4"/>
                  <rect className="bar" x="238" y="52" width="26" height="48" rx="4"/>
                  <text x="213" y="14" textAnchor="middle">$880</text>
                  <text x="23" y="114" textAnchor="middle">Lun</text><text x="61" y="114" textAnchor="middle">Mar</text><text x="99" y="114" textAnchor="middle">Mié</text><text x="137" y="114" textAnchor="middle">Jue</text><text x="175" y="114" textAnchor="middle">Vie</text><text x="213" y="114" textAnchor="middle">Sáb</text><text x="251" y="114" textAnchor="middle">Dom</text>
                </svg>
              </div>
              <div className="rows">
                <div className="row"><span>Pedido 0412 · Panadería Central</span><span className="amt">$86,40</span><span className="pill ok">Pagado</span></div>
                <div className="row"><span>Pedido 0411 · Ferretería López</span><span className="amt">$240,00</span><span className="pill warn">Pendiente</span></div>
                <div className="row"><span>Pedido 0410 · Café Mirador</span><span className="amt">$57,25</span><span className="pill ok">Pagado</span></div>
              </div>
            </aside>
          </div>

          <section id="servicios">
            <div className="sec-head">
              <span className="eyebrow">Servicios</span>
              <h2>Todo lo que tu negocio necesita para operar con software propio</h2>
              <p>Desde un sistema completo hasta una automatización puntual. Empezamos por lo que más tiempo te quita.</p>
            </div>
            <div className="services">
              <article className="svc big">
                <div className="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/></svg></div>
                <h3>Sistemas administrativos</h3>
                <p>Inventario, ventas, clientes, cobros, reportes y usuarios con permisos, en un solo lugar y accesible desde cualquier dispositivo.</p>
                <ul><li>Facturación e informes en USD</li><li>Roles para tu equipo</li><li>Tus datos migrados desde Excel</li></ul>
              </article>
              <article className="svc big">
                <div className="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/></svg></div>
                <h3>Apps móviles</h3>
                <p>Aplicaciones para Android y iPhone con un solo desarrollo, conectadas a tu sistema y listas para publicar en las tiendas.</p>
                <ul><li>Para tus clientes o para tu equipo en campo</li><li>Notificaciones y funcionamiento fluido</li><li>Publicación en Play Store y App Store</li></ul>
              </article>
              <article className="svc">
                <div className="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg></div>
                <h3>Páginas web</h3>
                <p>Sitios rápidos, claros y pensados para que te escriban. Landing pages, catálogos y tiendas en línea.</p>
              </article>
              <article className="svc">
                <div className="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12a8 8 0 0 1 14-5.300L20 9M20 4v5h-5M20 12a8 8 0 0 1-14 5.300L4 15M4 20v-5h5"/></svg></div>
                <h3>Automatizaciones</h3>
                <p>Conectamos tus herramientas para que los reportes, avisos y cobros se hagan solos, sin copiar y pegar.</p>
              </article>
              <article className="svc">
                <div className="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.800 7L3 21l2-5.200A8 8 0 1 1 21 12z"/></svg></div>
                <h3>Asesoría y consultoría</h3>
                <p>Revisamos tu proceso, te decimos qué conviene digitalizar primero y cuánto debería costar, antes de que gastes.</p>
              </article>
            </div>
          </section>

          <section id="proceso">
            <div className="sec-head">
              <span className="eyebrow">Cómo trabajamos</span>
              <h2>Sin sorpresas: sabes qué recibes, cuándo y cuánto cuesta</h2>
            </div>
            <ol className="steps">
              <li><h3>Conversamos</h3><p>Nos cuentas cómo trabajas hoy y qué te frena. La primera conversación no tiene costo.</p></li>
              <li><h3>Propuesta con precio cerrado</h3><p>Recibes alcance, tiempos y valor por escrito. Lo que aprobamos es lo que pagas.</p></li>
              <li><h3>Desarrollo con avances</h3><p>Ves el sistema funcionando cada semana y pides ajustes mientras se construye.</p></li>
              <li><h3>Entrega y soporte</h3><p>Capacitamos a tu equipo, publicamos y seguimos disponibles por WhatsApp.</p></li>
            </ol>
          </section>

          <section id="proyectos">
            <div className="sec-head">
              <span className="eyebrow">Proyectos</span>
              <h2>Un producto real, construido de principio a fin</h2>
            </div>
            <div className="project">
              <div>
                <span className="tag">App móvil + sistema administrativo</span>
                <h3>gymProApp, la plataforma para gimnasios</h3>
                <p>Una app para que los clientes de un gimnasio entrenen con su plan de la semana, y un sistema detrás que lo administra para el gimnasio.</p>
                <ul>
                  <li>Plan semanal automático según nivel y objetivo, que el cliente puede cambiar día por día</li>
                  <li>Videos cortos que muestran cómo se hace cada ejercicio, durante el entrenamiento</li>
                  <li>Seguimiento de progreso, nutrición y recordatorios</li>
                </ul>
                <div className="chips"><span className="chip">App móvil</span><span className="chip">API en NestJS</span><span className="chip">PostgreSQL</span></div>
              </div>
              <div className="phone-wrap">
                <div className="phone" aria-label="Pantalla de entrenamiento de gymProApp">
                  <div className="screen">
                    <div className="s-top">Serie 2 de 4</div>
                    <div className="s-name">Press de banca inclinado</div>
                    <div className="clip">
                      <svg viewBox="0 0 120 90" aria-hidden="true">
                        <rect x="20" y="70" width="80" height="6" rx="3" fill="#bfe3f8"/>
                        <g className="bell"><rect x="22" y="30" width="76" height="6" rx="3" fill="#0f172a"/><rect x="12" y="20" width="10" height="26" rx="3" fill="#0284c7"/><rect x="98" y="20" width="10" height="26" rx="3" fill="#0284c7"/></g>
                      </svg>
                    </div>
                    <div className="s-meta"><span>12 repeticiones</span><span>40 kg</span><span>Descanso 60 s</span></div>
                    <div className="s-btn">Terminé la serie</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="sec-head">
              <span className="eyebrow">Por qué SPI Solutions</span>
              <h2>Pensado para negocios que no tienen un departamento de sistemas</h2>
            </div>
            <div className="why">
              <div><h3>Hablas con quien construye</h3><p>Sin intermediarios ni tickets. Explicas el problema y la misma persona lo resuelve.</p></div>
              <div><h3>Software que tú controlas</h3><p>El sistema es tuyo: código, datos y documentación quedan a tu disposición.</p></div>
              <div><h3>Hecho para Ecuador</h3><p>Pensado para tu realidad: dólares, WhatsApp como canal principal y facturación electrónica del SRI cuando la necesites.</p></div>
            </div>
          </section>

          <section id="preguntas">
            <div className="sec-head"><span className="eyebrow">Preguntas frecuentes</span><h2>Lo que casi todos preguntan antes de empezar</h2></div>
            <div className="faq">
              <details><summary>¿Cuánto cuesta un sistema?</summary><p>Depende de lo que necesites. Después de conversar contigo te enviamos una propuesta con alcance y valor cerrado, y puedes empezar por una primera etapa más pequeña.</p></details>
              <details><summary>¿Cuánto tiempo toma?</summary><p>Una página web puede estar lista en pocas semanas. Un sistema administrativo o una app se entrega por etapas, y desde las primeras semanas ya puedes usar una parte.</p></details>
              <details><summary>¿Puedo pedir cambios cuando ya está hecho?</summary><p>Sí. Durante el desarrollo ajustamos contigo cada avance, y después puedes contratar mejoras o un plan de soporte mensual.</p></details>
              <details><summary>No sé exactamente qué necesito. ¿Pueden ayudarme?</summary><p>Para eso está la asesoría. Revisamos cómo trabajas hoy y te decimos qué conviene digitalizar primero, aunque al final decidas no contratarnos.</p></details>
            </div>
          </section>

          <section id="contacto">
            <div className="contact">
              <div>
                <h2>Cuéntanos qué quieres resolver</h2>
                <p>Escríbenos por WhatsApp o agenda una llamada. Te respondemos el mismo día y la primera conversación no tiene costo.</p>
              </div>
              <div className="contact-box">
                <a className="btn btn-cta" href="https://wa.me/593983210108" target="_blank" rel="noopener">Escribir por WhatsApp</a>
                <div className="copy"><span id="tel">+593 98 321 0108</span><CopyButton targetId="tel" /></div>
                <div className="copy"><span id="mail">dannyajila2000@gmail.com</span><CopyButton targetId="mail" /></div>
              </div>
            </div>
          </section>
        </main>

        <footer><span>© 2026 SPI Solutions · Ecuador</span><span>Sistemas administrativos, web, móvil y consultoría</span></footer>
      </div>
    </>
  );
}
