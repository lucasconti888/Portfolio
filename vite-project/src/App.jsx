import React, { useState, useEffect, useRef } from 'react';
import { Grid, Box, Typography, Button, Slider, Paper, Divider } from '@mui/material';
import DrawerAppBar from './components/Navbar';
import { FaReact, FaFigma, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { TailPaper } from './components/TailPaper';
import gifLoad from './loading.gif'
import gifLoad2 from './flowers.gif'


const DashboardPage = () => {


    const inicioRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    //  AQUI SÃO DEFINIDAS AS REFERÊNCIAS QUE SERÃO UTILIZADAS 
    //  PARA OS EFEITOS DE DETECTÇÃO DE 'VIEWPORT'
    const componentPaper_1 = useRef(null);
    const componentPaper_2 = useRef(null);
    const componentPaper_2_small = useRef(null);

    const componentPaper_3 = useRef(null);

    const componentRef2_1 = useRef(null);
    const componentRef2_2 = useRef(null);
    const componentRef2_3 = useRef(null);
    const componentRef2_4 = useRef(null);
    const componentRef2_5 = useRef(null);
    const componentRef3_1 = useRef(null);
    const componentRef3_2 = useRef(null);
    const componentRef3_3 = useRef(null);

    const componentRef4_1 = useRef(null);
    const componentRef4_2 = useRef(null);

    const componentRefText_1 = useRef(null);
    const componentRefText_2 = useRef(null);

    const componentRefText_3 = useRef(null);
    const componentRefText_4 = useRef(null);

    const componentRefText_5 = useRef(null);
    const componentRefText_6 = useRef(null);

    // Agora, com useEffect, o three.js é utilizado para definir as transições em cada 'viewport'
    useEffect(() => {

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Adjust this threshold value as needed
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Component is in viewport, trigger animations or actions here
                    // Update opacity to 1 to fade in the component
                    entry.target.style.opacity = 1;

                    // Update the marginLeft property of paperStyle1 based on the calculated distance
                    entry.target.style.marginLeft = `50px`;
                }
            });
        }, observerOptions);

        const observer_2 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Component is in viewport, trigger animations or actions here
                    // Update opacity to 1 to fade in the component
                    entry.target.style.opacity = 1;

                    // Update the marginLeft property of paperStyle1 based on the calculated distance
                    entry.target.style.marginLeft = `10px`;
                }
            });
        }, observerOptions);

        const observer_final = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Component is in viewport, trigger animations or actions here
                    // Update opacity to 1 to fade in the component
                    entry.target.style.opacity = 1;

                    // Update the marginLeft property of paperStyle1 based on the calculated distance
                    entry.target.style.marginLeft = `10vw`;
                }
            });
        }, observerOptions);


        const observer_1 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add the class with the animation to the component
                    entry.target.classList.add('component');
                    entry.target.style.opacity = 1;
                } else {
                    // Remove the class when the component is not intersecting
                    entry.target.classList.remove('component');
                }
            });
        }, observerOptions);

        const observer_paper = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add the class with the animation to the component
                    entry.target.style.left = `10rem`;
                    entry.target.style.opacity = 1;

                }
            });
        }, observerOptions);

        const observer_paper_big = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add the class with the animation to the component
                    entry.target.style.left = `-35rem`;
                    entry.target.style.opacity = 1;

                }
            });
        }, observerOptions);

        // Observe each component's ref
        observer.observe(componentRef2_1.current);
        observer.observe(componentRef2_2.current);
        observer.observe(componentRef2_3.current);
        observer.observe(componentRef2_4.current);
        observer.observe(componentRef2_5.current);

        observer_1.observe(componentRef3_1.current);
        observer_1.observe(componentRef3_2.current);
        observer_1.observe(componentRef3_3.current);
        // observer.observe(componentRef3_4.current);
        // observer.observe(componentRef3_5.current);

        observer_paper.observe(componentPaper_1.current);
        observer_paper.observe(componentPaper_3.current);

        // Observe the ref only if the window.innerWidth is less than 1250
        if (window.innerWidth < 1250 && componentPaper_2_small.current) {
            observer_paper.observe(componentPaper_2_small.current);
        } else if (window.innerWidth >= 1250 && componentPaper_2.current) {
            observer_paper_big.observe(componentPaper_2.current);
        }

        observer_2.observe(componentRef4_1.current);
        observer_2.observe(componentRef4_2.current);
        observer.observe(componentRefText_1.current);
        observer.observe(componentRefText_2.current);
        observer.observe(componentRefText_3.current);
        observer.observe(componentRefText_4.current);

        observer_final.observe(componentRefText_5.current);
        observer_final.observe(componentRefText_6.current);

        // Clean up the observer when component is unmounted or ref changes
        return () => {
            observer.disconnect();
            observer_1.disconnect();
            observer_2.disconnect();
            observer_final.disconnect();



            observer_paper.disconnect();
            observer_paper_big.disconnect();
        };
    }, []);


    //  AQUI É FEITO O EFEITO PARA QUE A CAIXA DE TEXTO FIQUE RESPONSIVA

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            if (windowWidth >= 1250) {
                window.location.reload(); // Reload the page
            }
            else (windowWidth < 1250)
            window.location.reload(); // Reload the page

        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    // As seguintes constantes definem o estilo de alguns componentes


    const textStyle = {
        color: 'white', fontWeight: 600, fontSize: 14, marginTop: 1,'@media (max-width: 450px)': {
            fontSize: 10,
        },'@media (max-width: 550px)': {
            fontSize: 12,
        }, '@media (max-width: 400px)': {
            fontSize: 9,
        },
    }

    const textStyle3 = {
    color: 'white', fontWeight: 600, fontSize: 16, marginTop: 1,'@media (max-width: 450px)': {
        fontSize: 10,
    },'@media (max-width: 550px)': {
        fontSize: 12,
    }   }

    const paperStyle2 = {
        backgroundColor: 'white',
        height: '6rem',
        width: '6rem',
        display: 'flex',
        marginTop: -20,
        borderRadius: 40,
        justifyContent: 'center',
        paddingTop: 1.5,
        opacity: 0, // Set initial opacity to 0
        transition: 'opacity 0.5s ease-in, margin-left 0.5s ease-in', // Add transition for smooth fading effect
    }

    const paperStyleProgress_1 = {
        backgroundColor: 'white',
        border: 5,
        borderColor: '#19224B',
        height: '6rem',
        width: '6rem',
        '@media (max-width: 700px)': {
            width: '6rem', height: '6rem',
        },
        marginTop: 35,
        borderRadius: 40,
        paddingTop: 1.5,
        opacity: 0,
        transition: 'opacity 1s ease-in',
    }

    const paperStyleProgress_2 = {
        backgroundColor: 'white',
        border: 5,
        borderColor: '#19224B',
        height: '6rem',
        width: '6rem',
        '@media (max-width: 700px)': {
            width: '6rem', height: '6rem',
        },
        marginTop: 30,
        borderRadius: 40,
        paddingTop: 1.5,
        opacity: 0,
        transition: 'opacity 1s ease-in',

    }

    const paperStyleProgress_3 = {
        backgroundColor: 'white',
        border: 5,
        borderColor: '#19224B',
        height: '6rem',
        width: '6rem',
        '@media (max-width: 700px)': {
            width: '6rem', height: '6rem',
        },
        marginTop: 30,
        borderRadius: 40,
        paddingTop: 1.5,
        opacity: 0,
        transition: 'opacity 1s ease-in',
    }

    const paperStyle3 = {
        backgroundColor: '#0B0F22', height: '30rem', width: '30rem', borderRadius: 5,
        '@media (max-width: 700px)': {
            width: '26rem',height: '22rem',
        },
        '@media (max-width: 600px)': {
            width: '18rem',height: '22rem',
        },
        '@media (max-width: 450px)': {
            width: '16rem',
        },'@media (max-width: 400px)': {
            width: '16rem',height: '19rem',
        },
        display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', paddingLeft: 3, paddingTop: 3,
        opacity: 0, // Set initial opacity to 0
        transition: 'opacity 0.5s ease-in', marginBottom: 5, marginTop: 5, border:5, borderColor:'white'
    }
    const paperStyle3_2 = {
        backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', paddingTop: 5, boxShadow: 0,
        opacity: 0, // Set initial opacity to 0
        transition: 'opacity 0.5s ease-in, margin-left 0.5s ease-in', marginBottom: 5, marginLeft:'10vw',
        width: '1vw', height:'15rem',
        '@media (max-width: 700px)': {
            height: '10rem', marginLeft:0,
        },
        '@media (max-width: 600px)': {
           height: '8rem',marginLeft:0,
        },
        '@media (max-width: 450px)': {
           height: '6rem',marginLeft:0,
        },
    }

    return (
        <>

            <DrawerAppBar aboutRef={aboutRef} contactRef={contactRef} inicioRef={inicioRef}/>

            <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>

                <Grid item >
<Divider sx={{marginBottom:15, marginTop:-15}} ref={inicioRef}/>
                    <Grid ref={componentRefText_1} sx={{ display: 'flex', justifyContent: 'row', opacity: 0, transition: 'margin-left 0.5s ease-in, opacity 0.5s ease-in', }}>
                        <Typography sx={{
                            fontSize: 40,
                            color: 'white',
                            '@media (max-width: 420px)': {
                                fontSize: 30,
                            },
                        }}>Olá, eu sou o
                        </Typography>

                        <Typography sx={{
                            color: '#9143D1', fontSize: 40, marginLeft: 1.5,
                            '@media (max-width: 420px)': {
                                fontSize: 30,
                            },
                        }}>
                            Lucas
                        </Typography>
                    </Grid>

                    <Typography ref={componentRefText_2} sx={{
                        marginBottom: 2, fontSize: 30,
                        color: '#BEBEBE',
                        opacity: 0, transition: 'margin-left 0.5s ease-in, opacity 0.5s ease-in', position: 'absolute'
                    }}>Estou cursando o 2º ano de Sistemas de Informação no Inteli.</Typography>
                </Grid>
                <img src={gifLoad} style={{ position: 'absolute', top: '15rem', left: 0, width: '50vw' }}></img>
            </Grid>

            <Grid>
                
                <Divider  sx={{ marginTop: 100 }} />
                
<Divider sx={{marginBottom:15, marginTop:-15}} ref={aboutRef}/>
          

                <Typography ref={componentRefText_3} sx={{

                    marginLeft: '20vh',
                    color: 'white',
                    fontSize: 36, opacity: 0, transition: 'margin-left 0.5s ease-in, opacity 0.5s ease-in', position: 'absolute',
                    '@media (max-width: 600px)': {
                        fontSize: 30
                    },
                }}>Sobre mim</Typography>
                <Typography ref={componentRefText_4} sx={{
                    marginLeft: '20vh', fontSize: 30, top: '65rem',
                    color: '#BEBEBE',
                    opacity: 0, transition: 'margin-left 0.5s ease-in, opacity 0.5s ease-in', position: 'absolute',
                    '@media (max-width: 600px)': {
                        fontSize: 26
                    },
                }}>Algumas experiências e competências que adquiri ao longo do tempo</Typography>
            </Grid>




            <Grid sx={{
                display: 'flex', justifyContent: 'center',
                '@media (max-width: 1250px)': {
                    marginRight: '50%'
                },
                '@media (max-width: 900px)': {
                    marginRight: '80%'
                },
            }}>

                {/* CADA PAPER É UM CÍRCULO */}
                {/* CADA TAILPAPER É UMA CAIXA DE TEXTO */}

                <Grid sx={{ position: 'absolute' }}>

                    <Paper sx={paperStyleProgress_1} ref={componentRef3_1} />

                    <TailPaper ref={componentPaper_1} bottom='31rem' left='1rem' >
                        <Typography sx={{
                            color: 'white', fontWeight: 800, fontSize: 22,
                            '@media (max-width: 450px)': {
                                fontSize: 14,
                            }, '@media (max-width: 550px)': {
                                fontSize: 15,
                            },
                        }}>Sistemas de Informação</Typography>
                        <Typography sx={{
                            color: '#BEBEBE', fontWeight: 800, fontSize: 16, '@media (max-width: 450px)': {
                                fontSize: 10,
                            }, '@media (max-width: 550px)': {
                                fontSize: 15,
                            },
                        }}>Inteli</Typography>
                        <Typography sx={textStyle}>Métodos de trabalho como Scrum, Lean e Kanban</Typography>
                        <Typography sx={textStyle}>Programação em Javascript, HTML e CSS</Typography>
                        <Typography sx={textStyle}>Introdução a Python, C++ e SQLite</Typography>
                        <Typography sx={textStyle}>Machine Learning e PLN com Python no Google Colab</Typography>



                    </TailPaper>


                    <Paper sx={paperStyleProgress_2} ref={componentRef3_2} />
                    {window.innerWidth < 1250 && (
                        <TailPaper ref={componentPaper_2_small} bottom='10rem' left='1rem' >
                            <Typography sx={{
                                color: 'white', fontWeight: 800, fontSize: 22,
                                '@media (max-width: 450px)': {
                                    fontSize: 14,
                                },

                            }}>Desenvolvimento em React</Typography>
                            <Typography sx={{
                                color: '#BEBEBE', fontWeight: 800, fontSize: 16,
                                '@media (max-width: 450px)': {
                                    fontSize: 10,
                                }
                            }}>Estágio de Férias no BTG </Typography>
                            <Typography sx={{ color: 'white', fontWeight: 600, fontSize: 16, marginTop: 2 }}>Microfrontend</Typography>
                            <Typography sx={{ color: 'white', fontWeight: 600, fontSize: 16, marginTop: 1 }}>Git flow</Typography>
                            <Typography sx={{ color: 'white', fontWeight: 600, fontSize: 16, marginTop: 1 }}>React com JS e com TS</Typography>
                        </TailPaper>
                    )}
                    {window.innerWidth >= 1250 && (
                        <TailPaper ref={componentPaper_2} isPropTrue bottom='10rem' left='-30rem' >
                            <Typography sx={{ color: 'white', fontWeight: 800, fontSize: 22 }}>Desenvolvimento em React</Typography>
                            <Typography sx={{ color: '#BEBEBE', fontWeight: 800, fontSize: 16 }}>Estágio de Férias no BTG </Typography>
                            <Typography sx={{ color: 'white', fontWeight: 600, fontSize: 16, marginTop: 2 }}>Microfrontend</Typography>
                            <Typography sx={{ color: 'white', fontWeight: 600, fontSize: 16, marginTop: 1 }}>Git flow</Typography>
                            <Typography sx={{ color: 'white', fontWeight: 600, fontSize: 16, marginTop: 1 }}>React com JS e com TS</Typography>
                        </TailPaper>

                    )}


                    <Paper sx={paperStyleProgress_3} ref={componentRef3_3} />

                    <TailPaper bottom='-11rem' ref={componentPaper_3} left='1rem' >
                        <Typography sx={{
                            color: 'white', fontWeight: 800, fontSize: 22,
                            '@media (max-width: 450px)': {
                                fontSize: 14,
                            },
                        }}>Conhecimentos gerais</Typography>
                        <Typography sx={{
                            color: '#BEBEBE', fontWeight: 800, fontSize: 16,
                            '@media (max-width: 450px)': {
                                fontSize: 10,
                            }
                        }}>Cursos online / presenciais </Typography>
                        <Typography sx={textStyle3}>Voxy: Inglês 'High Intermediate'</Typography>
                        <Typography sx={textStyle3}>Design Digital: Figma e prototipagem em geral</Typography>
                        <Typography sx={textStyle3}>Udemy e Codeacademy: Machine Learning e Desenvolvimento Frontend</Typography>
                    </TailPaper>

                </Grid>

                {/* O Divider abaixo é a linha branca do meio */}

                <Divider variant='middle' sx={{ borderColor: 'white', borderWidth: 2, transform: 'rotate(0.25turn)', width: '55rem', marginTop: 83 }} />

            </Grid>

            {/* COMPETÊNCIAS (ÍCONES) */}

            <Grid columnGap={5} spacing={2} rowGap={15} container sx={{ display: 'flex', justifyContent: 'center', marginTop: '53rem', marginLeft: -5 }} >
                <Grid item ><Paper ref={componentRef2_1} sx={paperStyle2}>
                    <FaReact size={70} />
                </Paper></Grid>
                <Grid item>   <Paper ref={componentRef2_2} sx={paperStyle2}>
                    <FaCss3Alt size={70} />
                </Paper></Grid>
                <Grid item  >  <Paper ref={componentRef2_3} sx={paperStyle2}>
                    <FaHtml5 size={70} />
                </Paper></Grid>
                <Grid item  >    <Paper ref={componentRef2_4} sx={paperStyle2}>
                    <FaFigma size={70} />
                </Paper></Grid>
                <Grid item> <Paper ref={componentRef2_5} sx={paperStyle2}>
                    <Typography sx={{ fontWeight: 800, fontSize: 30, marginTop: 1, fontFamily: 'sans-serif' }}>JS</Typography>
                </Paper></Grid>

            </Grid>
{/* ENTRE EM CONTATO */}
<Divider sx={{marginBottom:15, marginTop:-15}} ref={contactRef}/>

<Typography ref={componentRefText_5} sx={{
  marginLeft: '5rem',
  color: '#BEBEBE',
  fontSize: {
    xs: '1.5rem',
    sm: '2rem'
  },
  opacity: 0,
  transition: 'margin-left 0.5s ease-in, opacity 0.5s ease-in',
}}>
  Entre em
</Typography>
<Typography ref={componentRefText_6} sx={{
  marginLeft: '5rem',
  marginBottom: 3,
  fontSize: {
    xs: '2rem',
    sm: '2.5rem'
  },
  color: 'white',
  opacity: 0,
  transition: 'margin-left 0.5s ease-in, opacity 0.5s ease-in',
}}>
  Contato
</Typography>







<Box sx={{ display: 'flex', justifyContent: 'center'}}>
  <Grid>
    <Paper ref={componentRef4_1} sx={paperStyle3}>
      <Typography sx={{
        color: 'white',
        fontWeight: 800,
        fontSize: {
          xs: '1.3rem',
          sm: '1.6rem'
        },
        '@media (max-width: 700px)': {
            fontSize: '0.8rem',
          },
          '@media (max-width: 400px)': {
            fontSize: '0.6rem',
          }
      }}>
        Linkedin
      </Typography>
      <Typography sx={{
        color: '#BEBEBE',
        fontWeight: 800,
        fontSize: {
          xs: '0.8rem',
          sm: '1.3rem'
        },
        marginTop: 1,
        '@media (max-width: 700px)': {
            fontSize: '0.8rem',
          },'@media (max-width: 550px)': {
            fontSize: '0.7rem',
          },
          '@media (max-width: 400px)': {
            fontSize: '0.6rem',
          }
      }}>
        https://www.linkedin.com/in/lucas-conti-pereira-3410b1233/
      </Typography>

      <Typography sx={{
        color: 'white',
        fontWeight: 800,
        fontSize: {
          xs: '1.3rem',
          sm: '1.6rem'
        },
        marginTop: 3,
        '@media (max-width: 700px)': {
            fontSize: '0.8rem',
          },
          '@media (max-width: 400px)': {
            fontSize: '0.6rem',
          }
      }}>
        Email
      </Typography>
      <Typography sx={{
        color: '#BEBEBE',
        fontWeight: 800,
        fontSize: {
          xs: '1.2rem',
          sm: '1.5rem'
        },
        marginTop: 1,
        '@media (max-width: 700px)': {
          fontSize: '0.8rem',
        },
        '@media (max-width: 400px)': {
            fontSize: '0.6rem',
          }
      }}>
        lucas.pereira@sou.inteli.edu.br
      </Typography>

      <Typography sx={{
        color: 'white',
        fontWeight: 800,
        fontSize: {
          xs: '1.3rem',
          sm: '1.6rem'
        },
        marginTop: 3,
        '@media (max-width: 700px)': {
            fontSize: '0.8rem',
          },
          '@media (max-width: 400px)': {
            fontSize: '0.6rem',
          }
      }}>
        Celular
      </Typography>
      <Typography sx={{
        color: '#BEBEBE',
        fontWeight: 800,
        fontSize: {
          xs: '1.2rem',
          sm: '1.5rem'
        },
        marginTop: 1,
        '@media (max-width: 700px)': {
            fontSize: '0.8rem',
          },
          '@media (max-width: 400px)': {
            fontSize: '0.6rem',
          }
      }}>
        +55 11 97996-8324
      </Typography>

                    <Typography sx={{
                        color: 'white', fontWeight: 800, fontSize: 22, marginTop: 3,
                        '@media (max-width: 700px)': {
                            fontSize: '0.8rem',
                          },
                          '@media (max-width: 400px)': {
                            fontSize: '0.6rem',
                          }
                    }}>GitHub</Typography>
                    <Typography sx={{
                        color: '#BEBEBE', fontWeight: 800, fontSize: 20, marginTop: 2,  '@media (max-width: 700px)': {
                            fontSize: '0.8rem',
                          },
                          '@media (max-width: 400px)': {
                            fontSize: '0.6rem',
                          }
                    }}>lucasconti888</Typography>


                </Paper></Grid>

                <Grid >  <Paper ref={componentRef4_2} sx={paperStyle3_2}>
                    <img src={gifLoad2} style={{
                    }}></img>

                </Paper>
                </Grid>
               

            </Box>

        </>
    );
};

export default DashboardPage;
