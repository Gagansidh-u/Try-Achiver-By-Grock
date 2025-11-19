import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-8">
            🛡️ Privacy Policy for Try Achiever
          </h1>
          <div className="prose prose-invert max-w-none text-muted-foreground prose-headings:text-foreground prose-headings:font-headline prose-a:text-primary hover:prose-a:text-primary/80">
            <p>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p>
              This Privacy Policy explains how Grock Technologies ("we," "us," or "our") collects, uses, and discloses information about you when you use the Try Achiever mobile application (the "Service").
            </p>
            
            <h2>1. Information We Collect</h2>
            <p>
              Because Try Achiever integrates with Google Play Games to function, we primarily collect information provided by or linked to your Google Account through official APIs.
            </p>

            <h3>A. Information Provided by Google Play Games (Linked Data)</h3>
            <p>
              When you choose to link your Google Account to our Service, we access the following data strictly to provide the core functionality of the achievement tracker:
            </p>
            <ul>
              <li><strong>Google Play Games Profile Data:</strong> Your Player ID, public nickname, avatar, and friends list (if applicable).</li>
              <li><strong>Achievement Data:</strong> Your current Google Play Games Experience Points (XP), achievement history (unlocked achievements), and progress towards unlocking new achievements.</li>
              <li><strong>Game Activity:</strong> General information about the games you have played that are associated with your Google Play Games profile.</li>
            </ul>
            <p>We DO NOT collect or store your Google Account password, email address, or any sensitive financial information.</p>

            <h3>B. Information You Provide Directly</h3>
            <ul>
              <li><strong>Optional Feedback Data:</strong> If you contact us for support or send us feedback, we may collect the content of your message and your contact information (such as your support ticket ID).</li>
            </ul>

            <h3>C. Automatically Collected Information</h3>
            <ul>
              <li><strong>Usage Data:</strong> Information about how you access and use the Service, such as the features you use, the time and duration of your activity, and system crash reports.</li>
              <li><strong>Device Information:</strong> Information about the mobile device you use, including the device type, operating system version, and unique device identifiers.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to operate, maintain, and improve the Service, including to:</p>
            <ul>
              <li><strong>Provide Core Functionality:</strong> Enable achievement tracking, calculate your internal "Achiever Ranks," display leaderboards, and synchronize your earned XP with your Google Play Games account.</li>
              <li><strong>Personalize Experience:</strong> Tailor the missions and challenges offered within the app based on your gaming history and progress.</li>
              <li><strong>Communicate with You:</strong> Respond to your inquiries, send you technical notices, and provide app updates.</li>
              <li><strong>Monitor and Analyze:</strong> Track usage and activities to improve the performance, stability, and features of the Service.</li>
              <li><strong>Security:</strong> Detect and prevent fraudulent activity and unauthorized access.</li>
            </ul>

            <h2>3. Sharing and Disclosure of Information</h2>
            <p>We will not rent or sell your personal information. We only share or disclose information as follows:</p>
            <ul>
              <li><strong>Google Play Games Services:</strong> We share your achievements and XP data with the Google Play Games APIs as necessary to update your official profile.</li>
              <li><strong>Service Providers:</strong> We may use third-party companies (e.g., cloud hosting services, analytics providers) to perform services on our behalf. These third parties are bound by confidentiality obligations and are prohibited from using your personal information for any purpose other than providing the contracted services.</li>
              <li><strong>Legal Compliance:</strong> We may disclose your information if required to do so by law or in the good faith belief that such action is necessary to comply with legal obligations, protect our rights, or ensure the safety of our users.</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>We implement reasonable physical, technical, and administrative security measures designed to protect your information from loss, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no internet or electronic transmission is ever fully secure, so we cannot guarantee its absolute security.</p>

            <h2>5. Data Retention</h2>
            <p>We retain the data collected from your Google Play Games account only for as long as your account with Try Achiever is active and necessary to fulfill the purposes outlined in this policy. If you delete your Try Achiever account, we will delete or anonymize your achievement data linked specifically to our Service.</p>

            <h2>6. Children's Privacy</h2>
            <p>The Service is not directed to, and we do not knowingly collect personal information from, children under 13. If you become aware that your child has provided us with personal information without your consent, please contact us, and we will take steps to remove the information and terminate the child's account.</p>

            <h2>7. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy within the Service or on our website. You are advised to review this policy periodically for any changes.</p>

            <h2>8. Your Rights (EEA/California Users)</h2>
            <p>Depending on your jurisdiction, you may have specific rights regarding your personal data, including the right to access, correct, or delete your information. To exercise these rights, please contact us using the information below.</p>

            <h2>9. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
            <p>
              Grock Technologies<br />
              helpdesk.grock@outlook.com<br />
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
