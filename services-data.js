const servicesData = [
  // Category 1: Conversational AI
  {id:1,category:"chat",title:"RAG Chatbot",usecase:"Coaching/CA/Clinic: PDF se sawaal ka jawab. 24x7 receptionist jo thakta nahi.",tech:".NET 8 + Semantic Kernel + Azure AI Search + Gemini 2.5",price:"₹15K - ₹40K"},
  {id:2,category:"chat",title:"Agentic AI Receptionist",usecase:"Goal do: '10 student ko fees reminder bhejo' → Agent khud Excel padhe, WhatsApp kare, follow-up kare.",tech:"SK + Auto Function Calling + Gmail API + MSG91",price:"₹40K - ₹1L"},
  {id:3,category:"chat",title:"Voice Agent IVR",usecase:"'Hello' bolo → Agent call pe baat kare, appointment book kare, CRM me daale.",tech:"Azure Speech + GPT-4o Realtime + Twilio + Whisper",price:"₹75K - ₹2L"},
  {id:4,category:"chat",title:"Multi-Agent Team",usecase:"Agent 1: Lead qualify, Agent 2: Quote bhejo, Agent 3: Follow-up. Puri sales team AI ki.",tech:"Semantic Kernel + AutoGen + Azure Durable Functions",price:"₹1L - ₹3L"},
  {id:5,category:"chat",title:"Internal Knowledge Agent",usecase:"Employee pooche 'Leave policy kya hai' → HR ka PDF padhke bataye.",tech:"Azure AI Search + OpenAI Embeddings + Teams Bot",price:"₹25K - ₹60K"},
  {id:6,category:"chat",title:"WhatsApp Commerce Agent",usecase:"Photo bhejo 'yeh chahiye' → Agent stock check + payment link + order confirm.",tech:"WhatsApp API + Gemini Vision + Razorpay + Zoho",price:"₹50K - ₹1.5L"},
  
  // Category 2: Industrial IoT
  {id:7,category:"iot",title:"Predictive Maintenance Agent",usecase:"Machine band hone se 8hr pehle alert + spare part auto order. ₹5L/hr loss bache.",tech:"ESP32 + MQTT + Azure IoT Hub +.NET + Azure ML",price:"₹1.5L - ₹5L"},
  {id:8,category:"iot",title:"Visual QC Agent",usecase:"Camera se product dekhe → 'Defect hai' → Belt ruk jaye. Human error 0.",tech:"YOLOv8 + ONNX + Jetson Nano + Gemini Vision",price:"₹2L - ₹8L"},
  {id:9,category:"iot",title:"Energy Optimization Agent",usecase:"Meter data padhe → 'AC 6hr chala' → Khud band kar de. Bill 40% kam.",tech:"Smart Meter + Modbus + Node-RED +.NET + SK",price:"₹50K - ₹1.5L"},
  {id:10,category:"iot",title:"Inventory Agent + IoT",usecase:"Weight sensor se stock ghatne pe auto PO + Vendor ko mail. Stock-out 0.",tech:"Load Cell + HX711 + ESP32 +.NET + Gmail API",price:"₹40K - ₹1L"},
  {id:11,category:"iot",title:"Safety Compliance Agent",usecase:"CCTV dekhe → 'Worker helmet nahi pehna' → Supervisor ko photo. Accident 0.",tech:"IP Camera + RTSP + YOLOv8 +.NET + Telegram",price:"₹80K - ₹2L"},
  {id:12,category:"iot",title:"Digital Twin Agent",usecase:"Factory ka 3D model + Live data + Agent bole 'Line 2 slow hai, fix karo'.",tech:"Unity/Unreal +.NET + Azure Digital Twins + MQTT",price:"₹5L - ₹20L"},
  
  // Category 3: Document AI
  {id:13,category:"doc",title:"Invoice Processing Agent",usecase:"Mail me invoice aaye → Data nikale → Tally me entry → Payment kare. 0 manual.",tech:"Azure Doc Intelligence +.NET + SK + Tally API",price:"₹40K - ₹1L"},
  {id:14,category:"doc",title:"Contract Review Agent",usecase:"50 page agreement → 'Risk kya hai' → 5 point summary + Red flag.",tech:"LangChain + GPT-4o +.NET + Azure Blob",price:"₹25K - ₹75K"},
  {id:15,category:"doc",title:"Resume Screening Agent",usecase:"500 CV aaye → JD se match → Top 10 ko interview mail + calendar book.",tech:".NET + OpenAI Embeddings + Azure AI Search",price:"₹20K - ₹50K"},
  {id:16,category:"doc",title:"CA ITR Filing Agent",usecase:"Client se Form16 maange → Missing doc follow-up → Draft ITR. CA ka 80% kaam khatam.",tech:".NET + SK + Azure Doc Intelligence + ClearTax",price:"₹75K - ₹2L"},
  {id:17,category:"doc",title:"Legal Notice Reply Agent",usecase:"Notice aaya → Type samjhe → Draft reply banaye → Lawyer ko bheje.",tech:"GPT-4o +.NET + Pinecone + Indian Kanoon API",price:"₹50K - ₹1.5L"},
  
  // Category 4: Data Analytics
  {id:18,category:"data",title:"Sales Forecast Agent",usecase:"3 saal ka data → 'Next month 47L sale' + Kyu → WhatsApp report.",tech:".NET ML.NET + Azure ML + Prophet + Power BI",price:"₹60K - ₹2L"},
  {id:19,category:"data",title:"Churn Prediction Agent",usecase:"'Ye 20 customer jaane wala hai' → Agent discount offer bhej de. Churn 30% kam.",tech:"Python/.NET + XGBoost + Azure ML + MSG91",price:"₹50K - ₹1.5L"},
  {id:20,category:"data",title:"Excel AI Agent",usecase:"'Last quarter me kaunsa product loss me' → Excel khud analysis de + Graph.",tech:".NET + OpenAI Code Interpreter + Office JS",price:"₹20K - ₹50K"},
  {id:21,category:"data",title:"Footfall Analytics Agent",usecase:"CCTV se count → 'Saturday 3-5pm peak' → Staff planning agent.",tech:"YOLOv8 + ByteTrack +.NET + Azure IoT Edge",price:"₹80K - ₹2.5L"},
  {id:22,category:"data",title:"Price Optimization Agent",usecase:"Competitor price scrape → '2% kam karo to 30% sale badhegi'. Daily update.",tech:"Python Scrapy +.NET + GPT-4 + Shopify API",price:"₹40K - ₹1L"},
  
  // Category 5: Marketing AI
  {id:23,category:"marketing",title:"SEO Blog Agent",usecase:"Topic do → Agent research + 2000 word SEO blog + image. Roz 1 blog.",tech:"GPT-4o + Perplexity + DALL-E 3 + WordPress",price:"₹10K - ₹30K/mo"},
  {id:24,category:"marketing",title:"Social Media Agent",usecase:"Product photo do → 30 din ka post + caption + hashtag + auto post.",tech:"GPT-4o + Flux/SDXL +.NET + Buffer API",price:"₹15K - ₹40K/mo"},
  {id:25,category:"marketing",title:"Ad Copy Agent",usecase:"Landing page URL do → 50 FB ad copy + image + A/B test. CTR 2x.",tech:"GPT-4o + Meta API +.NET + Claude",price:"₹20K - ₹60K"},
  {id:26,category:"marketing",title:"Video Avatar Agent",usecase:"Text do → Tera digital avatar video bol ke dega 20 language me.",tech:"HeyGen API + ElevenLabs +.NET + Azure",price:"₹30K - ₹80K"},
  {id:27,category:"marketing",title:"Review Reply Agent",usecase:"Google review aaye → Sentiment samjhe → Owner ke tone me reply.",tech:"GPT-4o +.NET + Google My Business API",price:"₹15K - ₹40K/mo"},
  
  // Category 6: AI Integration
  {id:28,category:"dev",title:"Add AI to Existing App",usecase:"Purani PHP/.NET app me 'AI search' button jod do. Google jaisa search.",tech:".NET + Azure AI Search + OpenAI Embeddings",price:"₹25K - ₹1L"},
  {id:29,category:"dev",title:"API to Agent Wrapper",usecase:"Client ka Tally/Zoho API hai → Upar AI Agent bana do. 'Tally se sale batao'.",tech:".NET + SK + Azure APIM + Swagger",price:"₹40K - ₹1.2L"},
  {id:30,category:"dev",title:"Fine-tune LLM",usecase:"'Hamare company ke style me likho' → Custom model banao. ChatGPT se 10x better.",tech:"Azure OpenAI Fine-tuning + Llama 3 + LoRA",price:"₹1L - ₹5L"},
  {id:31,category:"dev",title:"Vector DB Setup",usecase:"10L document ko search ready banao 100ms me. Google jaisi speed.",tech:"Azure AI Search + Pinecone + Qdrant +.NET",price:"₹30K - ₹80K"},
  {id:32,category:"dev",title:"AI SaaS MVP Build",usecase:"Client ka idea → 1 month me Live SaaS + Payment + Login. Fund raise ready.",tech:".NET Blazor + Azure + Stripe + OpenAI + Docker",price:"₹2L - ₹10L"},
  
  // Category 7: Specialized
  {id:33,category:"niche",title:"Real Estate AI Agent",usecase:"'2BHK Koramangala 80L' bolo → 50 site scrape + tour book + Owner ko call.",tech:"Scrapy + GPT-4o Vision +.NET + Calendar API",price:"₹1L - ₹3L"},
  {id:34,category:"niche",title:"EdTech Tutor Agent",usecase:"Student ka doubt → Step by step padhaye, test le, parent ko report.",tech:"GPT-4o + LangChain +.NET + React + Firebase",price:"₹2L - ₹8L"},
  {id:35,category:"niche",title:"Healthcare Symptom Agent",usecase:"Symptom batao → 'Doctor ko dikhao ya ghar ka nuskha' + Disclaimer.",tech:"BioGPT +.NET + Azure Health Bot + Gemini",price:"₹3L - ₹15L"},
  {id:36,category:"niche",title:"Agriculture AI Agent",usecase:"Patte ka photo → 'Ye rog hai, ye dawa chidko' + Kahan milega.",tech:"YOLOv8 + Roboflow +.NET + Gemini Vision",price:"₹1L - ₹5L"},
  {id:37,category:"niche",title:"Legal Research Agent",usecase:"'Section 138 case' → 10 judgement + Summary + Argue point de.",tech:"GPT-4o + Indian Kanoon API + Pinecone +.NET",price:"₹2L - ₹6L"},
  {id:38,category:"niche",title:"Restaurant AI Agent",usecase:"'Table 4 ka order' bolo → KOT print + Inventory ghataye + Bill.",tech:".NET + Whisper + Thermal Printer SDK + Tally",price:"₹60K - ₹2L"},
  
  // Category 8: Future Tech
  {id:39,category:"future",title:"Robotics Agent",usecase:"'Warehouse me Box A se Box B le jao' → Robot ko command de. Labor 80% kam.",tech:"ROS2 +.NET + GPT-4o + YOLOv8 + NVIDIA Isaac",price:"₹10L - ₹1Cr"},
  {id:40,category:"future",title:"Drone Inspection Agent",usecase:"Drone ude → Pole/Crack dekhe → Report + GPS + Auto ticket. BESCOM ka ₹50Cr bache.",tech:"PX4 + YOLOv8 +.NET + Azure Maps + DJI SDK",price:"₹5L - ₹50L"},
  {id:41,category:"future",title:"AR/VR Training Agent",usecase:"Factory worker ko AR glass pe 'Ye wire kaise jodna' dikhaye. Training 3 din.",tech:"Unity + Meta Quest +.NET + GPT-4o + Azure",price:"₹8L - ₹80L"},
  {id:42,category:"future",title:"Autonomous Vehicle Agent",usecase:"Campus me auto chalao - human se baat karke route le. Driver cost 0.",tech:"CARLA + ROS2 + YOLOv8 +.NET + LiDAR SDK",price:"₹20L - ₹2Cr"},
  {id:43,category:"future",title:"AI Scientist Agent",usecase:"'Cancer ki dawa chahiye' → 1M paper padhe + Molecule design + Lab robot ko test bol de.",tech:"GPT-4o + BioGPT + DeepChem + Lab Automation",price:"₹50L - ₹10Cr/year"}
];
